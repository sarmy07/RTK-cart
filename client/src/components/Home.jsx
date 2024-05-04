import React from "react";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useGetAllProductsQuery } from "../features/productsApi";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // const { items, status } = useSelector((state) => state.products);
  const { data, error, isLoading } = useGetAllProductsQuery();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addCart = (product) => {
    dispatch(addToCart(product));
    // navigate("/cart");
  };

  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured..</p>
      ) : (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {data?.map((product) => {
              return (
                <div key={product.id} className="product">
                  <h3>{product.name}</h3>
                  <img src={product.image} alt={product.name} />
                  <div className="details">
                    <span>{product.desc}</span>
                    <span className="price">{product.price}</span>
                  </div>
                  <button onClick={() => addCart(product)}>Add To Cart</button>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
