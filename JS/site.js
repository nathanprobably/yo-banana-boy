//steps to complete...
//get the message out of the input
//get the message to reverse
//check if the message is a palindrome
//display the message either confirming or denying if it is a palindrome

function getValues() {
    let input = document.getElementById('userInput').value

    if (input.length == 0) {
        Swal.fire({
            icon: 'error',
            backdrop: false,
            title: 'Hmm...',
            text: 'You played yourself! Try entering some text into the input box...'
        })
    } else {
       let results = checkForPalindrome(input);

       displayResults(results);
    }
}

function checkForPalindrome(input) {
    let output = [''];

    for(let i=input.length - 1; i >= 0; i--) {
        let letter = input[i];
        output += letter
    }

    if(output.toLowerCase().split('').join('').replace(/[^a-zA-z0-9 ]/g, '') !=input.toLowerCase().split('').join('').replace(/[^a-zA-z0-9 ]/g, '')) {
        return [false, output]
    } else {
        return [true, output];
        }
}

//display the reversed message
function displayResults(results) {
    if(results[0] == true) {
        document.getElementById('input').textContent = `Your message is a palindrome: ${results[1]}`;
        document.getElementById('alert').classList.remove('invisible');
    } else {
        document.getElementById('input').textContent = `Sorry, your message is not a palindrome: ${results[1]}`;
        document.getElementById('alert').classList.remove('invisible');
    }
}