import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p0",
    title: "Test",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    id: "p1",
    title: "My First Book",
    price: 5,
    description: "The First book I ever wrote",
  },
  {
    id: "p2",
    title: "My Second Book",
    price: 7,
    description: "The Second book I ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
