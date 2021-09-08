// fetch('http://localhost:3000/weather?address=boston').then(response => {
//   response.json().then(data => {
//     if (data.error) {
//       console.log(data.error);
//     } else {
//       console.log(data.location);
//       console.log(data.forecast);
//     }
//   });
// });

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');
messageOne.textContent = '';

const fetchWeather = async searchTerm => {
  const response = await fetch(`http://localhost:3000/weather?address=${searchTerm}`);

  const data = await response.json();
  if (data.error) {
    messageOne.textContent = data.error;
    messageOne.style.color = 'red';
    messageTwo.textContent = '';
  } else {
    messageOne.style.color = null;

    messageOne.textContent = data.location;
    messageTwo.textContent = data.forecast;
  }
};

weatherForm.addEventListener('submit', e => {
  e.preventDefault();
  const location = search.value;
  messageOne.style.color = null;
  messageOne.textContent = 'Loading...';
  messageTwo.textContent = '';

  fetchWeather(location);
});
