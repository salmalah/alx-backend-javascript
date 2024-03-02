const Utils = {
  calculateNumber(type, a, b) {
    if (type === 'SUM') return Math.round(a) + Math.round(b);
    if (type === 'SUBTRACT') return Math.round(a) - Math.round(b);
    if (type === 'DIVIDE' && Math.round(b) !== 0) return Math.round(a) / Math.round(b);
    throw new Error('Cannot divide by zero');
  }
};

module.exports = Utils;
