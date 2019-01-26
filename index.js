class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf (year) {
    return parseInt(year, 10) - this.startDate.getFullYear();
  }

}
