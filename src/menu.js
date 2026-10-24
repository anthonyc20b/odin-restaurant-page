const displayContainer = document.getElementById("content");

function createMain(){
    const mainMenuHeader = document.createElement("div");
    mainMenuHeader.classList.add("menu-header");
    displayContainer.appendChild(mainMenuHeader);

    const mainHeaderText = document.createElement("h2");
    mainHeaderText.textContent = "Main Dishes";
    mainMenuHeader.appendChild(mainHeaderText);

    const mainMenuContent = document.createElement("div");
    mainMenuContent.classList.add("menu-content")
    displayContainer.appendChild(mainMenuContent);

    const mainItems = [
        {name: "Nerf Steak Prime Cut", description: "Thick-cut, grass-fed Alderaanian Nerf loin charbroiled to order over a Kyber-heated grill. Topped with wild mushrooms from Kashyyyk and served with roasted garlic root mash.", price: "28 credits"},
        {name: "Kessel Run Ribs", description: "A full rack of slow-smoked, fall-off-the-bone Dewback ribs slathered in a rich, tangy spice-line BBQ glaze. Served fast enough to beat twelve parsecs.", price: "24 credits"},
        {name: "Mos Eisley Bantha Burger", description: "A half-credit pound of seasoned ground Bantha chuck topped with thick-cut smoked bacon, sharp cheddar, pickled jalapeños, and secret smuggler’s sauce on a brioche bun.", price: "18 credits"},
        {name: "Sarlacc Pit Noodle Bowl", description: "Squid-ink rice noodles submersed in a spicy, slow-simmered broth of braised pork belly, soft-boiled eggs, scallions, and bean sprouts arranged like tentacles.", price: "22 credits"},
        {name: "Tip-Yat Fried Chicken & Waffles", description: "Golden, crispy Endor avian breast served over a toasted blue-corn grid-waffle, drizzled with sweet amber-sap syrup from the Great Trees.", price: "19 credits"}
    ]

    for (let i = 0; i < mainItems.length; i++){
        const itemName = document.createElement("h3");
        itemName.classList.add("menu-item-name");
        itemName.textContent = mainItems[i].name;
        mainMenuContent.appendChild(itemName);

        const itemDescription = document.createElement("p");
        itemDescription.classList.add("menu-item-description");
        itemDescription.textContent = mainItems[i].description;
        mainMenuContent.appendChild(itemDescription);

        const itemPrice = document.createElement("p");
        itemPrice.classList.add("menu-item-price");
        itemPrice.textContent = mainItems[i].price;
        mainMenuContent.appendChild(itemPrice);

    }
};

function createMenu(){
    createMain();
};

export {createMenu};