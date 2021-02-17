import logo from './logo.svg';
import './App.css';
import CompAndProps from './compoments/compoment_props/CompAndProps';
import State from './compoments/State/State';
import EventClick from './compoments/EventHandler/EventClick';
import { FormTodo } from './compoments/TodoList/FormTodo';
import ListUser from './compoments/Api/ListUser';
import {BrowserRouter, Switch , Route, Link} from 'react-router-dom'
import NotFound from './compoments/error/404';

function App() {
return (
    <div className="App">
    <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* <CompAndProps /> */}
        {/* <State /> */}
        {/* <br/> */}
        {/* <EventClick/> */}
        {/* <FormTodo /> */}
        {/* <ListUser /> */}

        <BrowserRouter>
            <div>
               <nav>
                    <li> <Link to="/"> Home </Link> </li>
                    <li> <Link to="/users"> Users </Link> </li>
               </nav>

               <main>
                    <Switch>
                        <Route path="/" exact component={FormTodo} />
                        <Route path="/users" exact component={ListUser} />
                        <Route path="/users/:name" exact component={ListUser} />
                        <Route component={NotFound} />
                    </Switch>
               </main>
            </div>
        </BrowserRouter>
        
    </header>
    </div>
);
}

export default App;
