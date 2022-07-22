// interfaccia birre per creazione db birre come array di seguito
export interface Beer {
  id: number;
  type: 'small' | 'medium';
  name: string;
  price: number;
}
// array di 10 birre
export const birre: Beer[]= [
  {
    id : 1,
    type : "small",
    name : 'Peroni',
    price : 10
  },
  {
    id : 2,
    type : "small",
    name : 'Corona',
    price : 20
  },
  {
    id : 3,
    type : "small",
    name : 'Poretti',
    price : 30
  },
  {
    id : 4,
    type : "small",
    name : 'Moretti',
    price : 40
  },
  {
    id : 5,
    type : "small",
    name : 'Bud',
    price : 50
  },
  {
    id : 6,
    type : "small",
    name : 'Ceres',
    price : 60
  },
  {
    id : 7,
    type : "small",
    name : 'Icnusa',
    price : 70
  },
  {
    id : 8,
    type : "small",
    name : 'Nastro Azzurro',
    price : 80
  },
  {
    id : 9,
    type : "small",
    name : 'Beks',
    price : 90
  },
  {
    id : 10,
    type : "small",
    name : 'Tuborg',
    price : 100
  },
]
