import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  noindex?: boolean;
}

export const useSEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  noindex = false
}: SEOProps) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        metaDescription.setAttribute('content', description);
        document.head.appendChild(metaDescription);
      }

      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', description);
      } else {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        ogDescription.setAttribute('content', description);
        document.head.appendChild(ogDescription);
      }

      let twitterDescription = document.querySelector('meta[name="twitter:description"]');
      if (twitterDescription) {
        twitterDescription.setAttribute('content', description);
      } else {
        twitterDescription = document.createElement('meta');
        twitterDescription.setAttribute('name', 'twitter:description');
        twitterDescription.setAttribute('content', description);
        document.head.appendChild(twitterDescription);
      }
    }

    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        metaKeywords.setAttribute('content', keywords);
        document.head.appendChild(metaKeywords);
      }
    }

    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', canonicalUrl);
      } else {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        canonical.setAttribute('href', canonicalUrl);
        document.head.appendChild(canonical);
      }
    }

    if (title) {
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', title);
      } else {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        ogTitle.setAttribute('content', title);
        document.head.appendChild(ogTitle);
      }

      let twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) {
        twitterTitle.setAttribute('content', title);
      } else {
        twitterTitle = document.createElement('meta');
        twitterTitle.setAttribute('name', 'twitter:title');
        twitterTitle.setAttribute('content', title);
        document.head.appendChild(twitterTitle);
      }
    }

    if (ogImage) {
      let ogImageMeta = document.querySelector('meta[property="og:image"]');
      if (ogImageMeta) {
        ogImageMeta.setAttribute('content', ogImage);
      } else {
        ogImageMeta = document.createElement('meta');
        ogImageMeta.setAttribute('property', 'og:image');
        ogImageMeta.setAttribute('content', ogImage);
        document.head.appendChild(ogImageMeta);
      }

      let twitterImage = document.querySelector('meta[name="twitter:image"]');
      if (twitterImage) {
        twitterImage.setAttribute('content', ogImage);
      } else {
        twitterImage = document.createElement('meta');
        twitterImage.setAttribute('name', 'twitter:image');
        twitterImage.setAttribute('content', ogImage);
        document.head.appendChild(twitterImage);
      }
    }

    let robotsMeta = document.querySelector('meta[name="robots"]');
    const robotsContent = noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
    
    if (robotsMeta) {
      robotsMeta.setAttribute('content', robotsContent);
    } else {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      robotsMeta.setAttribute('content', robotsContent);
      document.head.appendChild(robotsMeta);
    }

  }, [title, description, keywords, canonicalUrl, ogImage, noindex]);
};

export const useStructuredData = (data: Record<string, unknown>) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript && existingScript.textContent !== JSON.stringify(data)) {
      document.head.removeChild(existingScript);
      document.head.appendChild(script);
    } else if (!existingScript) {
      document.head.appendChild(script);
    }

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [data]);
};