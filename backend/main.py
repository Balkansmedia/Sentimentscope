from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Optional
import datetime
import pandas as pd
import requests 
from bs4 import BeautifulSoup
import joblib

model = joblib.load('text_classifier_model.joblib')
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

class Comment(BaseModel):
    username: str
    timestamp: datetime.datetime
    content: str
    label: str

class Article(BaseModel):
    id: int
    category: str
    slug: str
    title: str
    content: str
    noOfComments: int
    noOfSaves: int
    comments: Optional[List[Comment]] = None

@app.get("/api/category")
def get_categories():
    df = pd.read_csv('articles.csv')
    categories = df['category'].unique().tolist()
    print(categories)
    return categories

@app.get("/api/article")
def get_articles():
    df = pd.read_csv('articles.csv')
    articles = df.to_dict(orient='records')
    return articles

@app.get("/api/article/{id}")
def get_article(id: str):
    df = pd.read_csv('articles.csv')
    record = df[df['id'] == id]

    article = record.to_dict(orient='records')[0]
    comments = []

    comments_df = pd.read_csv('comments.csv')
    filtered_comments = comments_df[comments_df['article_id'] == id]

    for _, comment in filtered_comments.iterrows():
        user_name = comment['username']
        timestamp = comment['timestamp']
        com_text = comment['content']
        final_pred = model.predict([com_text])

        if int(final_pred[0]) == 0: 
            com_label = 'malicious'
        else: 
            com_label = 'good'

        newComment = { 'username': user_name, 'timestamp': timestamp, 'content': com_text, 'label': com_label }
        comments.append(newComment)

    article['comments'] = comments[::-1]
    return article

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost", port=8000)
