# Component Testing Guide

This guide provides instructions for testing the component library to ensure all components work correctly and maintain visual consistency.

## Testing Checklist

### Layout Components

#### PageLayout

- [ ] Renders with correct page title in browser tab
- [ ] Navigation highlights current page correctly
- [ ] Footer displays correct prompt path and command
- [ ] Footer status text appears when provided
- [ ] Responsive layout works on mobile and desktop
- [ ] Children content renders in main area

#### PageSection

- [ ] Title renders with HTML support (spans, styling)
- [ ] Subtitle appears below title when provided
- [ ] Terminal prompt displays correctly when provided
- [ ] Background variants (default/surface) apply correctly
- [ ] Children content renders properly

### UI Components

#### TerminalWindow

- [ ] Terminal dots appear when showDots=true
- [ ] Terminal dots hidden when showDots=false
- [ ] Custom padding applies correctly
- [ ] Children content renders inside window
- [ ] Terminal styling (border, background) displays correctly

#### StatsGrid

- [ ] Statistics display in correct responsive columns
- [ ] Stat values and labels render correctly
- [ ] Colors apply to stat values
- [ ] Grid adapts to different screen sizes
- [ ] Icons display when provided

### Form Components

#### SearchInput

- [ ] Input value binds correctly
- [ ] Placeholder text displays
- [ ] Label appears above input when provided
- [ ] Terminal styling applied
- [ ] Focus states work correctly
- [ ] onInput callback fires on value change

#### FilterSelect

- [ ] Options render in dropdown
- [ ] Selected value binds correctly
- [ ] Label appears above select when provided
- [ ] Disabled options are not selectable
- [ ] onChange callback fires on selection

#### FilterPanel

- [ ] Children components render in panel
- [ ] Terminal window styling applied
- [ ] Responsive layout for form controls
- [ ] Proper spacing between elements

### Button Components

#### Button

- [ ] All variants render correctly (primary, secondary, danger, ghost)
- [ ] All sizes work (sm, md, lg)
- [ ] Disabled state prevents clicks and shows disabled styling
- [ ] Click handler fires when clicked
- [ ] Button types (button, submit, reset) work correctly
- [ ] Custom classes apply correctly

#### ButtonGroup

- [ ] Buttons group together visually
- [ ] Horizontal and vertical orientations work
- [ ] Proper spacing between buttons
- [ ] Children buttons render correctly

#### ActionButtons

- [ ] Only enabled actions show buttons
- [ ] All action handlers fire correctly
- [ ] Button sizes apply consistently
- [ ] Icons display correctly on buttons

### Data Display Components

#### DataGrid

- [ ] Items render in responsive grid
- [ ] Column configuration works across breakpoints
- [ ] Children snippet receives correct item data
- [ ] Empty state handled gracefully
- [ ] Grid adapts to content size

#### DataCard

- [ ] Title and subtitle render correctly
- [ ] Click handler fires when card is clicked
- [ ] Terminal styling applied
- [ ] Children content renders in card body
- [ ] Hover states work correctly

### App-Specific Components

#### AppCard

- [ ] All props render correctly (title, description, icon, status)
- [ ] Status color applies correctly
- [ ] Navigation link works
- [ ] Click handler fires
- [ ] Hover effects work
- [ ] Responsive layout on mobile

#### AssessmentCard

- [ ] All assessment data displays correctly
- [ ] Progress bar shows correct percentage
- [ ] Status colors apply correctly
- [ ] All action buttons work when enabled
- [ ] Date formatting is consistent
- [ ] Responsive layout works

#### ReportCard

- [ ] All report data displays correctly
- [ ] File size formatting is correct
- [ ] Download count displays
- [ ] Status indicators work
- [ ] All action buttons function correctly
- [ ] Responsive design works

#### ActivityFeed

- [ ] Activities render in correct order
- [ ] Title displays when provided
- [ ] maxItems limit works correctly
- [ ] Empty state handled
- [ ] Scrolling works for long lists

