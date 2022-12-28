import { IProduct } from "./product.model";

// type CreateProductDto = Omit<IProduct, 'id' | 'createdAt' | 'updatedAt' | 'category'>;   // Dto es data transfer object. Con Omit podemos omitir los atributos que querramos de IProduct

export interface ICreateProductDto extends Omit<IProduct, 'id' | 'createdAt' | 'updatedAt' | 'category'> {  // Omit es un utility type
  categoryId: string;
}

type pick = Pick<IProduct, 'color' | 'description'>   // Pick nos permite seleccionar los atributos quq queramos de IProduct, es lo contrario a omit. Pick es un utility type

export interface IUpdateProductDto extends Partial<ICreateProductDto>{   // Partial nos permite hacer de forma automatica opcionales todas la propiedades de IProduct. Partial es otro utility type
  //                                                                      //heredamos de ICreateProductDto para que no se puedan editar los campos omitidos
}

type require = Required<IProduct>;  // lo contrario al utility type Partial

export interface IGetProductDto extends Readonly<Partial<Omit<IProduct, 'tags'>>> {
  readonly tags: ReadonlyArray<string>
}

type readOnly = Readonly<IProduct>;  // utility type para no podamos hacer modificaciones
