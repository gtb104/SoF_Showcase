<script>
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { appState } from '$lib/stores/index.js';

	// Navigation items
	const navItems = [
		{ path: '/', label: 'Home', icon: '🏠' },
		{ path: '/schedule', label: 'Schedule', icon: '🗓️' },
		{ path: '/bands', label: 'Bands', icon: '🎵' },
		{ path: '/sponsors', label: 'Sponsors', icon: '💰' },
		{ path: '/map', label: 'Map', icon: '🗺️' },
		{ path: '/concessions', label: 'Food', icon: '🍽️' }
	];

	// Event date
	const eventDate = new Date(appState.eventDate);
	const eventYear = eventDate.getFullYear();
</script>

<div class="app">
	<header>
		<div class="header-content">
			<h1>{eventYear} Freedom Showcase</h1>
		</div>
	</header>

	<main>
		<slot />
	</main>

	<nav>
		{#each navItems as item}
			<a href={item.path} class={$page.url.pathname === item.path ? 'active' : ''}>
				<span class="icon">{item.icon}</span>
				<span class="label">{item.label}</span>
			</a>
		{/each}
	</nav>
</div>

<style>
	/* Reset and base styles */
	:global(:root) {
		--primary-color: #000;
		--secondary-color: #d1ab56;
		--highlight-color: #e53e3e;
		--background-color: #f7fafc;
		--text-color: #2d3748;
		--nav-height: 60px;
		--header-height: 60px;
		--content-max-width: 960px;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		font-family:
			-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
		background-color: var(--background-color);
		color: var(--text-color);
	}

	:global(*) {
		box-sizing: border-box;
	}

	/* App layout */
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		min-height: 100dvh;
		padding-bottom: var(--nav-height);
	}

	/* Header styles */
	header {
		position: sticky;
		top: 0;
		background-color: var(--primary-color);
		color: white;
		height: var(--header-height);
		z-index: 10;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.header-content {
		max-width: var(--content-max-width);
		margin: 0 auto;
		padding: 0 1rem;
		height: 100%;
		display: flex;
		align-items: center;
	}

	header h1 {
		font-size: 1.25rem;
		margin: 0;
		font-weight: 600;
	}

	/* Main content area */
	main {
		flex: 1;
		padding: 1rem;
		max-width: var(--content-max-width);
		width: 100%;
		margin: 0 auto;
		padding-bottom: 1rem;
	}

	/* Navigation */
	nav {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: white;
		display: flex;
		justify-content: space-around;
		height: var(--nav-height);
		box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
		z-index: 10;
		padding-bottom: env(safe-area-inset-bottom, 0);
	}

	nav a {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: #718096;
		text-decoration: none;
		width: 100%;
		transition: color 0.2s;
		font-size: 0.75rem;
	}

	nav a.active {
		color: var(--primary-color);
	}

	.icon {
		font-size: 1.5rem;
	}

	/* Responsive adjustments */
	@media (min-width: 640px) {
		.icon {
			margin-bottom: 0.25rem;
		}

		header h1 {
			font-size: 1.5rem;
		}
	}
</style>
