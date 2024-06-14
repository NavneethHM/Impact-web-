import "./footer.css";

function Foot() {
  return (
    <>
      <div>
        <div className="footfull row p-5">
          <div className="left_text col-6">
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                voluptas eaque ex incidunt maiores fugiat. Natus soluta quis id
                maxime nihil odit, alias, tenetur deserunt, assumenda doloremque
                ullam placeat delectus.
              </p>
            </div>
            <div className="d-flex">
              <div className="icons">
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>

          <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
            <div>
              <h4>Usefull Link</h4>
              <p>Home</p>
              <p>About Us</p>
              <p>Servies</p>
              <p>Terms of servies</p>
              <p>Privacy Policy</p>
            </div>
          </div>

          <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
            <div>
              <h4>Our Servies </h4>
              <p>Web Design</p>
              <p>Web Development</p>
              <p>Product Managment</p>
              <p>Marketing</p>
              <p>Graphic Design</p>
            </div>
          </div>

          <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
            <div>
              <h4>Contact Us</h4>
              <p>Diatoz, </p>

              <p>ITPL Road, </p>

              <p>Bangalore.</p>
              <br />
              <p>Phone : 8334192301-28</p>
              <br />
              <p>Email: page@gmail.com</p>
            </div>
          </div>

          <div className="last">
            Copy Imapct All Right Reserved
            <br />
            Designed by Bootstrap , replcated by Navneeth
          </div>
        </div>
      </div>
    </>
  );
}

export default Foot;
