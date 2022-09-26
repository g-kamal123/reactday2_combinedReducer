import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className="App">
      <ContactList />
      <AddContact />
    </div>
  );
}

export default App;
