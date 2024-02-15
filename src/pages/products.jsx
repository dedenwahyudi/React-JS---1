import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/public/images/shoes-1.jpg" />
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eveniet
          soluta numquam sapiente voluptatum labore, suscipit repellat. Quasi
          hic, labore quidem, esse mollitia laborum est, asperiores facilis
          repellat explicabo omnis?
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000" />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/public/images/shoes-1.jpg" />
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eveniet
          soluta numquam sapiente voluptatum labore, suscipit repellat. Quasi
          hic, labore quidem, esse mollitia laborum est, asperiores facilis
          repellat explicabo omnis?
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000" />
      </CardProduct>
    </div>
  );
};

export default ProductsPage;
