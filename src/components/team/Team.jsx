import React from "react";
import './team.css'
import Profile from "./Profile";

const Team = () => {
  return (
    <section className="team section" id="team">
      <h2 className="section__title">Our Teams</h2>
      <div className="team__container container grid">
        <Profile />

        {/* <p className="team__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          delectus suscipit dolorem mollitia impedit sequi?
        </p> */}
      </div>
    </section>
  );
};

export default Team;
