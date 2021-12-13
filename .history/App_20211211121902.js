/* import React from 'react';
import ScreenDisplay from './src/navigations/NavigationTabs';

export default function App() {
  return (
    <ScreenDisplay />
  );
}
 */


import React from 'react';
import axios from 'axios';
const baseUrl = 'http://localhost:3000';

export default function App() {
  // Passing configuration object to axios
  const fetchUser = async () => {
    const configurationObject = {
      method: 'get',
      url: `${baseUrl}/category`,
    };
    const response = await axios(configurationObject);
    console.log(response.data);
  };

  // Invoking get method to perform a GET request
  const fetchUser = async () => {
    const url = `${baseUrl}/category`;
    const response = await axios.get(url);
    console.log(response.data);
  };

  return (
    <ScreenDisplay />
  );
}
