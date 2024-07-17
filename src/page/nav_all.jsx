import "./page.css";

function IndexNav() {
  return (
    <>
      <div>
        <div className="top_contact_detiels  d-flex p-3 ">
          <div className="contact_detiels d-flex">
            <div className="mail">
              <div>
                <i class="fa-solid fa-envelope-open"></i>
              </div>
              <div>email : impactpage@gmail.com</div>
            </div>
            <div className="call">
              <div>
                <i class="fa-solid fa-phone"></i>
              </div>
              <div>contact number : 9000122111</div>
            </div>
          </div>
          <div className="condact_icons">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin-in"></i>
          </div>
        </div>
        {/* the 2nd line nav bar  */}
        <div className="navfull d-flex p-4">
          <div className="impName">
            Impact <span style={{ color: "orange" }}>. </span>
          </div>
          <div>
            <nav>
              <div>
                <i class="fa-solid fa-bars"></i>
              </div>
            </nav>
          </div>
        </div>{" "}
        {/* 2nd nav bar last line */}
        <div>
          {" "}
          {/* the 3rd nav page as information before abourt */}
          <div className="d-flex">
            {" "}
            {/* the left sid einformation */}
            <div className="left_nav col-6 ">
              <div className="left_1text">Welcome to Impact</div>
              <div className="left_2ndtext">
                Sed autem laudantium dolores. Voluptatem itaque ea consequatur
                eveniet. Eum quas beatae cumque eum quaerat.
              </div>

              {/* thej button in the nav 3rd line  */}
              <div className="d-flex">
                <div className="button_1out ">
                  <button className="button_1in rounded-pill">Get start</button>
                </div>
                <div className="button_2out ">
                  <button className="button_2in rounded-pill">
                    {" "}
                    <i class="fa-solid fa-play"></i>{" "}
                    <span style={{ padding: "5px" }}> Watch Now</span>
                  </button>
                </div>
              </div>
            </div>{" "}
            {/* the left side text button end */}
            {/* the nav image starts */}
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 ">
              <img
                src="https://photutorial.com/wp-content/uploads/2023/04/Featured-image-AI-image-generators-by-Midjourney.png"
                alt=""
                className="img-top"
              />
            </div>
          </div>
        </div>
        <div>
          {" "}
          {/* the box of card detiles after nav image  */}
          <div className="all_card_main_div px-5 py-3 ">
            <div className="card1 ">
              <div>
                <i class="fa-solid fa-tv"></i> <br />
                <span className="textin_card"> Television</span>
              </div>
            </div>

            <div className="card1 ">
              <div>
                <i class="fa-solid fa-tv"></i> <br />
                <span className="textin_card"> Diamond</span>
              </div>
            </div>

            <div className="card1 ">
              <div>
                <i class="fa-solid fa-tv"></i> <br />
                <span className="textin_card"> Location</span>
              </div>
            </div>

            <div className="card1 ">
              <div>
                <i class="fa-solid fa-tv"></i> <br />
                <span className="textin_card"> Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default IndexNav;
