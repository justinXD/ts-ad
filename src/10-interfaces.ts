type Sizes = 'S' | 'M' | 'L' | 'XL';
type userId = string | number;
interface Product { // interface: funciona casi igual que un type alias, con la diferencia de que a las interfaces les podemos aplicar herencia, las podemos extender
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes; // propiedades opcionales siempre van al final de la interface
}

const products: Product[] = [];

products.push({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  stock: 90
});

const addProduct = (data: Product) => {
  products.push(data);
}
