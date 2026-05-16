from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from engine import autocorrect

app = FastAPI()

# CORS config (for React frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Request(BaseModel):
    word: str

@app.get("/")
def home():
    return {"message": "Autocorrect API running"}

@app.post("/correct")
def correct(req: Request):
    result = autocorrect(req.word)
    return {
        "input": req.word,
        "correction": result
    }