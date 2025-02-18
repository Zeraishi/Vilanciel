
console.log("scripts-character.js loaded successfully!");

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
        description: "I can't take it anymore. I'm sick of Herta. I try to play JY. My Herta deals more damage. I try to play Acheron. My Herta deals more damage."
    }
};


window.openCharacterInfo = function(characterId) {
    console.log("Character clicked:", characterId); // Debugging log
    const modal = document.getElementById("characterInfoModal");
    const nameElement = document.getElementById("characterName");
    const imageElement = document.getElementById("characterImage");
    const descriptionElement = document.getElementById("characterDescription");

    const characters = {
        "character1": { name: "Kelus", image: "/images/caelus.png", description: "A brave adventurer." },
        "character2": { name: "Merch", image: "/images/march.png", description: "A cheerful warrior." },
        "character3": { name: "Dong", image: "/images/danheng.png", description: "A mysterious wanderer." },
        "character4": { name: "Herthus", image: "/images/herth-unhd.png", description: "A divine being." }
    };

    if (characters[characterId]) {
        nameElement.textContent = characters[characterId].name;
        imageElement.src = characters[characterId].image;
        descriptionElement.textContent = characters[characterId].description;
    }

    modal.style.display = "block";
    modal.style.opacity = "0";
    modal.style.transition = "opacity 0.5s ease-in-out";
    setTimeout(() => { modal.style.opacity = "1"; }, 10);
};


// Function to open the character info modal
function openCharacterInfo(characterId) {
    const character = characters[characterId];
    document.getElementById("characterName").innerText = character.name;
    document.getElementById("characterImage").src = character.image;
    document.getElementById("characterDescription").innerText = character.description;
    document.getElementById("characterInfoModal").style.display = "block";
}

// Function to close the modal
function closeCharacterInfo() {
    document.getElementById("characterInfoModal").style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById("characterInfoModal")) {
        closeCharacterInfo();
    }
};

