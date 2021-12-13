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

export default class Requests extends React.Component {
  state = {
    nameList: []
  }
  // make the GET request to fetch data from the URL then using promise function to handle response.
  componentDidMount() {
    axios.get(`http://192.168.1.200:3000/category`)
      .then(res => {
        const nameList = res.data;
        this.setState({ nameList });
      })
  }

  render() {
    const { nameList } = this.state;
    return (
      <ul>
        {
          nameList.map(categry => <li>{category.name}</li>)
        }
      </ul>
    )
  }
}