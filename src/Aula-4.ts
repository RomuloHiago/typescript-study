// - Generics
    
//É uma funcionalidade que permite criar componentes, funções e classes que podem trabalhar com diferentes tipos de dados de forma flexível e segura

function getFirstElement<T>(data: T[]): T | null {
    if (!data.length) {
        return null;
    }
    const [firstElement] = data
    return firstElement;
}

const stringArray: string[] = ['a', 'b', 'c'];
const numberArray: number[] = [1, 2, 3];

console.log(getFirstElement<string>(stringArray));//a
console.log(getFirstElement<number>(numberArray));//1