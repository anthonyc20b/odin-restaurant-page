const displayContainer = document.getElementById("content");

function createWelcome() {
    const welcomeContainer = document.createElement("div");
    welcomeContainer.id = "welcome-header";
    welcomeContainer.classList.add("menu-card")
    displayContainer.appendChild(welcomeContainer);

    const welcomeText = document.createElement("h1");
    welcomeText.textContent = "Welcome to the Outer Rim Cantina!";
    welcomeContainer.appendChild(welcomeText);
};

function createDescription(){
    const descriptionContainer = document.createElement("div");
    descriptionContainer.id = "description";
    descriptionContainer.classList.add("menu-card")
    displayContainer.appendChild(descriptionContainer);

    const descriptionText = document.createElement("p");
    descriptionText.textContent = "Serving classics from the outer rim since 30 BBY! Your droids are welcome here!";
    descriptionContainer.appendChild(descriptionText);
};

function createTestimonial(){
    const testimonialContainer = document.createElement("div");
    testimonialContainer.id = "testimonial";
    testimonialContainer.classList.add("menu-card")
    displayContainer.appendChild(testimonialContainer);

    const testimonialText = document.createElement("p");
    testimonialText.textContent = `"Look, I've eaten mystery meat from one side of the galaxy to the other, and most of it isn't fit
    to feed a starved Wookie. But The Outer Rim Cantina? Now this is a joint worth shedding your cargo at the first sight of an imperial
    starship for. Atmosphere's sharp too, plenty of dark booths, fast exits, and ugly Rodians. Five stars. Just don't ask to see my credentials."
    - Han Solo, Captain of the Millennium Falcon`;
    testimonialContainer.appendChild(testimonialText);
};

function createHours(){
    const hoursContainer = document.createElement("div");
    hoursContainer.id = "hours-container";
    hoursContainer.classList.add("menu-card")
    displayContainer.appendChild(hoursContainer);

    const hoursHeadText = document.createElement("h3");
    hoursHeadText.textContent = "Hours";
    hoursContainer.appendChild(hoursHeadText);

    const hoursData = [
        { day: "First Rotation", hours: "1600 - 2200hrs (4:00pm - 10:00pm)" },
        { day: "Second Rotation", hours: "1600 - 2200hrs (4:00pm - 10:00pm)"},
        { day: "Twin Suns Rising", hours: "1600 - 2300hrs (4:00pm - 11:00pm)"},
        { day: "Corellian Prime", hours: "1500 - 0100hrs (3:00pm - 1:00am)"},
        { day: "Outer Rim Orbit", hours: "1200 - 0100hrs (12:00pm - 1:00am)"},
        { day: "Twin Suns Down", hours: "DOCKING BAY CLOSED"}
    ];

    for (let i = 0; i < hoursData.length; i++){
        const eachDay = document.createElement("p");
        eachDay.classList.add("hours-schedule");
        eachDay.textContent = `${hoursData[i].day}: ${hoursData[i].hours}`;
        hoursContainer.appendChild(eachDay);
    };
};

function createHomePage() {
    createWelcome();
    createDescription();
    createTestimonial();
    createHours();
};

export {createHomePage};