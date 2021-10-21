document.querySelector('button').addEventListener("click", function(e) {
    var name = document.querySelector('#name');
    var age = document.querySelector('#age');
    var error = document.querySelector('.error');
    var btnSubmit = document.querySelector('button');
    error.innerHTML = '';
    try {

        if (name.value.length === 0) {
            throw new Error('*** Name is required');
        }
        if (name.value.length > 20) {
            throw new Error('*** Name is too long');
        }
        if (age.value.length === 0) {
            throw new Error('*** Age is required');
        }
        if (isNaN(age.value) === 0) {
            throw new Error('*** Age is not numeric');
        }
        console.log('Form is submitted');


    } catch (err) {
        error.innerHTML = err.message;

        console.log(err);
    } finally {
        name.value = '';
        age.value = '';
    }







    e.preventDefault();
});