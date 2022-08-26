import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Input from './components/Input';
import Boton from './components/Boton';


function App() {

  const [Check, SetCheck] = useState("");

  return (
    <>
      <Input SetContrasena={SetCheck} />
      {Check === "252525" ? <Boton /> : null}
    </>
  );
}

export default App;
