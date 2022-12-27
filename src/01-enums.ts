export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer'
}

export type User = {
  username: string,
  role: ROLES
}

const justinUser: User = {
  username: 'justin',
  role: ROLES.ADMIN
}

/*similar al type alias pero con forma de objeto, nos crea un set de posibilidades de las que solo se pueden seleccionar las definidas */
