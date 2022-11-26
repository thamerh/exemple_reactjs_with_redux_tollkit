import './App.css';
import Profile from './Profile';
import Login from './Login';

import {store} from './Store'; // the store of data shareable between compnents
import {Provider} from 'react-redux'; // For provide the store to all children

function App() {
  return (
    <Provider store={store}>
      <Profile/>
      <Login/>
    </Provider>
  );
}

export default App;
