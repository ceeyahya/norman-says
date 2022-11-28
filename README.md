[![Mastodon](https://img.shields.io/badge/Mastodon-5c4bdf?style=for-the-badge&logo=Mastodon&logoColor=ffffff&link=https://fosstodon.org/@hya)](https://fosstodon.org/@hya)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=LinkedIn&logoColor=ffffff&link=https://www.linkedin.com/in/yahya-chahine/)](https://www.linkedin.com/in/yahya-chahine/)
[![Portfolio](https://img.shields.io/badge/Portfolio-6366f1?style=for-the-badge&logo=Internet-Explorer&logoColor=ffffff&link=https://www.chahineyahya.dev)](https://www.chahineyahya.dev)

# Norman Says: Clickbait Detector

You can access the live version of the project by clicking below:

[![Check out the Live Version](https://img.shields.io/badge/Check%20out%20the%20Live%20Version-6366f1?style=for-the-badge&logoColor=ffffff&link=https://ADD-PROJECT-LINK-HERE)](https://ADD-PROJECT-LINK-HERE)

## Project Purpose

As crude as it may sound not all articles are worth our time, and we're not every media's target audience. That being said it's still (sometimes) hard to differentiate legitimate, worthy articles from clickbait-y ones. Norman Says is a Web App that helps readers detect which ones are which.

> **NOTE**
> This README only aims to provide a short introduction to the project, a more detailed write up is available on my portoflio
> [https://chahineyahya.dev/projects/norman-says](https://chahineyahya.dev/projects/norman-says). _(Currently being written)_

## Analysis

the dataset consists of 32000 rows, and 2 columns i.e. the first column containing the headline's text and the second "clickbait" column contains either a 0 (legitimate headline) and 1 (clickbait headline).

a brief exploratory data analysis, showed that the data was pre-cleaned and contained no null values or duplicates. the dataset is well distributed containing 16001 legitimate headlines, and 15999 clickbait headlines.

The model is a `sklearn.pipeline` comprised of a TF-IDF Transformer and a Linear SVM Model. the dataset was split to have 33% as test data and the rest as training.

The model has an overall accuracy of 97%, below are tables representing the classification report and confusion matrix:

#### Classification Report

|             | precision | recall | f1-score | support |
| ----------- | --------- | ------ | -------- | ------- |
| 0           | 0.97      | 0.98   | 0.97     | 5263    |
| 1           | 0.98      | 0.97   | 0.97     | 5263    |
|             |           |        |          |         |
| accuracy    |           |        | 0.97     | 10560   |
| macro avg   | 0.97      | 0.97   | 0.97     | 10560   |
| weighted av | 0.97      | 0.97   | 0.97     | 10560   |

#### Confusion Matrix

|      |      |
| ---- | ---- |
| 5144 | 119  |
| 149  | 5149 |

## Backend

The REST API is quite simple and consists of a single endpoint `/predict` that takes a headline as a JSON body and returns an object containing the prediction.

```json
{
	"prediction": 0
}
```

The model was integrated into the REST API by dumping and loading it using `joblib`

## Frontend

The Frontend part of the app was developed using Next.js, Tailwind CSS, `react-hook-form` and `axios`. the application's frontend is a single page with a hero section describing the app's purpose. A `textarea` where the user can input the headline and a section that will display the prediction

## Setup the Project Locally

The first step to setup the project locally is to clone the repo:

```console
git clone git@github.com:ceeyahya/norman-says.git
```

### Frontend

The frontend is fairly straightforward to setup:

1. Navigate to the `frontend` folder and install dependencies:

```console
cd frontend/ && npm i
```

2. Run the dev server

```console
npm run dev
```

### Backend

1. Navigate to the `backend` folder

```console
cd backend/
```

2.  Install dependencies.

    - Option 1 : using `pip`

          pip install requirements.txt

    - Option 2: using `poetry`

          poetry install

    - Option 3: existing `conda` environment. The following packages are required: `pandas`, `numpy`, `scikit-learn`, `fastapi`, `uvicorn`, `joblib`.

3.  Run the server

```console
uvicorn main:app --reload
```

## Dataset

the dataset used to train the model was downloaded from [Kaggle.com](https://kaggle.com) and is accessible and downloadable by following this [link](https://www.kaggle.com/datasets/amananandrai/clickbait-dataset)
