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
  it("should handle ships located at more than one locations", () => {
    let player = {
      ships: [
        {
          locations: [
            [0, 0],
            [0, 1],
          ],
        },
      ],
    };
    expect(checkForShip(player, [9, 9])).to.be.false;
    expect(checkForShip(player, [0, 0])).to.be.ok;
  });
  it("should handle checking multiple ships", () => {
    let player = {
      ships: [
        {
          locations: [
            [0, 0],
            [0, 1],
          ],
        },
        {
          locations: [
            [1, 0],
            [1, 1],
          ],
        },
      ],
    };
    expect(checkForShip(player, [9, 9])).to.be.false;
    expect(checkForShip(player, [1, 1])).to.be.ok;
    expect(checkForShip(player, [1, 0])).to.be.ok;
  });
});

// damage suite for ships

describe("damageShip", () => {
  var damageShip = require("../game_logic/ship_methods").damageShip;
  it("should register damage on a given ship at a given location", function () {
    var ship = {
      locations: [[0, 0]],
      damage: [],
    };
    damageShip(ship, [0, 0]);
    expect(ship.damage).to.not.be.empty;
  });
});
