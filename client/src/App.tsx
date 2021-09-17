import React, { useContext } from 'react';
// import { NavBar, Footer } from './Pages/layout/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import AdminPage from './Pages/AdminPage';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Choose from './Pages/Coures/Choose';
import { myContext } from './Pages/Context';
import Register from './Pages/Register';
import CoursFrancais from './Pages/Coures/CoursFrancais';
import Forum from './Pages/Forum/Forum';
import './main.css';
import CreateMessages from './Pages/Forum/components/CreateMessages';
import PageMessage from './Pages/Forum/PageMessage';
import Awnser from './Pages/Forum/components/Awnser';
import AwnserJs from './Pages/Forum/components/AwnserJs';
import PageMessageJs from './Pages/Forum/PageMessageJs';
import Conjugaison from './Pages/Coures/Conjugaison';
import Exercice from './Pages/Coures/Exerice';
import Boutique from './Pages/Boutique';
import Contact from './Pages/Contact';
function App() {
  const ctx = useContext(myContext);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage} />
        {ctx ? (
          <>
            {ctx.isAdmin ? <Route path="/admin" component={AdminPage} /> : null}
            <Route path="/profile" component={Profile} />
            <Route path="/forumFrancais" component={PageMessage} />
            <Route path="/forumMessage" component={PageMessageJs} />
            <Route path="/matiere" component={Choose} />
            <Route path="/contact" component={Contact} />
            <Route path="/francais" component={CoursFrancais} />
            <Route path="/passeSimple" component={Conjugaison} />
            <Route path="/exercice" component={Exercice} />
            <Route path="/boutique" component={Boutique} />
            <Route path="/awnser" component={Awnser} />
            <Route path="/awnserjsx" component={AwnserJs} />
            <Route path="/forum" component={Forum} />
            <Route path="/topic" component={CreateMessages} />
          </>
        ) : (
          <>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}
export default App;
