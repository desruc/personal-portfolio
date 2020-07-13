/** @jsx jsx */
import { jsx, Box } from 'theme-ui';

import icons from './techIconConstants';

type TechIconProps = {
  icon: string;
};

const TechIcon = ({ icon }: TechIconProps) => {
  const computedIcon = icons[icon];
  const { color, svg, fill, title } = computedIcon;
  const computedFill = fill || '#ffffff';

  return (
    <Box
      className="tech-icon"
      title={title}
      sx={{
        backgroundColor: '#202022',
        height: '67px',
        width: '67px',
        padding: 10,
        margin: '0px 8px 8px 0px',
        transition: 'all .2s ease-in-out',
        transitionProperty: 'opacity, transform',
        svg: {
          transition: 'fill .2s ease-in-out',
          transitionProperty: 'fill',
          fill: computedFill
        },
        '&:hover': {
          opacity: '1 !important',
          transform: 'scale(1.3)',
          '& svg': {
            fill: color
          }
        }
      }}
    >
      {svg}
    </Box>
  );
};

export default TechIcon;
