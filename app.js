console.log("Hello world!")

function duel() {
    const p1Health = getAttributeValue("p1-health");
    const p1Armor = getAttributeValue("p1-armor");
    const p1DPS = getAttributeValue("p1-attack");

    const p2Health = getAttributeValue("p2-health");
    const p2Armor = getAttributeValue("p2-armor");
    const p2DPS = getAttributeValue("p2-attack");

    // Check for missing fields
    if (
        p1Health == null || p1Armor == null || p1DPS == null ||
        p2Health == null || p2Armor == null || p2DPS == null
    ) {
        alert("Please fill out all fields before continuing.");
        return;
    }

    // Calculate how long each player lasts
    const timeToKillP1 = (p1Armor * 2 + p1Health) / p2DPS;
    const timeToKillP2 = (p2Armor * 2 + p2Health) / p1DPS;

    const timeDiff = Math.abs(timeToKillP1 - timeToKillP2);

    // Determine the result
    if (timeDiff <= 0.1) {
        alert("It's a draw!");
    } else if (timeToKillP1 < timeToKillP2) {
        alert(`Player 2 will win in ${timeToKillP1.toFixed(1)} seconds!`);
    } else {
        alert(`Player 1 will win in ${timeToKillP2.toFixed(1)} seconds!`);
    }
}

