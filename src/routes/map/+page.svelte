<script>
  // This is a placeholder for a more advanced map implementation
  // In a production app, you might use a library like Leaflet.js or Google Maps

  const poiData = [
    { id: "entrance", name: "Main Entrance", icon: "🚪", description: "Main entrance gate with ticket booths" },
    { id: "parking", name: "Parking Lot", icon: "🚗", description: "General parking area" },
    { id: "stadium", name: "Stadium Field", icon: "🏟️", description: "Performance field" },
    { id: "concessions", name: "Concessions", icon: "🍔", description: "Food and beverage vendors" },
    { id: "restrooms", name: "Restrooms", icon: "🚻", description: "Public restrooms" },
    { id: "first-aid", name: "First Aid", icon: "🩹", description: "Medical assistance" },
    { id: "band-area", name: "Band Warm-up", icon: "🎵", description: "Band warm-up and preparation area" },
    { id: "merch", name: "Merchandise", icon: "👕", description: "Official merchandise and souvenirs" }
  ];
</script>

<svelte:head>
  <title>Event Map - Freedom Showcase</title>
</svelte:head>

<h1>Event Map</h1>
<p class="description">Navigate the Freedom Showcase venue with this interactive map.</p>

<div class="map-container">
  <div class="actual-map">
    <img src="/images/map.png" alt="Freedom High School Stadium Map" />
    <div class="map-caption">
      <span class="map-icon">🗺️</span> Tap a location below for details
    </div>
  </div>
</div>

<div class="poi-list">
  <h2>Points of Interest</h2>
  <div class="poi-grid">
    {#each poiData as poi}
      <div class="poi-card">
        <div class="poi-icon">{poi.icon}</div>
        <div class="poi-details">
          <h3>{poi.name}</h3>
          <p>{poi.description}</p>
        </div>
      </div>
    {/each}
  </div>
</div>

<div class="map-info">
  <h2>Visitor Information</h2>
  <ul>
    <li><strong>Accessible Seating:</strong> Available in marked areas on both sides of the stadium.</li>
    <li><strong>Parking:</strong> Free parking is available in the main school lot.</li>
    <li><strong>Prohibited Items:</strong> Outside food/drinks, large bags, and noisemakers.</li>
    <li><strong>Lost & Found:</strong> Located at the information booth near the main entrance.</li>
  </ul>
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

  .map-container {
    background-color: white;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    overflow: hidden;
  }

  .actual-map {
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    max-height: 500px;
  }

  .actual-map img {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
  }

  .map-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 0.5rem;
    text-align: center;
    font-size: 0.8rem;
    color: #4a5568;
  }

  .map-icon {
    font-size: 1rem;
    vertical-align: middle;
    margin-right: 0.25rem;
  }

  h2 {
    color: var(--primary-color);
    font-size: 1.25rem;
    margin: 0 0 1rem;
  }

  .poi-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
  }

  .poi-card {
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 8px;
    padding: 0.75rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }

  .poi-icon {
    font-size: 1.5rem;
    margin-right: 0.75rem;
    width: 40px;
    height: 40px;
    background-color: #f1f5f9;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .poi-details h3 {
    margin: 0 0 0.25rem;
    font-size: 0.9rem;
  }

  .poi-details p {
    margin: 0;
    font-size: 0.8rem;
    color: #64748b;
  }

  .map-info {
    background-color: #f8f9fa;
    border-radius: 8px;
    padding: 1.25rem;
    margin-top: 1.5rem;
  }

  .map-info ul {
    margin: 0;
    padding-left: 1.5rem;
  }

  .map-info li {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }

  @media (min-width: 640px) {
    h1 {
      font-size: 2rem;
    }

    .actual-map {
      max-height: 600px;
    }

    .poi-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 960px) {
    .poi-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
