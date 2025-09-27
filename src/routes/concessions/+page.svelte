<script>
  import { concessionsStore } from '$lib/stores/index.js';

  // Get concessions data from the store
  let foodCategories = [];
  let paymentMethods = [];

  concessionsStore.subscribe(data => {
    foodCategories = data.categories;
    paymentMethods = data.paymentMethods;
  });
</script>

<svelte:head>
  <title>Concessions - Freedom Showcase</title>
</svelte:head>

<h1>Concessions</h1>
<p class="description">Food and beverages available at the Freedom Showcase.</p>

<div class="payment-info">
  <h3>Payment Methods Accepted</h3>
  <div class="payment-methods">
    {#each paymentMethods as method}
      <span class="payment-badge">{method}</span>
    {/each}
  </div>
</div>

{#each foodCategories as category}
  <div class="menu-section">
    <h2>{category.name}</h2>
    <div class="menu-items">
      {#each category.items as item}
        <div class="menu-item">
          <div class="item-icon">{item.icon}</div>
          <div class="item-details">
            <div class="item-name-price">
              <h3>{item.name}</h3>
              <span class="price">${item.price}</span>
            </div>
            <p class="item-description">{item.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
{/each}

<div class="concessions-info">
  <h2>Information</h2>
  <ul>
    <li>Concession stands are located near the stadium entrance.</li>
    <li>All proceeds support the Freedom High School Marching Band.</li>
    <li>Outside food and beverages are not permitted in the stadium.</li>
    <li>Thank you for supporting the band program!</li>
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
    margin-bottom: 1rem;
  }

  .payment-info {
    background-color: white;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }

  .payment-info h3 {
    margin: 0 0 0.5rem;
    font-size: 0.9rem;
    color: #4a5568;
  }

  .payment-methods {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .payment-badge {
    background-color: #f1f5f9;
    color: var(--primary-color);
    font-size: 0.8rem;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
  }

  .menu-section {
    margin-bottom: 2rem;
  }

  h2 {
    color: var(--primary-color);
    font-size: 1.25rem;
    margin: 0 0 0.75rem;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 0.5rem;
  }

  .menu-items {
    display: grid;
    gap: 0.75rem;
  }

  .menu-item {
    display: flex;
    background-color: white;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }

  .item-icon {
    font-size: 1.5rem;
    margin-right: 1rem;
  }

  .item-details {
    flex: 1;
  }

  .item-name-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.25rem;
  }

  .item-details h3 {
    margin: 0;
    font-size: 1rem;
  }

  .price {
    font-weight: bold;
    color: var(--primary-color);
  }

  .item-description {
    margin: 0;
    font-size: 0.85rem;
    color: #64748b;
  }

  .concessions-info {
    background-color: #f8f9fa;
    border-radius: 8px;
    padding: 1.25rem;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }

  .concessions-info ul {
    margin: 0;
    padding-left: 1.5rem;
  }

  .concessions-info li {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }

  @media (min-width: 640px) {
    h1 {
      font-size: 2rem;
    }

    .menu-items {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
