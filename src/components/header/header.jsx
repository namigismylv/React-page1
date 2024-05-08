import "./header.css";
import About from "../about_section/about";

function Header() {
  return (
    <header>
      <div className="header">
        <div className="header__left">
          <a href="#">
            <img src="https://zyan.vercel.app/images/logo.png" alt="" />
          </a>
        </div>
        <div className="header__middle">
          <ul>
            <li>
              <a href="#">
                HOME
                <i className="fa-solid fa-chevron-down"></i>
              </a>
            </li>

            <li>
              <a href="#">ABOUT US</a>
            </li>
            <li>
              <a href="#">SERVICES</a>
            </li>
            <li>
              <a href="#">PROJECTS</a>
            </li>
            <li>
              <a href="#">
                BLOG <i className="fa-solid fa-chevron-down"></i>
              </a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </div>
        <div className="header__right">
          <button
            className="btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <a href="">
                <img src="https://zyan.vercel.app/images/logo2.png" alt="" />
              </a>
              <button
                type="button"
                className="close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="offcanvas-body">
              <div className="offcanvas__body__title">
                <h4>ABOUT US</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                  tempor incididunt ut labore et magna aliqua. Ut enim ad minim
                  veniam laboris.
                </p>
              </div>
              <div className="offcanvas__body__form__div">
                <h4>GET IN TOUCH</h4>
                <form action="#" id="offcanvas__body__form">
                  <input type="text" placeholder="Your Name" />
                  <input type="text" placeholder="Your Email" />
                  <textarea rows={6} placeholder="Message"></textarea>
                  <button>submit now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
    </header>
  );
}
export default Header;
