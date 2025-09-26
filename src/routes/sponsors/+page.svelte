<script>
  import { sponsorsStore } from '$lib/stores/index.js';

  // Get sponsors data from the store
  let sponsors = [];
  sponsorsStore.subscribe(data => {
    sponsors = data;
  });
</script>

<svelte:head>
  <title>Sponsors - Freedom Showcase</title>
</svelte:head>

<h1>Our Sponsors</h1>
<p class="description">The Freedom Showcase is made possible by the generous support of these sponsors.</p>

{#each sponsors as tier}
  <section class="sponsor-tier">
    <h2 class="tier-title">{tier.level} {tier.level === "Band Supporters" || tier.level === "Freedom Showcase Sponsors" ? "" : "Sponsors"}</h2>

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
            <h3>{sponsor.name}</h3>
            {#if sponsor.description}
              <p>{sponsor.description}</p>
            {/if}
            {#if sponsor.website}
              <a href={sponsor.website} target="_blank" rel="noopener noreferrer" class="website-link">Visit Website</a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </section>
{/each}

<div class="sponsor-cta">
  <h2>Become a Sponsor</h2>
  <p>Interested in supporting the Freedom Showcase? Contact us to learn about sponsorship opportunities for next year's event.</p>
  <a href="mailto:sponsors@freedomshowcase.example.com" class="cta-button">Contact Us</a>
</div>

<style>
  h1 {
    color: var(--primary-color);
    font-size: 1.75rem;
    margin: 0 0 0.5rem;
  }

  .description {
    color: #64748b;
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

  /* Different grid layouts based on sponsor tier */
  .tier-platinum {
    grid-template-columns: repeat(1, 1fr);
  }

  .tier-gold, .tier-silver, .tier-bronze, .tier-band-supporters, .tier-freedom-showcase-sponsors {
    grid-template-columns: repeat(1, 1fr);
  }

  .sponsor-card {
    display: flex;
    background-color: white;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    transition: transform 0.2s, box-shadow 0.2s;
    align-items: center;
  }

  /* Platinum sponsor styles */
  .tier-platinum .sponsor-card {
    border-left: 4px solid #9ca3af; /* Silver/platinum color */
  }

  /* Gold sponsor styles */
  .tier-gold .sponsor-card {
    border-left: 4px solid #fbbf24; /* Gold color */
  }

  /* Silver sponsor styles */
  .tier-silver .sponsor-card {
    border-left: 4px solid #9ca3af; /* Silver color */
  }

  /* Bronze sponsor styles */
  .tier-bronze .sponsor-card {
    border-left: 4px solid #b45309; /* Bronze color */
  }

  /* Band Supporters styles */
  .tier-band-supporters .sponsor-card {
    border-left: 4px solid #4ade80; /* Green color */
  }

  /* Freedom Showcase Sponsors styles */
  .tier-freedom-showcase-sponsors .sponsor-card {
    border-left: 4px solid #3b82f6; /* Blue color */
  }

  .sponsor-card:hover, .sponsor-card:focus {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
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

  .sponsor-info p {
    margin: 0 0 0.5rem;
    font-size: 0.85rem;
    color: #4a5568;
  }

  .website-link {
    color: var(--primary-color);
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: 500;
  }

  .website-link:hover, .website-link:focus {
    text-decoration: underline;
  }

  .sponsor-cta {
    background-color: #f1f5f9;
    border-radius: 8px;
    padding: 1.5rem;
    text-align: center;
    margin-top: 2rem;
  }

  .sponsor-cta h2 {
    margin: 0 0 0.75rem;
  }

  .sponsor-cta p {
    margin: 0 0 1.5rem;
    line-height: 1.6;
  }

  .cta-button {
    display: inline-block;
    background-color: var(--primary-color);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;
    transition: background-color 0.2s;
  }

  .cta-button:hover, .cta-button:focus {
    background-color: #2a4365;
  }

  @media (min-width: 640px) {
    h1 {
      font-size: 2rem;
    }

    .tier-platinum {
      grid-template-columns: repeat(2, 1fr);
    }

    .tier-gold, .tier-silver, .tier-band-supporters, .tier-freedom-showcase-sponsors {
      grid-template-columns: repeat(2, 1fr);
    }

    .tier-bronze {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 960px) {
    .tier-gold, .tier-silver, .tier-freedom-showcase-sponsors {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
