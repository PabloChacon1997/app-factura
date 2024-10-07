import { Invoice } from "../models/invoice";

export const invoiceData: Invoice = {
  id: 1,
  name: "Componentes de PC",
  client: {
    name: "Andres",
    lastname: "Doe",
    address: {
      country: "USA",
      city: "Los Angeles",
      street: "One Street",
      number: 15
    }
  },
  company: {
    name: "New Age",
    fiscalNumber: 31323135
  },
  items: [
    {
      id: 1,
      product: 'CPU Intel i9',
      price: 589,
      quantity: 1
    },
    {
      id: 2,
      product: 'Corser teclado mecanico',
      price: 3.99,
      quantity: 2
    },
    {
      id: 3,
      product: 'Monitor Asus',
      price: 800,
      quantity: 4
    },
  ]
}