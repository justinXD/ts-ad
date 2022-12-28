import { IProduct } from "./product.model";
import { ICreateProductDto, IUpdateProductDto, IGetProductDto } from "./product.dto";
import { faker } from "@faker-js/faker";

export const products: IProduct[] = [];

export const addProduct = (data: ICreateProductDto): IProduct => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newProduct);
  return newProduct
}

export const updateProduct = (id: IProduct['id'], changes: IUpdateProductDto) => {  // busqueda por indice de tipado, con esto obtengo el tipado
  const index = products.findIndex((item) => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes
  }
  return products[index]
}

export const getProducts = (dto: IGetProductDto): IProduct[] => {
  // dto.tags?.pop()
  // dto.tags?.push()
  return products
}

export const deleteProduct = (id: string) => {
  //
}
