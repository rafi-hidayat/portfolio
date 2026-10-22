---
title: Tennis Tracker
summary: Personal tennis data pipeline on the GCP free tier, running under $1/month. Log sessions via a conversational Telegram bot, get AI coaching from Gemini, and track progress on a Mini App dashboard.
description: I play tennis two to three times a week and had no real way to tell if I was actually improving or just having good and bad days. So I built a system to track it properly.
image: /assets/images/project-tennis.svg
label: Personal Project
tech:
  - { name: Telegram, icon: https://cdn.simpleicons.org/telegram/000000 }
  - { name: n8n, icon: https://cdn.simpleicons.org/n8n/000000 }
  - { name: BigQuery, icon: https://cdn.simpleicons.org/googlebigquery/000000 }
  - { name: Gemini, icon: https://cdn.simpleicons.org/googlegemini/000000 }
  - { name: Docker, icon: https://cdn.simpleicons.org/docker/000000 }
  - { name: Google Calendar }
  - { name: PostgreSQL, icon: https://cdn.simpleicons.org/postgresql/000000 }
links:
  - { label: GitHub, url: https://github.com/rafi-hidayat/tennis-tracker }
  - { label: LinkedIn Post, url: "https://www.linkedin.com/posts/raqilhidayat_personal-tennis-assistant-with-n8n-ugcPost-7450342290138529792-EICl/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC4EJkMBd2NzFQwQGIW-kwlPdPfBuA3JEGM" }
order: 2
featured: true
---

## Logging a session

- Typing /log on Telegram starts a short conversation
- Asks about session type, location, skill ratings (serve, forehand, backhand, volley, footwork, focus, return), energy before and after, mood, discomfort, match result, and free text notes
- About 15 data points per session, all saved to BigQuery

## AI coaching, three ways

- After every session, Gemini sends back a short coaching summary based on what was logged
- Every Sunday, a weekly recap covering skill trends, energy patterns, and a plan for the week ahead
- The /insights command pulls a 90 day report on demand, with skill trends, win and loss analysis, and recurring patterns

## Asking questions directly

- Free form questions like "what should I focus on this week" or "why have I been losing more matches lately"
- Answers using full session history
- Remembers earlier parts of the conversation, so follow up questions do not need repeated context

## Scheduling in plain English

- A message like "schedule match at Titiwangsa tomorrow 7pm against Fara" gets parsed automatically and added to Google Calendar
- The night before, a pre session brief gets sent with focus areas, a quick game plan, notes from the last few sessions, and the weather forecast

## The dashboard

- A Telegram Mini App with four tabs
- Overview: session counts, win and loss record, skill radar chart
- Progress: skill trends over time with AI generated notes on what is improving and what needs work
- Matches: win rate by opponent level, head to head records
- Activity: 30 day heatmap of session frequency
