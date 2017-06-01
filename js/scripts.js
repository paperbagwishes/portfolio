// Scripts
// Store Banner Images
var img0 = 'https://unsplash.it/600/300?image=1';
var img1 = 'https://unsplash.it/600/300?image=2';
var img2 = 'https://unsplash.it/600/300?image=3';

// Random Number Generator
var maxRand = 3;
var randNum = Math.floor( Math.random() * maxRand );
console.log(randNum);

// Swap Out Banner
$('header img').attr('src', eval('img' + randNum) );

// Lightgallery
$('figure').lightGallery({
    selector: 'a', 
    mode: 'lg-lollipop',
    thumbnail: true
});

// Random Background
$('body').addClass( 'bg' + randNum );