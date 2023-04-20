const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel: function() {
    if(typeof this._energyLevel === 'number') {
      return `My current energy level is ${this._energyLevel}`;
    }
  }
};

console.log(robot.energyLevel);
