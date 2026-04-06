import Make from './Makeup.module.css'

import img1 from '../assets/nude.avif'
import img2 from '../assets/face.avif'
import img3 from '../assets/nudeeee.avif'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";   // ✅ added

function Makeup() {

  const navigate = useNavigate();   // ✅ added

  const products = [
    { img: img1, category: "Exclusive", name: "Pink Velvet", old: 485, price: 390 },
    { img: img2, category: "Exclusive", name: "Wine Divine", old: 375, price: 290 },
    { img: img3, category: "Exclusive", name: "Tinted gloss", old: 300, price: 250 },
  ]

  return (
    <section id="Makeup">

      <div className={Make.king}>
        <h1>MAKEUP</h1>
      </div>

      <div className={Make.products}>

        {products.map((item, index) => (
          <div key={index} className="card">

            <div className={Make.imgBox}>

              <span className={Make.sale}>Sale!</span>

              {/* ✅ FIX HERE */}
              <div
                className={Make.cartIcon}
                onClick={() => navigate("/product", { state: item })}
              >
                <FontAwesomeIcon icon={faCartShopping} />
              </div>

              <img src={item.img} alt={item.name} />

            </div>

            <div className={Make.info}>
              <p className={Make.category}>{item.category}</p>
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

export default Makeup
