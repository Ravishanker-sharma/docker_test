from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import wikipedia

app = FastAPI()

# CORS configuration
origins = [
    "http://localhost:5173",  # Vite default port
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class LoginRequest(BaseModel):
    username: str
    password: str

@app.post("/login")
def login(data: LoginRequest):
    # Fake auth
    if data.username == "user" and data.password == "password":
        return {"message": "Login successful", "token": "fake-jwt-token"}
    raise HTTPException(status_code=401, detail="Invalid credentials")

@app.get("/facts/{animal}")
def get_animal_fact(animal: str):
    try:
        # Get a summary of the animal from Wikipedia
        # limiting to 2 sentences for brevity
        summary = wikipedia.summary(animal, sentences=2)
        return {"animal": animal, "fact": summary}
    except wikipedia.exceptions.PageError:
         raise HTTPException(status_code=404, detail="Animal not found")
    except wikipedia.exceptions.DisambiguationError as e:
        # Just take the first option if ambiguous
        try:
             summary = wikipedia.summary(e.options[0], sentences=2)
             return {"animal": animal, "fact": summary}
        except:
             raise HTTPException(status_code=500, detail="Error fetching specific fact")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
