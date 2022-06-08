import React from "react";
import "./index.scss";
import { specialists } from "../../data";

const SpecialistGalleryContainer = () => {
  return (
    <>
      <section className="specialist">
        <div className="specilist-gallery">
          <div className="specialist-gallery--title">
            <h2>
              PROFESIONALES <span>ESPECIALISTAS</span>
            </h2>
          </div>
          <div className="specialist-gallery--images">
            {specialists.map((specialist) => {
              return (
                <img
                  className={"item-" + specialist.id}
                  src={specialist.image}
                  alt="specialist"
                  key={specialist.id}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export { SpecialistGalleryContainer };
