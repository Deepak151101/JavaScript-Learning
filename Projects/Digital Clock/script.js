const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')       // We can use any Query Selector

setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleString();        // 28/2/2025, 6:18:22 pm
    // clock.innerHTML = date.toLocaleTimeString();        // 6:18:39 pm
}, 1000);

// In setInterval, we specify time in miliseconds. Any function written in it will run every 1000 ms or 1 seconds