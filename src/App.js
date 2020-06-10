import React, { Component } from 'react';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import HooksCakeContainer from './components/HooksCakeContainer';
import store from './redux/store';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';


class App extends Component {

  render() {
    return (
      <div className="App">
      <Provider store={store}>
      <UserContainer  />
      {/* <HooksCakeContainer/> */}
        {/* <ItemContainer cake/>
        <ItemContainer/>
        <CakeContainer/>
        <NewCakeContainer/> */}
        {/* <IceCreamContainer/> */}

      </Provider>
      </div>
    );
  }
}

export default App;