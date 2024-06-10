//--Interface 
// Exemplo: calculando a distancia entre dois pontos 

type Coordinate = {
    x: number;
    y: number;
};

function calculateDistante(pointA: Coordinate, pointB: Coordinate): number {
    const dx = pointB.x - pointA.x;
    const dy = pointB.y - pointA.y;

    const res = Math.sqrt(dx * dx + dy * dy);
    return res

}
const pointAA: Coordinate = {
    x: 1,
    y: 1
};

const pointBB: Coordinate = {
    x: 4,
    y: 5
};

console.log(calculateDistante(pointAA, pointBB))
////////////////////////////////////////////////////////////
// Exemplo: criando um objeto de carro e implementando uma função para ligar o carro

interface Car {
    brand: string;
    model: string;
    year: number;
    price: number;
    startEngine: () => void;
}

const myCar: Car = {
    brand: 'Ford',
    model: 'Mustang',
    year: 1969,
    price: 23000,
    startEngine: () => {
        console.log('Vrum Vrum')
    }
}

function drive(car: Car): void {
    console.log(`Driving ${car.brand} ${car.model}`)
    car.startEngine();
}

drive(myCar)// Driving Ford Mustang & Vrum Vrum