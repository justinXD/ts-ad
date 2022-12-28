import { ICategory } from "./../categories/category.model";
import { IBaseModel } from "./../base.model";

export type Sizes = 'S' | 'M' | 'L' | 'XL';
export interface IProduct extends IBaseModel{ // como id, createdAt y updatedAt estan declarados en IBaseModel ya no necesito declararlos en IProduct
  // id: string | number;                     // porque los estoy heredando de IBaseModel
  // createdAt: Date;
  // updatedAt: Date;
  title: string;
  image: string;
  description: string;
  stock: number;
  size?: Sizes;
  color: string;
  price: number;
  category: ICategory;
  isNew: boolean;
  tags: string[];
}
