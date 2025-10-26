<script>
	import { sponsors, sponsorContact } from '$lib/stores/sponsors.js';
</script>

<svelte:head>
	<title>Sponsors - Freedom Showcase</title>
</svelte:head>

<h1>Our Sponsors</h1>
<p class="description">
	The Freedom Showcase is made possible by the generous support of these sponsors.
</p>

{#each sponsors as tier}
	<section class="sponsor-tier">
		<h2 class="tier-title">
			{tier.level}
			{tier.level === 'Band Supporters' || tier.level === 'Family Supporters' ? '' : 'Sponsors'}
		</h2>

		<div class="sponsors-grid tier-{tier.level.toLowerCase().replace(/\s+/g, '-')}">
			{#each tier.sponsors as sponsor}
				<div class="sponsor-card">
					{#if sponsor.logo}
						<div class="sponsor-logo">
							<img src={sponsor.logo} alt="{sponsor.name} logo" />
						</div>
					{:else}
						<div class="sponsor-logo sponsor-placeholder">
							{sponsor.name.charAt(0)}
						</div>
					{/if}
					<div class="sponsor-info">
						<h3>
							{#if sponsor.url}
								<a href={sponsor.url} target="_blank" rel="noopener noreferrer" class="website-link"
									>{sponsor.name}</a
								>
							{:else}
								{sponsor.name}
							{/if}
						</h3>
					</div>
				</div>
			{/each}
		</div>
	</section>
{/each}

<div class="sponsor-contact">
	<h2>Become a Sponsor</h2>
	<p>
		Interested in supporting the Freedom Showcase? Contact us to learn about sponsorship
		opportunities for next year's event.
	</p>
	<a href="mailto:{sponsorContact}" class="contact-btn">Contact Us</a>
</div>

<style>
	h1 {
		color: var(--primary-color);
		font-size: 1.75rem;
		margin: 0 0 0.5rem;
	}

	.description {
		margin-bottom: 1.5rem;
	}

	.sponsor-tier {
		margin-bottom: 2rem;
	}

	.tier-title {
		color: var(--primary-color);
		font-size: 1.25rem;
		margin: 0 0 1rem;
		border-bottom: 1px solid #e2e8f0;
		padding-bottom: 0.5rem;
	}

	.sponsors-grid {
		display: grid;
		gap: 1rem;
	}

	/* Smallest grid layout */
	.tier-platinum-plus,
	.tier-platinum,
	.tier-gold,
	.tier-silver,
	.tier-bronze,
	.tier-band-supporters,
	.tier-family-supporters {
		grid-template-columns: 1fr;
	}

	.sponsor-card {
		display: flex;
		background-color: white;
		border-radius: 8px;
		padding: 1rem;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
		transition: transform 0.2s, box-shadow 0.2s;
		align-items: center;
	}

	/* Sponsor border colors */
	.tier-platinum-plus .sponsor-card {
		border-left: 4px solid #d6dce7;
	}
	.tier-platinum .sponsor-card {
		border-left: 4px solid #9ca3af;
	}
	.tier-gold .sponsor-card {
		border-left: 4px solid gold;
	}
	.tier-silver .sponsor-card {
		border-left: 4px solid silver;
	}
	.tier-bronze .sponsor-card {
		border-left: 4px solid #b45309;
	}
	.tier-band-supporters .sponsor-card {
		border-left: 4px solid greenyellow;
	}
	.tier-family-supporters .sponsor-card {
		border-left: 4px solid #3b82f6;
	}

	.sponsor-card:hover,
	.sponsor-card:focus {
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.sponsor-logo {
		margin-right: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 60px;
		height: 60px;
		background-color: #f8fafc;
		border-radius: 8px;
		overflow: hidden;
	}
	.sponsor-logo img {
		max-width: 90%;
		max-height: 90%;
		object-fit: contain;
	}

	.sponsor-placeholder {
		font-size: 1.75rem;
		font-weight: bold;
		color: var(--primary-color);
		background-color: #e2e8f0;
	}

	.sponsor-info {
		flex: 1;
	}
	.sponsor-info h3 {
		margin: 0 0 0.25rem;
		font-size: 1rem;
		color: var(--primary-color);
	}

	.website-link {
		color: var(--primary-color);
		font-weight: 500;
		text-decoration: none;
		border-bottom: 1px dotted var(--primary-color);
	}

	.sponsor-contact {
		background-color: white;
		border-radius: 8px;
		padding: 1.5rem;
		text-align: center;
		margin-top: 2rem;
	}
	.sponsor-contact h2 {
		margin: 0 0 0.75rem;
	}
	.sponsor-contact p {
		margin: 0 0 1.5rem;
		line-height: 1.6;
	}

	.contact-btn {
		display: inline-block;
		background-color: var(--primary-color);
		color: white;
		padding: 0.75rem 1.5rem;
		border-radius: 4px;
		text-decoration: none;
		font-weight: 500;
		transition: background-color 0.2s;
	}
	.contact-btn:hover,
	.contact-btn:focus {
		background-color: #2a4365;
	}

	@media (min-width: 640px) {
		h1 {
			font-size: 2rem;
		}
		.tier-platinum-plus,
		.tier-platinum,
		.tier-gold,
		.tier-silver,
		.tier-bronze,
		.tier-band-supporters,
		.tier-family-supporters {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 960px) {
		.tier-gold,
		.tier-silver,
		.tier-family-supporters {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
