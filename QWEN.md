# FSCA Compliance Application - Project Context

## Project Overview

This is a terminal-themed FSCA (Financial Services and Markets Act) compliance application built with SvelteKit. The application provides tools for managing compliance assessments, generating reports, and tracking compliance activities with a distinctive terminal-style UI.

### Key Technologies
- **Framework**: SvelteKit 2.x
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom terminal theme
- **Database**: Turso (SQLite-based) with Drizzle ORM
- **Build Tool**: Vite 7.x
- **Fonts**: JetBrains Mono (monospace), Inter (sans-serif)

### Architecture
- **Frontend**: SvelteKit with component-based architecture
- **Backend**: Server-side routes using SvelteKit's API routes
- **Database**: Drizzle ORM with Turso (libSQL) backend
- **Styling**: TailwindCSS with custom terminal-themed configuration

### UI Features
- Terminal-themed interface with distinctive red/yellow/green window dots
- Grid-based background pattern for authentic terminal feel
- Monospace fonts (JetBrains Mono) for all UI text
- Responsive design with mobile and desktop layouts
- Component library with reusable UI elements

## Project Structure

```
src/
├── lib/
│   ├── components/    # Reusable UI components
│   ├── assets/        # Static assets
│   └── server/
│       └── db/        # Database schema and utilities
├── routes/
│   ├── assessments/   # Assessment management pages
│   └── reports/       # Report generation pages
├── app.css           # Global styles and theme
├── app.html          # Base HTML template
└── app.d.ts          # TypeScript declarations
```

## Development Commands

### Starting Development Server
```bash
npm run dev
# or
npm run dev -- --open  # Opens app in browser
```

### Building for Production
```bash
npm run build
```

### Previewing Production Build
```bash
npm run preview
```

### Code Quality
```bash
# Type checking
npm run check
npm run check:watch

# Linting
npm run lint

# Formatting
npm run format
```

### Database Operations
```bash
# Push schema changes to database
npm run db:push

# Generate migration files
npm run db:generate

# Run migrations
npm run db:migrate

# Open database studio
npm run db:studio
```

## Component Library

The application includes a comprehensive component library organized into:

1. **Layout Components**:
   - PageLayout
   - PageSection
   - AppHeader
   - AppFooter

2. **UI Components**:
   - TerminalWindow
   - TerminalPrompt
   - StatCard
   - StatsGrid
   - StatusBadge
   - ProgressBar

3. **Form Components**:
   - SearchInput
   - FilterSelect
   - FilterPanel

4. **Button Components**:
   - Button
   - ButtonGroup
   - ActionButtons

5. **Data Display Components**:
   - DataCard
   - DataGrid
   - ActivityFeed
   - ActivityItem

6. **Application-Specific Components**:
   - AppCard
   - AssessmentCard
   - ReportCard

## Key Pages

### Dashboard (`/`)
- System overview with key statistics
- Application grid for quick access to tools
- Recent activity feed
- System status monitoring

### Assessments (`/assessments`)
- Assessment management interface
- Status summary cards
- Create new assessment functionality
- Filter and search capabilities
- Assessment cards with progress tracking

## Environment Variables

Required environment variables are documented in `.env.example`:
- `DATABASE_URL`: Connection URL for the Turso database
- `DATABASE_AUTH_TOKEN`: Authentication token for remote database access

For local development, a file-based SQLite database can be used:
```
DATABASE_URL="file:local.db"
```

## Development Conventions

### Coding Style
- TypeScript for all JavaScript code
- Svelte for component development
- TailwindCSS for styling with custom theme
- Prettier for code formatting
- ESLint for code quality

### Component Design
- Components are organized by function (layout, UI, forms, etc.)
- Reusable components are exported through `src/lib/components/index.ts`
- Component types are defined in `src/lib/components/types.ts`

### Database Schema
- Drizzle ORM is used for database operations
- Schema is defined in `src/lib/server/db/schema.ts`
- Migrations are managed through Drizzle Kit

### Styling Conventions
- Terminal-themed color palette with amber, blue, and green accents
- Monospace fonts for all UI text
- Consistent terminal window styling with top bar and colored dots
- Responsive design using Tailwind's breakpoint system

## Testing

The project uses SvelteKit's built-in testing capabilities with:
- `svelte-check` for type checking
- ESLint for static analysis
- Prettier for code formatting consistency

## Deployment

To deploy the application, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment. The project currently uses `@sveltejs/adapter-auto` which automatically selects the appropriate adapter based on the deployment platform.