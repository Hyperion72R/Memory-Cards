const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 6;

playerLivesCount.textContent = playerLives;

//Generate the data

const getData = [
  { imgSrc: "./images/Metallica.jpg", name: "Metallica" },
  { imgSrc: "./images/IronMaiden.jpg", name: "Iron Maiden" },
  { imgSrc: "./images/Motörhead.jpg", name: "Motörhead" },
  { imgSrc: "./images/ZZTop.jpg", name: "ZZTop" },
  { imgSrc: "./images/ACDC.jpg", name: "AC/DC" },
  { imgSrc: "./images/BlackSabbath.jpg", name: "Black Sabbath" },
  { imgSrc: "./images/GunsNRoses.jpg", name: "Guns N’ Roses" },
  { imgSrc: "./images/DeepPurple.jpg", name: "Deep Purple" },
  { imgSrc: "./images/Metallica.jpg", name: "Metallica" },
  { imgSrc: "./images/IronMaiden.jpg", name: "Iron Maiden" },
  { imgSrc: "./images/Motörhead.jpg", name: "Motörhead" },
  { imgSrc: "./images/ZZTop.jpg", name: "ZZTop" },
  { imgSrc: "./images/ACDC.jpg", name: "AC/DC" },
  { imgSrc: "./images/BlackSabbath.jpg", name: "Black Sabbath" },
  { imgSrc: "./images/GunsNRoses.jpg", name: "Guns N’ Roses" },
  { imgSrc: "./images/DeepPurple.jpg", name: "Deep Purple" },
];
const randomize = () => {
  const cardData = getData;

  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

const cardGenerator = () => {
  const cardData = randomize();

  // const cards = document.querySelectorAll(".card");

  cardData.forEach((item) => {
    console.log(item);
    const card = document.createElement("div");
    const photo = document.createElement("img");
    const interior = document.createElement("div");

    card.classList = "card";
    photo.classList = "photo";
    interior.classList = "interior";

    //Attach the info to the cards
    photo.src = item.imgSrc;
    photo.alt = item.name;
    card.setAttribute("name", item.name);

    //Attach the cards to the section
    section.appendChild(card);
    card.appendChild(photo);
    card.appendChild(interior);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      checkCards(e);
    });
  });
};
// Check cards
const checkCards = (e) => {
  const clickedCard = e.target;
  console.log(clickedCard);
  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  console.log(flippedCards);
  //Logic

  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      console.log("match");
    } else {
      console.log("wrong");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(card.classList.remove("toggleCard"), 1000);
      });
    }
  }
};
cardGenerator();
