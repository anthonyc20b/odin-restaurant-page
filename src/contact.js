const displayContainer = document.getElementById("content");

// Using just a single function here as there will only be one section on this page.
function createContact(){
    const contactHeader = document.createElement("div");
    contactHeader.classList.add("contact-header");
    displayContainer.appendChild(contactHeader);

    const headerText = document.createElement("h2");
    headerText.textContent = "Contact Us";
    contactHeader.appendChild(headerText);

    const contactContent = document.createElement("div");
    contactContent.classList.add("contact-content")
    displayContainer.appendChild(contactContent);

    const staffMembers = [
        {name: "Wuher — Head Bartender & Security Coordinator", frequency: "Channel 94-Alpha", role: 'Drink orders, keeping the peace, enforcing the "No Droids Allowed" policy.'},
        {name: "Ponda Baba & Dr. Evazan — VIP Booking & Hospitality", frequency: "Channel 12-Beta", role: "Group reservations, table upgrades, unwanted guest removal."},
        {name: "IG-88 (Unit 04) — Lost Cargo & Found Property", frequency: "Frequency: Transponder Code 000-IG", role: "Tracking down left-behind blaster holsters, dropped credit pouches, and misplaced astromech droids."}
    ]

    for (let i = 0; i < staffMembers.length; i++){
        const staffCard = document.createElement("div");
        staffCard.classList.add("staff-member-card");
        contactContent.appendChild(staffCard);

        const staffName = document.createElement("h3")
        staffName.textContent = staffMembers[i].name;
        staffCard.appendChild(staffName);

        const staffFrequency = document.createElement("p");
        staffFrequency.textContent = staffMembers[i].frequency;
        staffCard.appendChild(staffFrequency);

        const staffRole = document.createElement("p");
        staffRole.textContent = staffMembers[i].role;
        staffCard.appendChild(staffRole);
    };
};

export {createContact};