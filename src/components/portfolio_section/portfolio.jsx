import "./portfolio.css";
function Portfolio() {
  return (
    <>
      <section id="portfolio">
        <div className="portfolio__div">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="portfolio__div__title">
                  <h5>MY RECENT PORTFOLIO</h5>
                  <h2>
                    Elevate your brand to new <br /> heights with our portfolio
                    expertise
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8 portfolioCol1">
                <a href="#">
              <img
                  src="https://zyan.vercel.app/images/portfolio/1.jpg"
                  alt=""
                />
                </a>
              </div>
              <div className="col-4 portfolioCol1">
                <a href="#">
                <img src="https://zyan.vercel.app/images/portfolio/2.jpg" alt="" />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-6 portfolioCol2">
                <a href="#">
                <img src="https://zyan.vercel.app/images/portfolio/3.jpg" alt="" />
                </a>
              </div>
              <div className="col-6 portfolioCol2">
                <a href="#">
                <img src="https://zyan.vercel.app/images/portfolio/4.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Portfolio;
