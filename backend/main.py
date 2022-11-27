from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from joblib import load

svm_clickbait_clf = load("svm_clickbait_clf.joblib")


class Headline(BaseModel):
    text: str


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/predict")
def predict(headline: Headline):
    prediction = svm_clickbait_clf.predict([headline.text]).tolist()
    return {"prediction": prediction}
