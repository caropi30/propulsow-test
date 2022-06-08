import React from "react";
import "./index.scss";
import { SlideGallery } from "../SlideGallery/index";
import { NewsletterSubscription } from "../NewsletterSubscribtion";

const Main = () => {
  return (
    <>
      <main>
        <SlideGallery />
        <NewsletterSubscription />
      </main>
    </>
  );
};

export { Main };
