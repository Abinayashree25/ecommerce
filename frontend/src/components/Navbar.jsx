import Tom from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className={Tom.navbar}>

      <div className={Tom.container}>
        <h1>AS Beauty Store</h1>
      </div>

      <input type="checkbox" id="check" className={Tom.check} />

      <label htmlFor="check" className={Tom.checking}>
        <FontAwesomeIcon icon={faBars} />
      </label>

      <ul className={Tom.menu}>

        {/* ✅ CORRECT LINKS */}
        <li><HashLink smooth to="/home#About">About</HashLink></li>
        <li><HashLink smooth to="/home#Makeup">Makeup</HashLink></li>
        <li><HashLink smooth to="/home#Skincare">Skin Care</HashLink></li>
        <li><HashLink smooth to="/home#Haircare">Hair Care</HashLink></li>
        <li><HashLink smooth to="/home#Contact">Contact</HashLink></li>

        {/* Logout */}
        {/* <li>
          <button onClick={handleLogout} className={Tom.logout}>
            Logout
          </button>
        </li> */}

      </ul>

    </nav>
  )
}

export default Navbar