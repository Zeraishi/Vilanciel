// Ensure the script is loaded
console.log("scripts-character.js loaded successfully!");

// Make functions globally accessible
window.openCharacterInfo = function(characterId) {
    console.log("Character clicked:", characterId); // Debugging log

    // Get modal elements
    const modal = document.getElementById("characterInfoModal");
    const nameElement = document.getElementById("characterName");
    const imageElement = document.getElementById("characterImage");
    const descriptionElement = document.getElementById("characterDescription");

    // Character data
    const characters = {
        "character1": { name: "Kelus", image: "/images/caelus.png", description: "A brave adventurer." },
        "character2": { name: "Merch", image: "/images/march.png", description: "A cheerful warrior." },
        "character3": { name: "Dong", image: "/images/danheng.png", description: "A mysterious wanderer." },
        "character4": { name: "Herthus", image: "/images/herth-unhd.png", description: "A divine being." }
    };

    // Update modal content
    if (characters[characterId]) {
        nameElement.textContent = characters[characterId].name;
        imageElement.src = characters[characterId].image;
        descriptionElement.textContent = characters[characterId].description;
    } else {
        console.warn("Character not found:", characterId);
        return; // Exit if character ID is invalid
    }

    // Show modal with fade-in effect
    modal.style.display = "block";
    modal.style.opacity = "0";
    modal.style.transition = "opacity 0.5s ease-in-out";
    setTimeout(() => { modal.style.opacity = "1"; }, 10);
};

// Close modal function
window.closeCharacterInfo = function() {
    const modal = document.getElementById("characterInfoModal");
    modal.style.opacity = "0";
    setTimeout(() => { modal.style.display = "none"; }, 500);
};

// Close modal when clicking outside
window.addEventListener("click", function(event) {
    const modal = document.getElementById("characterInfoModal");
    if (event.target === modal) {
        closeCharacterInfo();
    }
});
