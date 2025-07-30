function mergeGameState(state) {
    const narrative = document.getElementById("narrative");
    const choices = document.getElementById("choices");

    // Set the chapter narrative
    narrative.textContent = "📍 Georgia — Your mom transfers to Alpharetta PD, becomes the first Black female sergeant. But no one cares. You're raising yourself now.";

    // Clear previous choices
    choices.innerHTML = "";

    // Define possible decisions
    const decisions = [
        {
            text: "Cook, clean, become the rock",
            impact: { resilience: 2, purpose: 2 }
        },
        {
            text: "Sneak out, rebel against rules",
            impact: { rage: 2, trauma: 1 }
        },
        {
            text: "Start working a part-time job",
            impact: { resilience: 1, authenticity: 1 }
        },
        {
            text: "Move in with dad at 17",
            impact: { trauma: 2, dissociation: 1 }
        },
        {
            text: "Skip prom to work a double shift",
            impact: { resilience: 1, trauma: 1 }
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
            showChapterTwoConclusion();
        };
        return btn;
    }

    // Render all decision buttons
    decisions.forEach(decision => {
        choices.appendChild(createChoiceButton(decision));
    });
}

function showChapterTwoConclusion() {
    const narrative = document.getElementById("narrative");
    const choices = document.getElementById("choices");

    narrative.textContent = "You carried weight that wasn’t yours, learning survival before joy. Georgia shaped your grind and grit.";

    choices.innerHTML = "";

    const menuBtn = document.createElement("button");
    menuBtn.textContent = "🏠 Return to Menu";
    menuBtn.onclick = () => window.location.reload();
    choices.appendChild(menuBtn);

    const nextBtn = document.createElement("button");
    nextBtn.textContent = "➡️ Proceed to Chapter Three";
    nextBtn.onclick = () => {
        const script = document.createElement("script");
        script.src = "chapter_three_game.js";
        document.body.appendChild(script);
    };
    choices.appendChild(nextBtn);
}
