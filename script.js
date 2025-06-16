let questionEl = document.getElementById('question');
let choicesEl = document.getElementById('choices');

function generateQuestion() {
  const a = Math.floor(Math.random() * 20);
  const b = Math.floor(Math.random() * 20);
  const isAddition = Math.random() > 0.5;
  const answer = isAddition ? a + b : a - b;
  const question = isAddition ? `${a} + ${b}` : `${a} - ${b}`;
  questionEl.innerText = question;

  let options = new Set();
  options.add(answer);
  while (options.size < 4) {
    options.add(answer + Math.floor(Math.random() * 10) - 5);
  }

  const shuffled = [...options].sort(() => Math.random() - 0.5);
  choicesEl.innerHTML = '';
  shuffled.forEach(opt => {
    const btn = document.createElement('button');
    btn.innerText = opt;
    btn.onclick = () => {
      if (opt === answer) {
        generateQuestion();
      } else {
        alert("Jawaban salah! Coba lagi.");
      }
    };
    choicesEl.appendChild(btn);
  });
}

generateQuestion();
