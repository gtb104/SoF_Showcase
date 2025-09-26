<script>
  import { scheduleStore, appState } from '$lib/stores/index.js';

  let scheduleData = [];
  let eventDate;
  let eventLocation;

  // Get schedule and event info from stores
  scheduleStore.subscribe(data => {
    scheduleData = data;
  });

  appState.subscribe(state => {
    eventDate = state.eventDate;
    eventLocation = state.eventLocation;
  });

  // Format the event date
  const formattedDate = new Date(eventDate).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  // Group schedule by time blocks (morning, afternoon, evening)
  $: morning = scheduleData.filter(item =>
    item.time.includes("AM") || item.time === "12:00 PM"
  );

  $: afternoon = scheduleData.filter(item =>
    item.time.includes("PM") && item.time !== "12:00 PM"
  );
</script>

<svelte:head>
  <title>Schedule - Freedom Showcase</title>
</svelte:head>

<div class="schedule-page">
  <h1>Event Schedule</h1>
  <p class="date-info">{formattedDate} • {eventLocation}</p>

  <div class="timeline">
    <h2>Morning</h2>
    <div class="timeline-items">
      {#each morning as item}
        <div class="timeline-item">
          <div class="timeline-time">{item.time}</div>
          <div class="timeline-content">
            <h3>{item.event}</h3>
            <p>
              {#if item.bandId}
                <a href="/bands/{item.bandId}" class="band-link">{item.description}</a>
              {:else}
                {item.description}
              {/if}
            </p>
          </div>
        </div>
      {/each}
    </div>

    <h2>Afternoon</h2>
    <div class="timeline-items">
      {#each afternoon as item}
        <div class="timeline-item">
          <div class="timeline-time">{item.time}</div>
          <div class="timeline-content">
            <h3>{item.event}</h3>
            <p>
              {#if item.bandId}
                <a href="/bands/{item.bandId}" class="band-link">{item.description}</a>
              {:else}
                {item.description}
              {/if}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <div class="schedule-notes">
    <h2>Notes</h2>
    <ul>
      <li>Schedule subject to change</li>
      <li>Performance times may vary slightly</li>
      <li>Please arrive 30 minutes before your preferred performance</li>
    </ul>
  </div>
</div>

<style>
  .schedule-page {
    padding-bottom: 2rem;
  }

  h1 {
    color: var(--primary-color);
    font-size: 1.75rem;
    margin: 0 0 0.5rem;
  }

  h2 {
    color: var(--primary-color);
    font-size: 1.25rem;
    margin: 1.5rem 0 0.75rem;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 0.5rem;
  }

  .date-info {
    color: #64748b;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }

  .timeline-items {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .timeline-item {
    display: flex;
    background-color: white;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    position: relative;
    overflow: hidden;
  }

  .timeline-item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background-color: var(--primary-color);
  }

  .timeline-time {
    min-width: 80px;
    font-weight: bold;
    color: var(--primary-color);
    font-size: 0.9rem;
  }

  .timeline-content {
    flex: 1;
  }

  .timeline-content h3 {
    margin: 0 0 0.25rem;
    font-size: 1rem;
  }

  .timeline-content p {
    margin: 0;
    font-size: 0.9rem;
    color: #4a5568;
  }

  .band-link {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;
  }

  .band-link:hover, .band-link:focus {
    text-decoration: underline;
  }

  .schedule-notes {
    background-color: #f8f9fa;
    border-radius: 8px;
    padding: 1rem;
    margin-top: 2rem;
  }

  .schedule-notes ul {
    margin: 0;
    padding-left: 1.5rem;
  }

  .schedule-notes li {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }

  @media (min-width: 640px) {
    h1 {
      font-size: 2rem;
    }

    .timeline-time {
      min-width: 100px;
      font-size: 1rem;
    }
  }
</style>
