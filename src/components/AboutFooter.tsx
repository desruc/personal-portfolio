/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';

import SvgIcon from './SvgIcon';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const AboutFooter = () => {
  const { linkedIn, gitHub } = useSiteMetadata();

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fixed(width: 100, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Flex
      sx={{
        alignItems: 'center',
        mt: 4,
        '.gatsby-image-wrapper': {
          width: '50px !important',
          height: '50px !important',
          minWidth: 50
        }
      }}
    >
      <GatsbyImage
        fixed={data.file.childImageSharp.fixed}
        alt="James Cameron"
        sx={{
          width: 50,
          height: 50,
          borderRadius: '50%',
          marginRight: 10,
          '@media (min-width: 992px)': { marginRight: 4 }
        }}
      />
      <ul
        sx={{
          display: 'flex',
          margin: 0,
          padding: 0,
          listStyle: 'none',
          color: 'white',
          marginLeft: -16
        }}
      >
        <li sx={{ margin: '0px 16px' }}>
          <a
            href={linkedIn}
            target="_blank"
            rel="noreferrer"
            sx={{
              variant: 'links.social'
            }}
          >
            <SvgIcon icon="linkedin" height={16} width={16} />
            <span sx={{ marginLeft: 2 }}>LinkedIn</span>
            <span sx={{ marginLeft: 2 }}>
              <SvgIcon icon="externallink" height={16} width={16} />
            </span>
          </a>
        </li>
        <li sx={{ margin: '0px 16px' }}>
          <a
            href={gitHub}
            target="_blank"
            rel="noreferrer"
            sx={{
              variant: 'links.social'
            }}
          >
            <SvgIcon icon="github" height={16} width={16} />
            <span sx={{ marginLeft: 2 }}>GitHub</span>
            <span sx={{ marginLeft: 2 }}>
              <SvgIcon icon="externallink" height={16} width={16} />
            </span>
          </a>
        </li>
      </ul>
    </Flex>
  );
};

export default AboutFooter;
