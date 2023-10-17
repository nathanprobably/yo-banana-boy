//steps to complete...
//get the message out of the input
//get the message to reverse
//check if the message is a palindrome
//display the message either confirming or denying if it is a palindrome

function getValues() {
    let input = document.getElementById('userInput').value

    if (input.length == 0) {
        Swal.fire({
            icon: 'error',   //error message if no text is entered
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
    let letter = input.length - 1;
    
	for( let i = 0 ; i < letter/2 ;i++) {
            let beginning_char = input[i] ;

            let end_char = input[letter-i];

            if( beginning_char != end_char) {
                    return false;
                }
	}
	return true;
}

function displayResults(results) {
    if (results[0] == true) {
        document.getElementById('input').textContent = `Your message is a palindrome: ${results[1]}`; //display if is a palindrome
        document.getElementById('alert').classList.remove('invisible');
    } else {
        document.getElementById('input').textContent = `Sorry, your message is not a palindrome: ${results[1]}`;  //display if NOT a palindrom
        document.getElementById('alert').classList.remove('invisible');
    }
}