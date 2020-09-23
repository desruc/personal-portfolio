/** @jsx jsx */
import { jsx, Box, Heading, Text } from 'theme-ui';
import GatsbyImage from 'gatsby-image';

import SvgIcon from './SvgIcon';

type FeaturedProjectCardProps = {
  gitHubLink: string;
  externalLink?: string;
  title: string;
  description: string;
  stack?: string[];
  image: {
    aspectRatio: number;
    src: string;
    srcSet: string;
    sizes: string;
    base64: string;
    tracedSVG: string;
    srcWebp: string;
    srcSetWebp: string;
  };
};

const FeaturedProjectCard = ({
  gitHubLink,
  externalLink,
  title,
  description,
  stack,
  image
}: FeaturedProjectCardProps) => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      alignItems: 'center',
      gap: 10,
      '&:not(:last-child)': {
        mb: 40,
        '@media (min-width: 1280px)': {
          mb: 88
        }
      },
      '&:nth-of-type(odd)': {
        '& .project-stack': {
          '@media (min-width: 768px)': { pl: 60 }
        }
      },
      '&:nth-of-type(even)': {
        '& .project-stack': {
          '@media (min-width: 768px)': { pr: 60 }
        },
        '& .project-info': {
          textAlign: 'left',
          '@media (min-width: 768px)': {
            gridColumnEnd: 7,
            gridColumnStart: 1
          }
        },
        '& .project-image': {
          '@media (min-width: 768px)': {
            gridColumnEnd: 13,
            gridColumnStart: 6
          }
        }
      }
    }}
  >
    <Box
      sx={{
        gridColumnEnd: 13,
        gridColumnStart: 1,
        gridRowStart: 1,
        gridRowEnd: 1,
        display: 'block',
        '@media (min-width: 768px)': {
          display: 'none'
        }
      }}
    >
      <Heading
        as="h5"
        sx={{
          textTransform: 'uppercase',
          fontWeight: 600,
          letterSpacing: 3,
          color: 'text',
          fontSize: '9px',
          mb: 1
        }}
      >
        Featured
      </Heading>
      <Heading as="h3" sx={{ fontSize: 4, fontWeight: 500 }}>
        <a
          href={externalLink || gitHubLink}
          target="_blank"
          rel="noreferrer"
          sx={{ variant: 'links.standard' }}
        >
          {title}
        </a>
      </Heading>
    </Box>
    <Box
      className="project-image"
      sx={{
        gridColumnEnd: 13,
        gridColumnStart: 1,
        gridRowStart: 2,
        gridRowEnd: 2,
        '@media (min-width: 768px)': {
          gridColumnEnd: 8,
          gridColumnStart: 1,
          gridRowStart: 1,
          gridRowEnd: 1
        }
      }}
    >
      <a
        href={externalLink || gitHubLink}
        target="_blank"
        rel="noreferrer"
        sx={{
          height: '100%',
          width: '100%',
          '@media (min-width: 768px)': {
            '& .gatsby-image-wrapper': {
              transition: 'box-shadow 500ms ease 0s',
              boxShadow:
                '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
              '& img': {
                transition: 'all 500ms ease 0s !important',
                filter: 'grayscale(1)'
              }
            },
            '&:hover': {
              '& .gatsby-image-wrapper': {
                boxShadow:
                  '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22) !important',
                '& img': {
                  filter: 'grayscale(0)'
                }
              }
            }
          }
        }}
      >
        <GatsbyImage fluid={image} />
      </a>
    </Box>
    <Box
      className="project-info"
      sx={{
        zIndex: 1,
        textAlign: 'right',
        gridColumnEnd: 13,
        gridColumnStart: 1,
        gridRowStart: 3,
        gridRowEnd: 3,
        '@media (min-width: 768px)': {
          gridColumnEnd: 13,
          gridColumnStart: 7,
          gridRowStart: 1,
          gridRowEnd: 1
        }
      }}
    >
      <Heading
        as="h5"
        sx={{
          textTransform: 'uppercase',
          fontWeight: 600,
          letterSpacing: 3,
          color: 'text',
          fontSize: '9px',
          mb: 1,
          display: 'none',
          '@media (min-width: 768px)': {
            display: 'block'
          }
        }}
      >
        Featured
      </Heading>
      <Heading
        as="h3"
        sx={{
          fontSize: 4,
          fontWeight: 500,
          mb: 3,
          display: 'none',
          '@media (min-width: 768px)': {
            display: 'block'
          }
        }}
      >
        <a
          href={externalLink || gitHubLink}
          target="_blank"
          rel="noreferrer"
          sx={{ variant: 'links.standard' }}
        >
          {title}
        </a>
      </Heading>
      <Box sx={{ bg: '#202022', padding: 3 }}>
        <Text as="p" sx={{ fontSize: 12 }}>
          {description}
        </Text>
      </Box>
      {stack && (
        <Text
          className="project-stack"
          as="p"
          sx={{
            mt: 3,
            textTransform: 'uppercase',
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: 3,
            color: '#ffffff',
            mb: 3
          }}
        >
          {stack.join(', ')}
        </Text>
      )}
      <a
        href={gitHubLink}
        target="_blank"
        rel="noreferrer"
        sx={{
          variant: 'links.standard',
          cursor: 'pointer'
        }}
      >
        <SvgIcon icon="github" height={18} width={18} />
      </a>
      {externalLink && (
        <a
          href={externalLink}
          target="_blank"
          rel="noreferrer"
          sx={{
            variant: 'links.standard',
            cursor: 'pointer',
            ml: 3
          }}
        >
          <SvgIcon icon="externallink" height={18} width={18} />
        </a>
      )}
    </Box>
  </Box>
);

export default FeaturedProjectCard;
