// Data for each character (you can change these details)
const characters = {
    character1: {
        name: "Kelus",
        image: "/images/caelus.png",
        description: "The kelulus."
    },
    character2: {
        name: "merch",
        image: "/images/march.png",
        description: "The merch."
    },
    character3: {
        name: "dong",
        image: "/images/dong.png",
        description: "The Dong."
    },
    character4: {
        name: "herthus",
        image: "/images/herth-unhd.png",
        description: "I can't take it anymore. I'm sick of Herta. I try to play JY. My Herta deals more damage. I try to play Acheron. My Herta deals more damage. I try to play Feixiao. My Herta deals more damage. I want to play Argenti. His best team has Herta. I want to play smol Herta, Serval. They both want Herta. She grabs me by the throat. I do SU for her. I cook for her. I give her Eternal Calculus. She isn't satisfied. I pull An Instant Before A Gaze. "I don't need this much crit" She tells me. "Give me more DMG." She grabs Lingsha and forces her to throw herself off the enemies. "You just need to funnel me more. I can deal more damage with my BiS." I can't pull for her BiS, I don't have enough jades. She grabs my credit card. It declines. "Guess this is the end." She grabs her keyblade. She says "Endless riddles, nothing but a void." There is no hint of sadness in her eyes. Nothing but pure fiction damage. What a cruel world."
    }
};

// Function to open the character info modal with smooth transition
function openCharacterInfo(characterId) {
    const character = characters[characterId];
    document.getElementById("characterName").innerText = character.name;
    document.getElementById("characterImage").src = character.image;
    document.getElementById("characterDescription").innerText = character.description;

    // Make modal visible with smooth transition
    const modal = document.getElementById("characterInfoModal");
    modal.style.display = "block";
    setTimeout(() => {
        modal.style.opacity = "1";
        modal.style.transform = "scale(1)";
    }, 10); // Small delay for transition to start
}

// Function to close the modal with smooth transition
function closeCharacterInfo() {
    const modal = document.getElementById("characterInfoModal");
    modal.style.opacity = "0";
    modal.style.transform = "scale(0.8)";

    // Wait for transition to finish, then hide the modal
    setTimeout(() => {
        modal.style.display = "none";
    }, 300); // Match the duration of the transition
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById("characterInfoModal")) {
        closeCharacterInfo();
    }
};
