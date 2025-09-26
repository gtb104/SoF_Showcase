<script>
  // Sample concessions data
  const foodCategories = [
    {
      name: "Main Items",
      items: [
        { name: "Cheeseburger", price: "8.00", description: "1/4 lb beef patty with cheese", icon: "🍔" },
        { name: "Hot Dog", price: "5.00", description: "All-beef hot dog", icon: "🌭" },
        { name: "Chicken Tenders", price: "7.00", description: "3 pieces with sauce", icon: "🍗" },
        { name: "Pizza Slice", price: "4.00", description: "Cheese or pepperoni", icon: "🍕" },
        { name: "Nachos", price: "6.00", description: "Chips with cheese sauce", icon: "🧀" }
      ]
    },
    {
      name: "Sides",
      items: [
        { name: "French Fries", price: "4.00", description: "Regular size", icon: "🍟" },
        { name: "Soft Pretzel", price: "4.50", description: "With cheese dip", icon: "🥨" },
        { name: "Popcorn", price: "3.50", description: "Medium bag", icon: "🍿" },
        { name: "Chips", price: "2.00", description: "Assorted varieties", icon: "🥔" }
      ]
    },
    {
      name: "Drinks",
      items: [
        { name: "Soda", price: "3.00", description: "Various flavors, 20oz", icon: "🥤" },
        { name: "Bottled Water", price: "2.50", description: "16oz bottle", icon: "💧" },
        { name: "Coffee", price: "3.00", description: "Hot or iced", icon: "☕" },
        { name: "Hot Chocolate", price: "3.00", description: "With whipped cream", icon: "🍫" }
      ]
    },
    {
      name: "Desserts",
      items: [
        { name: "Cookies", price: "2.50", description: "Chocolate chip", icon: "🍪" },
        { name: "Ice Cream", price: "4.00", description: "Cup or cone", icon: "🍦" },
        { name: "Cotton Candy", price: "3.50", description: "Blue or pink", icon: "🍭" },
        { name: "Funnel Cake", price: "6.00", description: "With powdered sugar", icon: "🍩" }
      ]
    }
  ];

  // Payment methods accepted
  const paymentMethods = ["Cash", "Credit Card", "Mobile Pay"];
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
    <li>Concession stands are located at the north and south ends of the stadium.</li>
    <li>All proceeds support the Freedom High School Marching Band.</li>
    <li>Outside food and beverages are not permitted in the stadium.</li>
    <li>Specialty dietary options available upon request.</li>
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
