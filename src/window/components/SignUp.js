import React from 'react'

const SignUp = props => (
  <form>
    <input type="text" id="name" placeholder="Nombre" />
    <input type="text" id="lastName" placeholder="Primer Apellido" />
    <input type="text" id="secondLastName" placeholder="Segundo Apellido" />
    <input type="text" id="email" placeholder="Email" />
    <input type="text" id="phone" placeholder="Teléfono" />
    <input type="text" id="password" placeholder="Password" />
    <input type="text" id="confirmPassword" placeholder="Password" />
    <select name="gender" id="gender">
      <option value="H">Hombre</option>
      <option value="M">Mujer</option>
      <option value="U">Indefinido</option>
    </select>
    <button type="submit">Crear</button>
  </form>
)

export default SignUp
