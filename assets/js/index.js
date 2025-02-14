document.getElementById('video-container').addEventListener('click', function () {
    this.innerHTML = `<div class="iframe-container">
                        <iframe src="https://www.youtube.com/embed/rXsH41KQiTM?autoplay=1" 
                                frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                      </div>`;
});
$(".game-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
            },
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                centerMode: true,
                variableWidth: true,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                variableWidth: true,
            },
        },
    ],
});