export const createProduct = (
  id: string | number,
  isNew: boolean = true,  // valor por defecto
  stock: number = 10, // valor por defecto
  ) => {
  return {
    id,
    stock,
    isNew
  }
}

// 0 === false
// '' === false
// false === false

const p1 = createProduct(123, true, 12)
console.log(p1)

const p2 = createProduct(123)
console.log(p2)

const p3 = createProduct(124, false, 0) // esta linea tiene problemas
console.log(p3) // stock no es 10 ni isNew es true

const p4 = createProduct(124, true, 120)
console.log(p4)
