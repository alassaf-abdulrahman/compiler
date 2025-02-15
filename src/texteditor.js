// Function to update line numbers
function updateLineNumbers() {
    const textarea = document.getElementById('input');
    const lineNumbers = document.getElementById('line-numbers');

    // Get the number of lines
    const lines = textarea.value.split('\n').length;

    // Generate line numbers
    let lineNumbersText = '';
    for (let i = 1; i <= lines; i++) {
        lineNumbersText += `${i}\n`;
    }

    // Update line numbers
    lineNumbers.textContent = lineNumbersText;

    // Sync scroll behavior
    lineNumbers.scrollTop = textarea.scrollTop;
}

// Function to handle tab key
function handleTab(event) {
    if (event.key === 'Tab') {
        event.preventDefault(); // Prevent default tab behavior

        const textarea = event.target;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        // Insert 4 spaces at the cursor position
        textarea.value = textarea.value.substring(0, start) + '    ' + textarea.value.substring(end);

        // Move the cursor to the end of the inserted spaces
        textarea.selectionStart = textarea.selectionEnd = start + 4;
    }
}

// Add event listeners
const textarea = document.getElementById('input');
textarea.addEventListener('input', updateLineNumbers);
textarea.addEventListener('keydown', handleTab);
textarea.addEventListener('scroll', () => {
    const lineNumbers = document.getElementById('line-numbers');
    lineNumbers.scrollTop = textarea.scrollTop;
});

// Initialize line numbers
updateLineNumbers();