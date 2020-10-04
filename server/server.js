import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Game from "./Game.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/simulate", function (req, res) {
  const { simulations } = req.body;
  let winsIfNoSwitch = 0;
  let winsAfterSwitch = 0;
  if (!simulations) {
    return res
      .status(400)
      .send({ status: "error", message: "missing parameter simulations" });
  } else {
    for (let i = 0; i < simulations; i++) {
      const game = new Game();
      game.playerChooseDoor();
      game.hostChooseDoor();
      if (game.hasPlayerWon()) winsIfNoSwitch++;
      game.playerChooseAnotherDoor();
      if (game.hasPlayerWon()) winsAfterSwitch++;
    }

    const winPercentageWithoutSwitch = parseFloat(
      ((winsIfNoSwitch / simulations) * 100).toFixed(2)
    );
    const winPercentageAfterSwitch = parseFloat(
      ((winsAfterSwitch / simulations) * 100).toFixed(2)
    );
    return res.send({
      simulations,
      winsIfNoSwitch,
      winsAfterSwitch,
      winPercentageWithoutSwitch,
      winPercentageAfterSwitch,
    });
  }
});

const listener = app.listen(process.env.PORT || 5000, function () {
  console.log("Listening on port " + listener.address().port);
});
