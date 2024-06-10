//enum é enumeração refere-se a uma lista de valores constantes que são nomeados simbolicamente.

//js
const GENDER ={
    male: 'male',
    female: 'female',
    other: 'other'
}

//enum
enum Gender { //boas praticas é colocar o nome do enum em maiusculo
    MALE = 'Male',//boas praticas é colocar o nome do em caixa alta e o valor em maiusculo
    FEMALE = 'Female',
    OTHER = 'Other'
}

type Person = {
    name: string,
    gender: Gender
}

const person: Person = {
    name: 'Vinicius',
    gender: Gender.MALE
}

//funcao que retorna o enum
function displayPersonInfo(person: Person): void {
    console.log(`${person.name} is ${person.gender}`)
}

displayPersonInfo(person) //Vinicius is Male