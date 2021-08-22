import {useDispatch} from 'react-redux';
import {Route} from 'react-router-dom';
import {Accounts} from './components/accounts/Accounts';
import {All} from './components/home/Home';
import {Data} from './components/data/Data';
import {Transactions} from './components/transactions/Transactions';
import {Users} from './components/users/Users';
import {getTransactions, getUsers, getAccounts, setToken} from './redux/actions';
import {firebaseConfig} from './components/constants/firebase.config';
import firebase from 'firebase';
require('firebase/firebase-auth');
firebase.initializeApp(firebaseConfig);

export function App() {
    const dispatch = useDispatch();

    (async function () {
        firebase
            .auth()
            .signInWithEmailAndPassword('admin@admin.com', 'admin123')
            .then((response) => {
                response.user?.getIdToken().then(async (idToken) => {
                    dispatch(setToken(idToken));

                    dispatch(getUsers(idToken));

                    dispatch(getAccounts());

                    dispatch(getTransactions());
                });
            })
            .catch((error) => console.log(error));
    })();

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
