// Building class definition
export default class Building {
  constructor(sqft) {
    // Set the sqft attribute
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
