import axios from 'axios';
import {useDispatch} from 'react-redux';
import {Route} from 'react-router-dom';
import {Accounts} from './components/accounts/Accounts';
import {All} from './components/home/Home';
import {Data} from './components/data/Data';
import {Transactions} from './components/transactions/Transactions';
import {Users} from './components/users/Users';
import {setAccounts, setTransactions, setUsers} from './redux/actions';

export function App() {
    const dispatch = useDispatch();
    async function get() {
        const usersRes = await axios.get('http://localhost:3001/api/contacts');
        if (usersRes.data) dispatch(setUsers(usersRes.data));

        const accountsRes = await axios.get('http://localhost:3000/api2/account');
        if (accountsRes.data) dispatch(setAccounts(accountsRes.data));

        const transactionsRes = await axios.get('http://localhost:3000/api2/transactions');
        if (transactionsRes.data) dispatch(setTransactions(transactionsRes.data));
    }
    get();
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
