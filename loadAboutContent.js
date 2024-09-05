document.addEventListener('DOMContentLoaded', () => {
    fetch('about.txt')
        .then(response => response.text())
        .then(text => {
            document.getElementById('content').innerHTML = text;
        })
        .catch(error => {
            console.error('Error loading about.txt:', error);
            document.getElementById('content').innerHTML = '<p>Sorry, we could not load the content.</p>';
        });
});

function toggleMenu() {
    const expandedSection = document.querySelector('.expanded-section');
    const moreButton = document.querySelector('.info-button');
    const arrowImg = document.getElementById('arrowimg');

    expandedSection.classList.toggle('visible');
    moreButton.classList.toggle('expanded');
    
    // Rotate arrow image
    arrowImg.classList.toggle('rotated');
    
    // Add bounce animation
    moreButton.classList.add('bouncing');
    
    // Remove the bouncing class after animation completes
    setTimeout(() => {
        moreButton.classList.remove('bouncing');
    }, 600); // 600ms matches the duration of the bounce animation
}


document.addEventListener('DOMContentLoaded', () => {
    fetch('about.txt')
        .then(response => response.text())
        .then(text => {
            // Replace the placeholder with the actual project name
            const projectName = "Sign Language Translator"; // Replace this with your actual project name
            const updatedText = text.replace(/\[Your Project Name\]/g, projectName);
            
            // Set the updated text to the content element
            document.getElementById('content').innerHTML = updatedText;
        })
        .catch(error => {
            console.error('Error loading about.txt:', error);
            document.getElementById('content').innerHTML = '<p>Sorry, we could not load the content.</p>';
        });
});

