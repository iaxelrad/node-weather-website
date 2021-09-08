const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');
messageOne.textContent = '';

const fetchWeather = async searchTerm => {
  const response = await fetch(`/weather?address=${searchTerm}`);

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
