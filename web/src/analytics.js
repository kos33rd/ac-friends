import ReactGA from 'react-ga'

export const initializeAnalytics = () => {
  ReactGA.initialize(GOOGLE_ANALYTICS_ID)
  ReactGA.pageview(window.location.pathname + window.location.search)
}
