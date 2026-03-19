let randomQuote = "";

function generateQuote() {
  document.getElementById("quote-result").innerHTML = `${randomQuote}`;
}

function generateNumber() {
  let randomNumber = Math.floor(Math.random() * 9);

  if (randomNumber === 0) {
    randomQuote =
      "I don't know why the hive chose me, but it did. And I think that it always had. The song is loud and beautiful and I am so very afraid. There is a wasps' nest in my attic. Perhaps it can soothe my itching soul.";
  } else if (randomNumber === 1) {
    randomQuote =
      "May you find your rest where no shadows are cast, and no eyes may see you slumber.";
  } else if (randomNumber === 2) {
    randomQuote =
      "How much in this world is done because we fear death, the last and greatest terror?";
  } else if (randomNumber === 3) {
    randomQuote =
      "Cults are very good at finding you when you’re at your lowest point, when you’re your most emotionally vulnerable. And when you’re at that point it’s astounding what can crawl into your heart and start to fester there.";
  } else if (randomNumber === 4) {
    randomQuote =
      "So now I’m here, and I cannot die. I can barely live, either. Food and drink make me sick, and I cannot sleep. There is an aching inside of me. A craving for something, but I don’t know what.";
  } else if (randomNumber === 5) {
    randomQuote =
      "You sought knowledge relentlessly, and you always chose to see. Our world is made of choices, Jon, and very rarely do we truly know what any of them mean, but we make them nonetheless.";
  } else if (randomNumber === 6) {
    randomQuote =
      "How could I sound anything, silly? I’m plastic. I don’t even have a voicebox. I had to borrow this one.";
  } else if (randomNumber === 7) {
    randomQuote = "Do you know how many people I killed to keep the world in one piece?";
  } else if (randomNumber === 8) {
    randomQuote =
      "It stares into him, and it stares out of him, and he is falling into the devouring eternity of its pupil. He wants to cry out in horror, but he cannot.";
  }

  generateQuote();
}
