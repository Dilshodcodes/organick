const products = [
    "Calabrese Broccoli",
    "Fresh Banana Fruites",
    "White Nuts",
    "Vegan Red Tomato",
    "Mung Bean",
    "Brown Hazelnut",
    "Eggs",
    "Zelco Suji Elaichi Rusk"
];

document.querySelectorAll('.stars').forEach((starContainer, index) => {
    starContainer.addEventListener('click', (event) => {
        if (event.target.matches('span')) {
            const rating = event.target.getAttribute('data-value');
            const productName = products[index];
            alert(`${productName} mahsulotiga ${rating} baho berildi`);
            highlightStars(starContainer, rating);
        }
    });
});

function highlightStars(starContainer, rating) {
    starContainer.querySelectorAll('span').forEach(star => {
        if (star.getAttribute('data-value') <= rating) {
            star.classList.add('rated');
        } else {
            star.classList.remove('rated');
        }
    });
}

let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.carousel-indicators span');

    function showSlide(index) {
        items[currentIndex].style.display = 'none';
        indicators[currentIndex].classList.remove('active');
        currentIndex = index;
        items[currentIndex].style.display = 'block';
        indicators[currentIndex].classList.add('active');
    }

    function nextSlide() {
        let nextIndex = (currentIndex + 1) % items.length;
        showSlide(nextIndex);
    }

    setInterval(nextSlide, 3000);