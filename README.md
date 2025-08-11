
# AI Multi-Agent Platform — One-Click Deploy

This repo is ready to deploy both **backend (API + agents)** to Railway and **frontend** to Vercel with minimal setup.

## 🚀 One-Click Deploy

### 1. Deploy Backend to Railway
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/yourusername/ai_starter_repo&plugins=postgresql&envs=OPENAI_API_KEY,STRIPE_SECRET_KEY,STRIPE_WEBHOOK_SECRET,SESSION_SECRET&optionalEnvs=STRIPE_SECRET_KEY,STRIPE_WEBHOOK_SECRET,SESSION_SECRET&OPENAI_API_KEYDesc=OpenAI+API+Key)

- This will create **two services** on Railway:
  - API Gateway (port 4000)
  - Research Agent (port 5000)
- Add your `OPENAI_API_KEY` in Railway's environment variables.

### 2. Deploy Frontend to Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/ai_starter_repo&root-directory=web&env=NEXT_PUBLIC_API_URL&NEXT_PUBLIC_API_URL-desc=Your+Railway+API+base+URL)

- Set `NEXT_PUBLIC_API_URL` in Vercel to your Railway API URL (e.g., `https://myapi.up.railway.app`).

### 3. Test Live
- Open your Vercel frontend → Dashboard → Enter a topic → Get a live AI-generated summary.

---

## Local Development
```bash
cp .env.example .env
# Fill in environment variables
docker-compose up --build
```
