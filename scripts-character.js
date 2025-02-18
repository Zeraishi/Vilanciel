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
