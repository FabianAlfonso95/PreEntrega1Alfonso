import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <>
      <div className="navBarHeader">
        <img src="/logo.jpg" alt="" title="" />
        <nav>
          <ul>
            <li>
              <a href="/">PIZZAS</a>
            </li>
            <li>
              <a href="/">FOCACCIAS</a>
            </li>
            <li>
              <a href="/">PANES DE CAMPO</a>
            </li>
            <li className="ss">
              <a href="/">PROMOCIONES</a>
            </li>
          </ul>
        </nav>
        <p>
          <CartWidget></CartWidget>
        </p>
      </div>
    </>
  );
};
