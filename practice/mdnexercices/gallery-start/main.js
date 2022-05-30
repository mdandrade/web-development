const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

/* Looping through images */

for (var i = 1; i < 6; i++) {

let xxx = "images/pic" + i + ".jpg";
const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
thumbBar.appendChild(newImage);
newImage.addEventListener('click', e => displayedImage.src = e.target.src);

}


/* Wiring up the Darken/Lighten button */

let atributeOfBtn = btn.getAttribute('class');
btn.onclick = function() {
if (atributeOfBtn === 'dark') {
    btn.setAttribute('class', 'light');
    btn.innerText = 'Lighten';
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)"

} else {
    btn.setAttribute('class', 'dark');
    btn.innerText = 'Darken';
    overlay.setAttribute('background-color', "rgba(0,0,0,0)")
}
}