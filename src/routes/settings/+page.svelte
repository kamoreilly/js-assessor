<script lang="ts">
	import {
		PageLayout,
		PageSection
	} from '$lib/components';
</script>

<PageLayout
	currentPage="settings"
	title="Settings - Joint Standards Dashboard"
	description="Configure your FSCA compliance dashboard settings"
	footerPromptPath="~/settings"
	footerPromptCommand="config --user-preferences"
	footerStatusText="Settings loaded"
>
	<PageSection
		title="Settings <span class='text-[var(--color-accent)]'>Configuration</span>"
		subtitle="Manage your dashboard preferences and system settings"
		promptPath="~/settings"
		promptCommand="edit --config"
	>
		<div class="terminal-window p-6">
			<div class="terminal-dots">
				<div class="terminal-dot terminal-dot-red"></div>
				<div class="terminal-dot terminal-dot-yellow"></div>
				<div class="terminal-dot terminal-dot-green"></div>
			</div>
			<div class="p-4">
				<h2 class="text-xl font-mono font-bold text-[var(--color-text)] mb-4">System Settings</h2>
				<p class="text-[var(--color-text-secondary)]">
					Settings configuration page is under development.
				</p>
			</div>
		</div>
	</PageSection>
</PageLayout>