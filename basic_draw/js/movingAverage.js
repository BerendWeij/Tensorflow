class MovingAverageCalculator {
    constructor() {
        this._length = 5 // length of moving average
        this._valueAr = new Array(this._length).fill({x:0, y:0})//movingAverage memory
    }
    update(newValue) {
      this._valueAr.pop();//remove the last value
      this._valueAr.unshift(newValue);//add new value to start
    }
    get mean() {
        this.validate();
        const sum = this._valueAr.reduce((a, b) => (
            {
                x: a.x + b.x,
                y: a.y + b.y
            }
        ), {x:0, y:0});

        //sum / length
        return {
            x: sum.x / this._length,
            y: sum.y / this._length
        };

    }
    validate() {
        if (this.count == 0) {
            throw new Error('average is undefined')
        }
    }
}
const movingAverage = new MovingAverageCalculator();
