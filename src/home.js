const displayContainer = document.getElementById("content");

function createWelcome() {
    const welcomeContainer = document.createElement("div");
    welcomeContainer.id = "welcome-header";
    displayContainer.appendChild(welcomeContainer);

    const welcomeText = document.createElement("h1");
    welcomeText.textContent = "Welcome to the Outer Rim Cantina!";
    welcomeContainer.appendChild(welcomeText);
};

function createDescription(){
    const descriptionContainer = document.createElement("div");
    descriptionContainer.id = "description";
    displayContainer.appendChild(descriptionContainer);

    const descriptionText = document.createElement("p");
    descriptionText.textContent = "Serving classics from the outer rim since 30 BBY! Your droids are welcome here!";
    descriptionContainer.appendChild(descriptionText);
}

function createHomePage() {
    createWelcome();
    createDescription();
}

export {createHomePage};