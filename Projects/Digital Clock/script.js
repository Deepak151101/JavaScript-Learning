const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')       // We can use any Query Selector

setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleString();
}, 1000);

// In setInterval, we specify time in miliseconds. Any function written in it will run every 1000 ms or 1 seconds