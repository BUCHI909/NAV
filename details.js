const cars = [
  {
    name: "BMW M5",
    price: "$90,000",
    description: "A luxury performance sedan combining comfort, technology, and raw power with a twin-turbo V8 engine.",
    images: [
      "images/m5-exterior-right-front-three-quarter-2 (1).jpeg",
      "images/BMW.webp",
    //   "images/download (1).jpeg"
    ]
  },
  {
    name: "Mercedes AMG",
    price: "$120,000",
    description: "An elite sports car built with precision, speed, and unmatched style from Mercedes-Benz.",
    images: [
      "images/925eabf95b396bc3cbc0ddbca4a899a5.png",
      "images/24-Mercedes-AMG-SL-Roadster-Exterior.avif"
    ]
  },
  {
    name: "Toyota Supra",
    price: "$65,000",
    description: "A redefined Japanese sports car blending power and agility with an iconic design.",
    images: [
      "images/oko.jpg",
      "images/Toyota-BZ4X-2025-model-front.jpeg"
    ]
  },
  {
    name: "Lamborghini Huracan",
    price: "$250,000",
    description: "A masterpiece of Italian engineering — speed, luxury, and design in perfect harmony.",
    images: [
      "images/Blu Aegir Metallic-BABM-23,73,102-640-en_US.jpg",
      "images/lam.jpg"
    ]
  }
];

// get selected car index
const params = new URLSearchParams(window.location.search);
const carIndex = params.get('car') || 0;
const car = cars[carIndex];

// populate info
document.getElementById('car-name').textContent = car.name;
document.getElementById('car-price').textContent = car.price;
document.getElementById('car-description').textContent = car.description;

// inject images into swiper
const imageContainer = document.getElementById('car-images');
car.images.forEach(img => {
  const slide = document.createElement('div');
  slide.classList.add('swiper-slide');
  slide.innerHTML = `<img src="${img}" alt="${car.name}">`;
  imageContainer.appendChild(slide);
});

// init swiper
new Swiper(".mySwiper", {
  loop: true,
  pagination: { el: ".swiper-pagination" },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
});
