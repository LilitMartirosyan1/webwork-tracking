import './App.css';
import {Footer, Header} from "./nodes/components";
import Routes from "./nodes/routes";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes/>
            <Footer/>
        </div>
    );
}

export default App;
