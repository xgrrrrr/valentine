let step = 1;

function showQuestion(){
  document.getElementById("introText").style.display = "none";
  document.getElementById("startBtn").style.display = "none";
  document.getElementById("questionBox").style.display = "block";
}

function answerYes(){
  if(step === 1){
    // First question YES: go to second question
    document.getElementById("letterBox").style.display = "none";
    document.getElementById("questionText").textContent = "Are you okay?";
    step = 2;
  } else if(step === 2){
    // Second question YES: show letter for 5s, then proceed to Freedom Wall
    document.getElementById("questionText").style.display = "none";
    document.getElementById("yesBtn").style.display = "none";
    document.getElementById("noBtn").style.display = "none";

    const letterBox = document.getElementById("letterBox");
    letterBox.style.display = "block";
    letterBox.innerHTML = `
      <p style="text-align:center; font-size:1.2rem; margin-bottom:20px;">
        Ohhh, Great!! 💌
      </p>
    `;

    // After 5 seconds, hide letter and show loading → Freedom Wall
    setTimeout(() => {
      letterBox.style.display = "none";
      showLoadingThenFreedomWall();
    }, 5000);
  }
}

function answerNo(){
  if(step === 1){
    // First question NO: show letter and stop
    document.getElementById("questionText").style.display = "none";
    document.getElementById("yesBtn").style.display = "none";
    document.getElementById("noBtn").style.display = "none";

    const letterBox = document.getElementById("letterBox");
    letterBox.style.display = "block";
    letterBox.innerHTML = `
      <p style="text-align:center; font-size:1.2rem; margin-bottom:20px;">
        Ohhh, Have a nice day!! 💌
      </p>
    `;
  } else if(step === 2){
    // Second question NO: show letter for 5s, then proceed to Freedom Wall
    document.getElementById("questionText").style.display = "none";
    document.getElementById("yesBtn").style.display = "none";
    document.getElementById("noBtn").style.display = "none";

    const letterBox = document.getElementById("letterBox");
    letterBox.style.display = "block";
    letterBox.innerHTML = `
      <p style="text-align:center; font-size:1.2rem; margin-bottom:20px;">
        Ohh, I wish you are okay someday 💌
      </p>
    `;

    setTimeout(() => {
      letterBox.style.display = "none";
      showLoadingThenFreedomWall();
    }, 5000);
  }
}

function showLoadingThenFreedomWall(){
  document.getElementById("questionText").style.display = "none";
  document.getElementById("yesBtn").style.display = "none";
  document.getElementById("noBtn").style.display = "none";
  document.getElementById("letterBox").style.display = "none";

  const loading = document.getElementById("loading");
  loading.style.display = "block";

  setTimeout(() => {
    loading.style.display = "none";
    document.getElementById("inputBox").style.display = "block";
    step = 3;
  }, 5000);
}

function submitAnswer(){
  const answerInput = document.getElementById("userAnswer");
  const answer = answerInput.value.trim();

  if(answer === ""){
    if(!document.getElementById("warningMsg")){
      const warning = document.createElement("p");
      warning.id = "warningMsg";
      warning.textContent = "⚠️ Fill this before proceeding!";
      warning.style.color = "#ff0000";
      warning.style.marginTop = "10px";
      warning.style.fontWeight = "bold";
      document.getElementById("inputBox").appendChild(warning);
    }
    return;
  }

  const existingWarning = document.getElementById("warningMsg");
  if(existingWarning) existingWarning.remove();

  document.getElementById("inputBox").style.display = "none";

  const loading = document.getElementById("loading");
  loading.querySelector('p').textContent = ".....loading pls wait";
  loading.style.display = "block";

  setTimeout(() => {
    loading.style.display = "none";
    document.getElementById("asciiBox").style.display = "block";

    setTimeout(() => {
      document.getElementById("asciiBox").style.display = "none";
      document.getElementById("finalBox").style.display = "block";
    }, 5000);

  }, 5000);
}
