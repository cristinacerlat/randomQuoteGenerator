// Array of quotes with their corresponding authors
const quotes = [
    {quote: "I have no special talent. I am only passionately curious.", author: "Albert Einstein"},
    {quote: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer"},
    {quote: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll"},
    {quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs"},
    {quote: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
    {quote: "The best way to predict the future is to create it.", author: "Peter Drucker"},
    {quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde"},
    {quote: "Two things are infinite: the universe and human stupidity.", author: "Albert Einstein"},
    {quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr."},
    {quote: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi"},
    {quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson"},
    {quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar"},
    {quote: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford"},
    {quote: "I have learned over the years that when one's mind is made up, this diminishes fear.", author: "Rosa Parks"},
    {quote: "The best revenge is massive success.", author: "Frank Sinatra"},
    {quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein"},
    {quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt"},
    {quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt"},
    {quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins"},
    {quote: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill"}
];

// Function to show the quote section when the button is clicked
function showQuote() {
    // Hide the button after it's clicked
    document.getElementById("generate-btn").style.display = "none";

    // Show the quote section
    document.getElementById("quote-section").classList.remove("hidden");

    // Generate a random quote
    newQuote();
}

// Function to generate a new random quote
function newQuote() {
    // Get a random index from the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    // Update the quote and author on the page
    document.getElementById("quote").innerText = `"${quotes[randomIndex].quote}"`;
    document.getElementById("author").innerText = `- ${quotes[randomIndex].author}`;
}

// Function to copy the current quote to the clipboard
function copyQuote() {
    // Get the current quote and author text from the page
    const quoteText = document.getElementById("quote").innerText;
    const authorText = document.getElementById("author").innerText;
    
    // Combine the quote and author into a single string
    const fullQuote = `${quoteText} ${authorText}`;
    
    // Copy the full quote to the clipboard
    navigator.clipboard.writeText(fullQuote)
        .then(() => {
            // Alert the user that the quote was copied successfully
            alert("Quote copied to clipboard!");
        })
        .catch(() => {
            // Alert the user if copying failed
            alert("Failed to copy quote.");
        });
}

// Event listeners for the buttons
document.getElementById("generate-btn").addEventListener("click", showQuote);
document.getElementById("new-quote-btn").addEventListener("click", newQuote);
document.getElementById("copy-quote-btn").addEventListener("click", copyQuote);
