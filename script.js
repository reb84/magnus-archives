const quotes = [
  "I haven't slept in some time. I can't sleep. My dreams are crawling and many-legged. They are slithering and burrowing. But they always sing the song of flesh.",
  "I don't know why the hive chose me, but it did. And I think that it always had. The song is loud and beautiful and I am so very afraid. There is a wasps' nest in my attic. Perhaps it can soothe my itching soul.",
  "May you find your rest where no shadows are cast, and no eyes may see you slumber.",
  "How much in this world is done because we fear death, the last and greatest terror?",
  "Cults are very good at finding you when you're at your lowest point, when you're your most emotionally vulnerable. And when you're at that point it's astounding what can crawl into your heart and start to fester there.",
  "So now I'm here, and I cannot die. I can barely live, either. Food and drink make me sick, and I cannot sleep. There is an aching inside of me. A craving for something, but I don't know what.",
  "You sought knowledge relentlessly, and you always chose to see. Our world is made of choices, Jon, and very rarely do we truly know what any of them mean, but we make them nonetheless.",
  "How could I sound anything, silly? I'm plastic. I don't even have a voicebox. I had to borrow this one.",
  "Do you know how many people I killed to keep the world in one piece?",
  "It stares into him, and it stares out of him, and he is falling into the devouring eternity of its pupil. He wants to cry out in horror, but he cannot.",
];

let currentIndex = 0;
const quoteElement = document.getElementById("quoteText");

function nextQuote() {
  quoteElement.classList.add("fading");
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % quotes.length;
    quoteElement.textContent = quotes[currentIndex];
    quoteElement.classList.remove("fading");
  }, 400);
}
