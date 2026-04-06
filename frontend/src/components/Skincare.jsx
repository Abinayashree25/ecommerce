import Skin from './Skincare.module.css'

import img1 from '../assets/given-skin-toner-400x400.jpg'
import img2 from '../assets/beauty-cream-400x400.jpg'
import img4 from '../assets/daily-moisturizer-400x400.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";   // ✅ added


function Skincare() {
  const navigate = useNavigate();   // ✅ added

  const products = [
    { img: img1, category: "Skin", name: "Anti-aging Skin Toner", old: 95, price: 70 },
    { img: img2, category: "Skin", name: "Skin Whitening Toner", old: 75, price: 59 },
    { img: img4, category: "Skin", name: "Daily Moisturiser", old: 97, price: 87 },
  ]

  return (
    <section id="Skincare">

      <div className={Skin.sam}>
        <h1>SKIN CARE</h1>
      </div>

      <div className={Skin.products}>

        {products.map((item, index) => (
          <div key={index} className={Skin.card}>

            {/* IMAGE BOX */}
            <div className={Skin.imgBox}>
              <span className={Skin.sale}>Sale!</span>

              {/* ✅ MOVE INSIDE */}
              <div
                className={Skin.cartIcon}
                onClick={() => navigate("/product", { state: item })}
              >
                <FontAwesomeIcon icon={faCartShopping} />
              </div>

              <img src={item.img} alt={item.name} />
            </div>

            {/* DETAILS */}
            <div className={Skin.info}>
              <p className={Skin.category}>{item.category}</p>
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

export default Skincare