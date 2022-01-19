import './App.css'

import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import routes from './routes';

const App = (props) => {

  // const [loggedInStatus, setLoggedInStatus ] = useState(false);
  // const history = useHistory();



  // useEffect(() => {
  //   setLoggedInStatus(props.state.loggedIn);
  //   if (!props.state.loggedIn){
  //     history.push("/main-menu");
  //   }
  // }, [props.state])

  return (
      <div className='App'>
        {/* {!loggedInStatus} */}

        {/* {loggedInStatus &&
          <main>
            {routes}
          </main>

        } */}
          {routes}
      </div>
  )
}

const mapStateToProps = (reduxState) => {

  return {
    state: reduxState
  }
}

export default connect(mapStateToProps)(App);
