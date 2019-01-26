class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf (year) {
    return parseInt(year, 10) - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
    this.vertical = Math.abs(beginningLocation.vertical - endingLocation.vertical);
    this.horizontal = Math.abs(eastWest.indexOf(beginningLocation.horizontal) - eastWest.indexOf(endingLocation.horizontal));
    this.blocksTravelled = this.vertical + this.horizontal;
  }
}

let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];
