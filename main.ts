interface Vehicle{
    name: string,
    model: string,
    year: number,
    start: () => void
}

class car implements Vehicle{
    name: string;
    model: string;
    year: number;
    constructor(name: string, model: string, year: number){
        this.name = name;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log('Engine started');
    }
}

const itcar = new Car('Ford', 'Fiesta', 2019);
mycar.start();