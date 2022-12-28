const numbers: number[] = [1,2,3,4,5,6,7]   // array normal de numeros
numbers.push(8)
numbers.pop()

const numbers2: ReadonlyArray<number> = [1,2,3,4,5,6,7]   // array de solo lectura
// numbers2.push(8)   // esto da error porque no podemos alterar un ReadonlyArray
// numbers2.pop()
numbers2.filter(() => {})   // estos funcionan porque nos crean un nuevo array con la logica que le demos
numbers.map(() => {})
