<script lang="ts">
  import PageLayout from '$lib/components/layout/PageLayout.svelte';
  import PageSection from '$lib/components/layout/PageSection.svelte';
  import Button from '$lib/components/buttons/Button.svelte';
  import TerminalWindow from '$lib/components/ui/TerminalWindow.svelte';
  import ProgressBar from '$lib/components/ui/ProgressBar.svelte';

  // Enhanced metrics with trend analysis and context
  const primaryMetrics = [
    {
      value: '1,247',
      label: 'Total Assessments',
      color: 'var(--color-accent)',
      change: '+12%',
      trend: 'up',
      context: 'vs last month'
    },
    {
      value: '89.2%',
      label: 'Pass Rate',
      color: 'var(--color-success)',
      change: '+2.1%',
      trend: 'up',
      context: 'vs last month'
    },
    {
      value: '567',
      label: 'Active Users',
      color: '#3b82f6',
      change: '-3%',
      trend: 'down',
      context: 'vs last month'
    },
    {
      value: '456',
      label: 'Reports Generated',
      color: '#10b981',
      change: '+18%',
      trend: 'up',
      context: 'vs last month'
    }
  ];

  const complianceMetrics = [
    {
      value: '94.2%',
      label: 'Overall Compliance',
      color: 'var(--color-success)'
    },
    {
      value: '23',
      label: 'Pending Reviews',
      color: '#f59e0b'
    },
    {
      value: '5',
      label: 'Critical Issues',
      color: '#ef4444'
    }
  ];

  const actionCards = [
    {
      title: 'Create Assessment',
      description: 'Start a new compliance assessment workflow',
      action: 'Create New',
      href: '/assessments/new',
      priority: 'high'
    },
    {
      title: 'Review Pending',
      description: 'Review 23 assessments awaiting approval',
      action: 'Review (23)',
      href: '/assessments?filter=pending',
      priority: 'medium'
    },
    {
      title: 'Generate Report',
      description: 'Export compliance reports and analytics',
      action: 'Generate',
      href: '/reports/new',
      priority: 'low'
    },
    {
      title: 'System Settings',
      description: 'Configure compliance rules and preferences',
      action: 'Configure',
      href: '/settings',
      priority: 'low'
    }
  ];


  const complianceTrends = [
    { period: 'Last 7 days', score: 92.1, change: '+1.2%', status: 'improving' },
    { period: 'Last 30 days', score: 89.7, change: '+3.4%', status: 'improving' },
    { period: 'Last 90 days', score: 87.2, change: '+5.8%', status: 'improving' }
  ];

  let currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  let currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });
</script>

<svelte:head>
  <title>Dashboard - JS Assessor</title>
  <meta name="description" content="Professional dashboard for JS assessments and compliance reporting" />
</svelte:head>

<PageLayout
  currentPage="dashboard"
  title="Dashboard - JS Assessor"
  description="Professional compliance dashboard with real-time insights and actionable intelligence"
  footerPromptPath="/dashboard"
  footerPromptCommand="system-overview --health"
