# Component Library Documentation

This document provides comprehensive documentation for all reusable components in the Joint Standards Dashboard application.

## Table of Contents

- [Layout Components](#layout-components)
- [UI Components](#ui-components)
- [Form Components](#form-components)
- [Button Components](#button-components)
- [Data Display Components](#data-display-components)
- [App-Specific Components](#app-specific-components)
- [TypeScript Types](#typescript-types)

## Layout Components

### PageLayout

A complete page wrapper that provides consistent layout structure across all pages.

**Props:**
- `currentPage: string` - The current page identifier for navigation highlighting
- `title: string` - Page title for SEO and browser tab
- `description: string` - Page description for SEO
- `footerPromptPath: string` - Terminal prompt path for footer
- `footerPromptCommand: string` - Terminal command for footer
- `footerStatusText?: string` - Optional status text for footer

**Usage:**
```svelte
<PageLayout 
  currentPage="dashboard"
  title="Dashboard - Joint Standards"
  description="Main dashboard for compliance management"
  footerPromptPath="~/dashboard"
  footerPromptCommand="status --all-systems-operational"
  footerStatusText="12 applications loaded"
>
  <!-- Page content -->
</PageLayout>
```

### PageSection

A section wrapper with optional terminal prompt styling and background options.

**Props:**
- `title?: string` - Section title (supports HTML)
- `subtitle?: string` - Section subtitle
- `promptPath?: string` - Terminal prompt path
- `promptCommand?: string` - Terminal command
- `background?: 'default' | 'surface'` - Background color variant

**Usage:**
```svelte
<PageSection
  title="Dashboard <span class='text-accent'>Overview</span>"
  subtitle="Monitor your compliance status"
  promptPath="~/dashboard"
  promptCommand="status --overview"
  background="surface"
>
  <!-- Section content -->
</PageSection>
```

## UI Components

### TerminalWindow

A terminal-style window container with optional dots and customizable padding.

**Props:**
- `showDots?: boolean` - Show terminal dots (default: true)
- `padding?: string` - Custom padding class (default: 'p-6 pt-12')
- `children?: Snippet` - Content to render inside

**Usage:**
```svelte
<TerminalWindow showDots={true} padding="p-8 pt-14">
  {#snippet children()}
    <h3>Terminal Content</h3>
    <p>Your content here</p>
  {/snippet}
</TerminalWindow>
```

### StatsGrid

A responsive grid for displaying statistics cards.

**Props:**
- `stats: StatCardData[]` - Array of statistics data
- `columns?: ResponsiveColumns` - Responsive column configuration

**Usage:**
```svelte
<StatsGrid 
  stats={[
    { value: 42, label: 'Total Items', color: 'var(--color-accent)' },
    { value: 12, label: 'Completed', color: 'var(--color-success)' }
  ]}
  columns={{ sm: 2, md: 4, lg: 6 }}
/>
```

## Form Components

### SearchInput

A styled search input with terminal aesthetics.

**Props:**
- `value: string` - Bound input value
- `placeholder?: string` - Input placeholder text
- `label?: string` - Input label

**Usage:**
```svelte
<SearchInput 
  bind:value={searchTerm}
  placeholder="Search items..."
  label="Search"
/>
```

### FilterSelect

A styled select dropdown for filtering.

**Props:**
- `value: string` - Bound select value
- `options: FilterOption[]` - Array of filter options
- `label?: string` - Select label

**Usage:**
```svelte
<FilterSelect
  bind:value={selectedStatus}
  options={[
    { value: 'all', label: 'All Statuses' },
    { value: 'active', label: 'Active' }
  ]}
  label="Status Filter"
/>
```

### FilterPanel

A container for organizing filter controls with terminal styling.

**Props:**
- `children?: Snippet` - Filter controls to render

**Usage:**
```svelte
<FilterPanel>
  <SearchInput bind:value={search} />
  <FilterSelect bind:value={status} options={statusOptions} />
  <Button onclick={clearFilters}>Clear</Button>
</FilterPanel>
```

## Button Components

### Button

A versatile button component with multiple variants and sizes.

**Props:**
- `variant?: ButtonVariant` - Button style variant
- `size?: ButtonSize` - Button size
- `disabled?: boolean` - Disabled state
- `onclick?: () => void` - Click handler
- `children?: Snippet` - Button content

**Variants:** `primary`, `secondary`, `danger`, `ghost`
**Sizes:** `sm`, `md`, `lg`

**Usage:**
```svelte
<Button variant="primary" size="md" onclick={handleClick}>
  Click Me
</Button>
```

### ButtonGroup

A container for grouping related buttons.

**Props:**
- `children?: Snippet` - Buttons to group

**Usage:**
```svelte
<ButtonGroup>
  <Button variant="primary">Save</Button>
  <Button variant="secondary">Cancel</Button>
</ButtonGroup>
```

### ActionButtons

Pre-configured action buttons for common operations.

**Props:**
- `onEdit?: () => void` - Edit action handler
- `onView?: () => void` - View action handler
- `onDelete?: () => void` - Delete action handler
- `onExport?: () => void` - Export action handler
- `showEdit?: boolean` - Show edit button
- `showView?: boolean` - Show view button
- `showDelete?: boolean` - Show delete button
- `showExport?: boolean` - Show export button

## Data Display Components

### DataGrid

A responsive grid container for displaying data items.

**Props:**
- `items: any[]` - Array of data items
- `columns?: ResponsiveColumns` - Responsive column configuration
- `children: Snippet<[any]>` - Snippet for rendering each item

**Usage:**
```svelte
<DataGrid items={reports} columns={{ md: 2, lg: 3 }}>
  {#snippet children(item)}
    <ReportCard {...item} />
  {/snippet}
</DataGrid>
```

### DataCard

A generic card component for displaying data with terminal styling.

**Props:**
- `title: string` - Card title
- `subtitle?: string` - Card subtitle
- `children?: Snippet` - Card content

## App-Specific Components

### AppCard

A specialized card for application tiles on the dashboard.

**Props:**
- `title: string` - Application title
- `description: string` - Application description
- `icon: string` - Application icon (emoji)
- `statusText: string` - Status text
- `statusColor: string` - Status color
- `href: string` - Navigation link

### AssessmentCard

A card component for displaying assessment information.

**Props:**
- `name: string` - Assessment name
- `type: string` - Assessment type
- `status: string` - Assessment status
- `progress: number` - Progress percentage
- `assignee: string` - Assigned person
- `lastModified: string` - Last modified date
- `dueDate: string` - Due date
- `onEdit?: () => void` - Edit handler
- `onView?: () => void` - View handler
- `onDelete?: () => void` - Delete handler
- `onExport?: () => void` - Export handler

### ReportCard

A card component for displaying report information.

**Props:**
- `name: string` - Report name
- `type: string` - Report type
- `status: string` - Report status
- `generatedDate: string` - Generation date
- `fileSize: string` - File size
- `format: string` - File format
- `downloadCount: number` - Download count
- `generatedBy: string` - Generated by user
- `onDownload?: () => void` - Download handler
- `onView?: () => void` - View handler
- `onDelete?: () => void` - Delete handler
- `onRegenerate?: () => void` - Regenerate handler

### ActivityFeed

A component for displaying activity feeds.

**Props:**
- `activities: ActivityItem[]` - Array of activity items
- `title?: string` - Feed title

### ActivityItem

A component for individual activity items.

**Props:**
- `title: string` - Activity title
- `description: string` - Activity description
- `timestamp: string` - Activity timestamp
- `type: ActivityType` - Activity type for styling

## TypeScript Types

All components use comprehensive TypeScript interfaces for type safety:

```typescript
interface StatCardData {
  value: string | number;
  label: string;
  color: string;
}

interface FilterOption {
  value: string;
  label: string;
}

interface ResponsiveColumns {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';
type ActivityType = 'success' | 'info' | 'warning' | 'error';
```

## Best Practices

1. **Consistent Styling**: All components follow the terminal theme with consistent color variables
2. **Responsive Design**: Components are mobile-first and responsive by default
3. **Accessibility**: Proper ARIA labels and semantic HTML structure
4. **Type Safety**: Comprehensive TypeScript interfaces for all props
5. **Reusability**: Components are designed to be flexible and reusable across pages
6. **Performance**: Efficient rendering with proper Svelte 5 syntax

## Component Architecture

The component library is organized into logical categories:

- **Layout**: Page structure and navigation
- **UI**: Basic interface elements
- **Forms**: Input and filter controls
- **Buttons**: Action triggers
- **Data**: Display and visualization
- **App**: Domain-specific components

Each component is self-contained with its own TypeScript definitions and follows Svelte 5 best practices.
