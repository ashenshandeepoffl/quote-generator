document.addEventListener('DOMContentLoaded', function () {
    const quoteText = document.getElementById('quoteText');
    const generateQuoteBtn = document.getElementById('generateQuoteBtn');

    generateQuoteBtn.addEventListener('click', getRandomQuote);

    function getRandomQuote() {
        const quotes = [
            "The only way to do great work is to love what you do. - Steve Jobs",
            "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
            "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
            "It always seems impossible until it's done. - Nelson Mandela",
            "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
            "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt"
        ];

        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];

        quoteText.textContent = randomQuote;
    }
});
