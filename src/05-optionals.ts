export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number, // los parametros opcionales siempre van al final de los argumentos de una funcion
  ) => {
  return {
    id,
    stock: stock ?? 10, // nullish-coalescing
    isNew: isNew ?? true
  }
}

const p1 = createProduct(123, true, 12)
console.log(p1)

const p2 = createProduct(123)
console.log(p2)

const p3 = createProduct(124, false, 0) // esta linea tiene problemas
console.log(p3) // stock no es 10 ni isNew es true
