import React, { useState, useEffect } from "react";
import ShowData from "./conponents/ShowData";
import Forbiden from "./conponents/Forbiden";
import { useSelector, useDispatch } from "react-redux";
import { setName, setAge } from "./redux/actions";
import { db } from "./firebase";
import Centro from "./conponents/Centro";

function App() {
  // const [name, setName] = useState("");
  // const [age, setAge] = useState(0);
  const name = useSelector((state) => state.name);
  const age = useSelector((state) => state.age);
  const dispatch = useDispatch();

  const [busqueda, setBusqueda] = useState("");
  const [centros, setCentros] = useState([])

  function handleChange(event) {
    if (event.target.id === "name-input") {
      // setName(event.target.value)
      dispatch(setName(event.target.value));
    } else if (event.target.id === "age-input") {
      // setAge(event.target.value)
      dispatch(setAge(event.target.value));
    } else if (event.target.id === "search-input") {
      setBusqueda(event.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  async function buscar() {
    const ciudadQuery = await db.collection('centro').where("municipio", "==", busqueda).get()
    let centrosTemp = []
    ciudadQuery.forEach(doc => {
      centrosTemp.push(doc.data().nombreCentro)
    })
    setCentros(centrosTemp)
  }

  useEffect(() => {}, [name, age]);

  return (
    <div className="App">
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id="name-input"
          value={name}
          onChange={handleChange}
        />
        <img src="" alt="" />
        <input
          type="number"
          name=""
          id="age-input"
          value={age}
          onChange={handleChange}
        />
        <input type="submit" value="Enviar" />
      </form>
      <input
        type="text"
        id="search-input"
        value={busqueda}
        onChange={handleChange}
      />{" "}
      <button onClick={buscar}>buscar</button>
      {parseInt(age) > 17 && <ShowData />}
      {
        centros.map(c => <Centro nombre={c} />)
      }
      
    </div>
  );
}

export default App;
