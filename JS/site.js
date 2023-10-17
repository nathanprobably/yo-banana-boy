//steps to complete...
//get the message out of the input
//get the message to reverse
//check if the message is a palindrome
//display the message either confirming or denying if it is a palindrome

function getValues() {
    let msg = document.getElementById('userInput').value

    if (msg.length == 0) {
        Swal.fire({
            icon: 'error',   //error message if no text is entered
            backdrop: false,
            title: 'Hmm...',
            text: 'You played yourself! Try entering some text into the input box...'
        })
    } else {
        let palindromeObject = checkForPalindrome(input);

        displayResults(palindromeObject);
    }
}

function reverseMessage(input) {
    let output = '';

    for (let i = input.length - 1; i >= 0; i--) {
        output += input[i];
    };

    return output;

}

function checkForPalindrome(input) {
    let regex = /[^a-zA-Z0-9]/g;  // defining the shortcut to call for non-letter symbols using regex

    let cleanInput = input.replace(regex, ''); //take out spaces and symbols, making them irrelevant to the determination
    cleanInput = cleanInput.toLowerCase();

    let reversed = reverseMessage(cleanInput);
    let wordIsAPalindrome = reversed == cleanInput;

    let results = {
        reverseMessage: reversed,
        isPalindrome: wordIsAPalindrome,
        originalMessage: input
    };

    return results;
}

function displayResults(palindromeObject) {
    document.getElementById('alert').classList.remove('invisible', 'alert-danger', 'alert-success');

    if (palindromeObject.isPalindrome == true) {
        document.getElementById('msg').textContent = `Hey, ${palindromeObject.reversedmessage} is a palindrome!`;
        document.getElementById('alert').classList.add('alert-success');
    } else {
        document.getElementById('msg').textContent = `Sorry, ${palindromeObject.reversedmessage} is not a palindrome. Try again!`;
        document.getElementById('alert').classList.add('alert-danger');
    }
}