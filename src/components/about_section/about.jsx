import "./about.css";
function about() {
  return (
    <div className="header__section">
      <div className="container">
        <div className="row" id="aboutRow">
          <div className="col-6" id="aboutCol1">
            <div className="header__section__left">
              <h1>
                HI, I'M ZYAN! CREATIVE <span>CODER</span>
              </h1>
              <p>
                I'm a passionate UI/UX designer with a mission to create
                delightful and intuitive digital experiences. With a strong
                foundation in design principles and a keen eye for detail, I
                specialize in translating complex ideas into user-friendly
                interfaces that captivate and engage.
              </p>
              <div className="header__section__left__buttons">
                <button>
                  Download Cv<i className="fa-solid fa-download"></i>
                </button>
                <a href="#">
                  <i className="fa-solid fa-circle-play"></i> Watch The Video
                </a>
              </div>
            </div>
          </div>
          <div className="col-6" id="aboutCol2">
            <div className="header__section__right">
              <img 
                src="https://zyan.vercel.app/images/banner_img_1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
