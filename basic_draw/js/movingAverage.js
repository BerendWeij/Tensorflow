class MovingAverageCalculator {
    constructor(length = 5) {
        this._length = length; // length of moving average
        this._values = new Array(this._length).fill({x:0, y:0});//movingAverage memory
    }
    update(newValue) {
        this._values.pop();//remove the last value
        this._values.unshift(newValue);//add new value to start
    }
    get mean() {
        const sum = this._values.reduce((a, b) => (
            {
                x: a.x + b.x,
                y: a.y + b.y
            }
        ), {x:0, y:0});

        //totaal gedeeld door de lengte
        return {
            x: sum.x / this._length,
            y: sum.y / this._length
        };
    }
}



// hoe maak je een instantie aan:
const movingAverage = new MovingAverageCalculator();

// hoe vul je hem 'elke update'
movingAverage.update({x: 5, y:4});

// we vragen de average op (het is een 'getter')
console.log(movingAverage.mean);