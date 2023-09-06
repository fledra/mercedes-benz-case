export interface CarColor {
  name: string;
  hex: string;
}

export interface Car {
  id: string | number;
  carid: string;
  instock: boolean;
  hp: number;
  price: number;
  color: CarColor;
  colorOptions: CarColor[];
}
