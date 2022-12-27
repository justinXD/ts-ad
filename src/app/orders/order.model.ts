import { IProduct } from "./../products/product.model";
import { IUser } from "./../users/user.model";
import { IBaseModel } from "./../base.model";

export interface IOrder extends IBaseModel {
  product: IProduct[];
  user: IUser;
}
