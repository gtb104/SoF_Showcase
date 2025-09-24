// Main JavaScript file

document.addEventListener('DOMContentLoaded', () => {
    // Update content dynamically
    const contentSection = document.getElementById('content');
    
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    const newElement = document.createElement('div');
    newElement.innerHTML = `
        <p>This page was loaded on ${formattedDate}.</p>
        <p>JavaScript is working correctly!</p>
    `;
    
    contentSection.appendChild(newElement);
    
    // Add a simple animation
    contentSection.style.transition = 'all 0.5s ease';
    contentSection.style.opacity = '0';
    
    setTimeout(() => {
        contentSection.style.opacity = '1';
    }, 300);
});