import Tom from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";

function Navbar({ setIsLoggedIn }) {

  const navigate = useNavigate();

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
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

        {/* ✅ Correct links (use / not /home) */}
        <li><HashLink smooth to="/#About">About</HashLink></li>
        <li><HashLink smooth to="/#Makeup">Makeup</HashLink></li>
        <li><HashLink smooth to="/#Skincare">Skin Care</HashLink></li>
        <li><HashLink smooth to="/#Haircare">Hair Care</HashLink></li>
        <li><HashLink smooth to="/#Contact">Contact</HashLink></li>

        {/* ✅ Logout button */}
        {/* <li>
          <button onClick={handleLogout} className={Tom.logout}>
            Logout
          </button>
        </li> */}

      </ul>

    </nav>
  )
}

export default Navbar;