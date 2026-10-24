const displayContainer = document.getElementById("content");

const mainItems = [
        {name: "Nerf Steak Prime Cut", description: "Thick-cut, grass-fed Alderaanian Nerf loin charbroiled to order over a Kyber-heated grill. Topped with wild mushrooms from Kashyyyk and served with roasted garlic root mash.", price: "28 credits"},
        {name: "Kessel Run Ribs", description: "A full rack of slow-smoked, fall-off-the-bone Dewback ribs slathered in a rich, tangy spice-line BBQ glaze. Served fast enough to beat twelve parsecs.", price: "24 credits"},
        {name: "Mos Eisley Bantha Burger", description: "A half-credit pound of seasoned ground Bantha chuck topped with thick-cut smoked bacon, sharp cheddar, pickled jalapeños, and secret smuggler’s sauce on a brioche bun.", price: "18 credits"},
        {name: "Sarlacc Pit Noodle Bowl", description: "Squid-ink rice noodles submersed in a spicy, slow-simmered broth of braised pork belly, soft-boiled eggs, scallions, and bean sprouts arranged like tentacles.", price: "22 credits"},
        {name: "Tip-Yat Fried Chicken & Waffles", description: "Golden, crispy Endor avian breast served over a toasted blue-corn grid-waffle, drizzled with sweet amber-sap syrup from the Great Trees.", price: "19 credits"}
    ]

const sideItems = [
    {name: "Rancor Tooth Garlic Bread", description: "Thick wedges of baked artisan loaf slathered in roasted garlic butter, melted blue-milk cheese, and toasted brown under a heat emitter.", price: "8 credits"},
    {name: "Crispy Tauntaun Riblets", description: "Glaciated Hoth ice-ribs slow-roasted over open coals and tossed in a sweet-and-spicy Corellian mustard glaze. Keeps you warm even inside a snowspeeder.", price: "12 credits"},
    {name: "Gundark Ear Strips", description: "Strips of tender, peppered pork loin flash-fried in a jagged batter and served with a side of creamy Naboo garlic aioli. (They say if you pull one, it pulls back).", price: "10 credits"},
    {name: "Kessel Spice Mud-Horn Wings", description: "Jumbo avian wings tossed in an authentic Mud-Horn egg-yolk butter sauce and dusted with contraband spice from the spice mines.", price: "13 credits"}
]

function createMenuSection(title, items){
    const menuHeader = document.createElement("div");
    menuHeader.classList.add("menu-header");
    displayContainer.appendChild(menuHeader);

    const headerText = document.createElement("h2");
    headerText.textContent = title;
    menuHeader.appendChild(headerText);

    const menuSectionContent = document.createElement("div");
    menuSectionContent.classList.add("menu-content")
    displayContainer.appendChild(menuSectionContent);

    for (let i = 0; i < items.length; i++){
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("menu-item")
        menuSectionContent.appendChild(itemContainer);

        const itemName = document.createElement("h3");
        itemName.classList.add("menu-item-name");
        itemName.textContent = items[i].name;
        itemContainer.appendChild(itemName);

        const itemDescription = document.createElement("p");
        itemDescription.classList.add("menu-item-description");
        itemDescription.textContent = items[i].description;
        itemContainer.appendChild(itemDescription);

        const itemPrice = document.createElement("p");
        itemPrice.classList.add("menu-item-price");
        itemPrice.textContent = items[i].price;
        itemContainer.appendChild(itemPrice);
    };
};

function createMenu(){
    createMenuSection("Main Dishes", mainItems);
    createMenuSection("Side Dishes and Starters", sideItems);
};

export {createMenu};

// function createMain(){
//     const mainMenuHeader = document.createElement("div");
//     mainMenuHeader.classList.add("main-menu-header");
//     displayContainer.appendChild(mainMenuHeader);

//     const mainHeaderText = document.createElement("h2");
//     mainHeaderText.textContent = "Main Dishes";
//     mainMenuHeader.appendChild(mainHeaderText);

//     const mainMenuContent = document.createElement("div");
//     mainMenuContent.classList.add("main-menu-content")
//     displayContainer.appendChild(mainMenuContent);

