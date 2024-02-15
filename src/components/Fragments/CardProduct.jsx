import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-gray-800 border-gray-700 rounded-lg shadow">
      {children}
    </div>
  );
};

const Body = () => {
  return (
    <div className="px-5 pb-5">
      <a href="">
        <h5 className="text-s font-semibold tracking-tight text-white">
          Sepatu baru
        </h5>
        <p className="text-m text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eveniet
          soluta numquam sapiente voluptatum labore, suscipit repellat. Quasi
          hic, labore quidem, esse mollitia laborum est, asperiores facilis
          repellat explicabo omnis?
        </p>
      </a>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">Rp 1.000.000</span>
      <Button classname="bg-blue-600">Add To Cart</Button>
    </div>
  );
};

const Header = () => {
  return (
    <a href="">
      <img
        src="/public/images/shoes-1.jpg"
        alt="products"
        className="p-8 rounded-t-lg"
      />
    </a>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
