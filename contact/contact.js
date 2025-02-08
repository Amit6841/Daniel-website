document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
            alert('Thank you ' +  name + ', meassage sent!');
        } else {
            alert('Please fill in all fields.');
        }
    });
});