import axios from "../lib/axios";

export const getProduct = async () => {
  const product = await axios
    .get("https://reqres.in/api/products/3")
    .catch(err => console.log(err));

  return product;
};
