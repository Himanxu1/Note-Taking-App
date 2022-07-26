import './App.css';
import {nanoid} from 'nanoid';
import Notelist from './Components/Notelist';
import {useState} from 'react';
import Search from './Components/Search';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  const [notes,setNotes] = useState([
    {
      id:nanoid(),
      text:"When you run your JavaScript file, the JavaScript compiler will take all of your function declarations and move them to the top of the file so they are all available before you use them.",
      date:"15/04/2012"
    },
    {
      id:nanoid(),
      text:"You can access global variables from any other javascript that is running on the page like a script tag or via the console.",
      date:"16/04/2012"
    },
    {
      id:nanoid(),
      text:"Side effect is when you are inside of a function and you reach outside of that function to do something else.",
      date:"17/04/2012"
    },
    {
      id:nanoid(),
      text:"Pure functions take in data, they return data, they always work exactly the same way given the data that's inputted, it returns the exact same thing. They don't reach outside themselves to do that.",
      date:"17/04/2012"
    },

    
  ]);



  const [searchItem , setSearchItem] = useState("");

  const addNote = (text) => {
      const date = new Date();
      const newNote = {
        id:nanoid(),
        text:text,
        date:date.toLocaleDateString(),        
      }

      const newNotes = [...notes,newNote]
      setNotes(newNotes);
  }


  const deleteNote = (id)=>{
     const newNotes =  notes.filter((note) => note.id !== id);
     setNotes(newNotes);
  }
  return (
    <div className="App">
      <Header/>
      <Search handleSearchNote={setSearchItem}/>
      <Notelist notes={notes.filter((note) => note.text.toLowerCase().includes(searchItem) )} handleAddNote={addNote}  handelDeleteNote={deleteNote}/>
     <Footer/>
    </div>
  );
}

export default App;
