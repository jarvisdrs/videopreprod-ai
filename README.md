# VideoPreProd AI

AI-powered video pre-production platform. Streamline your video production workflow with intelligent scripting, scheduling, budget management, and team coordination.

## Features

- 🤖 **AI Script Generation** - Generate video outlines and scripts with AI
- 📅 **Production Scheduling** - Kanban board and calendar views
- 💰 **Budget Management** - Track costs and estimates
- 📍 **Location Scouting** - Manage filming locations
- 👥 **Team Coordination** - Assign tasks and manage crew
- 🔐 **Google OAuth** - Secure authentication

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** Prisma + Supabase
- **Auth:** NextAuth.js v5
- **AI:** OpenAI API

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- Google OAuth credentials

### Installation

1. Clone the repository
```bash
git clone https://github.com/jarvisdrs/videopreprod-ai.git
cd videopreprod-ai
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
# Edit .env.local with your credentials
```

4. Set up the database
```bash
npx prisma generate
npx prisma migrate dev
```

5. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Environment Variables

See `.env.example` for required variables:

- `DATABASE_URL` - Supabase connection string
- `AUTH_SECRET` - NextAuth secret
- `GOOGLE_CLIENT_ID` - Google OAuth client ID
- `GOOGLE_CLIENT_SECRET` - Google OAuth client secret
- `OPENAI_API_KEY` - OpenAI API key

## API Documentation

See [API_DOCUMENTATION.md](./API_DOCUMENTATION.md) for complete API reference.

## Deployment

See [DEPLOY.md](./DEPLOY.md) for deployment instructions.

## License

MIT
