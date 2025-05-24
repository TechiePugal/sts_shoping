import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SeoProps } from '../../types';

const SeoHead: React.FC<SeoProps> = ({ 
  title, 
  description, 
  keywords,
  canonical
}) => {
  const fullTitle = `${title} | Super Textile Services - Textile Machinery Spare Parts`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SeoHead;