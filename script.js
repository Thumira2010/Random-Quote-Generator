const quotes = [
  { text: "I am not lazy, I am on energy-saving mode.", author: "Unknown" },
  { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "I find television very educational. Every time someone turns it on, I go in the other room and read a book.", author: "Groucho Marx" },
  { text: "The elevator to success is out of order. You’ll have to use the stairs, one step at a time.", author: "Joe Girard" },
  { text: "You don’t have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
  { text: "If you think you are too small to make a difference, try sleeping with a mosquito.", author: "Dalai Lama" },
  { text: "Opportunity is missed by most people because it is dressed in overalls and looks like work.", author: "Thomas Edison" },
  { text: "Life is short. Smile while you still have teeth.", author: "Unknown" },
  { text: "If at first you don’t succeed, then skydiving definitely isn’t for you.", author: "Steven Wright" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Even if you are on the right track, you’ll get run over if you just sit there.", author: "Will Rogers" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "Some people graduate with honors, I am just honored to graduate.", author: "Unknown" },
  { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
  { text: "The road to success is dotted with many tempting parking spaces.", author: "Will Rogers" },
  { text: "Be so good they can’t ignore you.", author: "Steve Martin" },
  { text: "The only time success comes before work is in the dictionary.", author: "Vidal Sassoon" },
  { text: "Work until your bank account looks like a phone number.", author: "Unknown" },
  { text: "A day without laughter is a day wasted.", author: "Charlie Chaplin" }
];


const gradients = [
  "linear-gradient(135deg, #f857a6, #ff5858)",
  "linear-gradient(135deg, #43cea2, #185a9d)",
  "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
  "linear-gradient(135deg, #232526, #414345)",
  "linear-gradient(135deg, #1d4350, #a43931)",
  "linear-gradient(135deg, #000428, #004e92)",
  "linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b)",
  "linear-gradient(135deg, #141e30, #243b55)",
  "linear-gradient(135deg, #1f1c2c, #928dab)",
  "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
  "linear-gradient(135deg, #485563, #29323c)",
  "linear-gradient(135deg, #2c3e50, #4ca1af)"
  
];

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  quoteEl.classList.add("fade");
  authorEl.classList.add("fade");

  setTimeout(() => {
    quoteEl.textContent = quote.text;
    authorEl.textContent = `– ${quote.author}`;

    quoteEl.classList.remove("fade");
    authorEl.classList.remove("fade");

    changeBackground();
  }, 300); 
}


function changeBackground() {
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
  document.body.style.background = randomGradient;
}

function copyQuote() {
  const text = `${quoteEl.textContent} ${authorEl.textContent}`;
  navigator.clipboard.writeText(text)
    .then(() => alert("Quote copied to clipboard!"))
    .catch(err => alert("Failed to copy!"));
}

function speakQuote() {
  const text = `${quoteEl.textContent} ${authorEl.textContent}`;
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}

document.getElementById("new-quote").addEventListener("click", showQuote);
document.getElementById("copy-quote").addEventListener("click", copyQuote);
document.getElementById("speak-quote").addEventListener("click", speakQuote);

showQuote();
