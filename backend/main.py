import pickle
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

svm_clickbait_clf = pickle.load(open("./model/svm_clickbait_clf.sav", "rb"))


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
