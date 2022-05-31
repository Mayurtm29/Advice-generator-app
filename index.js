//elements
const advicetext = document.querySelector(".text");
const diceBtn = document.querySelector(".dice");

/**
 * APi call
 */
const adviceApi = async function () {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    renderAdvice(data.slip);
  } catch (err) {
    advicetext.innerHTML = `<h1>${err.message}</h1>`;
  }
};
/**
 * Render Advice
 */
const renderAdvice = function (data) {
  advicetext.innerHTML = `<p class="advice_number">Advice #${data.id}</p>
    <h1> " <span class="adivce_text">${data.advice}</span> "
    </h1>`;
};

//click event
diceBtn.addEventListener("click", function () {
  advicetext.innerHTML = `<div class="loader"></div>`;
  adviceApi();
});

adviceApi();
