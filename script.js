document.addEventListener('DOMContentLoaded', function () {
    const quoteText = document.getElementById('quoteText');
    const generateQuoteBtn = document.getElementById('generateQuoteBtn');
    const shareTwitterBtn = document.getElementById('shareTwitterBtn');
    const changeColorBtn = document.getElementById('changeColorBtn');
    const body = document.body;

    generateQuoteBtn.addEventListener('click', getRandomQuote);
    shareTwitterBtn.addEventListener('click', shareOnTwitter);
    changeColorBtn.addEventListener('click', changeBackgroundColor);

    async function getRandomQuote() {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            const randomQuote = `${data.content} - ${data.author}`;
            quoteText.textContent = randomQuote;
        } catch (error) {
            console.error('Error fetching quote:', error);
            quoteText.textContent = 'Failed to fetch a quote. Please try again later.';
        }
    }

    function shareOnTwitter() {
        const currentQuote = quoteText.textContent;
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(currentQuote)}`;
        window.open(twitterUrl, '_blank');
    }

    function changeBackgroundColor() {
        const randomColor = getRandomColor();
        body.style.backgroundColor = randomColor;
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
