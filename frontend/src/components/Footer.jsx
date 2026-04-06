import Foot from'./Footer.module.css'

function Footer() {
  return (
    <footer>

      <div className={Foot.dass}>

        <div>
          <h1>AS BEAUTY STORE</h1>

          <p>
            Stay connected with us on social media for the latest updates and offers.
          </p>

          <div className={Foot.icons}>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-solid fa-message"></i>
          </div>

          <p>© 2026 AS Beauty Store. All Rights Reserved.</p>
        </div>

      </div>

    </footer>
  )
}

export default Footer