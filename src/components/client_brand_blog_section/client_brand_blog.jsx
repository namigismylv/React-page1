import "./client_brand_blog.css";
function Client_brand_blog() {
  return (
    <>
      <section id="client">
        <div className="client__div">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="client__div__title">
                  <h5>CLIENTS REVIEW</h5>
                  <h2>My testomonial</h2>
                </div>
              </div>
            </div>
            <div className="row" id="clientRow">
              <div className="col-6 clientCol">
                <div className="client__div__area">
                  <div className="client__div__area__img">
                    <img
                      src="https://zyan.vercel.app/images/testimonial/1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="client__div__area__rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <h3>Eleanor pena</h3>
                  <h5>Marketing Coordinator</h5>
                  <p>
                    Financial planners help people to knowledge in about how to
                    invest and in save their moneye the most efficient way eve
                    plan ners help people tioniio know ledige in about how.
                  </p>
                </div>
              </div>
              <div className="col-6 clientCol">
                <div className="client__div__area">
                  <div className="client__div__area__img">
                    <img
                      src="https://zyan.vercel.app/images/testimonial/2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="client__div__area__rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <h3>Eleanor pena</h3>
                  <h5>Marketing Coordinator</h5>
                  <p>
                    Financial planners help people to knowledge in about how to
                    invest and in save their moneye the most efficient way eve
                    plan ners help people tioniio know ledige in about how.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="brand">
        <div className="row">
          <div className="col-12">
            <div className="brand__ul">
              <ul>
                <li>
                  <a href="#"></a>
                </li>
                <li>
                  <a href="#"></a>
                </li>
                <li>
                  <a href="#"></a>
                </li>
                <li>
                  <a href="#"></a>
                </li>
                <li>
                  <a href="#"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section id="blog">
        <div className="blog__div">
          <div className="container">
            <div className="row" id="blogRow">
              <div className="col-8">
                <div className="blog__div__title">
                  <h5>MY BLOG</h5>
                  <h2>Unlocking the potential of your personal brand</h2>
                </div>
              </div>
              <div className="col-4">
                <div className="blog__div__button">
                  <a href="#">More Blog +</a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="blog__div__card">
                  <a href="#">
                    <img
                      src="https://zyan.vercel.app/images/blog/1.jpg"
                      alt=""
                    />
                  </a>
                  <div className="blog__div__text">
                    <span>31 December,2022</span>
                    <ul>
                      <li>
                        <i class="fa-solid fa-circle-user"></i>By admin
                      </li>
                      <li>
                        <i class="fa-solid fa-comments"></i>Comments (05)
                      </li>
                    </ul>
                    <a href="#" className="blog__div__text__link">The standard personal My portfolio</a>
                  </div>
                </div>
              </div>
              <div className="col-4">
              <div className="blog__div__card">
                  <a href="#">
                    <img
                      src="https://zyan.vercel.app/images/blog/2.jpg"
                      alt=""
                    />
                  </a>
                  <div className="blog__div__text">
                    <span>31 December,2022</span>
                    <ul>
                      <li>
                        <i class="fa-solid fa-circle-user"></i>By admin
                      </li>
                      <li>
                        <i class="fa-solid fa-comments"></i>Comments (05)
                      </li>
                    </ul>
                    <a href="#" className="blog__div__text__link">The standard personal My portfolio</a>
                  </div>
                </div>
              </div>
              <div className="col-4">
              <div className="blog__div__card">
                  <a href="#">
                    <img
                      src="https://zyan.vercel.app/images/blog/3.jpg"
                      alt=""
                    />
                  </a>
                  <div className="blog__div__text">
                    <span>31 December,2022</span>
                    <ul>
                      <li>
                        <i class="fa-solid fa-circle-user"></i>By admin
                      </li>
                      <li>
                        <i class="fa-solid fa-comments"></i>Comments (05)
                      </li>
                    </ul>
                    <a href="#" className="blog__div__text__link">The standard personal My portfolio</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Client_brand_blog;
