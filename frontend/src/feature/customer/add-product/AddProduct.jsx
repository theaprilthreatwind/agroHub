import { useState } from "react";

export function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState(null);
  const [isModalShown, setIsModalShown] = useState(false)

  return <button>Добавить продукт</button>;
}
