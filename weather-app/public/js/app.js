console.log('Client side javascript file is loaded!')


const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');


weatherForm.addEventListener('submit', (event) => {
    const messageTwo = document.querySelector('#message-2')
    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';
    event.preventDefault();
    const location = search.value;
    fetch('http://localhost:3000/weather?address=' + location + '').then((res) => {
        res.json().then((data) => {
            if (data.error) {
                messageOne.textContent = '';
                messageTwo.textContent = 'Error:Please Enter Valid Location';
                console.log('Error:Please Enter Valid Location');
            } else {
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
                console.log(data.location);
                console.log(data.forecast);
            }

        })
    })

})