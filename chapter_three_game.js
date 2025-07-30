function mergeGameState(state) {
    const narrative = document.getElementById("narrative");
    const choices = document.getElementById("choices");

    narrative.textContent = "📍 The Navy — Alone in a crowd, you step into the spiritual fire. Far from home, far from self. Rebirth begins in isolation.";

    choices.innerHTML = "";

    const decisions = [
        {
            text: "Study and test into Air Traffic Control",
            impact: { purpose: 2, resilience: 1 }
        },
        {
            text: "Fight with supervisors over racism",
            impact: { trauma: 2, rage: 1 }
        },
        {
            text: "Start writing poetry to survive",
            impact: { authenticity: 2, dissociation: 1 }
        },
        {
            text: "Experiment with substances",
            impact: { trauma: 2, dissociation: 2 }
        },
        {
            text: "Seek God with everything you have",
            impact: { purpose: 3, authenticity: 1 }
        }
    ];

    decisions.forEach(decision => {
        const btn = document.createElement("button");
        btn.textContent = decision.text;
        btn.onclick = () => {
            updateGameState(decision.impact);
            showChapterThreeConclusion();
        };
        choices.appendChild(btn);
    });
}

function showChapterThreeConclusion() {
    const narrative = document.getElementById("narrative");
    const choices = document.getElementById("choices");

    narrative.textContent = "The Navy gave you more than a career. It stripped away illusions and rebuilt your soul from silence.";

    choices.innerHTML = "";

    const menuBtn = document.createElement("button");
    menuBtn.textContent = "🏠 Return to Menu";
    menuBtn.onclick = () => window.location.reload();
    choices.appendChild(menuBtn);

    const nextBtn = document.createElement("button");
    nextBtn.textContent = "🏁 End Journey & See Path";
    nextBtn.onclick = () => showFinalConclusion();
    choices.appendChild(nextBtn);
}
