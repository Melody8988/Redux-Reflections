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


-- Stretch goal: Move topics to a separate table