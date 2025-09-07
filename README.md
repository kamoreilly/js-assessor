# FSCA Compliance Application

A terminal-themed FSCA compliance application built with SvelteKit, featuring assessment management and dashboard functionality.

## Features

- **Terminal-themed UI**: Consistent terminal window styling with red/yellow/green dots
- **Dashboard**: Overview of compliance applications and system status
- **Assessment Management**: Create, manage, and track FSCA compliance assessments
- **Filtering & Search**: Advanced filtering by status, type, and search functionality
- **Progress Tracking**: Visual progress indicators and status management
- **Responsive Design**: Mobile and desktop optimized layouts

## Pages

### Dashboard (`/`)

- Welcome section with terminal prompt styling
- Quick stats overview (Active Assessments, Reports, Standards, Alerts)
- Application grid with compliance tools
- Recent activity feed
- System status monitoring

### Assessments (`/assessments`)

- Assessment management interface
- Status summary cards (Total, Completed, In Progress, Under Review, Draft)
- Create new assessment functionality
- Filter and search assessments
- Assessment cards with progress tracking
- Quick action buttons (Edit, View, Export, Delete)

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
