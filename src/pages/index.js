import * as React from "react";

const Navigation = () => {
  const [isOpen, setOpen] = React.useState(false);

  let active = isOpen ? 'active' : '';

  return (
    <nav>
      <ul class={`menu ${active}`}>
        <li class="logo"><a href="#home">Bothy Blend</a></li>
        <li class="item"><a href="#home">Home</a></li>
        <li class="item"><a href="#events">Events</a></li>
        <li class="item"><a href="#find-us">Find Us</a></li>
        <li class="item"><a href="#about">About</a></li>
        <li class="item"><a href="#contact">Contact</a></li>
        <li class="toggle"><a href="#" onClick={() => setOpen(!isOpen)}><i class="fas fa-bars">=</i></a></li>
      </ul>
    </nav>
  )

}

const IndexPage = () => {
  return (
    <React.Fragment>
      <Navigation/>


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
