import { createGlobalStyle } from 'styled-components';
import { lightShades } from './components/layout/vars';

import extraLight from './assets/fonts/source-sans-pro-v21-latin_cyrillic-200.woff2';
import light from './assets/fonts/source-sans-pro-v21-latin_cyrillic-300.woff2';
import regular from './assets/fonts/source-sans-pro-v21-latin_cyrillic-regular.woff2';
import semiBold from './assets/fonts/source-sans-pro-v21-latin_cyrillic-600.woff2';
import bold from './assets/fonts/source-sans-pro-v21-latin_cyrillic-700.woff2';
import extraBold from './assets/fonts/source-sans-pro-v21-latin_cyrillic-900.woff2';
const GlobalStyles = createGlobalStyle`
    /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}



main {
  display: block;
}



h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}


pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}



code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}



sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}



legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}


::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}


@font-face {
  font-family: 'ExtraLightSans';
  font-style: normal;
  font-weight: 200;
  src: url(${extraLight}) format('woff2');
}
@font-face {
  font-family: 'LightSans';
  font-style: normal;
  font-weight: 300;
  src: url(${light}) format('woff2');
}
@font-face {
  font-family: 'RegularSans';
  font-style: normal;
  font-weight: 400;
  src: url(${regular}) format('woff2');
}
@font-face {
  font-family: 'SemiBoldSans';
  font-style: normal;
  font-weight: 600;
  src: url(${semiBold}) format('woff2');
}
@font-face {
  font-family: 'BoldSans';
  font-style: normal;
  font-weight: 700;
  src: url(${bold}) format('woff2');
}
@font-face {
  font-family: 'ExtraBoldSans';
  font-style: normal;
  font-weight: 900;
  src: url(${extraBold}) format('woff2');
}
/* html{
  font-size: 16px;
} */
body{
  color: ${lightShades};
  background-color: ${lightShades};
  font-size: 20pt;
  font-family: 'LightSans';
  font-weight: 300;
  @media (max-width:1680px){
    font-size: 15pt;
  }
  @media (max-width:1280px){
    font-size: 14pt;
  }
  @media (max-width: 736px){
    font-size: 12pt;
  }
  @media (max-width: 360px){
    font-size: 11pt;
  }
}
.main {
  position: relative;
  overflow: hidden;
  width: 100%;
  margin-bottom: 1em;
  /* background: #ffffff; */
  border-radius: 0.5rem;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.25);
  transition: min-height 0.5s ease-in-out, max-height 0.5s ease-in-out;
  @media (max-width: 980px) {
    /* padding: 1.5em 0; */
    margin-bottom: 1.5em;

  }
  @media (max-width: 736px) {
    /* padding: 1em 0; */
    /* padding: 0; */
    /* margin-bottom: 1em; */
    margin-bottom: 0;
    max-width: 100%;
    border-radius: unset;

  }

  /* @media (max-width: 360px) {
    margin-bottom: 0;
    max-width: 100%;
    border-radius: unset;
  } */
}
`;
export default GlobalStyles;
