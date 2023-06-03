import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// redux
import { Provider } from 'react-redux';
import store from './store';

// css
import './App.css';

//import pages
import ContactList from "./Pages/ContactList/ContactList"
import NewContact from "./Pages/NewContact/NewContact"
import UpdateContact from "./Pages/UpdateContact/UpdateContact"
import NotFound from "./Pages/NotFound/NotFound"
import Header from "./Componets/Header/Header" 
 
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<ContactList/>}/>
          <Route path="/new-contact" element={<NewContact/>}/>
          <Route path="/update-contact/:id" element={<UpdateContact/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </Provider>
  )
}

export default App;
