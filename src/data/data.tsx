import type { Product } from "../types/Product";

export const products: Product[] = [
  {
    id: 1,
    name: "Classic White Tee",
    category: "T-Shirts",
    price: 19.99,
    image: "/images/white-tee.jpg",
  },
  {
    id: 2,
    name: "Black Denim Jacket",
    category: "Outerwear",
    price: 59.99,
    image: "/images/denim-jacket.jpg",
  },
  {
    id: 3,
    name: "Floral Summer Dress",
    category: "Dresses",
    price: 39.99,
    image: "/images/summer-dress.jpg",
  },
  {
    id: 4,
    name: "Slim Fit Jeans",
    category: "Pants",
    price: 49.99,
    image: "/images/jeans.jpg",
  },
];

export const shirtsMenuData = [
  {
    label: "Featured Products",
    items: [
      {
        label: "View All",
        imageUrl:
          "https://api.powerlook.in/media/catalog/category/View_All_Shirt.jpg?aio=w-256",
      },
      {
        label: "Plain Shirts",
        imageUrl:
          "https://api.powerlook.in/media/catalog/category/plain_shirts_1_.jpg?aio=w-256",
      },
      {
        label: "Checked Shirts",
        imageUrl:
          "https://api.powerlook.in/media/catalog/category/Checked_Shirt.jpg?aio=w-256",
      },
      {
        label: "Printed Shirts",
        imageUrl:
          "https://api.powerlook.in/media/catalog/category/Printed_Shirt_1.jpg?aio=w-256",
      },
      {
        label: "Striped Shirts",
        imageUrl:
          "https://api.powerlook.in/media/catalog/category/Striped_Shirt_1_1.jpg?aio=w-256",
      },
    ],
  },
];
