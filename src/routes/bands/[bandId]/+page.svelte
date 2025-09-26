<script>
  import { bandsStore, scheduleStore } from '$lib/stores/index.js';

  /** @type {import('./$types').PageData} */
  export let data;

  // Get band ID from route params
  const bandId = data.bandId;

  // Get band data from store
  let band;
  let scheduleData = [];

  bandsStore.subscribe(bands => {
    band = bands.find(b => b.id === bandId);
  });

  scheduleStore.subscribe(data => {
    scheduleData = data;
  });

  // Helper function to get performance time by band ID
  function getPerformanceTime(bandId) {
    if (!bandId) return 'TBD';

    // Look through all schedule groups and events
    for (const group of scheduleData) {
      for (const event of group.events) {
        if (event.bandId === bandId) {
          return event.time;
        }
      }
    }
    return 'TBD';
  }
</script>

<svelte:head>
  <title>{band.name} - Freedom Showcase</title>
</svelte:head>

{#if band}
  <div class="back-nav">
      <button on:click={() => history.back()} class="back-button">← Back</button>
    </div>

  <div class="band-header">
    <div class="band-logo">
      <img src={band.logoUrl} alt="{band.school} logo" />
    </div>
    <div class="band-title">
      <h1>{band.name}</h1>
      <div class="band-meta">
        <span class="location">{band.location}</span>
        <span class="group">{band.groupNumber}</span>
      </div>
    </div>
  </div>

  <div class="performance-info">
    <div class="performance-time">
      <div class="label">Performance Time</div>
      <div class="value">{getPerformanceTime(bandId)}</div>
    </div>
    <div class="production-name">
      <div class="label">Production</div>
      <div class="value">{band.productionName}</div>
    </div>
  </div>

  <div class="band-card">
    <h2>About</h2>
    <div class="details-grid">
      <div class="detail">
        <div class="detail-label">School</div>
        <div class="detail-value">{band.school}</div>
      </div>
      <div class="detail">
        <div class="detail-label">{band.directors.length > 1 ? 'Directors' : 'Director'}</div>
        <div class="detail-value">{band.directors.join(', ')}</div>
      </div>
      <div class="detail">
        <div class="detail-label">{band.drumMajors.length > 1 ? 'Drum Majors' : 'Drum Major'}</div>
        <div class="detail-value">{band.drumMajors.join(', ')}</div>
      </div>
    </div>
  </div>

  <div class="band-card">
    <h2>Musical Selection</h2>
    <ul class="song-list">
      {#each band.songs as song}
        <li><strong>{song.title}</strong> <span class="composer">by {song.composer}</span></li>
      {/each}
    </ul>
  </div>
{:else}
  <div class="error-message">
    <h1>Band Not Found</h1>
    <p>Sorry, we couldn't find information for this band.</p>
    <a href="/bands" class="button">View All Bands</a>
  </div>
{/if}

<style>
  .back-nav {
    margin-bottom: 1rem;
  }

  .back-nav .back-button {
    color: var(--primary-color);
    background: none;
    border: none;
    padding: 0;
    font-size: 0.9rem;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  }

  .band-header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .band-logo {
    width: 60px;
    height: 60px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin-right: 1rem;
    border: 1px solid #e2e8f0;
    padding: 4px;
  }

  .band-logo img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
  }

  .band-title h1 {
    margin: 0 0 0.25rem;
    font-size: 1.5rem;
    color: var(--primary-color);
  }

  .band-meta {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .location {
    color: #64748b;
    font-size: 0.9rem;
  }

  .group {
    background-color: var(--primary-color);
    color: white;
    font-size: 0.8rem;
    padding: 0.15rem 0.5rem;
    border-radius: 4px;
  }

  .performance-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }

  .performance-time, .production-name {
    background-color: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }

  .label {
    font-size: 0.8rem;
    color: #64748b;
    margin-bottom: 0.25rem;
  }

  .value {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--primary-color);
  }

  .band-card {
    background-color: white;
    border-radius: 8px;
    padding: 1.25rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }

  .band-card h2 {
    font-size: 1.25rem;
    margin: 0 0 1rem;
    color: var(--primary-color);
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 0.5rem;
  }

  .details-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  .detail-label {
    font-size: 0.8rem;
    color: #64748b;
    margin-bottom: 0.25rem;
  }

  .detail-value {
    font-weight: 600;
  }

  .song-list {
    margin: 0;
    padding-left: 1.5rem;
    list-style: circle;
  }

  .song-list li {
    margin-bottom: 0.5rem;
  }

  .composer {
    font-size: 0.9rem;
    color: #64748b;
    font-style: italic;
  }

  .error-message {
    text-align: center;
    padding: 2rem 1rem;
  }

  .button {
    display: inline-block;
    background-color: var(--primary-color);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    text-decoration: none;
    margin-top: 1rem;
  }

  @media (min-width: 640px) {
    .band-logo {
      width: 80px;
      height: 80px;
    }

    .band-title h1 {
      font-size: 2rem;
    }
  }
</style>
