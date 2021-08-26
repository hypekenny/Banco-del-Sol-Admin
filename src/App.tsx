import {Route} from 'react-router-dom';
import {Home} from './components/home/Home';
import {firebaseConfig} from './components/constants/firebase.config';
import firebase from 'firebase';
require('firebase/firebase-auth');
firebase.initializeApp(firebaseConfig);

export function App() {
    return (
        <div>
            <Route exact path="/">
                <Home />
            </Route>
        </div>
    );
}

export default App;
