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

function createTestimonial(){
    const testimonialContainer = document.createElement("div");
    testimonialContainer.id = "testimonial";
    displayContainer.appendChild(testimonialContainer);

    const testimonialText = document.createElement("p");
    testimonialText.textContent = `"Look, I've eaten mystery meat from one side of the galaxy to the other, and most of it isn't fit
    to feed a starved Wookie. But The Outer Rim Cantina? Now this is a joint worth shedding your cargo at the first sight of an imperial
    starship for. Atmosphere's sharp too, plenty of dark booths, fast exits, and ugly Rodians. Five stars. Just don't ask to see my credentials.
    - Han Solo, Captain of the Millennium Falcon"`;
    testimonialContainer.appendChild(testimonialText);
}

function createHomePage() {
    createWelcome();
    createDescription();
    createTestimonial();
}

export {createHomePage};