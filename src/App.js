import './App.modules.css'
import Card from './components/Card';
import { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const[course, setCourse]=useState("");
  const[showCard, setShowCard] = useState(false)
  const[isError, setError] = useState(false)


 // validacion para el primer imput
  const isValidNameLength = name.length > 2;
  const nameDoesNotStartSpace = name.startsWith(" ");
  const isValidName = isValidNameLength && !nameDoesNotStartSpace;

  // validacion para el segundo imput
  const isValidCourse = course.length > 5;

  
  const handlerSubmit = (e) =>{
    e.preventDefault();

    if(isValidName && isValidCourse){
      setShowCard(true);
      setError(false)
    }else{
      setError(true)
      setShowCard(false);
    }
  }


  const onNameChange = (e) => {
    setName(e.target.value)
  }

  const onCourseChange = (e) => {
    setCourse(e.target.value)

  }
  return (
    <div className="App">
      <h1>Primer Parcial FrontEnd III BZ</h1>
      <form onSubmit={handlerSubmit}>
        <div>
          <input placeholder='Ingresa tu nombre.. ' 
          type='Text' 
          value={name} 
          onChange={onNameChange} />
        </div>
        <div>
          <input placeholder='Ingresa tu materia.. ' 
          type='Text' 
          value={course} 
          onChange={onCourseChange} />
        </div>
        <button>Registrar</button>
        {isError ? <div className="textError">Revisa que la informacion sea correcta</div> : null}
      </form>      
      
      {showCard ? <Card name={name} course={course}/> : null}      
    </div>
  );
}

export default App;
