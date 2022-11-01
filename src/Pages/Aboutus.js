import React from "react";
import aboutus_image from "./aboutus_banner.jpg";
import "./Aboutus.css";
function Aboutus() {
  return (
    <div className="Aboutus">
      <img src={aboutus_image} className="aboutus_banner" alt="" />
      <div className="about_company_text">
        <h1>About Company</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
          amet iusto incidunt repudiandae quia voluptates! Non ipsa vel natus
          animi in quos, itaque necessitatibus odit quod reprehenderit id dicta
          quaerat excepturi molestiae libero commodi architecto quo inventore
          totam consequuntur quis. Aperiam, natus perferendis earum porro sit
          vel suscipit pariatur voluptate ad quidem eius, nisi quibusdam
          facilis! Doloribus molestias qui sit velit cumque laborum iure, dicta
          eaque odit reprehenderit est ducimus sint voluptate, beatae accusamus
          unde fugit, eum impedit perspiciatis! Libero sit impedit nostrum, quod
          aliquid sunt delectus neque rerum eum. Saepe accusamus quam
          consectetur iusto rerum itaque maiores recusandae praesentium.
        </p>
      </div>
      <div className="people">
        <div className="person1">
          <svg width="400" height="150">
            <circle
              r="70"
              cx="200"
              cy="70"
              stroke="green"
              strokeWidth="0"
              fill="gray"
            />
          </svg>
          <div className="about_person_text">
            <h3>Abhinav H. Suna</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis deleniti ea quos alias distinctio nobis magnam iusto
              ut, laboriosam nostrum exercitationem at voluptatibus maiores unde
              tempora quam cupiditate id error facilis molestias incidunt sequi
              enim! Est veritatis eligendi ullam pariatur! Obcaecati omnis amet
              fugiat ex ipsa quam sequi, harum quis.
            </p>
          </div>
        </div>
        <div className="person2">
          <svg width="400" height="150">
            <circle
              r="70"
              cx="200"
              cy="70"
              stroke="green"
              strokeWidth="0"
              fill="gray"
            />
          </svg>
          <div className="about_person_text">
            <h3>Devyani Dubey</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis deleniti ea quos alias distinctio nobis magnam iusto
              ut, laboriosam nostrum exercitationem at voluptatibus maiores unde
              tempora quam cupiditate id error facilis molestias incidunt sequi
              enim! Est veritatis eligendi ullam pariatur! Obcaecati omnis amet
              fugiat ex ipsa quam sequi, harum quis.
            </p>
          </div>
        </div>
        <div className="person3">
          <svg width="400" height="150">
            <circle
              r="70"
              cx="200"
              cy="70"
              stroke="green"
              strokeWidth="0"
              fill="gray"
            />
          </svg>
          <div className="about_person_text">
            <h3>Rahul Agrawal</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis deleniti ea quos alias distinctio nobis magnam iusto
              ut, laboriosam nostrum exercitationem at voluptatibus maiores unde
              tempora quam cupiditate id error facilis molestias incidunt sequi
              enim! Est veritatis eligendi ullam pariatur! Obcaecati omnis amet
              fugiat ex ipsa quam sequi, harum quis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
