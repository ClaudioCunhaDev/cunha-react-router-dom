import productsDatabase from "../database.json";

export default function loadProduct({ params }) {
    
  const product = productsDatabase.find((el) => el.id === +params.productId);

  return product;
}
