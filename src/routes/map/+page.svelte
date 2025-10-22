<svelte:head>
	<title>Event Map - Freedom Showcase</title>
</svelte:head>

<h1>Event Map</h1>
<div class="map-container">
	<div class="actual-map">
		<img src="/images/map.webp" alt="Freedom High School Stadium Map" />
	</div>
</div>

<style>
	h1 {
		color: var(--primary-color);
		font-size: 1.75rem;
		margin: 0 0 0.5rem;
	}

	.map-container {
		background-color: white;
		border-radius: 8px;
		padding: 1rem;
		margin-bottom: 1.5rem;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
	}

	.actual-map {
		position: relative;
		border-radius: 4px;
	}

	.actual-map img {
		width: 100%;
		height: auto;
		display: block;
	}

	@media (min-width: 640px) {
		h1 {
			font-size: 2rem;
		}
	}
</style>
