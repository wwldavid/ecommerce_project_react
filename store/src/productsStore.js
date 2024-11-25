const productsArray = [
  {
    id: "price_1QOuUD02z5jGCRgrei3MKs82",
    title: "Coffee",
    price: 4.99,
  },
  {
    id: "price_1QOuaU02z5jGCRgryAiZ7vN1",
    title: "Sunglasses",
    price: 9.99,
  },
  {
    id: "price_1QOudf02z5jGCRgroDhggaXw",
    title: "Camera",
    price: 100.99,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product data does not exist for ID:" + id);
    return undefined;
  }
  return productData;
}

export { productsArray, getProductData };
