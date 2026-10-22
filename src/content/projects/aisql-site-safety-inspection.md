---
title: AISQL Site Safety Inspection
summary: AI-powered site safety inspection app built on Snowflake. Analyses construction images to detect hazards, classify risks, generate scores, and recommend corrective actions. Shifts safety management from reactive to proactive.
description: AI-powered site safety inspection app built entirely on Snowflake. Upload a photo from a construction site and get a hazard report, a risk score, and corrective action recommendations in seconds.
image: /assets/images/project-aisql.svg
badge: 1st Place
label: 1st Place, Synogize AISQL Innovation Challenge
tech:
  - { name: Snowflake AI SQL, icon: https://cdn.simpleicons.org/snowflake/000000 }
  - { name: Streamlit, icon: https://cdn.simpleicons.org/streamlit/000000 }
  - { name: Python, icon: https://cdn.simpleicons.org/python/000000 }
links:
  - { label: GitHub, url: https://github.com/rafi-hidayat/aisql-site-safety-inspection }
  - { label: Demo, url: https://youtu.be/CPCsGUesCik }
order: 1
featured: true
---

## How it works

- The app takes a photo from a construction site and runs it through three Snowflake Cortex AI functions
- AI_FILTER checks whether the image actually shows a hazard worth flagging
- AI_CLASSIFY sorts the hazard into a category: missing PPE, unsafe scaffolding, blocked exits, and so on
- AI_COMPLETE writes a plain language explanation of the risk and suggests what to do about it
- Each site gets a running risk score out of 10, built from the history of flagged images at that location
- The dashboard shows which sites are trending worse over time, not just a single snapshot
- When a site crosses a risk threshold, the system sends an email automatically so the safety team finds out the same day instead of at a weekly review
- Users can export a full report as HTML or pull a checklist as CSV for site audits
