(function() {
    const version = new Date().getTime(); // Use a timestamp as a version number

    const updateUrl = (url) => {
        const separator = url.indexOf('?') === -1 ? '?' : '&';
        return `${url}${separator}v=${version}`;
    };

    const updateElementSrc = (element, attribute) => {
        if (element.hasAttribute(attribute)) {
            element.setAttribute(attribute, updateUrl(element.getAttribute(attribute)));
        }
    };

    // Update all script tags
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach(script => updateElementSrc(script, 'src'));

    // Update all link tags with rel="stylesheet"
    const links = document.querySelectorAll('link[rel="stylesheet"]');
    links.forEach(link => updateElementSrc(link, 'href'));
})();
