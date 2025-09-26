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
  <!-- Placeholder for an actual map implementation -->
  <div class="placeholder-map">
    <div class="stadium-outline">
      <div class="field">Field</div>
      <div class="seating seating-left">Seating</div>
      <div class="seating seating-right">Seating</div>
      <div class="entrance-marker">Entrance</div>
      <div class="concession-marker">Food</div>
      <div class="restroom-marker">Restrooms</div>
      <div class="parking-marker">Parking</div>
    </div>
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

  .placeholder-map {
    background-color: #e2e8f0;
    height: 200px;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
  }

  /* Very simple placeholder map with basic elements */
  .stadium-outline {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 70%;
    background-color: #a0aec0;
    border-radius: 100px;
  }

  .field {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 40%;
    background-color: #48bb78;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.8rem;
    font-weight: bold;
  }

  .seating {
    position: absolute;
    width: 20%;
    height: 70%;
    background-color: #718096;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.7rem;
  }

  .seating-left {
    left: 10%;
    top: 15%;
  }

  .seating-right {
    right: 10%;
    top: 15%;
  }

  .entrance-marker, .concession-marker, .restroom-marker, .parking-marker {
    position: absolute;
    font-size: 0.7rem;
    background-color: #fff;
    padding: 2px 6px;
    border-radius: 4px;
    color: var(--primary-color);
  }

  .entrance-marker {
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
  }

  .concession-marker {
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }

  .restroom-marker {
    top: 40%;
    right: 5%;
  }

  .parking-marker {
    bottom: 30%;
    left: 5%;
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

    .placeholder-map {
      height: 300px;
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
