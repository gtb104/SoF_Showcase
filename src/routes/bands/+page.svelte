<script>
  import { bandsStore } from '$lib/stores/index.js';

  // Get bands from store
  let bands = [];

  bandsStore.subscribe(data => {
    bands = data;
  });
</script>

<svelte:head>
  <title>Participating Bands - Freedom Showcase</title>
</svelte:head>

<h1>Participating Bands</h1>
<p class="description">Explore the bands performing at this year's Freedom Showcase.</p>

<div class="bands-grid">
  {#each bands as band}
    <a href="/bands/{band.id}" class="band-card">
      <div class="band-logo">
        <img src={band.logoUrl} alt="{band.school} logo" />
      </div>
      <div class="band-info">
        <h2>{band.name}</h2>
        <div class="band-meta">
          <span class="band-location">{band.location}</span>
          <span class="band-group">{band.groupNumber}</span>
        </div>
        <div class="band-performance">
          <span class="performance-time">{band.performance}</span>
          <span class="performance-name">{band.productionName}</span>
        </div>
      </div>
    </a>
  {/each}
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

  .bands-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .band-card {
    display: flex;
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    text-decoration: none;
    color: var(--text-color);
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .band-card:hover, .band-card:focus {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }

  .band-logo {
    width: 70px;
    height: 70px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .band-logo img {
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
  }

  .band-info {
    flex: 1;
    padding: 1rem;
  }

  .band-info h2 {
    margin: 0 0 0.5rem;
    font-size: 1.1rem;
    color: var(--primary-color);
    border: none;
  }

  .band-meta {
    display: flex;
    margin-bottom: 0.75rem;
  }

  .band-location {
    font-size: 0.85rem;
    color: #64748b;
    margin-right: 0.75rem;
  }

  .band-group {
    font-size: 0.8rem;
    background-color: var(--primary-color);
    color: white;
    padding: 0.1rem 0.5rem;
    border-radius: 4px;
  }

  .band-performance {
    display: flex;
    align-items: center;
    font-size: 0.85rem;
  }

  .performance-time {
    font-weight: 600;
    margin-right: 0.5rem;
  }

  .performance-name {
    font-style: italic;
    color: #4a5568;
  }

  @media (min-width: 640px) {
    .bands-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 960px) {
    h1 {
      font-size: 2rem;
    }

    .bands-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    .band-card {
      flex-direction: column;
      height: 100%;
    }

    .band-logo {
      width: 100%;
      height: 80px;
    }
  }
</style>
