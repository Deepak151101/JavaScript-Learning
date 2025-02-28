const form = document.querySelector('form');

// const height = parseInt(document.querySelector('#height').value)     // this usecase will give you empty value

form.addEventListener('submit', function (e) {
    e.preventDefault();     // This prevents default refresh of web page

    const height = parseInt(document.querySelector('#height').value);   // .value directly gives us value & parseInt converts string to number if in case one gives values in string
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    let bmi;

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>${bmi}</span>`;
    }

    if(bmi < 18.6) {
        results.innerHTML = `<span>(Underweight)</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        results.innerHTML = `<span>(Normal)</span>`;
    } else {
        results.innerHTML = `<span>(Overweight)</span>`;
    }
});

