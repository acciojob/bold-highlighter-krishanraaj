// Function to highlight all <strong> elements
function highlight() {
    const boldWords = document.querySelectorAll('strong');
    boldWords.forEach(word => {
        word.style.color = 'rgb(0, 128, 0)'; // green
    });
}

// Function to revert <strong> elements back to normal color
function return_normal() {
    const boldWords = document.querySelectorAll('strong');
    boldWords.forEach(word => {
        word.style.color = 'rgb(0, 0, 0)'; // black
    });
}
