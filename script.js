const RANDOM_FACTS = [
    "Vogue was founded in 1892 as a weekly publication.",
    "Anna Wintour became the editor-in-chief in 1988.",
    "The first color cover of Vogue appeared in 1932.",
    "Vogue's September issue is its most significant annual publication.",
    "Vogue has over 26 international editions.",
    "The magazine is often called the 'Fashion Bible.'",
    "Vogue Italia is known for its artistic and boundary-pushing covers.",
    "The Met Gala has been heavily associated with Vogue since 1995.",
    "The first digital edition of Vogue launched in 2010.",
    "Famous figures like Princess Diana and Beyoncé have graced Vogue covers."
  ];
  
  const quoteDisplayElement = document.getElementById("quoteDisplay");
  const quoteInputElement = document.getElementById("quoteInput");
  const timerElement = document.getElementById("timer");
  
  quoteInputElement.addEventListener("input", () => {
    const arrayQuote = quoteDisplayElement.querySelectorAll("span");
    const arrayValue = quoteInputElement.value.split("");
  
    let correct = true;
    arrayQuote.forEach((characterSpan, index) => {
      const character = arrayValue[index];
      if (character == null) {
        characterSpan.classList.remove("correct");
        characterSpan.classList.remove("incorrect");
        correct = false;
      } else if (character === characterSpan.innerText) {
        characterSpan.classList.add("correct");
        characterSpan.classList.remove("incorrect");
      } else {
        characterSpan.classList.remove("correct");
        characterSpan.classList.add("incorrect");
        correct = false;
      }
    });
  
    if (correct) renderNewFact();
  });
  
  function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * RANDOM_FACTS.length);
    return RANDOM_FACTS[randomIndex];
  }
  
  async function renderNewFact() {
    const fact = getRandomFact();
    quoteDisplayElement.innerHTML = "";
    fact.split("").forEach((character) => {
      const characterSpan = document.createElement("span");
      characterSpan.innerText = character;
      quoteDisplayElement.appendChild(characterSpan);
    });
    quoteInputElement.value = null;
    startTimer();
  }
  
  let startTime;
  function startTimer() {
    timerElement.innerText = 0;
    startTime = new Date();
    setInterval(() => {
      timerElement.innerText = getTimerTime();
    }, 1000);
  }
  
  function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000);
  }
  
  renderNewFact();
  