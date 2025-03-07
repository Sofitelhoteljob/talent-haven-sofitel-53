
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SocialMediaCardsProps {
  title: string;
  description: string;
  image: string;
  url: string;
  type?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  siteName?: string;
  keywords?: string;
  author?: string;
  language?: string;
}

export const SocialMediaCards = ({
  title,
  description,
  image,
  url,
  type = 'website',
  twitterCard = 'summary_large_image',
  siteName = 'Sofitel Frankfurt Opera',
  keywords = 'luxury hospitality jobs, hotel career, Sofitel careers, Frankfurt employment',
  author = 'Sofitel Frankfurt Opera',
  language = 'en'
}: SocialMediaCardsProps) => {
  // Ensure we have an absolute URL for the image
  const absoluteImageUrl = image.startsWith('http') 
    ? image 
    : `${window.location.origin}${image}`;
  
  // Ensure absolute URL for the canonical link
  const absoluteUrl = url.startsWith('http') 
    ? url 
    : `${window.location.origin}${url}`;

  return (
    <Helmet>
      {/* Basic SEO */}
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="language" content={language} />
      <meta name="robots" content="index, follow" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={absoluteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={absoluteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta name="twitter:site" content="@SofitelFrankfurt" />
      
      {/* LinkedIn */}
      <meta property="linkedin:title" content={title} />
      <meta property="linkedin:description" content={description} />
      <meta property="linkedin:image" content={absoluteImageUrl} />
      
      {/* Pinterest */}
      <meta name="pinterest:title" content={title} />
      <meta name="pinterest:description" content={description} />
      <meta name="pinterest:image" content={absoluteImageUrl} />
      
      {/* WhatsApp */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={absoluteUrl} />
    </Helmet>
  );
};