//     const mainItems = [
//         {name: "Nerf Steak Prime Cut", description: "Thick-cut, grass-fed Alderaanian Nerf loin charbroiled to order over a Kyber-heated grill. Topped with wild mushrooms from Kashyyyk and served with roasted garlic root mash.", price: "28 credits"},
//         {name: "Kessel Run Ribs", description: "A full rack of slow-smoked, fall-off-the-bone Dewback ribs slathered in a rich, tangy spice-line BBQ glaze. Served fast enough to beat twelve parsecs.", price: "24 credits"},
//         {name: "Mos Eisley Bantha Burger", description: "A half-credit pound of seasoned ground Bantha chuck topped with thick-cut smoked bacon, sharp cheddar, pickled jalapeños, and secret smuggler’s sauce on a brioche bun.", price: "18 credits"},
//         {name: "Sarlacc Pit Noodle Bowl", description: "Squid-ink rice noodles submersed in a spicy, slow-simmered broth of braised pork belly, soft-boiled eggs, scallions, and bean sprouts arranged like tentacles.", price: "22 credits"},
//         {name: "Tip-Yat Fried Chicken & Waffles", description: "Golden, crispy Endor avian breast served over a toasted blue-corn grid-waffle, drizzled with sweet amber-sap syrup from the Great Trees.", price: "19 credits"}
//     ]

//     // Iterates over the mainItems array to create a container, add a header, and add the description and price for each item. Cleaner than hand written
//     for (let i = 0; i < mainItems.length; i++){
//         const itemContainer = document.createElement("div");
//         itemContainer.classList.add("menu-item")
//         mainMenuContent.appendChild(itemContainer);

//         const itemName = document.createElement("h3");
//         itemName.classList.add("menu-item-name");
//         itemName.textContent = mainItems[i].name;
//         itemContainer.appendChild(itemName);

//         const itemDescription = document.createElement("p");
//         itemDescription.classList.add("menu-item-description");
//         itemDescription.textContent = mainItems[i].description;
//         itemContainer.appendChild(itemDescription);

//         const itemPrice = document.createElement("p");
//         itemPrice.classList.add("menu-item-price");
//         itemPrice.textContent = mainItems[i].price;
//         itemContainer.appendChild(itemPrice);
//     }
// };

// function createSides(){
//     const sidesHeader = document.createElement("div");
//     sidesHeader.classList.add("sides-menu-header");
//     displayContainer.appendChild(sidesHeader);

//     const sidesHeaderText = document.createElement("h2");
//     sidesHeaderText.textContent = "Side Dishes & Starters";
//     sidesHeader.appendChild(sidesHeaderText);

//     const sidesContent = document.createElement("div");
//     sidesContent.classList.add("sides-content")
//     displayContainer.appendChild(sidesContent);

//     const sideItems = [
//         {name: "Rancor Tooth Garlic Bread", description: "Thick wedges of baked artisan loaf slathered in roasted garlic butter, melted blue-milk cheese, and toasted brown under a heat emitter.", price: "8 credits"},
//         {name: "Crispy Tauntaun Riblets", description: "Glaciated Hoth ice-ribs slow-roasted over open coals and tossed in a sweet-and-spicy Corellian mustard glaze. Keeps you warm even inside a snowspeeder.", price: "12 credits"},
//         {name: "Gundark Ear Strips", description: "Strips of tender, peppered pork loin flash-fried in a jagged batter and served with a side of creamy Naboo garlic aioli. (They say if you pull one, it pulls back).", price: "10 credits"},
//         {name: "Kessel Spice Mud-Horn Wings", description: "Jumbo avian wings tossed in an authentic Mud-Horn egg-yolk butter sauce and dusted with contraband spice from the spice mines.", price: "13 credits"}
//     ]
    
//     // Iterates over the sideItems array to create a container, add a header, and add the description and price for each item. Cleaner than hand written
//     for (let i = 0; i < sideItems.length; i++){
//         const itemContainer = document.createElement("div");
//         itemContainer.classList.add("menu-item")
//         sidesContent.appendChild(itemContainer);

//         const itemName = document.createElement("h3");
//         itemName.classList.add("menu-item-name");
//         itemName.textContent = sideItems[i].name;
//         itemContainer.appendChild(itemName);

//         const itemDescription = document.createElement("p");
//         itemDescription.classList.add("menu-item-description");
//         itemDescription.textContent = sideItems[i].description;
//         itemContainer.appendChild(itemDescription);

//         const itemPrice = document.createElement("p");
//         itemPrice.classList.add("menu-item-price");
//         itemPrice.textContent = sideItems[i].price;
//         itemContainer.appendChild(itemPrice);
//     }
// };