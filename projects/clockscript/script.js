const createClock = () => {
  const date = new Date;
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  
  if(hour < 10) {
    hour = `0${hour}`;
  }
  if(minutes < 10) {
    minutes = `0${minutes}`;
  }
  if(seconds < 10) {
    seconds = `0${seconds}`;
  }
  
  const getHour = document.querySelector("#hour");
  getHour.innerText = `${hour}`;
  const getMinutes = document.querySelector("#minutes");
  getMinutes.innerText = `${minutes}`;
  const getSeconds = document.querySelector("#seconds");
  getSeconds.innerText = `${seconds}`;
  
};
const timer = setInterval(createClock, 1000);

const completeDate = () => {
  const now = new Date;
  const getContainer = document.querySelector('#semana');

  let day = now.getDate();
  let month = now.toLocaleString('default', { month: 'long' }).toUpperCase();
  let year = now.getFullYear();
  getContainer.innerHTML = `${day} DE ${month} DE ${year}`;
}

const timer2 = setInterval(completeDate, 1000);
