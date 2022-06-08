import React from "react";
import "./index.scss";

const NewsletterSubscription = () => {
  return (
    <>
      <section className="newsletter-subscription">
        <div className="newsletter-subscription--txt">
          <h3 className="newsletter-subscription--txt-title">
            Subscribe to Newsletters
          </h3>
          <p className="newsletter-subscription--txt-paragraph">
            Be aware of upcoming sales and events. Receive gifts and special
            offers!
          </p>
        </div>
        <form
          action=""
          method="post"
          className="
          newsletter-subscription--form"
        >
          <label
            htmlFor="email"
            className="
          newsletter-subscription--form-email"
          >
            <input type="email" name="email" placeholder="Ingresa tu correo" />
          </label>
          <input
            type="submit"
            value="SUBSCRIBE"
            className="
          newsletter-subscription--form-subscribe"
          />
        </form>
      </section>
    </>
  );
};

export { NewsletterSubscription };
