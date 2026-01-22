# Design for Touch Devices

### When designing for touch devices, it is important to consider the size of the touch targets. Touch targets are the areas that respond to user input, such as buttons and links. If the touch targets are too small, users may have difficulty tapping them accurately.

### The Apple Design Handbook recommends that touch item on mobile devices be at least 44px by 44px.

### The Android Accessibility Guide suggests touch areas are at least 48dp by 48dp.

### The Android Accessibility Guide uses the term dp, which stands for density-independent pixels.

### Density-independent pixels are a unit of measurement that is used to ensure that touch targets are the same size on all devices, regardless of their screen resolution.


### Social media sites, such as Facebook, crawl websites so they can provide a rich preview to their users that includes information such as the title, description, and a preview image. Without any additional information, they will attempt to guess the content of your page, however, you can provide this content to these social media platforms directly, so that your site will appear the way that you would like. This information is provided through social media meta tags.

### Facebook uses Open Graph meta tags to provide a rich preview of your page when it is shared on their platform.

#### The following are common Open Graph (og) properties that you may want include in your HTML pages:

#### <meta property="og:title" content=""> — The content contains the title of your page. The title should be descriptive and relevant to the content of your page.
#### <meta property="og:description" content=""> — The content is a short description or summary of the page. Do not reuse your title. The length is between 2 and 4 sentences with a maximum of 200 characters.
#### <meta property="og:image" content=""> — An absolute URL to an image that represents the content of your page. It should be at least 600x315 pixels with about a 2 to 1 aspect ratio.
#### <meta property="og:locale" content=""> — The canonical URL for your page with any variables or parameters.

#### <meta name="twitter:url" content="https://www.microsoft.com/en-us">
#### <meta name="twitter:title" content="Microsoft – AI, Cloud, Productivity, Computing, Gaming &amp; Apps">
#### <meta name="twitter:description" content="Explore Microsoft products and services and support for your home or business. Shop Microsoft 365, Copilot, Teams, Xbox, Windows, Azure, Surface and more.">
#### <meta name="twitter:card" content="summary">