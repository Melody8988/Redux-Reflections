# React-Redux-Reflection Application

Reflection is an important part of building applications and working in teams. In this app, there are two views. The first view allows the user to add new reflections, and the second allows the user to view all the existing reflections with the ability to bookmark them and delete them. Most recent reflections display at the top. 

Live version on Heroku: 

### SETUP


```
npm install
npm run server

```
Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client

```

##DATABASE

```SQL
CREATE DATABASE "reflection_board";

-- Table that stores reflections
CREATE TABLE "reflection" (
  "id" serial primary key,
  "topic" varchar(120),
  "description" varchar(480),
  "bookmarked" boolean default false,
  "date" date not null default CURRENT_DATE
);

-- Dummy Data
INSERT INTO "reflection" ("topic", "description")
VALUES ('What went well?', 'Gave an ice breaker at public speaking practice.'),
('Better next time?', 'Get more sleep.'),
('What went well?', 'Built a full stack web application!'),
('Better next time?', 'Use trello to manage tasks.');
```

## STRETCH GOALS

- Improve the stying of the app using Material-UI cards, buttons, nav bar and icons
- Move HTTP requests into sagas
- Add the ability to update an existing reflection
- Move reflection topics into a separate table and use SQL JOINs
- Ability to filter reflections based on topic
