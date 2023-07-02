import React from "react";
import productsDatabase from "../database.json";
import { Link } from "react-router-dom";

export const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <section>
        <h3>CPU</h3>
        <ul>
          {productsDatabase.map((prod) => (
            <li key={prod.id}>
              <h4>{prod.name}</h4>
              <p>{prod.price}€</p>
              <Link to={`/products/${prod.id}`}>
                <button>View</button>
              </Link>
              <button>Buy</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
