const slides = document.querySelectorAll('[data-js="carousel-card"]')
const prevButton = document.querySelector('[data-js="previousButton"]')
const nextButton = document.querySelector('[data-js="nextButton"]')

let currentSlideIndex = 0
let currentSlideIndexTwo = 1


nextButton.addEventListener('click', () => {
  
  if (currentSlideIndexTwo === slides.length - 1) {
    currentSlideIndex = -1
    currentSlideIndexTwo = 0
  }
  
  ++currentSlideIndex
  ++currentSlideIndexTwo

  slides.forEach(slide => slide.classList.remove('visible'))
  slides[currentSlideIndex].classList.add('visible')
  slides[currentSlideIndexTwo].classList.add('visible')
})


prevButton.addEventListener('click', () => {
  
  if (currentSlideIndex === 0) {
    currentSlideIndex = slides.length - 1
    currentSlideIndexTwo = slides.length
  }
  
  --currentSlideIndex
  --currentSlideIndexTwo

  slides.forEach(slide => slide.classList.remove('visible'))
  slides[currentSlideIndex].classList.add('visible')
  slides[currentSlideIndexTwo].classList.add('visible')
})

console.log(slides.length)