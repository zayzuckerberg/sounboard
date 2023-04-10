let clickCount = 0;
const button = document.getElementById('downloadBtn');
const countSpan = document.getElementById('downloadCount');

function incrementCount() {
  clickCount++;
  countSpan.textContent = clickCount;
}



const audioButtons = document.querySelectorAll('.soundBtn');

// Loop through all the audio buttons and add a click event listener to each
audioButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the audio source from the button's data attribute
    const audioSrc = button.getAttribute('src');
    // Create a new audio element and set its source to the button's audio source
    const audio = new Audio(audioSrc);
    // Play the audio
    audio.play();
  });
});

function playAudio(event) {
  let sound = new Audio(event.target.getAttribute('data-src'));
  sound.play();
  
  let musicIcon = event.target.querySelector('.fa-music');
  musicIcon.classList.add('active');
}