import { addProduct, updateProduct, getProducts } from "./products/product.service";
import { faker } from "@faker-js/faker";
import { products } from "./products/product.service";

for (let index = 0; index < 50; index++) {
  addProduct({
  // id: faker.datatype.uuid(),
  title: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  image: faker.image.imageUrl(),
  color: faker.color.human(),
  price: parseInt(faker.commerce.price(), 10),
  isNew: faker.datatype.boolean(),
  size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
  tags: faker.helpers.arrayElements(),
  // createdAt: faker.date.recent(),
  // updatedAt: faker.date.recent(),
  stock: faker.datatype.number({min: 10, max: 100}),
  categoryId: faker.datatype.uuid()
})
}

console.log('productos', products)
const product = products[0]
updateProduct(product.id, {
  title: 'new title',
  stock: 80
})

// getProducts({
//   // stock: 10,
//   // color: 'red',
//   // isNew: true
// })
