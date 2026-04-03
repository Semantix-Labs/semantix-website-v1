import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    canonicalUrl?: string;
    ogImage?: string;
    type?: 'website' | 'article';
    noIndex?: boolean;
}

export const SEO = ({
    title,
    description,
    keywords,
    canonicalUrl,
    ogImage = 'https://semantixlabs.com/og-image.png',
    type = 'website',
    noIndex = false,
}: SEOProps) => {
    const siteName = 'Semantix Labs';
    const fullTitle = `${title} | ${siteName}`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'} />
            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content={siteName} />
            {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@semantixlabs" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* International SEO */}
            {canonicalUrl && <link rel="alternate" href={canonicalUrl} hrefLang="en" />}
            {canonicalUrl && <link rel="alternate" href={canonicalUrl} hrefLang="x-default" />}
        </Helmet>
    );
};
