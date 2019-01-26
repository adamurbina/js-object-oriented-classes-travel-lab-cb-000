class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf (year) {
    return startDate.getFullYear() - parseInt(year, 10);
  }

}
