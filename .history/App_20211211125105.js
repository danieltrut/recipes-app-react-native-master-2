/* import React from 'react';
import ScreenDisplay from './src/navigations/NavigationTabs';

export default function App() {
  return (
    <ScreenDisplay />
  );
}

 */

import axios from 'axios';
const baseUrl = 'http://localhost:3000';

// Passing configuration object to axios
axios({
  method: 'get',
  url: `${baseUrl}/category`,
}).then((response) => {
  console.log(response.data);
});


export default function App() {
  return (
    <ScreenDisplay />
  );
}