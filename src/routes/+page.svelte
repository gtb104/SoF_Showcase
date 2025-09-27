<script>
  import { appState, adjudicatorsStore } from '$lib/stores/index.js';

  // Get app data
  let eventDate = '';
  appState.subscribe(data => {
    if (data) {
      const dateFormatter = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric'
      });
      eventDate = dateFormatter.format(data.eventDate);
    }
  });

  // Get adjudicators data
  let adjudicators = [];
  adjudicatorsStore.subscribe(data => {
    adjudicators = data;
  });
</script>

<svelte:head>
  <title>Freedom Showcase - Marching Band Competition</title>
  <meta name="description" content="Official program guide for the Freedom Marching Band Showcase competition" />
</svelte:head>

<section class="hero">
  <h1>VMBC Freedom Showcase</h1>
  <p class="tagline">Presented by the Spirit of Freedom Marching Band and the Freedom High School Band Boosters</p>
  <p class="countdown">November 1<sup>st</sup></p>
</section>

<section class="card info-section">
  <h2>About the Event</h2>
  <p>
    Welcome to the <a href="https://www.vmbc-online.org/">Virginia Marching Band Cooperative</a> Freedom Showcase, an annual marching band competition hosted by the Freedom High School Marching Band. This event features performances from high school marching bands across the region competing for awards in music, visual presentation, and overall performance.
  </p>
  <p>
    We have 24 bands competing today, and each performance is the result of countless hours of planning, practice, and hard work.
  </p>
  <p>
    None of this would be possible without support from our sponsors and other local businesses, the South Riding community, and Freedom High School’s faculty and staff led by Band Director Jonathan Schiffler and Principal Tania N. Brown.  The FHS Band Boosters thanks every adult and student volunteer for their tireless work and dedication to our kids and our band programs.
  </p>
</section>

<section class="card pricing-section">
  <h2>Admission</h2>
  <div class="price-cards">
    <div class="price-card">
      <h3>Adult (ages 12+)</h3>
      <p class="price">$12</p>
    </div>
    <div class="price-card">
      <h3>Seniors (ages 60+)</h3>
      <p class="price">$6</p>
    </div>
    <div class="price-card">
      <h3>Youth (ages 5-11)</h3>
      <p class="price">$6</p>
      <p class="price-note">Under 5 free</p>
    </div>
  </div>
  <p class="price-note">
    * All proceeds support the Freedom Marching Band
  </p>
</section>

<section class="card airgrams-section">
  <h2>AirGrams</h2>
  <p class="airgram-description">Send an over-the-loudspeaker shout out to your favorite marcher, director, or friend!</p>

  <div class="airgram-details">
    <div class="airgram-price">
      <h3>Pricing</h3>
      <p><span class="price">$3</span> per message</p>
      <p><span class="price">$5</span> for 2 messages</p>
    </div>

    <div class="airgram-info">
      <h3>How to Order</h3>
      <ul>
        <li>Visit the AirGrams table near the entrance of the stadium</li>
        <li>Place your order at least 60 minutes before your preferred timing</li>
        <li>Payment accepted: Cash, Credit Cards, Venmo and PayPal</li>
      </ul>
    </div>
  </div>
</section>

<section class="card adjudicators-section">
  <h2>Adjudicators</h2>
  <div class="adjudicators-grid">
    {#each adjudicators as adjudicator}
      <div class="adjudicator-card">
        <div class="adjudicator-category">{adjudicator.category}</div>
        <div class="adjudicator-name">{adjudicator.name}</div>
      </div>
    {/each}
  </div>
  <a href="https://0f15d2ba-85cb-4910-bef6-3cc6d22b8036.filesusr.com/ugd/ff63ab_0b6a1286897e4d4d8e81a02459d37213.pdf">How are groups judged?</a>
</section>

<style>
  /* Hero section */
  .hero {
    text-align: center;
    padding: 2rem 1rem;
    background-color: var(--secondary-color);
    color: black;
    border-radius: 8px;
    margin-bottom: 1.5rem;
    position: relative;
    overflow: hidden;
  }

  h1 {
    font-size: 2rem;
    margin: 0;
    line-height: 1.2;
  }

  .tagline {
    font-size: 1.1rem;
    opacity: 0.9;
    margin: 0.5rem 0 1rem;
  }

  .countdown {
    display: inline-block;
    background-color: rgba(255,255,255,0.15);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
  }

  /* Base styles */
  .card {
    background-color: white;
    border-radius: 8px;
    padding: 0.5rem 1.5rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }

  /* Info section */

  .info-section p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  /* Pricing section */
  .price-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  .price-card {
    background-color: #f1f5f9;
    border-radius: 8px;
    padding: 1rem 0.5rem;
    text-align: center;
  }

  .price-card h3 {
    margin: 0 0 0.5rem;
    font-size: 1rem;
    color: var(--primary-color);
  }

  .price {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary-color);
  }

  .price-note {
    font-size: 0.8rem;
    color: #64748b;
    text-align: center;
  }

  /* Adjudicators section */
  .adjudicators-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }

  .adjudicator-card {
    background-color: #f1f5f9;
    border-radius: 8px;
    padding: 1rem;
  }

  .adjudicator-category {
    font-size: 0.8rem;
    color: #64748b;
    margin-bottom: 0.25rem;
  }

  .adjudicator-name {
    font-weight: 600;
    color: var(--primary-color);
  }

  /* AirGrams section */
  .airgram-description {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: #4a5568;
  }

  .airgram-details {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .airgram-price h3, .airgram-info h3 {
    color: var(--primary-color);
    font-size: 1.1rem;
    margin: 0 0 0.5rem;
  }

  .airgram-price p {
    margin: 0.25rem 0;
    font-size: 0.95rem;
  }

  .airgram-info ul {
    margin: 0.5rem 0 0;
    padding-left: 1.25rem;
  }

  .airgram-info li {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }

  /* Responsive adjustments */
  @media (min-width: 768px) {
    .hero {
      padding: 3rem 1rem;
    }

    h1 {
      font-size: 2.5rem;
    }

    .adjudicators-grid {
      grid-template-columns: repeat(4, 1fr);
    }

    .airgram-details {
      grid-template-columns: 1fr 2fr;
    }
  }
</style>