>
  <!-- Dashboard Header -->
  <PageSection
    title="Compliance <span class='text-[var(--color-accent)]'>Dashboard</span>"
    subtitle="Real-time overview of your compliance status and system health"
    promptPath="/dashboard"
    promptCommand="status --overview"
  >
    <!-- Key Metrics Overview -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {#each primaryMetrics as metric}
        <TerminalWindow padding="sm" hoverEffect>
          <div class="text-center">
            <div class="text-2xl font-mono font-bold mb-2" style="color: {metric.color}">
              {metric.value}
            </div>
            <div class="text-xs font-mono text-[var(--color-text-secondary)] mb-2">
              {metric.label}
            </div>
            <div class="flex items-center justify-center gap-1 text-xs font-mono">
              <span style="color: {metric.trend === 'up' ? 'var(--color-success)' : '#ef4444'}">{metric.change}</span>
              <span class="text-[var(--color-text-muted)]">{metric.context}</span>
            </div>
          </div>
        </TerminalWindow>
      {/each}
    </div>
    
    <!-- System Status Summary -->
    <TerminalWindow padding="md">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Status -->
        <div class="lg:col-span-2">
          <div class="mb-6">
            <h2 class="text-2xl font-mono font-bold text-[var(--color-success)] mb-1">SYSTEM OPERATIONAL</h2>
            <p class="text-[var(--color-text-secondary)] font-mono">All compliance systems running optimally</p>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-mono">
            <div class="flex justify-between">
              <span class="text-[var(--color-text-secondary)]">Overall Health:</span>
              <span class="text-[var(--color-success)]">94.2% COMPLIANT</span>
            </div>
            <div class="flex justify-between">
              <span class="text-[var(--color-text-secondary)]">System Load:</span>
              <span class="text-[var(--color-accent)]">OPTIMAL</span>
            </div>
            <div class="flex justify-between">
              <span class="text-[var(--color-text-secondary)]">Active Assessments:</span>
              <span class="text-[var(--color-text)]">42</span>
            </div>
            <div class="flex justify-between">
              <span class="text-[var(--color-text-secondary)]">Alerts Pending:</span>
              <span class="text-[#f59e0b]">5 CRITICAL</span>
            </div>
          </div>
        </div>
        
        <!-- Quick Compliance Score -->
        <div class="text-center">
          <div class="text-6xl font-mono font-bold text-[var(--color-success)] mb-2">94.2</div>
          <div class="text-[var(--color-text-secondary)] font-mono text-sm mb-4">COMPLIANCE SCORE</div>
          <div class="flex justify-center">
            <ProgressBar value={94.2} max={100} color="var(--color-success)" size="md" class="w-32" />
          </div>
          <div class="text-[var(--color-success)] font-mono text-xs mt-2">+2.1% THIS MONTH</div>
        </div>
      </div>
    </TerminalWindow>
  </PageSection>

  <!-- Quick Actions -->
  <PageSection title="Quick Actions" subtitle="Common tasks and workflows">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {#each actionCards as action}
        <TerminalWindow padding="sm" class="cursor-pointer transition-all duration-200 hover:scale-[1.02]">
          <a href={action.href} class="block">
            <div class="text-center">
              <h3 class="font-mono font-bold text-[var(--color-text)] mb-2">{action.title}</h3>
              <p class="text-xs text-[var(--color-text-secondary)] mb-4 leading-relaxed">{action.description}</p>
              <div class="inline-flex items-center gap-2 text-xs font-mono px-3 py-1 rounded bg-[var(--color-surface-light)] border border-[var(--color-border-light)]">
                <span class="w-2 h-2 rounded-full" style="background-color: {action.priority === 'high' ? 'var(--color-success)' : action.priority === 'medium' ? '#f59e0b' : 'var(--color-text-muted)'}"></span>
                {action.action}
              </div>
            </div>
          </a>
        </TerminalWindow>
      {/each}
    </div>
  </PageSection>


  <!-- Compliance Overview -->
  <PageSection title="Compliance Overview" subtitle="Current status and trend analysis">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Compliance Metrics -->
      <TerminalWindow padding="md">
        <h3 class="font-mono font-bold text-[var(--color-text)] mb-6 text-center">Current Compliance Status</h3>
        <div class="grid grid-cols-3 gap-4 mb-6">
          {#each complianceMetrics as metric}
            <div class="text-center">
              <div class="text-xl font-mono font-bold mb-1" style="color: {metric.color}">
                {metric.value}
              </div>
              <div class="text-xs font-mono text-[var(--color-text-secondary)]">
                {metric.label}
              </div>
            </div>
          {/each}
        </div>
        
        <div class="text-center">
          <Button class="btn-terminal-primary">Review Critical Issues</Button>
        </div>
      </TerminalWindow>

      <!-- Trending Analysis -->
      <TerminalWindow padding="md">
        <h3 class="font-mono font-bold text-[var(--color-text)] mb-6 text-center">Compliance Trends</h3>
        <div class="space-y-4">
          {#each complianceTrends as trend}
            <div class="flex justify-between items-center py-3 border-b border-[var(--color-border-light)] last:border-0">
              <div>
                <div class="font-mono text-[var(--color-text)] text-sm">{trend.period}</div>
                <div class="text-xs text-[var(--color-text-secondary)] capitalize">{trend.status}</div>
              </div>
              <div class="text-right">
                <div class="font-mono font-bold text-[var(--color-text)]">{trend.score}%</div>
                <div class="text-xs text-[var(--color-success)] font-mono">{trend.change}</div>
              </div>
            </div>
          {/each}
        </div>
        
        <div class="mt-6 pt-4 border-t border-[var(--color-border-light)] text-center">
          <Button class="btn-terminal">Generate Trend Report →</Button>
        </div>
      </TerminalWindow>
    </div>
  </PageSection>

</PageLayout>

