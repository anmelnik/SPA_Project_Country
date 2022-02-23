import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { Switch, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { NotFound } from './pages/NotFound';
import { Detalis } from './pages/Detalis';


function App() {

    return (
        <>
            <Header />
            <Main>
                <Switch>
                    <Route exact path='/'>
                        <HomePage />
                    </Route>
                    <Route path='/country/:name' component={Detalis} />
                    <Route component={NotFound} />
                </Switch>
            </Main>
        </>
    )
}

export default App;