/**
 * @jest-environment jsdom
 */

const { game, newGame, showScore } = require("../game"); //Every new function needs adding to the import const.

beforeAll(() => {  //This boilerplate is the start of each test script.
  let fs = require("fs");
  let fileContents = fs.readFileSync("index.html", "utf-8"); //Change the html file to suit the html file the test is checking scripts on.
  document.open();
  document.write(fileContents);
  document.close();
});

describe("game object contains correct keys", () => { //Describes what you want the function to do.
  test("score key exists", () => {  //Tests and expectations of function.
    expect("score" in game).toBe(true);
  });
  test("currentGame key exists", () => {
    expect("currentGame" in game).toBe(true);
  });
  test("playerMoves key exists", () => {
    expect("playerMoves" in game).toBe(true);
  });
  test("choices key exists", () => {
    expect("choices" in game).toBe(true);
  });
  test("choices contain correct ids", () => {
    expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
  });
});

describe("newGame works correctly", () => { //New describe for each function.
  beforeAll(() => { //False information to check the functions are working.
    game.score = 42;
    game.playerMoves = ["button1", "button2"];
    game.currentGame = ["button1", "button2"];
    document.getElementById("score").innerText = "42"; //Sets a score to check that newGame function resets score.
    newGame();
  });
  test("should set game score to zero", () => { //Tests and expectations of function.
    expect(game.score).toEqual(0);
  });
  test("should clear the playerMoves count", () => {
    expect(game.playerMoves.length).toBe(0);
  });
  test("should clear the currentGame", () => {
    expect(game.currentGame.length).toBe(0);
  });
  test("should display 0 for the element with the id of score", () => {
    expect(document.getElementById("score").innerText).toEqual(0);
  });
});