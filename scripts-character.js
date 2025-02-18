// Data for each character (you can change these details)
const characters = {
    character1: {
        name: "Kelus",
        image: "/images/caelus.png",
        description: "The kelulus."
    },
    character2: {
        name: "Merch",
        image: "/images/march.png",
        description: "The merch."
    },
    character3: {
        name: "Dong",
        image: "/images/danheng.png",
        description: "The dong."
    },
    character4: {
        name: "Herthus",
        image: "/images/herth.png",
        description: "The kurukuru."
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
