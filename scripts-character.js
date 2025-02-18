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
    const modal = document.getElementById("characterInfoModal");
    const nameElement = document.getElementById("characterName");
    const imageElement = document.getElementById("characterImage");
    const descriptionElement = document.getElementById("characterDescription");

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


    // Character Data
    const characters = {
        "character1": { name: "Kelus", image: "/images/caelus.png", description: "A brave adventurer." },
        "character2": { name: "Merch", image: "/images/march.png", description: "A cheerful warrior." },
        "character3": { name: "Dong", image: "/images/danheng.png", description: "A mysterious wanderer." },
        "character4": { name: "Herthus", image: "/images/herth-unhd.png", description: "A divine being." }
    };

    // Update Modal Content
    if (characters[characterId]) {
        nameElement.textContent = characters[characterId].name;
        imageElement.src = characters[characterId].image;
        descriptionElement.textContent = characters[characterId].description;
    }

    // Show Modal
    modal.style.display = "block";
    modal.style.opacity = "0";
    modal.style.transition = "opacity 0.5s ease-in-out";
    setTimeout(() => { modal.style.opacity = "1"; }, 10);
}

function closeCharacterInfo() {
    const modal = document.getElementById("characterInfoModal");
    modal.style.opacity = "0";
    setTimeout(() => { modal.style.display = "none"; }, 500);
}

// Close modal when clicking outside
window.addEventListener("click", function(event) {
    const modal = document.getElementById("characterInfoModal");
    if (event.target === modal) {
        closeCharacterInfo();
    }
});
