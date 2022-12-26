const button = document.querySelector('.button');

button.addEventListener('click', function (event) {
    const search = document.querySelector('.search').value;
    const amount = document.querySelector('.amount').value;
    console.log(search);
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=KsZmOdSXRc7TSDBlHsxKsqLl6N6nTTwG&q=${search}&limit=${amount}&offset=0&rating=g&lang=en`)
        .then(res => res.json())
        .then(
            (el) => {
                document.querySelector('#img1').src = el.data[0].images.downsized.url;
                document.querySelector('#img2').src = el.data[1].images.downsized.url;
                document.querySelector('#img3').src = el.data[2].images.downsized.url;
                document.querySelector('#img4').src = el.data[3].images.downsized.url;
                document.querySelector('#img5').src = el.data[4].images.downsized.url
            }
        );

});