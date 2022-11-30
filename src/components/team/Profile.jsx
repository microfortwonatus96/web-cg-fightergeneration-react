import React from "react";
import "./team.css";
import Stella from "../../assets/team/STELLA.png";
import Angel from "../../assets/team/ANGEL KIKI.png";
import Yuni from "../../assets/team/YUNI.png";
import Vheli from "../../assets/team/VHELI.png";
import Nola from "../../assets/team/Nola Kerenzia.png";
import Grace from "../../assets/team/Grace.png";
import Krisna from "../../assets/team/Krisna.jpg";

const Profile = () => {
  return (
    <>
      {/* profile 1 */}
      <div className="column">
        <div className="card">
          <div className="img-container">
            <img src={Stella} className="team__img" alt="" />
          </div>
          <h3>Stella</h3>
          <p>Coach</p>
          <div className="icon">
            <a href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>

            <a href="#">
              <i class="fa-brands fa-tiktok"></i>
            </a>

            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>

            <a href="#">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
      {/* end-profile 1 */}

      {/* profile 2 */}
      <div className="column">
        <div className="card">
          <div className="img-container">
            <img src={Angel} className="team__img" alt="" />
          </div>
          <h3>Angel</h3>
          <p>Connect Group Leader</p>
          <div className="icon">
            <a href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>

            <a href="#">
              <i class="fa-brands fa-tiktok"></i>
            </a>

            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>

            <a href="#">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
      {/* end-profile 2 */}

      {/* profile 3 */}
      <div className="column">
        <div className="card">
          <div className="img-container">
            <img src={Yuni} className="team__img" alt="" />
          </div>
          <h3>Yuni</h3>
          <p>Connect Group Leader</p>
          <div className="icon">
            <a href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>

            <a href="#">
              <i class="fa-brands fa-tiktok"></i>
            </a>

            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>

            <a href="#">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
      {/* end-profile 3 */}

      {/* profile 4 */}
      <div className="column">
        <div className="card">
          <div className="img-container">
            <img src={Krisna} className="team__img" alt="" />
          </div>
          <h3>Krisna Natalia</h3>
          <p>Connect Group Leader</p>
          <div className="icon">
            <a href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>

            <a href="#">
              <i class="fa-brands fa-tiktok"></i>
            </a>

            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>

            <a href="#">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
      {/* end-profile 4 */}

      {/* profile 5 */}
      <div className="column">
        <div className="card">
          <div className="img-container">
            <img src={Nola} className="team__img" alt="" />
          </div>
          <h3>Nola</h3>
          <p>Connect Group Leader</p>
          <div className="icon">
            <a href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>

            <a href="#">
              <i class="fa-brands fa-tiktok"></i>
            </a>

            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>

            <a href="#">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
      {/* end-profile 5 */}

      {/* profile 6 */}
      <div className="column">
        <div className="card">
          <div className="img-container">
            <img src={Vheli} className="team__img" alt="" />
          </div>
          <h3>Vheli</h3>
          <p>Connect Group Leader</p>
          <div className="icon">
            <a href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>

            <a href="#">
              <i class="fa-brands fa-tiktok"></i>
            </a>

            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>

            <a href="#">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
      {/* end-profile 6 */}

      {/* profile 7 */}
      <div className="column">
        <div className="card">
          <div className="img-container">
            <img src={Grace} className="team__img" alt="" />
          </div>
          <h3>Grace</h3>
          <p>Connect Group Leader</p>
          <div className="icon">
            <a href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>

            <a href="#">
              <i class="fa-brands fa-tiktok"></i>
            </a>

            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>

            <a href="#">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
      {/* end-profile 7 */}
      

    </>
  );
};

export default Profile;
