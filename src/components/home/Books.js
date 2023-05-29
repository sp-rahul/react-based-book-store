import React from "react";
import BookCard from "./BookCard";

export default function ({ data, setCartItem, cartItem }) {
  return (
    <div>
      {data.map((book) => (
        <BookCard data={book} setCartItem={setCartItem} cartItem={cartItem} />
      ))}
    </div>
  );
}
