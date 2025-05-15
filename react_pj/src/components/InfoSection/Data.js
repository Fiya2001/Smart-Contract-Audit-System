export const homeObjOne = {
  id: 'about',
  lightBg: false, // Background color is not light
  lightText: true, // Text color is light
  lightTextDesc: true, // Text description color is light
  topLine: 'Uplond',
  headline: 'Uplond Here',
  description: 'Uplond Here', // Description text
  buttonLabel: 'Get Started', // Button label text
  imgStart: false, // Image does not start on the left
  img: require('../../images/uplondicon.png'), // Image source
  dark: true, // Dark theme
  primary: true, // Primary theme
  darkText: false // Text is not dark
};

export const homeObjTwo = {
  id: 'uplond',
  lightBg: true, // Background color is light
  lightText: false, // Text color is not light
  lightTextDesc: false, // Text description color is not light
  topLine: 'Scan System',
  headline: 'QuickScan your connect',
  description:
    'Start a smart contract scan by selecting from a variety of supported protocols and get a quick analysis report in seconds.', // Description text
  buttonLabel: 'Learn More', // Button label text
  imgStart: true, // Image starts on the left
  img: require('../../images/uplondicon.png'), // Image source
  dark: false, // Not a dark theme
  primary: false, // Not a primary theme
  darkText: true // Text is dark
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true, // Background color is light
  lightText: false, // Text color is not light
  lightTextDesc: false, // Text description color is not light
  topLine: 'Sign Up',
  headline: 'Creating an account is extremely easy',
  description:
    "Get everything set up and ready in under 1 minute. Let's go.", // Description text
  imgStart: false, // Image does not start on the left
  img: require('../../images/signIn.png'), // Image source
  dark: false, // Not a dark theme
  primary: false, // Not a primary theme
  darkText: true // Text is dark
};
