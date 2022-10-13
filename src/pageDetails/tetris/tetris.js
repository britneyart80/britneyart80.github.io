import PageDetail from "../pageDetail";
import styles from "./tetris.module.scss";

export default new PageDetail(
  "Tetris",
  new Date(2020, 2),
  new Date(2020, 4),
  "experiences/tetris.gif",
  "Python, Pygame, MVC Principles",
  (
    <div className={styles.content}>
      <h5>Overview</h5>
      <p>
        I started this project because I wanted a way to practice the MVC
        principles we were being taught in class, and I wanted to challenge
        myself to use a language I had never used before. I decided that I
        wanted to try and create my childhood favorite game, Tetris.
      </p>
      <h5>The Process</h5>
      <p>
        To start the project, I wrote down all the requirements of the
        application and mapped out what would be my models and how they would
        depend on each other. This gave me a really clear view of what functions
        I needed in each model and how the controller would interact with them.{" "}
        Building this project was my first exposure to python, as well as the
        pygame library. I read documentation and looked at samples to figure out
        how to make my game functional. This completed game comes with all basic
        features of Tetris, including saving a piece, pausing the game, and
        scoring.
      </p>
      <p>
        View the github repo to learn more about the ncode-specifics and code
        architecture of the project.
      </p>
    </div>
  ),
  "https://github.com/britneyart80/Tetris"
);
