function createHomePage() {
    const displayContainer = document.getElementById("content");
    
    const welcomeContainer = document.createElement("div");
    welcomeContainer.id = "welcome-header";
    displayContainer.appendChild(welcomeContainer);

    const welcomeText = document.createElement("h1");
    welcomeText.textContent = "Welcome to the Outer Rim Cantina!"
    welcomeContainer.appendChild(welcomeText);
}

export {createHomePage};