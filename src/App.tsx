import axios from 'axios';
import {useDispatch} from 'react-redux';
import {Route} from 'react-router-dom';
import {All} from './components/all/All';
import {Users} from './components/users/Users';
import {setAccounts, setTransactions, setUsers} from './redux/actions';

async function App() {
    const dispatch = useDispatch();
    const usersRes = await axios.get('http://localhost:3000/api2/transactions');
    if (usersRes.data) dispatch(setUsers(usersRes.data));
    const accountsRes = await axios.get('http://localhost:3001/api/contacts/');
    if (accountsRes.data) dispatch(setAccounts(accountsRes.data));
    const transactionsRes = await axios.get('http://localhost:3000/api2/account');
    if (transactionsRes.data) dispatch(setTransactions(transactionsRes.data));
    return (
        <div>
            <Route exact path="/">
                <All />
            </Route>
            <Route path="/users">
                <Users />
            </Route>
        </div>
    );
}

export default App;
