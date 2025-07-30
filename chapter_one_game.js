function mergeGameState(state) {
    const narrative = document.getElementById("narrative");
    const choices = document.getElementById("choices");

    narrative.textContent = "📍 Brooklyn, NY — You are a young Black boy, raised by a single NYPD officer mother, juggling her badge and four sons in a hostile world.";

    choices.innerHTML = "";

    const decisions = [
        {
            text: "Take responsibility for younger siblings",
            impact: { resilience: 2, purpose: 1 }
        },
        {
            text: "Act out to gain attention",
            impact: { trauma: 2, rage: 1 }
        },
        {
            text: "Withdraw into imagination",
            impact: { dissociation: 2, authenticity: 1 }
        },
        {
            text: "Confront mother about absent father",
            impact: { authenticity: 2, trauma: 1 }
        },
        {
            text: "Join a local gang for protection",
            impact: { rage: 2, trauma: 2 }
        }
    ];

    decisions.forEach(decision => {
        const btn = document.createElement("button");
        btn.textContent = decision.text;
        btn.onclick = () => {
            updateGameState(decision.impact);
            showChapterOneConclusion();
        };
        choices.appendChild(btn);
    });
}

function showChapterOneConclusion() {
    const narrative = document.getElementById("narrative");
    const choices = document.getElementById("choices");

    narrative.textContent = "Brooklyn hardened you. You learned how to protect, survive, and lead—sometimes at a high cost.";

    choices.innerHTML = "";

    const menuBtn = document.createElement("button");
    menuBtn.textContent = "🏠 Return to Menu";
    menuBtn.onclick = () => window.location.reload();
    choices.appendChild(menuBtn);

    const nextBtn = document.createElement("button");
    nextBtn.textContent = "➡️ Proceed to Chapter Two";
    nextBtn.onclick = () => {
        const script = document.createElement("script");
        script.src = "chapter_two_game.js";
        document.body.appendChild(script);
    };
    choices.appendChild(nextBtn);
}
