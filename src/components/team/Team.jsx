import React from "react";
import './team.css'
import Profile from "./Profile";

const Team = () => {
  return (
    <section className="team section" id="team">
      <h2 className="section__title">Our Teams</h2>
      <div className="team__container container grid">
        <Profile />
      </div>
    </section>
  );
};

export default Team;
