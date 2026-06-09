# PrepSphere - Quiz Learning Platform

## 📖 Project Overview

PrepSphere is a responsive quiz learning platform developed using HTML, CSS, JavaScript, Node.js, and Express.js. The platform provides category-based quizzes that help users improve their knowledge and test their skills in different subjects.

The application uses a frontend-backend architecture where the frontend fetches quiz questions from REST API endpoints created using Express.js. APIs were tested using Postman and integrated with the frontend using the Fetch API.

## 🚀 Features

### User Features

* Interactive Dashboard
* Responsive Navigation Sidebar
* Category-Based Quizzes
* Multiple Choice Questions (MCQs)
* Real-Time Score Calculation
* Quiz Progress Tracking
* Restart Quiz Option
* Mobile Responsive Design

### Quiz Categories

* Aptitude
* Reasoning
* English
* General Knowledge
* Biology
* Chemistry
* Science
* Current Affairs


## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### Backend

* Node.js
* Express.js

### API Testing

* Postman

###

---

## 📡 REST API Endpoints

### GET Endpoints

Retrieve questions from different categories:

```http
GET /api/biology
GET /api/chemistry
GET /api/aptitude
GET /api/reasoning
GET /api/english
GET /api/gk
GET /api/science
GET /api/currentaffairs
```

### POST Endpoint

Add a new question:

```http
POST /api/biology
```

Example Request Body:

```json
{
  "question": "What is the powerhouse of the cell?",
  "options": [
    "Nucleus",
    "Mitochondria",
    "Ribosome",
    "Cell Wall"
  ],
  "answer": "Mitochondria"
}
```

---

## 🎯 Learning Outcomes

Through this project I learned:

* Building responsive web applications
* Creating REST APIs using Express.js
* API integration using Fetch API
* GET and POST requests
* Testing APIs with Postman
* Frontend and Backend communication
* Project deployment workflow using GitHub

---

## 👨‍💻 Developer

Developed by: **Nikitha Kalyani Parepalli**
