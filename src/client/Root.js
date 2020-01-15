import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../shared/App';

// const Root = (location) => ReactDOMServer.renderToString(
//   <StaticRouter location={location}>
//       <App />
//   </StaticRouter>
// )
const Root = () => (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

export default Root;