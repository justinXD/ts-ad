// array fuertemente tipado tanto en tipo de datos como en cantidad de elementos y posicion

const prices : (number | string)[] = [] // array normal con union type

let user: [string, number] = ['justin', 12]  // tupla tipada con solo dos elementos: primero string y despues number en ese estricto orden

// user = ['hhh'] // falla
// user = [] // falla
// user = ['hhh', 5]  // funciona
// user = [5, 'hhh'] // falla
// user = ['hhh', 6, 6] // falla
const [username] = user;
console.log(username)
