# AI Content Writer MVP

## Overview

A minimal AI-powered content writer for SEO, built with React (frontend), Node.js (backend), and Python (LLM integration).

## Features

- Multi-step workflow: Keyword Research → Title Generation → Topic Selection → Content Creation
- Uses OpenAI or similar LLM for content generation
- Minimal UI, no database (local/in-memory storage)
- Deployable to Vercel

## Setup

### Backend

1. `cd backend`
2. `npm install`
3. Install Python dependencies: `pip install openai`
4. Set your OpenAI API key in `llm/llm_client.py`
5. Start server: `node server.js`

### Frontend

1. `cd frontend`
2. `npm install`
3. `npm start`

## Deployment

- Deploy to Vercel or similar platform. See `vercel.json` for config.

## File Structure

- `frontend/` — React app
- `backend/` — Node.js server and Python LLM client
