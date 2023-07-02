import React from "react";
import { Link, useParams } from "react-router-dom";
import productsDatabase from "../database.json";

export const Product = () => {
  const params = useParams();
  /* const {productId} = useParams() */

  /*+params.productId === Number(params.productId)*/
  const product = productsDatabase.find((el) => el.id === +params.productId);

  if (!product) {
    <h1>Oops... Invalid product</h1>;
  }

  return (
    <section>
      <Link to={"/products"}>
        <button>Back to Products</button>
      </Link>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price} €</p>
      <button>Buy</button>
    </section>
  );
};
