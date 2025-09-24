<script>
  import { onMount } from 'svelte';

  let formattedDate = '';

  onMount(() => {
    const currentDate = new Date();
    formattedDate = currentDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });
</script>

<svelte:head>
  <title>My SvelteKit Site</title>
</svelte:head>

<header>
  <h1>Welcome to My SvelteKit Site</h1>
</header>

<main>
  <section>
    <h2>About This Site</h2>
    <p>This is a SvelteKit website ready for deployment on Vercel.</p>
  </section>

  <section id="content">
    <h2>Content Section</h2>
    <p>This section is updated with Svelte.</p>
    {#if formattedDate}
      <div>
        <p>This page was loaded on {formattedDate}.</p>
        <p>Svelte is working correctly!</p>
      </div>
    {/if}
  </section>
</main>

<footer>
  <p>&copy; 2025 My SvelteKit Site. All rights reserved.</p>
</footer>

<style>
  header {
    background-color: #f4f4f4;
    padding: 20px;
    text-align: center;
    margin-bottom: 20px;
    border-radius: 5px;
  }

  h1, h2 {
    margin-bottom: 15px;
    color: #0070f3;
  }

  section {
    margin-bottom: 30px;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  footer {
    text-align: center;
    padding: 20px;
    margin-top: 20px;
    background-color: #f4f4f4;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    :global(body) {
      padding: 10px;
    }

    header, section, footer {
      padding: 15px;
    }
  }
</style>
