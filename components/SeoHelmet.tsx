import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://sumitchauhan.me';
const DEFAULT_TITLE = 'Sumit Chauhan | Systems Engineer & Full-Stack Architect';
const DEFAULT_DESC = 'Systems engineer building WebAssembly kernels, production React infrastructure, and CLI tools like ForgeStack OS. Rust, TypeScript, Flutter.';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.webp`;

interface SeoHelmetProps {
  title?: string;
  description?: string;
  ogImage?: string;
  path?: string;
}

const SeoHelmet: React.FC<SeoHelmetProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  ogImage = DEFAULT_OG_IMAGE,
  path = '/',
}) => {
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Sumit Chauhan Portfolio" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@sumitchauhan" />
    </Helmet>
  );
};

export default SeoHelmet;
