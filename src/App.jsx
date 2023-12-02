import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='formContainer' id='form'>
      <form action="post" className='formulario'>
      <h3>REGISTRO</h3>
      <p className='formParagraph'>Ingrese sus datos</p>
        <div className="Nombre">
        <label className='labelCampo' htmlFor="nombre">Nombre</label>
        <input type="text" name="nombre" required  />
        </div>
        <div className="Apellido">
        <label className='labelCampo' htmlFor="Apellido">Apellido</label>
        <input type="text" name="Apellido" required />
        </div>
        <div className="Email">
        <label className='labelCampo' htmlFor="Email">Email</label>
        <input type="email" name="email" required/>
        </div>
        <div className="Tel">
        <label className='labelCampo' htmlFor="Telefono">Telefono</label>
        <input type="number" name="Telefono" required/>
        </div>
        <div className="Pass">
        <label className='labelCampo' htmlFor="Password">Password</label>
        <input type="password" name="Password" required/>
        </div>
        <div className="Confirmpass">
        <label className='labelCampo' htmlFor="ConfirmPassword">Confirmar Password</label>
        <input type="password" name="Confirmpassword" required />
        </div>
        
        <button className='formButton' type='submit'>Enviar</button>
      </form>
    </div>
    </>
  )
}

export default App
