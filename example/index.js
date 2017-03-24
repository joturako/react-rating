import ReactRatingFloat from '../dist/react-rating-float';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div style={{background: 'red'}}><ReactRatingFloat rate={3.7} total={5}/></div>);
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
