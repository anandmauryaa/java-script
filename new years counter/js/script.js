console.log("hello word !")
const newYear = '1 jan '+(new Date().getFullYear()+1);

let counter = () =>
{
     const day = document.getElementById('day');
     const hour = document.getElementById('hour');
     const minut = document.getElementById('minut');
     const sec = document.getElementById('sec');

     const newYearDate = new Date(newYear);
     let currentDate = new Date();

     let seconds = (newYearDate - currentDate)/1000;
     let days = (Math.floor(seconds / 86400))
     let hours = (Math.floor(seconds / 3600) % 24)
     let minuts = (Math.floor(seconds / 60) % 60)
     let secs = (Math.floor(seconds%60))
     
     if (days < 10)
     {
          days = "0" + days;
     }
     if (hours < 10)
          hours = "0" + hours;
     
     if (minuts < 10)
          minuts = "0"+minuts

     if (secs < 10)
          secs = "0" + secs;
          
     
     day.innerText = days;
     hour.innerText = hours;
     mint.innerText = minuts;
     sec.innerText = secs;

     console.log(days,hours , minuts, secs)
}
counter()

setInterval(counter, 1000)
