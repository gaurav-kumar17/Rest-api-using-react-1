import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      console.log(data);
      setProducts(data.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); //[] dene se sirf ek baar hi useEffect func. run karega

  return (
    <>
      <div className="container">
        <div className="row">
          {products &&
            products.map((product, index) => {
             
              return (
                <div className="card" style={{ width: "18rem" }}>
                  <img src={product.thumbnail} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">
                    {product.description}
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default App;
