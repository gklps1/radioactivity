// Perguntas do quiz
const questions = [
    { question: "O que é radioatividade?", options: ["Desintegração de átomos", "Aquecimento global", "Fusão nuclear", "Eletrólise"], answer: 0 },
    { question: "Qual elemento é conhecido por sua radioatividade natural?", options: ["Urânio", "Hélio", "Carbono", "Oxigênio"], answer: 0 },
    { question: "Onde a radioatividade é usada?", options: ["Medicina", "Indústria", "Agricultura", "Todas as anteriores"], answer: 3 },
    { question: "O que é meia-vida?", options: ["Tempo para metade do material decair", "Tempo de fusão nuclear", "Tempo de formação de átomos", "Nenhuma das anteriores"], answer: 0 },
    { question: "Qual desastre radioativo ocorreu em 1986?", options: ["Fukushima", "Chernobyl", "Three Mile Island", "Hiroshima"], answer: 1 },
    { question: "O que causa a radiação?", options: ["Projeção de elétrons", "Desintegração de átomos", "Reação química", "Eletrização de átomos"], answer: 1 },
    { question: "Qual é a principal fonte de radiação na Terra?", options: ["Césio-137", "Radônio", "Carbono-14", "Plutônio"], answer: 1 }
];

// Exibir o quiz
function displayQuiz() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = "";

    questions.forEach((q, index) => {
        const questionBlock = document.createElement("div");
        questionBlock.classList.add("question");

        const questionTitle = document.createElement("h3");
        questionTitle.innerText = `${index + 1}. ${q.question}`;
        questionBlock.appendChild(questionTitle);

        q.options.forEach((option, i) => {
            const label = document.createElement("label");
            label.innerHTML = `
                <input type="radio" name="question${index}" value="${i}">
                ${option}
            `;
            questionBlock.appendChild(label);
        });

        quizContainer.appendChild(questionBlock);
    });
}

// Enviar respostas e mostrar resultado
function submitQuiz() {
    let score = 0;
    let feedback = "";
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === q.answer) {
            score++;
        } else {
            feedback += `<p>Questão ${index + 1}: Resposta errada</p>`;
        }
    });

    document.getElementById("result").innerText = `Você acertou ${score} de ${questions.length} perguntas!`;
    document.getElementById("feedback").innerHTML = feedback;
}

// Chamar a função de exibição do quiz
displayQuiz();
