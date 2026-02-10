# KinshipProject

# CRM Pipeline
A simple frontend CRM pipeline tracker that allows users to manage customers as they move through sales stages from Lead to Closed.

This project was built as part of a technical take-home assignment and focuses on a clean, functional user interface using vanilla JavaScript and Bootstrap.


## Track Chosen

**Frontend Track**
I chose the frontend track as it tailored to my current strengths and interest in buiding user interfaces and client-side functionality. I focused on creating a clean, intuitive, pipeline layout with working interactions that presents as a canvas for further design elements. I kept all styling very simple which allows for easy expansion and design style that fits the specific company using the product.


## Features
- Customers organized by pipeline stage
- Add New Customer Function (name, email, company stage)
- Move customers between stages using dropdown menu
- Live search feature to filter out customers by name, email, or company
- Timestamps for customer creation as well as last update
- Data deployed using browser sessionStorage


## Tech
- HTML
- CSS (Bootstrap + some custom styles)
- Vanilla JS



## How to Run:

Site is live at the following Github Pages Link:
https://hphillips27.github.io/KinshipProject/


## Key Decisions

Vanilla JS: I chose Vanilla JavaScript over React or another framework because I am just more comfortable with it and for the purposes of the project, I wanted to prioritize clean, unerstandable code, completed within the time limit.

sessionStorage: Instead of building a backend and choosing the full stack path as I wanted to really focus my efforts and ensure that I had a manageable vision for this project. This allowed me to focus on a smaller scope and ensuring full funcitonality. Data Persists between page refreshes and no setup or server is required. I originally chose localStorage, but switched to session so that the site could be deployed on Github Pages.

Kanban Layout: I chose to represent this pipeline as columns, one per stage, with cards to represent each customer in the given stage. THis clearly reflects progress through the sales process and is a standard design choice in professional settings.



## What I would improve with more time
1. Implement a real backend API that pulls from a database to achieve real full functionality.
2. Improve general styling to make the site feel less flat and basic (give character). Polish existing structure.
3. Include seperate stages for customers that are closed and won/lost which gives the customer card a slight green or red tint respectively.
4. Improve scaling of features for mobile use.
5. Implement a log that tracks stage history.



