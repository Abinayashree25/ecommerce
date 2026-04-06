import Hairs from './Haircare.module.css'

import img1 from '../assets/hairoil.avif'
import img2 from '../assets/serum.avif'
import img3 from '../assets/coconut.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";   // ✅ added

function Haircare() {
  const navigate = useNavigate();   // ✅ added

  const products = [
    { img: img1, category: "Hair", name: "Hair Spray", old: 85, price: 79 },
    { img: img2, category: "Hair", name: "Serum", old: 85, price: 79 },
    { img: img3, category: "Hair", name: "Coconut Oil", old: 85, price: 79 },
  ]

  return (
    <section id="Haircare">

      {/* TITLE */}
      <div className={Hairs.tea}>
        <h1>HAIR CARE</h1>
      </div>

      {/* PRODUCTS */}
      <div className={Hairs.products}>

        {products.map((item, index) => (
          <div key={index} className={Hairs.card}>

            {/* IMAGE BOX */}
            <div className={Hairs.imgBox}>
              <span className={Hairs.sale}>Sale!</span>

              {/* ✅ ADD THIS */}
              <div
                className={Hairs.cartIcon}
                onClick={() => navigate("/product", { state: item })}
              >
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
              <img src={item.img} alt={item.name} />
            </div>

            {/* DETAILS */}
            <div className={Hairs.info}>
              <p className={Hairs.category}>{item.category}</p>
              <h3>{item.name}</h3>
              <p>
                <del>${item.old}</del> <b>${item.price}</b>
              </p>
            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Haircare