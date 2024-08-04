$(document).ready(function() {
    var slider = document.getElementById('slider-range');
    noUiSlider.create(slider, {
        start: [0, 50],
        connect: true,
        range: {
            'min': 0,
            'max': 50
        }
    });
    var minPrice = document.getElementById('min-price');
    var maxPrice = document.getElementById('max-price');
    slider.noUiSlider.on('update', function(values, handle) {
        if (handle === 0) {
            minPrice.innerHTML = Math.round(values[0]);
        } else {
            maxPrice.innerHTML = Math.round(values[1]);
        }
    });
});