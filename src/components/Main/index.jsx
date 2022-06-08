import React from "react";
import "./index.scss";
import { SlideGallery } from "../SlideGallery/index";
import { NewsletterSubscription } from "../NewsletterSubscribtion";
import { SpecialistGalleryContainer } from "../SpecialistGalleryContainer";
//import { ProductCardContainer } from "../ProductCardContainer";

const Main = () => {
  return (
    <>
      <main>
        <SlideGallery />
        <SpecialistGalleryContainer />
        <NewsletterSubscription />
        {/*<ProductCardContainer />*/}
      </main>
    </>
  );
};

export { Main };
