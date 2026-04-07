import Duke from "./Product.module.css";
import { useLocation } from "react-router-dom";
import { useState, useContext, useLayoutEffect } from "react";
import { CartContext } from "../CartContext";

function Product() {
  const location = useLocation();
  const product = location.state;

  const { addToCart } = useContext(CartContext);

  const [qty, setQty] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    comment: "",
    save: false
  });
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) return <h2>No product found</h2>;

  const increase = () => setQty(qty + 1);
  const decrease = () => qty > 1 && setQty(qty - 1);

  // 🔥 FIXED HANDLE CART
  const handleCart = async () => {
    const cartItem = {
      productId: product._id || product.name, // ✅ ADD THIS
      name: product.name,
      price: product.price,
      qty: qty
    };

    console.log("🚀 Sending to backend:", cartItem); // DEBUG

    addToCart(cartItem);

    try {
      const res = await fetch("http://localhost:5000/api/auth/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(cartItem)
      });

      const data = await res.json();
      console.log("👉 Backend response:", data); // DEBUG

    } catch (err) {
      console.log("❌ Error:", err);
    }

    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const submitReview = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || rating === 0 || !form.comment) {
      alert("Please fill all fields");
      return;
    }

    setReviews([...reviews, { ...form, rating }]);
    setForm({ name: "", email: "", comment: "", save: false });
    setRating(0);
  };

  return (
    <div className={Duke.productPage}>
      <div className={Duke.productContainer}>
        <div className={Duke.productImage}>
          <img src={product.img} alt={product.name} />
        </div>

        <div className={Duke.productDetails}>
          <h1>{product.name}</h1>

          <p className={Duke.price}>
            <del>${product.old}</del> <b>${product.price}</b>
          </p>

          <div className={Duke.qtyBox}>
            <button onClick={decrease}>-</button>
            <span>{qty}</span>
            <button onClick={increase}>+</button>
          </div>

          <button className={Duke.addBtn} onClick={handleCart}>
            ADD TO CART
          </button>

          <div className={Duke.extra}>
            <p>✅ Secure Payment</p>
            <p>✅ Easy Return</p>
            <p>✅ Fast Delivery</p>
          </div>
        </div>
      </div>

      {showToast && (
        <div className={Duke.toast}>
          {product.name} added to cart ✅
        </div>
      )}

      <div className={Duke.reviewSection}>
        <h2>Reviews ({reviews.length})</h2>

        {reviews.length === 0 && <p>No reviews yet</p>}

        {reviews.map((rev, i) => (
          <div key={i} className={Duke.reviewBox}>
            <b>{rev.name}</b>
            <p>{"★".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}</p>
            <p>{rev.comment}</p>
          </div>
        ))}

        <h3>Write a review</h3>

        <form onSubmit={submitReview}>
          <div className={Duke.stars}>
            {[1, 2, 3, 4, 5].map(star => (
              <span
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                style={{ color: star <= (hover || rating) ? "gold" : "gray" }}
              >
                ★
              </span>
            ))}
          </div>

          <textarea
            name="comment"
            value={form.comment}
            onChange={handleChange}
            placeholder="Your review"
          />

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
          />

          <button className={Duke.submitBtn} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Product;