/** @jsx jsx */
import { jsx } from 'theme-ui';

import icons from '../constants/icons';

type SvgIconProps = {
  icon: string;
  height?: number;
  width?: number;
};

const SvgIcon = ({ icon, height = 24, width = 24 }: SvgIconProps) => {
  const computedIcon = icons[icon];
  const { title, path } = computedIcon;

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      height={height}
      width={width}
      stroke="currentcolor"
      fill="currentcolor"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="0"
    >
      <title>{title}</title>
      {path}
    </svg>
  );
};

export default SvgIcon;
