<script>
  import { appState, adjudicatorsStore, seniorsStore, boostersStore } from '$lib/stores/index.js';

  // Get app data
  let eventDate = '';
  let eventYear = '';
  appState.subscribe(data => {
    if (data) {
      const dateFormatter = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric'
      });
      eventDate = dateFormatter.format(data.eventDate);
      eventYear = new Date(data.eventDate).getFullYear();
    }
  });

  // Get adjudicators data
  let adjudicators = [];
  adjudicatorsStore.subscribe(data => {
    adjudicators = data;
  });

  // Get seniors data
  let seniors = [];
  seniorsStore.subscribe(data => {
    seniors = data;
  });

  // Get boosters data
  let boosters = {
    executiveBoard: [],
    showcaseCoordinators: [],
    specialThanks: ''
  };
  boostersStore.subscribe(data => {
    boosters = data;
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
    None of this would be possible without support from our sponsors and other local businesses, the South Riding community, and Freedom High School’s faculty and staff led by Band Director <b>Jonathan Schiffler</b> and Principal <b>Tania N. Brown</b>.  The FHS Band Boosters thanks every adult and student volunteer for their tireless work and dedication to our kids and our band programs.
  </p>
</section>

<section class="card visitor-info-section">
  <h2>Visitor Information</h2>
  <div class="visitor-info-columns">
    <div class="admission-column">
      <h3>Admission</h3>
      <div class="price-cards">
        <div class="price-card">
          <h4>Adult (ages 12+)</h4>
          <p class="price">$12</p>
        </div>
        <div class="price-card">
          <h4>Seniors (ages 60+)</h4>
          <p class="price">$6</p>
        </div>
        <div class="price-card">
          <h4>Youth (ages 5-11)</h4>
          <p class="price">$6</p>
          <p class="price-note">Under 5 free</p>
        </div>
      </div>
      <p class="price-note">
        * All proceeds support the Freedom Marching Band
      </p>
    </div>

    <div class="conduct-column">
      <h3>Code of Conduct</h3>
      <div class="conduct-grid">
        <div class="do-column">
          <h4>Please Do</h4>
          <ul class="conduct-list do-list">
            <li>Cheer for all bands</li>
            <li>Silence your phone</li>
            <li>Send AirGrams to the participants</li>
            <li>Visit Concessions</li>
            <li>Support our Sponsors</li>
            <li>Enjoy the day!</li>
          </ul>
        </div>
        <div class="dont-column">
          <h4>Please Don't</h4>
          <ul class="conduct-list dont-list">
            <li>Enter or leave during a performance</li>
            <li>Obstruct others' view</li>
            <li>Make negative comments (you never know who is within earshot)</li>
            <li>Forget that everyone is doing their best to make this a great day for all!</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
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



<section class="card seniors-section">
  <h2>Senior Class of {eventYear}</h2>
  <p class="senior-intro">We celebrate and honor the graduating seniors of the Spirit of Freedom Marching Band:</p>
  <div class="seniors-grid">
    {#each seniors as senior}
      <div class="senior-card">{senior}</div>
    {/each}
  </div>
</section>

<section class="card boosters-section">
  <h2>Freedom HS Band Boosters</h2>

  <div class="boosters-content">
    <div class="executive-board">
      <h3>Executive Board</h3>
      <ul class="board-list">
        {#each boosters.executiveBoard as member}
          <li><strong>{member.name}</strong> - {member.position}</li>
        {/each}
      </ul>
    </div>

    <div class="showcase-team">
      <h3>Showcase Coordinators</h3>
      <div class="coordinator-list">
        {#each boosters.showcaseCoordinators as coordinator, i}
          <span class="coordinator-name">{coordinator}{i < boosters.showcaseCoordinators.length - 1 ? ', ' : ''}</span>
        {/each}
      </div>
    </div>
  </div>

  <div class="special-thanks">
    <h3>Special Thanks</h3>
    <p>Thanks to {boosters.specialThanks} for providing food for our hard-working volunteers!</p>
  </div>
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

  /* Visitor information section */
  .visitor-info-columns {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .visitor-info-section h3 {
    color: var(--primary-color);
    font-size: 1.25rem;
    margin-top: 0;
    margin-bottom: 1rem;
    padding-bottom: 0.25rem;
    border-bottom: 1px solid #e2e8f0;
  }

  /* Admission subsection */
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

  .price-card h4 {
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

  /* Code of Conduct subsection */
  .conduct-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .do-column h4, .dont-column h4 {
    color: var(--primary-color);
    font-size: 1.1rem;
    margin: 0 0 0.75rem;
    padding-bottom: 0.25rem;
    border-bottom: 1px solid #e2e8f0;
  }

  .conduct-list {
    margin: 0;
    padding-left: 1.5rem;
  }

    .conduct-list li {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }

  .do-list li::marker {
    color: #38A169;
    content: "✓ ";
  }

  .dont-list li::marker {
    color: #E53E3E;
    content: "✗ ";
  }

  /* Senior Class section */
  .seniors-section {
    margin-top: 2rem;
    position: relative;
    overflow: hidden;
    border-top: 3px solid #ffd700;
  }

  .senior-intro {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: #4a5568;
  }

  .seniors-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 1rem;
  }

  .senior-card {
    background-color: #f5f5f5;
    padding: 0.75rem;
    border-radius: 6px;
    text-align: center;
    font-weight: 500;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    transition: all 0.2s ease-in-out;
    border-left: 3px solid #ffd700;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 50px;
    font-size: 0.95rem;
  }

  .senior-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #f0f8ff;
  }

  /* Band Boosters section */
  .boosters-section {
    margin-top: 2rem;
  }

  .boosters-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 1.5rem;
  }

  .executive-board h3, .showcase-team h3, .special-thanks h3 {
    color: var(--primary-color);
    font-size: 1.1rem;
    margin: 0 0 0.75rem;
    padding-bottom: 0.25rem;
    border-bottom: 1px solid #e2e8f0;
  }

  .board-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .board-list li {
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
    padding: 0.25rem 0;
    border-bottom: 1px dashed #edf2f7;
  }

  .coordinator-list {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #4a5568;
  }

  .coordinator-name {
    white-space: nowrap;
    display: inline-block;
  }

  .special-thanks {
    margin-top: 1rem;
  }

  .special-thanks p {
    font-size: 0.95rem;
    font-style: italic;
    color: #4a5568;
  }

  /* Responsive adjustments */
  @media (min-width: 576px) {
    .seniors-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

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

    .visitor-info-columns {
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }

    .conduct-grid {
      grid-template-columns: 1fr 1fr;
    }

    .seniors-grid {
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
    }

    .boosters-content {
      grid-template-columns: 1fr 1fr;
      align-items: start;
    }
  }
</style>
