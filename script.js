document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showSlide(index) {
        const totalSlides = carouselItems.length;
        if (index >= totalSlides) index = 0;
        if (index < 0) index = totalSlides - 1;
        carouselItems.forEach((item, i) => {
            item.style.transform = `translateX(${(i - index) * 100}%)`;
        });
        currentIndex = index;
    }

    prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    // Show the first slide initially
    showSlide(currentIndex);

    // Modal functionality
    const modal = document.getElementById('product-modal');
    const modalClose = document.getElementById('modal-close');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const addToCartBtn = document.getElementById('add-to-cart');

    document.querySelectorAll('.carousel-item img').forEach((img) => {
        img.addEventListener('click', () => {
            modalTitle.textContent = img.alt;
            modalDescription.textContent = img.dataset.info;
            modal.style.display = 'flex';
        });
    });

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Search functionality (dummy)
    document.getElementById('search-button').addEventListener('click', () => {
        const query = document.getElementById('search-input').value;
        alert('Busca por: ' + query);
    });

    // Cart button animation
    const cartBtn = document.querySelector('.cart a');
    cartBtn.addEventListener('click', (event) => {
        event.preventDefault();
        cartBtn.classList.add('animate');
        setTimeout(() => {
            cartBtn.classList.remove('animate');
        }, 500);
    });
});
