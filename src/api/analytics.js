import ReactGA from "react-ga";

export const PICREW_ACTION = "Picrew";
export const WISUDAWAN_ACTION = "Wisudawan";
export const MAGAZINE_ACTION = "Wispril Magazine";

export const sendAnalyticsAction = (category, action) => {
  ReactGA.event({
    category,
    action,
  });
};
