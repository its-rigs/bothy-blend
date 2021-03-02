import * as React from "react";

const Navigation = () => {
  const [isOpen, setOpen] = React.useState(false);

  let active = isOpen ? 'active' : '';

  const menuAnchor = (text, href) => {
    return (<a href={`#${href}`} onClick={() => setOpen(false)}>{text}</a>);
  }

  return (
    <nav>
      <ul class={`menu ${active}`}>
        <li class="logo">{menuAnchor("Bothy Blend", "home")}</li>
        <li class="item">{menuAnchor("Home", "home")}</li>
        <li class="item">{menuAnchor("Events", "events")}</li>
        <li class="item">{menuAnchor("Find Us", "find-us")}</li>
        <li class="item">{menuAnchor("About", "about")}</li>
        <li class="item">{menuAnchor("Contact", "contact")}</li>
        <li class="toggle"><button onClick={() => setOpen(!isOpen)}><i class="fas fa-bars">=</i></button></li>
      </ul>
    </nav>
  )

}

const IndexPage = () => {
  return (
    <React.Fragment>
      <Navigation />


      <main className="grid-container">

        <section id="home">
          Some image
        </section>

        <section id="events">
          Events
        </section>

        <section id="find-us">
          Find Us
        </section>

        <section id="about">
          About Us
        </section>

        <section id="contact">
          Contact Us
        </section>
      </main>
    </React.Fragment>
  );
};

export default IndexPage;
