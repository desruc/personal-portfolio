/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import NavListItem from './NavListItem';

const Navigation = () => {
  // Local state
  const [active, setActive] = useState('projects');

  // On click event handler
  const scrollTo = (elementId: string): void => {
    const el = document.getElementById(elementId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Update active on scroll
  useScrollPosition(
    ({ currPos }) => {
      const posY = currPos.y;

      let projectsOffset = 0;
      let skillsOffset = 0;
      let contactOffset = 0;

      const projectsEl = document.getElementById('projects');
      if (projectsEl) projectsOffset = posY + projectsEl.offsetTop;

      const skillsEl = document.getElementById('skills');
      if (skillsEl) skillsOffset = posY + skillsEl.offsetTop;

      const contactEl = document.getElementById('contact');
      if (contactEl) contactOffset = posY + contactEl.offsetTop;

      let current = 'projects';

      if (projectsOffset < 150) current = 'projects';
      if (skillsOffset < 150) current = 'skills';
      if (contactOffset < 150) current = 'contact';

      if (current !== active) setActive(current);
    },
    [active, setActive]
  );

  return (
    <nav sx={{ mt: 4 }}>
      <ul
        sx={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <NavListItem
          number="01"
          title="projects"
          active={active === 'projects'}
          onClick={scrollTo}
        />
        <NavListItem
          number="02"
          title="skills"
          active={active === 'skills'}
          onClick={scrollTo}
        />
        <NavListItem
          number="03"
          title="contact"
          active={active === 'contact'}
          onClick={scrollTo}
        />
      </ul>
    </nav>
  );
};

export default Navigation;
