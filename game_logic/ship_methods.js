function checkForShip(player, coordinates) {
  var shipPresent = false;
  var ship;

  for (let i = 0; i < player.ships.length; i++) {
    ship = player.ships[i];
    console.log(ship.locations, coordinates);
    if (
      ship.locations[0][0] == coordinates[0] &&
      ship.locations[0][1] == coordinates[1]
    ) {
      shipPresent = true;

      return shipPresent;
    }
  }

  return shipPresent;
}

module.exports.checkForShip = checkForShip;
