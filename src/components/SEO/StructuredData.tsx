
interface StructuredDataProps {
  type: 'Organization' | 'JobPosting' | 'FAQPage' | 'Hotel';
  data: Record<string, any>;
}

export const StructuredData = ({ type, data }: StructuredDataProps) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
};
