<script>
  // Sample sponsors data
  const sponsors = [
    {
      level: "Platinum",
      sponsors: [
        {
          name: "Johnson Music Company",
          description: "Premier instruments and equipment for bands",
          website: "https://example.com/johnson",
          logo: "🎹"
        },
        {
          name: "First Community Bank",
          description: "Supporting our community since 1985",
          website: "https://example.com/fcb",
          logo: "🏦"
        }
      ]
    },
    {
      level: "Gold",
      sponsors: [
        {
          name: "Smith's Auto Group",
          description: "Family owned dealership for 30 years",
          website: "https://example.com/smithauto",
          logo: "🚗"
        },
        {
          name: "Freedom Pizza Co.",
          description: "Official pizza provider of Freedom High School",
          website: "https://example.com/freedompizza",
          logo: "🍕"
        },
        {
          name: "Harris Uniforms",
          description: "Quality band uniforms and accessories",
          website: "https://example.com/harrisuni",
          logo: "👔"
        }
      ]
    },
    {
      level: "Silver",
      sponsors: [
        {
          name: "Parker Printing",
          description: "Printing, signs, and banners",
          website: "https://example.com/parker",
          logo: "🖨️"
        },
        {
          name: "Wilson Family Foundation",
          description: "Supporting arts education in our schools",
          website: "https://example.com/wilsonfoundation",
          logo: "🎭"
        },
        {
          name: "City View Hotel",
          description: "Official hotel for visiting bands",
          website: "https://example.com/cityview",
          logo: "🏨"
        },
        {
          name: "Tech Solutions Inc.",
          description: "IT services and support",
          website: "https://example.com/techsolutions",
          logo: "💻"
        }
      ]
    },
    {
      level: "Bronze",
      sponsors: [
        {
          name: "Thompson's Trophies",
          description: "Awards and recognition products",
          website: "https://example.com/thompson",
          logo: "🏆"
        },
        {
          name: "Green Valley Landscaping",
          description: "Proud supporter of Freedom High School",
          website: "https://example.com/greenvalley",
          logo: "🌳"
        },
        {
          name: "Metro Dental Group",
          description: "Family and cosmetic dentistry",
          website: "https://example.com/metrodental",
          logo: "🦷"
        },
        {
          name: "Adams Insurance",
          description: "Protecting what matters most",
          website: "https://example.com/adamsinsurance",
          logo: "🛡️"
        },
        {
          name: "The Music Shop",
          description: "Instruments, repairs, and lessons",
          website: "https://example.com/musicshop",
          logo: "🎸"
        }
      ]
    }
  ];
</script>

<svelte:head>
  <title>Sponsors - Freedom Showcase</title>
</svelte:head>

<h1>Our Sponsors</h1>
<p class="description">The Freedom Showcase is made possible by the generous support of these sponsors.</p>

{#each sponsors as tier}
  <section class="sponsor-tier">
    <h2 class="tier-title">{tier.level} Sponsors</h2>

    <div class="sponsors-grid tier-{tier.level.toLowerCase()}">
      {#each tier.sponsors as sponsor}
        <div class="sponsor-card">
          <div class="sponsor-logo">{sponsor.logo}</div>
          <div class="sponsor-info">
            <h3>{sponsor.name}</h3>
            <p>{sponsor.description}</p>
            <a href={sponsor.website} target="_blank" rel="noopener noreferrer" class="website-link">Visit Website</a>
          </div>
        </div>
      {/each}
    </div>
  </section>
{/each}

<div class="sponsor-cta">
  <h2>Become a Sponsor</h2>
  <p>Interested in supporting the Freedom Showcase? Contact us to learn about sponsorship opportunities for next year's event.</p>
  <a href="mailto:sponsors@freedomshowcase.example.com" class="cta-button">Contact Us</a>
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

  .sponsor-tier {
    margin-bottom: 2rem;
  }

  .tier-title {
    color: var(--primary-color);
    font-size: 1.25rem;
    margin: 0 0 1rem;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 0.5rem;
  }

  .sponsors-grid {
    display: grid;
    gap: 1rem;
  }

  /* Different grid layouts based on sponsor tier */
  .tier-platinum {
    grid-template-columns: repeat(1, 1fr);
  }

  .tier-gold, .tier-silver, .tier-bronze {
    grid-template-columns: repeat(1, 1fr);
  }

  .sponsor-card {
    display: flex;
    background-color: white;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    transition: transform 0.2s, box-shadow 0.2s;
  }

  /* Platinum sponsor styles */
  .tier-platinum .sponsor-card {
    border-left: 4px solid #9ca3af; /* Silver/platinum color */
  }

  /* Gold sponsor styles */
  .tier-gold .sponsor-card {
    border-left: 4px solid #fbbf24; /* Gold color */
  }

  /* Silver sponsor styles */
  .tier-silver .sponsor-card {
    border-left: 4px solid #9ca3af; /* Silver color */
  }

  /* Bronze sponsor styles */
  .tier-bronze .sponsor-card {
    border-left: 4px solid #b45309; /* Bronze color */
  }

  .sponsor-card:hover, .sponsor-card:focus {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  .sponsor-logo {
    font-size: 2rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
  }

  .sponsor-info {
    flex: 1;
  }

  .sponsor-info h3 {
    margin: 0 0 0.25rem;
    font-size: 1rem;
    color: var(--primary-color);
  }

  .sponsor-info p {
    margin: 0 0 0.5rem;
    font-size: 0.85rem;
    color: #4a5568;
  }

  .website-link {
    color: var(--primary-color);
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: 500;
  }

  .website-link:hover, .website-link:focus {
    text-decoration: underline;
  }

  .sponsor-cta {
    background-color: #f1f5f9;
    border-radius: 8px;
    padding: 1.5rem;
    text-align: center;
    margin-top: 2rem;
  }

  .sponsor-cta h2 {
    margin: 0 0 0.75rem;
  }

  .sponsor-cta p {
    margin: 0 0 1.5rem;
    line-height: 1.6;
  }

  .cta-button {
    display: inline-block;
    background-color: var(--primary-color);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;
    transition: background-color 0.2s;
  }

  .cta-button:hover, .cta-button:focus {
    background-color: #2a4365;
  }

  @media (min-width: 640px) {
    h1 {
      font-size: 2rem;
    }

    .tier-platinum {
      grid-template-columns: repeat(2, 1fr);
    }

    .tier-gold, .tier-silver {
      grid-template-columns: repeat(2, 1fr);
    }

    .tier-bronze {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 960px) {
    .tier-gold, .tier-silver {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
