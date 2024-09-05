document.getElementById('call').addEventListener('click', function () {
    const callIcon = this.querySelector('img'); // Select the call icon
    callIcon.classList.add('shake'); // Add the shake class
    
    // Remove the shake class after the animation ends to allow future clicks
    setTimeout(() => {
        callIcon.classList.remove('shake');
    }, 500); // Match the duration of the shake animation (0.5s)
});
document.getElementById('hangup').addEventListener('click', function () {
    const callIcon = this.querySelector('img'); // Select the call icon
    callIcon.classList.add('shake'); // Add the shake class
    
    // Remove the shake class after the animation ends to allow future clicks
    setTimeout(() => {
        callIcon.classList.remove('shake');
    }, 500); // Match the duration of the shake animation (0.5s)
});




document.getElementById('more-button').addEventListener('click', function() {
    const expandedSection = document.getElementById('expanded-section');
    expandedSection.classList.toggle('visible');
});

document.getElementById('close-button').addEventListener('click', function() {
    const expandedSection = document.getElementById('expanded-section');
    expandedSection.classList.remove('visible');
});

// function toggleMenu() {
//     const expandedSection = document.querySelector('.expanded-section');
//     expandedSection.classList.toggle('visible');
// }

// function toggleMenu() {
//     const expandedSection = document.querySelector('.expanded-section');
//     const moreButton = document.getElementById('moreButton');
//     const arrowImg = document.getElementById('arrowimg');

//     expandedSection.classList.toggle('visible');
//     moreButton.classList.toggle('expanded'); // Toggle the "˅" to "˄" when expanded
//     arrowImg.classList.toggle('rotated'); // Rotate the arrow
// }


// function toggleMenu() {
//     const expandedSection = document.querySelector('.expanded-section');
//     const arrowImg = document.getElementById('arrowimg');

//     // Toggle visibility of the expanded section
//     expandedSection.classList.toggle('visible');

//     // Rotate the arrow icon by toggling the 'rotated' class
//     arrowImg.classList.toggle('rotated');
// }


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



