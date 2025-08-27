const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    image: "https://picsum.photos/200/200?random=1",
    price: 99.99,
    stock: 15,
  },
  {
    id: 2,
    title: "Gaming Mouse",
    image: "https://picsum.photos/200/200?random=2",
    price: 49.99,
    stock: 25,
  },
  {
    id: 3,
    title: "Mechanical Keyboard",
    image: "https://picsum.photos/200/200?random=3",
    price: 120.0,
    stock: 8,
  },
  {
    id: 4,
    title: "4K Monitor",
    image: "https://picsum.photos/200/200?random=4",
    price: 399.99,
    stock: 5,
  },
  {
    id: 5,
    title: "USB-C Hub",
    image: "https://picsum.photos/200/200?random=5",
    price: 29.99,
    stock: 40,
  },
];


export function getProductDataById(id){
    return products.find(product => product.id === id )
}

export function getProductList(){
    return products
}