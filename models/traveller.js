const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  });
};

// Traveller.prototype.getJourneysByTransport = function (transport) {
//   return this.journeys.filter ((journey) => {
//     return journey.transport === transport;
//   });
// };


//// example of refactored code 
Traveller.prototype.getJourneysByTransport = function (transport) {
return this.journeys.filter(journey => journey.transport === transport);
}; 

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter ((journey) => {
    return journey.distance > minDistance;
  });

};


Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce ((runningTotal, journey) => {
    return runningTotal += journey.distance;
  }, 0);
};






Traveller.prototype.getUniqueModesOfTransport = function () {
const transportTypes = this.journeys.map (journey => journey.transport)
const filteredTransports = transportTypes.filter((journey, index, array) => {
  // train - 0, train - 1, aeroplane - 2, car -3, ferry - 4
  return index === array.indexOf(journey);
});
return filteredTransports;
};

module.exports = Traveller;
