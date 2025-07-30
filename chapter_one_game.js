function mergeGameState(state) {
    const narrative = document.getElementById("narrative");
    const choices = document.getElementById("choices");

    // Set the opening narrative
    narrative.textContent = "📍 Brooklyn, NY — You are a young Black boy, raised by a single NYPD officer mother, juggling her badge and four sons in a hostile world.";

    // Clear previous choices
    choices.innerHTML = "";

    // Define possible decisions
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

    // Helper to create a choice button
    function createChoiceButton(decision) {
        const btn = document.createElement("button");
        btn.textContent = decision.text;
        btn.onclick = () => {
            // Disable all buttons to prevent multiple selections
            Array.from(choices.children).forEach(child => child.disabled = true);
            updateGameState(decision.impact);
            showChapterOneConclusion();
        };
        return btn;
    }

    // Render all decision buttons
    decisions.forEach(decision => {
        choices.appendChild(createChoiceButton(decision));
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
