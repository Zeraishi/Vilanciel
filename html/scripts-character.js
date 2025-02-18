// Data for each character (you can change these details)
const characters = {
    character1: {
        name: "Hero Name",
        image: "character-placeholder1.jpg",
        description: "The Hero is the main protagonist, brave and determined to save the world from the dark forces threatening it."
    },
    character2: {
        name: "Villain Name",
        image: "character-placeholder2.jpg",
        description: "The Villain is the main antagonist, a mysterious and powerful being who seeks to destroy everything in their path."
    },
    character3: {
        name: "Sidekick Name",
        image: "character-placeholder3.jpg",
        description: "The Sidekick is the loyal companion, offering wisdom, strength, and support throughout the Hero's journey."
    },
    character4: {
        name: "Mentor Name",
        image: "character-placeholder4.jpg",
        description: "The Mentor is the wise and seasoned guide who helps the Hero discover their true potential."
    }
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
