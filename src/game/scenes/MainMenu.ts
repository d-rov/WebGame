import { Scene, GameObjects } from "phaser";

export class MainMenu extends Scene {
  background: GameObjects.Image;
  logo: GameObjects.Image;
  title: GameObjects.Text;
  playButton: GameObjects.Text;
  testButton: GameObjects.Text;

  constructor() {
    super("MainMenu");
  }

  create() {
    this.background = this.add.image(512, 384, "background");

    this.logo = this.add.image(512, 150, "logo");

    this.title = this.add
      .text(512, 250, "Main Menu", {
        fontFamily: "Arial Black",
        fontSize: 38,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 8,
        align: "center",
      })
      .setOrigin(0.5);

    this.playButton = this.add
      .text(512, 350, "Play", {
        fontFamily: "Arial Black",
        fontSize: 44,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 8,
        align: "center",
      })
      .setOrigin(0.5);

    this.testButton = this.add
      .text(512, 450, "Battle Test", {
        fontFamily: "Arial Black",
        fontSize: 44,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 8,
        align: "center",
      })
      .setOrigin(0.5);

    const testButton = this.testButton.setInteractive(
      new Phaser.Geom.Rectangle(0, 0, 275, 40),
      Phaser.Geom.Rectangle.Contains
    );

    testButton.on("pointerover", () => {
      testButton.setTint(0x7878ff);
    });

    testButton.on("pointerout", () => {
      testButton.clearTint();
    });

    testButton.on("pointerdown", () => {
      this.scene.start("BattleTest");
    });
  }
}
