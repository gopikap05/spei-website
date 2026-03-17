import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-Q31XM6K6CH"); // ← replace later
};

export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};