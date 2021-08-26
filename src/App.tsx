import {useDispatch} from 'react-redux';
import {Route} from 'react-router-dom';
import {Accounts} from './components/accounts/Accounts';
import {All} from './components/home/Home';
import {Data} from './components/data/Data';
import {Transactions} from './components/transactions/Transactions';
import {Users} from './components/users/Users';
import {firebaseConfig} from './components/constants/firebase.config';
import firebase from 'firebase';
require('firebase/firebase-auth');
firebase.initializeApp(firebaseConfig);

export function App() {
    return (
        <div>
            <Route exact path="/">
                <All />
            </Route>
            <Route path="/users">
                <Users />
            </Route>
            <Route path="/accounts">
                <Accounts />
            </Route>
            <Route path="/transactions">
                <Transactions />
            </Route>
            <Route path="/data">
                <Data />
            </Route>
        </div>
    );
}

export default App;
