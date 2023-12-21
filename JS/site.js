//steps to complete...
//get the message out of the input
//get the message to reverse
//check if the message is a palindrome
//display the message either confirming or denying if it is a palindrome

function getValues() {
    let message = document.getElementById('message').value;

    if (message.length == 0) {
        Swal.fire({
            icon: 'error',   //error message if no text is entered
            backdrop: false,
            title: 'Hmm...',
            text: 'You played yourself! Try entering some text into the input box...'
        })
    } else {
        let palindromeMsg = checkForPalindrome(message);

        displayResults(palindromeMsg);
    }
}

function checkForPalindrome(message) {
    let regex = /[A-Za-z0-9]/;

    let cleanInput = '';

    let revClean = '';

    let output = [];

    for (let i = 0; i < message.length; i++) {
        if (regex.test(message[i])) {
            cleanInput += message[i].toLowerCase();
        }
    }

    for (let i = cleanInput.length - 1; i >= 0; i--) {
        revClean += cleanInput[i];
    }

    if (cleanInput == '') {
        output.push('error');
        return output;
    }
    else if (cleanInput == revClean) {
        output.push(true);
        output.push(revClean);
        return output;
    } else {
        output.push(false);
        output.push(revClean);
        output.push(cleanInput.length * 5 % 100 + 20);
        return output;
    }
}

function displayResults(message) {
    document.getElementById('alert').classList.remove('invisible', 'alert-danger', 'alert-success');

    if (message[0] == true) {
        document.getElementById('results').textContent = 'Yo, Banana Boy! You have a palindrome!';
        document.getElementById('msg').textContent = `You got ${message[1]}`;
        document.getElementById('alert').classList.add('alert-success');
    } else if (message[0] == 'error') {
        document.getElementById('results').textContent = 'Not very a-peel-ing!';
        document.getElementById('msg').textContent = 'Please use letters or numbers.';
        document.getElementById('alert').classList.add('alert-warning');
    } else {
        document.getElementById('results').textContent = 'No, Banana Boy! Not quite a palindrome!';
        document.getElementById('msg').textContent = `You got ${message[1]}`;
        document.getElementById('alert').classList.add('alert-danger');
    }
}