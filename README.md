# MistralAI application project

A simple chat application built with **Next.js (App Router)**, **TypeScript**, and the **Mistral AI SDK**.  
It lets users chat with a Mistral model (mistral-small-latest) through an API route.

---

## Features
- Chat interface with user + assistant messages
- Next.js API route for backend requests
- Integration with [Mistral AI](https://mistral.ai) via the Vercel AI SDK

---

## Setup

### 1. Clone repo & install dependencies
```bash
git clone https://github.com/StevenArulpragasam/MistralAI_project.git
cd my-chat-app
npm install
```
### 2. Add your Mistral API key
Create a .env.local file in the project root:
``` ini
MISTRAL_API_KEY=your_api_key_here
```
### 3. Run locally

``` bash
npm run dev
```
App will be available at http://localhost:3000