#### ActivityItem

- [ ] All activity data displays correctly
- [ ] Type-based styling applies
- [ ] Timestamps format correctly
- [ ] User information displays when provided
- [ ] Icons match activity types

## Visual Testing

### Terminal Theme Consistency

- [ ] All components use consistent terminal colors
- [ ] Terminal dots appear consistently across components
- [ ] Monospace fonts applied correctly
- [ ] Border styles match terminal aesthetic
- [ ] Background colors consistent

### Responsive Design

- [ ] All components work on mobile (320px+)
- [ ] Tablet layout (768px+) displays correctly
- [ ] Desktop layout (1024px+) utilizes space well
- [ ] Text remains readable at all sizes
- [ ] Interactive elements are touch-friendly

### Accessibility

- [ ] All interactive elements are keyboard accessible
- [ ] Focus indicators are visible
- [ ] Screen reader labels are present
- [ ] Color contrast meets WCAG guidelines
- [ ] Semantic HTML structure used

## Functional Testing

### Data Handling

- [ ] Components handle empty data gracefully
- [ ] Large datasets don't break layouts
- [ ] Invalid data doesn't cause errors
- [ ] Type safety prevents runtime errors

### Event Handling

- [ ] All click handlers work correctly
- [ ] Form submissions work as expected
- [ ] Input changes trigger updates
- [ ] Event propagation works correctly

### State Management

- [ ] Component state updates correctly
- [ ] Reactive declarations work
- [ ] Bound values sync properly
- [ ] Component re-renders when needed

## Performance Testing

### Rendering Performance

- [ ] Components render quickly with large datasets
- [ ] No unnecessary re-renders occur
- [ ] Memory usage remains reasonable
- [ ] Smooth animations and transitions

### Bundle Size

- [ ] Components don't significantly increase bundle size
- [ ] Tree shaking works correctly
- [ ] No unused dependencies included

## Browser Testing

### Supported Browsers

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile Browsers

- [ ] iOS Safari
- [ ] Chrome Mobile
- [ ] Samsung Internet

## Testing Tools

### Recommended Testing Setup

1. **Unit Testing**: Use Vitest for component unit tests
2. **Integration Testing**: Test component interactions
3. **Visual Testing**: Use Storybook or similar for visual regression
4. **E2E Testing**: Use Playwright for end-to-end testing

### Example Test Structure

```javascript
// Example component test
import { render, screen } from '@testing-library/svelte';
import { Button } from '$lib/components';

test('Button renders with correct text', () => {
	render(Button, { props: { children: 'Click me' } });
	expect(screen.getByRole('button')).toHaveTextContent('Click me');
});

test('Button calls onclick handler', async () => {
	const handleClick = vi.fn();
	render(Button, { props: { onclick: handleClick } });

	await fireEvent.click(screen.getByRole('button'));
	expect(handleClick).toHaveBeenCalledOnce();
});
```

## Common Issues and Solutions

### Styling Issues

- **Problem**: Components don't match terminal theme
- **Solution**: Ensure CSS variables are properly imported and used

### Responsive Issues

- **Problem**: Layout breaks on mobile
- **Solution**: Test with actual devices, not just browser dev tools

### Type Issues

- **Problem**: TypeScript errors with component props
- **Solution**: Import types from `$lib/components/types` and use proper interfaces

### Performance Issues

- **Problem**: Slow rendering with large datasets
- **Solution**: Implement virtual scrolling or pagination for large lists

## Maintenance

### Regular Testing Schedule

- [ ] Run full test suite before each release
- [ ] Visual regression testing monthly
- [ ] Performance testing quarterly
- [ ] Accessibility audit bi-annually

### Documentation Updates

- [ ] Update documentation when components change
- [ ] Keep examples current with latest API
- [ ] Document breaking changes clearly
- [ ] Maintain migration guides for major updates
