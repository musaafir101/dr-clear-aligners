const imageComparisonSliders = document.querySelectorAll('[data-component="image-comparison-slider"]');

function setSliderState(e, element) {
  const sliderRange = element.querySelector('[data-image-comparison-range]');

  if (e.type === 'input') {
    sliderRange.classList.add('image-comparison__range--active');
    return;
  }

  sliderRange.classList.remove('image-comparison__range--active');
  element.removeEventListener('mousemove', moveSliderThumb);
}

function moveSliderThumb(e, element) {
  const sliderRange = element.querySelector('[data-image-comparison-range]');
  const thumb = element.querySelector('[data-image-comparison-thumb]');
  let position = e.layerY - 20;

  if (e.layerY <= sliderRange.offsetTop) {
    position = -20;
  }

  if (e.layerY >= sliderRange.offsetHeight) {
    position = sliderRange.offsetHeight - 20;
  }

  thumb.style.top = `${position}px`;
}

function moveSliderRange(e, element) {
  const value = e.target.value;
  const slider = element.querySelector('[data-image-comparison-slider]');
  const imageWrapperOverlay = element.querySelector('[data-image-comparison-overlay]');

  slider.style.left = `${value}%`;
  imageWrapperOverlay.style.width = `${value}%`;

  element.addEventListener('mousemove', (event) => moveSliderThumb(event, element));
  setSliderState(e, element);
}

function init(element) {
  const sliderRange = element.querySelector('[data-image-comparison-range]');

  if ('ontouchstart' in window === false) {
    sliderRange.addEventListener('mouseup', (e) => setSliderState(e, element));
    sliderRange.addEventListener('mousedown', (e) => moveSliderThumb(e, element));
  }

  sliderRange.addEventListener('input', (e) => moveSliderRange(e, element));
  sliderRange.addEventListener('change', (e) => moveSliderRange(e, element));
}

// Initialize all sliders on the page
imageComparisonSliders.forEach((slider) => {
  init(slider);
});