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

const drinkItems = [
    {name: "Jawa Juice", description: "Fermented skins of the native Tatooine zuchu fruit, infused with crushed ginger and pepper-spice. A stinging brew favored by sandcrawler mechanics.", price: "6 credits"},
    {name: "Tatooine Blue Milk", description: "Freshly squeezed Bantha milk from the Lars Homestead, lightly sweetened with vaporator-condensed sugar and topped with a dust of glittery spice.", price: "6 credits"},
    {name: "Bespin Sky Nectar", description: "Chilled beldon-gas fruit nectar layered over carbonated spring water, topped with a dense cloud of sweet whipped cream that hovers at the top of the chalice.", price: "8 credits"},
    {name: "Hyperspace Lane", description: "Mid Rim indigo gin mixed with reactive tonic and citrus. The drink rapidly shifts from deep blue to vibrant purple when stirred with your glass straw.", price: "13 credits"},
    {name: "Corellian Reserve Brandy", description: "Double-distilled on Han Solo’s homeworld. Smooth, oak-aged caramel finish with enough burn to jump-start a hyperdrive unit.", price: "14 credits"},
]

function createMenuSection(title, items){
    const menuHeader = document.createElement("div");
    menuHeader.classList.add("menu-header", "menu-card");
    displayContainer.appendChild(menuHeader);

    const headerText = document.createElement("h2");
    headerText.textContent = title;
    menuHeader.appendChild(headerText);

    const menuSectionContent = document.createElement("div");
    menuSectionContent.classList.add("menu-content", "menu-card")
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
    createMenuSection("Drinks", drinkItems);
};

export {createMenu};