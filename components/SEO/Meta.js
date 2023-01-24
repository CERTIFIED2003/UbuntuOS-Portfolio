import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
           /* Primary Meta Tags */
            <title>Ubuntu OS | Shubham</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Ubuntu OS | Shubham" />
            <meta name="description"
                content="Ubuntu OS recreated using NextJS and Tailwindcss. Made with ❤ by Shubham Lal" />
            <meta name="author" content="Shubham Lal (certified2003)" />
            <meta name="keywords"
                content="certified2003, certified2003's portfolio, certified2003 linux, ubuntu portfolio, shubham lal protfolio,shubham lal computer, shubham lal, shubham ubuntu, shubham lal ubuntu portfolio" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            /* Search Engine */
            <meta name="image" content="images/logos/fevicon.png" />
            /* Schema.org for Google */
            <meta itemProp="name" content="Ubuntu OS | Shubham" />
            <meta itemProp="description"
                content="Ubuntu OS recreated using NextJS and Tailwindcss. Made with ❤ by Shubham Lal" />
            <meta itemProp="image" content="images/logos/fevicon.png" />
            /* Twitter */
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Ubuntu OS | Shubham" />
            <meta name="twitter:description"
                content="Ubuntu OS recreated using NextJS and Tailwindcss. Made with ❤ by Shubham Lal" />
            <meta name="twitter:site" content="certified2003" />
            <meta name="twitter:creator" content="certified2003" />
            <meta name="twitter:image:src" content="images/logos/fevicon.png" />
            /* Open Graph general (Facebook, Pinterest & Google+) */
            <meta name="og:title" content="Ubuntu OS | Shubham" />
            <meta name="og:description"
                content="Ubuntu OS recreated using NextJS and Tailwindcss. Made with ❤ by Shubham Lal" />
            <meta name="og:image" content="images/logos/fevicon.png" />
            <meta name="og:url" content="http://certified2003.github.io/" />
            <meta name="og:site_name" content="shubham lal Personal Portfolio" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/fevicon.svg" />
            <link rel="apple-touch-icon" href="images/logos/fevicon.png" />
            {/* <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link> */}
        </Head>
    )
}
