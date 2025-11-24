// Function to show a specific page and hide all others
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show the selected page
    document.getElementById(pageId).classList.add('active');
    
    // Reset animations for the new page
    resetAnimations();
}

// Function to reset animations when switching pages
function resetAnimations() {
    // Get all animated elements
    const animatedElements = document.querySelectorAll('.stat-card, .info-card, .card, .nav-btn, .page-title, .back-btn');
    
    // Remove animation classes
    animatedElements.forEach(element => {
        const animation = element.style.animation;
        element.style.animation = 'none';
        element.offsetHeight; // Trigger reflow
        element.style.animation = animation;
    });
}

// Add click effect to all buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-click-effect');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            // Add ripple to button
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 5000);
        });
    });
});