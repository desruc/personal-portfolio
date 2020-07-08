/** @jsx jsx */
import { jsx } from 'theme-ui';

const ExternalLinkIcon = ({ height = 24, width = 24 }) => (
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
    <title>External Link Icon</title>
    <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
  </svg>
);

export default ExternalLinkIcon;
