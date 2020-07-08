/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';

import ExternalLinkIcon from './icons/ExternalLinkIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import GitHubIcon from './icons/GitHubIcon';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const AboutFooter = () => {
  const { linkedIn, gitHub } = useSiteMetadata();

  return (
    <Flex sx={{ alignItems: 'center' }}>
      <img
        src="https://via.placeholder.com/150"
        alt="James Cameron"
        sx={{ width: 50, height: 50, borderRadius: '50%', marginRight: 30 }}
      />
      <ul
        sx={{
          display: 'flex',
          margin: 0,
          padding: 0,
          listStyle: 'none',
          color: 'white'
        }}
      >
        <li sx={{ margin: '0px 16px' }}>
          <a
            href={linkedIn}
            target="_blank"
            rel="noreferrer"
            sx={{ textDecoration: 'none', color: 'inherit' }}
          >
            <LinkedInIcon height={16} width={16} />
            <span sx={{ marginLeft: 2 }}>LinkedIn</span>
            <span sx={{ marginLeft: 2 }}>
              <ExternalLinkIcon height={16} width={16} />
            </span>
          </a>
        </li>
        <li sx={{ margin: '0px 16px' }}>
          <a
            href={gitHub}
            target="_blank"
            rel="noreferrer"
            sx={{ textDecoration: 'none', color: 'inherit' }}
          >
            <GitHubIcon height={16} width={16} />
            <span sx={{ marginLeft: 2 }}>GitHub</span>
            <span sx={{ marginLeft: 2 }}>
              <ExternalLinkIcon height={16} width={16} />
            </span>
          </a>
        </li>
      </ul>
    </Flex>
  );
};

export default AboutFooter;
