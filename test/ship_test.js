const expect = require("chai").expect;

// new suite
describe("checkForShip", () => {
  const checkForShip = require("../game_logic/ship_methods").checkForShip;
  //   spec
  it("should correcly report no ship at a given players coordinate", () => {
    let player = {
      ships: [
        {
          locations: [[0, 0]],
        },
      ],
    };
    expect(checkForShip(player, [9, 9])).to.be.false;
    expect(checkForShip(player, [0, 0])).to.be.ok;
  });
  it("should correctly report a ship located at the given coordinates", () => {
    let player = {
      ships: [
        {
          locations: [[0, 0]],
        },
      ],
    };
    expect(checkForShip(player, [9, 9])).to.be.false;
    expect(checkForShip(player, [0, 0])).to.be.ok;
  });
});
