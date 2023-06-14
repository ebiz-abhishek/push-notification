import react,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import { fetchToken, onMessageListener } from './firebase';
import RoutePage from './components/routes/index';
function App() {
  const [newFCMToken, setnewFCMToken] = useState('')
  fetchToken(setnewFCMToken);

  // onMessageListener().then(payload => {
  //   console.log('payload',payload)
  //   // setNotification({title: payload.notification.title, body: payload.notification.body})
  //   console.log(payload);
  // }).catch(err => console.log('failed: ', err));        
  console.log('newFCMToken',newFCMToken)
  return (
    <div className="App">
      <RoutePage/>
    </div>
  );
}

export default App;
