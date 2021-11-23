const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 6;

playerLivesCount.textContent = playerLives;

//Generate the data

const getData = () => [
  { imgSrc: "./images/Metallica.jpeg", name: "Metallica" },
  { imgSrc: "./images/IronMaiden.jpeg", name: "Iron Maiden" },
  { imgSrc: "./images/Motörhead.jpeg", name: "Motörhead" },
  { imgSrc: "./images/ZZTop.jpeg", name: "ZZTop" },
  { imgSrc: "./images/ACDC.jpeg", name: "AC/DC" },
  { imgSrc: "./images/BlackSabbath.jpeg", name: "Black Sabbath" },
  { imgSrc: "./images/GunsNRoses.jpeg", name: "Guns N’ Roses" },
  { imgSrc: "./images/DeepPurple.jpeg", name: "Deep Purple" },
  { imgSrc: "./images/Metallica.jpeg", name: "Metallica" },
  { imgSrc: "./images/IronMaiden.jpeg", name: "Iron Maiden" },
  { imgSrc: "./images/Motörhead.jpeg", name: "Motörhead" },
  { imgSrc: "./images/ZZTop.jpeg", name: "ZZTop" },
  { imgSrc: "./images/ACDC.jpeg", name: "AC/DC" },
  { imgSrc: "./images/BlackSabbath.jpeg", name: "Black Sabbath" },
  { imgSrc: "./images/GunsNRoses.jpeg", name: "Guns N’ Roses" },
  { imgSrc: "./images/DeepPurple.jpeg", name: "Deep Purple" },
];

const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
  // console.log(cardData);
};

const cardGenerator = () => {
  const cardData = randomize();

  cardData.forEach((item) => {
    console.log(item);
  });

  console.log(cardData);
  const card = document.createElement("div");
  const face = document.createElement("img");
  const back = document.createElement("div");

  card.classList = "card";
  face.classList = "face";
  back.classList = "back";
};

cardGenerator();
