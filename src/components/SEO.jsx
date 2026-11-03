// src/components/SEO.jsx
import { Helmet } from 'react-helmet-async';

export default function SEO({
  title = 'سگال | فروشگاه تخصصی تجهیزات برق',
  description = 'فروشگاه تخصصی تجهیزات برق صنعتی، اتوماسیون و ابزار دقیق',
  keywords = 'برق صنعتی, اتوماسیون, سنسور, PLC, تابلو برق',
  image = '/assets/img/logo.png',
  url = '',
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph برای شبکه‌های اجتماعی */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}