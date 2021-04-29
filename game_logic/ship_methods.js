function checkForShip(player, coordinates) {
  var shipPresent = false;
  var ship;

  for (let i = 0; i < player.ships.length; i++) {
    ship = player.ships[i];
    ship.locations.map((shipLoc) => {
      if (shipLoc[0] == coordinates[0] && shipLoc[1] == coordinates[1]) {
        shipPresent = true;
        return shipPresent;
      }
    });
  }

  return shipPresent;
}

module.exports.checkForShip = checkForShip;
