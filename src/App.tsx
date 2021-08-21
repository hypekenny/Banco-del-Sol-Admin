import axios from 'axios';
import {useDispatch} from 'react-redux';
import {Route} from 'react-router-dom';
import {Accounts} from './components/accounts/Accounts';
import {All} from './components/home/Home';
import {Data} from './components/data/Data';
import {Transactions} from './components/transactions/Transactions';
import {Users} from './components/users/Users';
import {setAccounts, setTransactions, setUsers} from './redux/actions';
import firebase from 'firebase';
import {firebaseConfig} from './components/constants/firebase.config';
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
                    const usersRes = await axios.get('http://localhost:3001/api/user/all', {
                        headers: {
                            authorization: `Bearer ${idToken}`,
                        },
                    });
                    if (usersRes.data) dispatch(setUsers(usersRes.data));

                    const accountsRes = await axios.get('http://localhost:3000/api2/account');
                    if (accountsRes.data) dispatch(setAccounts(accountsRes.data));

                    const transactionsRes = await axios.get('http://localhost:3000/api2/transactions');
                    if (transactionsRes.data) dispatch(setTransactions(transactionsRes.data));
                });
            });
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
