let time = document.getElementById("time");

setInterval(() => {
  let hour = new Date().getHours().toString().padStart(2, "0");

  let minute = new Date().getMinutes().toString().padStart(2, "0");

  let second = new Date().getSeconds().toString().padStart(2, "0");

  time.textContent = hour + ":" + minute + ":" + second;
});

let timer = document.getElementById("timer");
let date = document.getElementById("date");
date.addEventListener("click", () => {
  let day = document.createElement("div");
  day.textContent =
    String(new Date().getDate().toString().padStart(2, "0")) +
    "." +
    String(new Date().getMonth().toString().padStart(2, "0"));
  day.classList.add("day");
  timer.appendChild(day);

  if (day.className != "time") {
    day.className = "time";
    date.textContent = 'clock'

    time.remove()
    date.addEventListener('click', ()=> {
      day.remove()
      alert('refresh to see clock, we are working on improvements :)')
    })
  } 
});

let timezone = document.getElementById('timezone')
timezone.addEventListener('click', ()=> { 
  alert('GMT+0500 (Uzbekistan Standard Time)')
  
})
console.log(new Date());