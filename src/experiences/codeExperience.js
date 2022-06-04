import Experience from "./experience";

const codeExperiences = [

  new Experience(
    "WHOOP Co-op",
    new Date(2021, 6),
    new Date(2021, 11),
    "Web/UX Development at a fast-paced fitness wearable startup. Collaborated with designers and developed an enterprise management dashboard in React.",
    "experiences/whoop.gif",
    "/code/whoop"
  ),

  new Experience(
    "Portfolio",
    new Date(2022, 1),
    new Date(2022, 6),
    "Designed and prototyped in Figma, then developed in React using Google's Materialize CSS.",
    "experiences/portfolio.gif",
    "/code/portfolio"
  ),
  new Experience(
    "Tetris",
    new Date(2020, 2),
    new Date(2020, 4),
    "A fully featured game of tetris using python and the pygame library.",
    "experiences/tetris.gif",
    "/code/tetris"
  ),
  new Experience(
    "ASICS Digital Co-op",
    new Date(2020, 0),
    new Date(2020, 11),
    "Software engineering at ASICS Digital. Implemented new features for e-commerce store in a salesforce integrated codebase.",
    "experiences/asics.gif",
    "/code/asics"
  ),
  new Experience(
    "Beyond the curve",
    new Date(2020, 7),
    new Date(2020, 8),
    "Informational website for a tutoring company based in LA. Built using React and Bootstrap.",
    "experiences/btc.gif",
    "/code/beyond-the-curve"
  ),
  new Experience(
    "Prepper",
    new Date(2019, 7),
    new Date(2019, 7),
    "Designed and developed full-stack SPA for meal prepping. Implemented using React, Bootstrap, and an Express/MongoDB API hosted on heroku.",
    "experiences/prepper.gif",
    "/code/prepper"
  ),
  new Experience(
    "Tic Tac Toe",
    new Date(2019, 5),
    new Date(2019, 5),
    "An interactive Tic Tac Toe web application complete with single player AI and multiplayer features.",
    "experiences/ttt.gif",
    "/code/tic-tac-toe"
  ),
];

export default codeExperiences;
