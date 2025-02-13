document.getElementById('video-container').addEventListener('click', function () {
    this.innerHTML = `<div class="iframe-container">
                        <iframe src="https://www.youtube.com/embed/rXsH41KQiTM?autoplay=1" 
                                frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                      </div>`;
});
