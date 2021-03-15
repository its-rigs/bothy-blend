import * as React from 'react';

export const FindUs = () => {
  return (
    <section id="find-us" className="alternating">
      <div className="container">
        <h1>Find Us</h1>
        <p>We're here Wednesday to Sunday because weekends are key</p>
        <iframe
          title="Map location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2180.234619299312!2d-5.433947583970121!3d56.876220112254764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488eb3cb9f8318ed%3A0xf5cab59deef936a8!2sGlenfinnan%20Trail%20View%20Point!5e0!3m2!1sen!2sau!4v1615786607316!5m2!1sen!2sau"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};
