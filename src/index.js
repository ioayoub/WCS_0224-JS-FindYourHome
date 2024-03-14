const housesToRent = [
  {
    name: "Modern flat",
    type: "Flat",
    desc: "This is the perfect house for you, come to visit it you'll love it ",
    img: "https://media.istockphoto.com/id/1384642884/photo/the-evening-sun-is-reflected-in-the-modern-glass-facade-with-balconies.webp?b=1&s=170667a&w=0&k=20&c=9cnDfc9tNIAcgvuGHZkST7CP-dFaNXutX8OpzVO1jEA=",
    available: true,
  },
  {
    name: "Beautiful design house",
    type: "House",
    desc: "This is the perfect house for you, come to visit it you'll love it ",
    img: "https://images.adsttc.com/media/images/5de3/1ca6/3312/fda8/2a00/00b3/newsletter/001.jpg?1575165037",
    available: false,
  },
  {
    name: "Beautiful House",
    type: "House",
    img: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg",
    desc: "This is the perfect house for you, come to visit it you'll love it ",
    available: false,
  },
  {
    name: "Wonderful house with Garden",
    type: "House",
    desc: "This is the perfect house for you, come to visit it you'll love it ",
    img: "https://images.unsplash.com/photo-1585773690161-7b1cd0accfcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    available: true,
  },
  {
    name: "My super Flat ",
    type: "Flat",
    desc: "This is the perfect flat for you, come to visit it you'll love it ",
    img: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_487/at%2Fhouse%20tours%2F2021-04%2FErin%20K%2FKERR-130-CLARKSON-2R-01-020577-EDIT-WEB",
    available: true,
  },
];

function createCard(houses) {
  // This function should create a card item
  document.querySelector(".cards").innerHTML = "";

  houses.forEach((house) => {
    const cards = document.querySelector(".cards");

    const card = document.createElement("div");
    card.classList.add("card");

    cards.appendChild(card);

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");

    card.appendChild(cardHeader);

    const cardHeaderImage = document.createElement("div");
    cardHeaderImage.classList.add("card-img");
    cardHeaderImage.style.backgroundImage = `url(${house.img})`;

    cardHeader.appendChild(cardHeaderImage);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    card.appendChild(cardBody);

    const cardBodyTitle = document.createElement("h2");
    cardBodyTitle.classList.add("card-title");
    cardBodyTitle.textContent = house.name;

    cardBody.appendChild(cardBodyTitle);

    const cardBodyDescription = document.createElement("p");
    cardBodyDescription.classList.add("card-description");
    cardBodyDescription.textContent = house.desc;

    cardBody.appendChild(cardBodyDescription);

    const cardBodyButton = document.createElement("button");
    cardBodyButton.classList.add("card-button");
    cardBodyButton.textContent = "I want it!";

    cardBody.appendChild(cardBodyButton);
  });
}

createCard(housesToRent);

// Filtres

function updateCards() {
  let filteredHouses = housesToRent;

  if (searchInput.value != "") {
    filteredHouses = filteredHouses.filter((h) =>
      h.name.toLowerCase().includes(searchInput.value.trim().toLowerCase())
    );
  }
  if (availableCheckbox.checked) {
    filteredHouses = filteredHouses.filter((h) => h.available);
  }

  if (selectFilter.value !== "All") {
    filteredHouses = filteredHouses.filter(
      (h) => h.type === selectFilter.value
    );
  }

  createCard(filteredHouses);
}

const searchInput = document.querySelector(".search-input");
searchInput.addEventListener("input", updateCards);
const availableCheckbox = document.querySelector(".available-checkbox");

availableCheckbox.addEventListener("change", updateCards);

const selectFilter = document.querySelector(".select");
selectFilter.addEventListener("change", updateCards);
