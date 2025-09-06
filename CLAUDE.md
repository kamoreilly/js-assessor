# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a SvelteKit application with TypeScript, TailwindCSS, and Drizzle ORM for database operations. The project uses Bun as the package manager and Turso (LibSQL) as the database.

## Development Commands

**Start development server:**
```bash
bun run dev
```

**Build for production:**
```bash
bun run build
```

**Preview production build:**
```bash
bun run preview
```

**Type checking:**
```bash
bun run check
```

**Watch mode type checking:**
```bash
bun run check:watch
```

**Linting and formatting:**
```bash
bun run lint          # Check formatting and lint
bun run format        # Format code
```

**Database operations:**
```bash
bun run db:push       # Push schema changes to database
bun run db:generate   # Generate migrations
bun run db:migrate    # Run migrations
bun run db:studio     # Open Drizzle Studio
```

## Architecture

### Database Layer
- **ORM:** Drizzle ORM with LibSQL/Turso
- **Schema:** Located at `src/lib/server/db/schema.ts`
- **Database client:** Configured in `src/lib/server/db/index.ts`
- **Configuration:** `drizzle.config.ts` handles database connection settings

### Frontend Structure
- **Framework:** SvelteKit 2.x with Svelte 5
- **Styling:** TailwindCSS 4.x
- **Routing:** File-based routing in `src/routes/`
- **Layout:** Global layout in `src/routes/+layout.svelte`

### Environment Setup
- Copy `.env.example` to `.env`
- Set `DATABASE_URL` for your Turso database
- Set `DATABASE_AUTH_TOKEN` for production (optional in development)
- Local development can use `DATABASE_URL="file:local.db"`

### Key Files
- `src/lib/server/db/schema.ts` - Database schema definitions
- `src/lib/server/db/index.ts` - Database client initialization
- `src/routes/+layout.svelte` - Global application layout
- `drizzle.config.ts` - Drizzle ORM configuration

## Development Notes

- Uses Bun as package manager (note `bun.lock` file)
- TypeScript is configured with strict mode
- ESLint configuration includes Svelte, TypeScript, and Prettier integration
- Database operations require proper environment variables
- The project follows SvelteKit conventions for server-side code placement