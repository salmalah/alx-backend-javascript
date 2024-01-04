// HolbertonClass class definition
export default class HolbertonClass {
  // Constructor with size and location attributes
  constructor(size, location) {
    // Set the size and location attributes
    this._size = size;
    this._location = location;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
