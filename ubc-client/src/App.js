import './App.css';
import Requests from './components/common/Requests';
import Routes from './components/common/Routes';

let requestClient = new Requests();
function App() {
    return (
        <Routes requestClient={requestClient} />
    );
}

export default App;
