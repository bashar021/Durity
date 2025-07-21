console.log('our inovation is opning')
const carousel = document.getElementById('productCarousel');
const cards = document.querySelectorAll('.inovative-product');
let activeIndex = Math.floor(cards.length / 2); // Start with the center card

// Function to center a card
function centerCard(index) {
    const card = cards[index];
    const rect = card.getBoundingClientRect();
    const centerPosition = rect.left + (rect.width / 2);
    const offset = window.innerWidth / 2 - centerPosition;
    carousel.scrollBy({ left: -offset, behavior: 'smooth' });
}

// Function to set active card
function setActiveCard(index) {
    cards.forEach((card, i) => {
        if (i === index) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
    centerCard(index);
}

// Add click event listeners to cards
// cards.forEach((card, index) => {
//     card.addEventListener('click', () => {
//         activeIndex = index;
//         setActiveCard(activeIndex);
//     });
// });
// setActiveCard(activeIndex-1);

// Scroll buttons functionality
function scrollCarousel(direction) {
    if (direction === 'left' && activeIndex > 0) {
        activeIndex--;
    } else if (direction === 'right' && activeIndex < cards.length - 1) {
        activeIndex++;
    }
    setActiveCard(activeIndex);
}
console.log('our inovation is closing')