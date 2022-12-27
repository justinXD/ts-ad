const withoutEnd = () => {  // funcion que nunca para de tipo never
  while (true) {
    console.log('nunca parar de aprender')
  }
}

const fail = (message: string) => {
  throw new Error(message);

}

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'es un string'
  } else if(Array.isArray(input)) {
    return 'es un array'
  }
  return fail('se murio el programa')
}

console.log(example('hola'))
console.log(example([1,1,1,1]))
console.log(example(235)) // el programa se va a ejecutar hasta aqui
console.log(example('hola despues de fail'))
