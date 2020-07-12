/** @jsx jsx */
import { jsx } from 'theme-ui';

type NavListItemProps = {
  number: string;
  title: string;
  active: boolean;
  onClick: (elementId: string) => void;
};

const NavListItem = ({ number, title, active, onClick }: NavListItemProps) => (
  <li
    sx={{
      mt: 4,
      mb: 3,
      fontSize: 10
    }}
  >
    <a
      role="presentation"
      onClick={() => onClick(title)}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        color: active ? '#ffffff' : 'inherit',
        textDecoration: 'none',
        cursor: 'pointer',
        '&:hover': {
          '.nav-divider': {
            width: 48,
            backgroundColor: '#ffffff'
          },
          '& span': {
            color: '#ffffff'
          }
        }
      }}
    >
      <span
        sx={{
          color: active ? '#ffffff' : 'text',
          letterSpacing: 3,
          transitionProperty: 'color',
          transition: 'all 0.2s ease-in-out'
        }}
      >
        {number}
      </span>
      <span
        className="nav-divider"
        sx={{
          backgroundColor: active ? '#ffffff' : 'text',
          height: 1,
          width: active ? 48 : 28,
          ml: 2,
          mr: 2,
          transitionProperty: 'width, background-color',
          transition: 'all 0.2s ease-in-out'
        }}
      />
      <span
        sx={{
          textTransform: 'uppercase',
          letterSpacing: 3,
          transitionProperty: 'color',
          transition: 'all 0.2s ease-in-out'
        }}
      >
        {title}
      </span>
    </a>
  </li>
);

export default NavListItem;
