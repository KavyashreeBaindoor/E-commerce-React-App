import { Link, Outlet } from "react-router-dom";
import "./navbar.styles.scss"


const Navbar = () => {
         return (
           <>
            <div className="navbar-container">
                  
                  <div className="links-container">
                           <Link className="link" to="/shop">shop</Link>
                           <Link className="link" to="/shop">shop</Link>
                           <Link className="link" to="/shop">shop</Link>
                  </div>
            </div>
             <Outlet />
           </>
         );
       };

       export default Navbar