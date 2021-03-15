import * as React from 'react';

export const Navigation = () => {
  const [isOpen, setOpen] = React.useState(false);

  let active = isOpen ? 'active' : '';

  const menuAnchor = (text, href) => {
    return (
      <a href={`#${href}`} onClick={() => setOpen(false)}>
        {text}
      </a>
    );
  };

  return (
    <nav>
      <div className="container">
        <ul class={`menu ${active}`}>
          <li class="logo">{menuAnchor('Bothy Blend', 'home')}</li>
          <li class="item">{menuAnchor('Home', 'home')}</li>
          <li class="item">{menuAnchor('Events', 'events')}</li>
          <li class="item">{menuAnchor('Find Us', 'find-us')}</li>
          <li class="item">{menuAnchor('About', 'about')}</li>
          <li class="item">{menuAnchor('Contact', 'contact')}</li>
          <li class="toggle">
            <button onClick={() => setOpen(!isOpen)}>
              <i class="fas fa-bars">=</i>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
