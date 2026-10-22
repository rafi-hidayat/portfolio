---
title: AI Chatbot & Operations Automation
summary: End-to-end operations automation for an Indonesian agribusiness company. AI WhatsApp chatbot, employee attendance, production & inventory management, and three role-based monitoring dashboards.
description: This project is built with another developer in two phases for an agribusiness company in Indonesia that makes organic fertiliser and sells to business, government, and increasingly consumer customers across several countries.
image: /assets/images/project-turrima.svg
tech:
  - { name: n8n, icon: https://cdn.simpleicons.org/n8n/000000 }
  - { name: WhatsApp API (WAHA), icon: https://cdn.simpleicons.org/whatsapp/000000 }
  - { name: OpenAI, icon: https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg }
  - { name: Supabase, icon: https://cdn.simpleicons.org/supabase/000000 }
  - { name: Redis, icon: https://cdn.simpleicons.org/redis/000000 }
  - { name: PostgreSQL, icon: https://cdn.simpleicons.org/postgresql/000000 }
  - { name: Google Sheets, icon: https://cdn.simpleicons.org/googlesheets/000000 }
  - { name: Google Apps Script }
  - { name: Telegram, icon: https://cdn.simpleicons.org/telegram/000000 }
order: 3
---

## Phase 1: the customer service chatbot

- Before this, field staff sent visit reports over WhatsApp that someone had to copy into a spreadsheet by hand, and there was no automated way to greet and qualify new customers before handing them to sales
- The chatbot answers product questions using a knowledge base built from the company's own documents
- It greets new customers and figures out what they need before passing qualified leads to the sales team through Telegram
- The knowledge base started as a system prompt built directly from company documents, with a fallback plan to move to RAG if document volume grew past what a system prompt could handle well
- The bot remembers returning customers by their WhatsApp number using a lightweight memory layer, so it does not treat every conversation as the first one

## Phase 2: internal operations

- This phase moved from customer facing to internal operations, covering employee attendance, all production and inventory reporting, incoming order tracking, and the monitoring dashboards
- Attendance runs through WhatsApp with photo verification and live location, so HR can see who is on site without a separate form
- Production and inventory covers raw materials coming in, materials being used, finished goods coming out, and stock leaving the warehouse, each tracked separately so stock levels update automatically
- Incoming orders get an automatically generated order ID the moment they come in
- Order status updates on its own as production reports reference that ID, moving from new order to in production to produced without anyone touching a spreadsheet
- Three separate dashboards sit on top of all this: one for HR to see attendance, one for the production floor built for a TV display, and one for management with a full view across the operation
