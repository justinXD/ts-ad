export interface IBaseModel {
  id: string | number;  // si quiero que una propiedad no se pueda editar o sobre escribir tengo que hacer: readonly id: string | number;
  createdAt: Date;
  updatedAt: Date;
}
