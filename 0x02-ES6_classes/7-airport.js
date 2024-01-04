// Airport class definition
export default class Airport {
  // Constructor with name and code attributes
  constructor(name, code) {
    // Set the name and code attributes
    this._name = name;
    this._code = code;
  }

  toString() {
    return `[object ${this._code}]`;
  }

  [Symbol.toStringTag]() {
    return `Airport [${this._code}]`;
  }
}
