import React from 'react';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

type Props = {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  children?: React.ReactNode;
};

const SEO = ({ title, description, pathname, image, children }: Props) => {
  const {
    siteTitle,
    siteTitleAlt,
    siteUrl,
    siteDescription,
    siteLanguage,
    siteImage,
    author
  } = useSiteMetadata();

  const computedTitle = title || siteTitleAlt;
  const computedDescription = description || siteDescription;
  const computedUrl = `${siteUrl}${pathname || ''}`;
  const computedImage = `${siteUrl}${image || siteImage}`;

  return (
    <Helmet
      title={title}
      defaultTitle={siteTitleAlt}
      titleTemplate={`%s | ${siteTitle}`}
    >
      <html lang={siteLanguage} />
      <meta name="description" content={computedDescription} />
      <meta name="image" content={computedImage} />
      <meta property="og:title" content={computedTitle} />
      <meta property="og:url" content={computedUrl} />
      <meta property="og:description" content={computedDescription} />
      <meta property="og:image" content={computedImage} />
      <meta property="og:type" content="website" />
      <meta property="og:image:alt" content={computedDescription} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={computedTitle} />
      <meta name="twitter:url" content={computedUrl} />
      <meta name="twitter:description" content={computedDescription} />
      <meta name="twitter:image" content={computedImage} />
      <meta name="twitter:image:alt" content={computedDescription} />
      <meta name="twitter:creator" content={author} />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={withPrefix('/favicon-32x32.png')}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={withPrefix('/favicon-16x16.png')}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={withPrefix('/apple-touch-icon.png')}
      />
      {children}
    </Helmet>
  );
};

export default SEO;
