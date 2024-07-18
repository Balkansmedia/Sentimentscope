# Project Title

## Overview

This project consists of three main components:
1. **Frontend**: An Angular application.
2. **Backend**: A FastAPI application.
3. **AI Model Generation**: Scripts to train and generate an AI model for text classification.

## Directory Structure

```
project-root/
├── frontend/
│   └── (Angular application files)
├── backend/
│   └── (FastAPI application files)
├── model/
│   └── (AI model training and generation scripts)
└── README.md
```

## Frontend

### Description

The frontend is built using Angular. It provides the user interface for interacting with the application.

### Setup and Running

1. Navigate to the `frontend` directory:
   ```sh
   cd frontend
   ```
2. Install the dependencies:
   ```sh
   npm install
   ```
3. Run the application:
   ```sh
   ng serve
   ```
4. Open your browser and navigate to `http://localhost:4200` to see the application.

## Backend

### Description

The backend is built using FastAPI. It provides the API endpoints for handling requests from the frontend and processing data.

### Setup and Running

1. Navigate to the `backend` directory:
   ```sh
   cd backend
   ```
2. Create a virtual environment:
   ```sh
   python -m venv venv
   ```
3. Activate the virtual environment:
   - On Windows:
     ```sh
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```sh
     source venv/bin/activate
     ```
4. Install the dependencies:
   ```sh
   pip install -r requirements.txt
   ```
5. Run the FastAPI application:
   ```sh
   uvicorn main:app --reload
   ```
6. Open your browser and navigate to `http://localhost:8000` to see the API documentation.

## AI Model Generation

### Description

This directory contains scripts for training and generating an AI model for text classification.

### Setup and Running

1. Navigate to the `model` directory:
   ```sh
   cd model
   ```
2. Create a virtual environment:
   ```sh
   python -m venv venv
   ```
3. Activate the virtual environment:
   - On Windows:
     ```sh
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```sh
     source venv/bin/activate
     ```
4. Install the dependencies:
   ```sh
   pip install -r requirements.txt
   ```
5. Train the model:
   ```sh
   python train_model.py
   ```
6. The trained model will be saved in the `models` directory.

## How to Use

### End-to-End Workflow

1. **Start the Frontend**: Follow the steps in the [Frontend](#frontend) section to start the Angular application.
2. **Start the Backend**: Follow the steps in the [Backend](#backend) section to start the FastAPI application.
3. **Generate/Use AI Model**:
   - To train a new model, follow the steps in the [AI Model Generation](#ai-model-generation) section.
   - Ensure the trained model is accessible to the backend for making predictions.

### Example Usage

- Open the Angular application in your browser.
- Use the interface to input text data.
- The frontend sends a request to the FastAPI backend.
- The backend processes the request, uses the AI model to make predictions, and returns the results to the frontend.
- The frontend displays the prediction results to the user.
