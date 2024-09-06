import "./NewUser.css";

export default function NewUser() {
  return (
    <>
      <div className="main-NU">
        <h1>Nuevo Usuario</h1>
        <form className="form-NU">
          <div className="itemCreate-NU">
            <label>Username</label>
            <input type="text" placeholder="ItsWill32" />
          </div>
          <div className="itemCreate-NU">
            <label>Nombre Completo</label>
            <input type="text" placeholder="Will Espi" />
          </div>
          <div className="itemCreate-NU">
            <label>Correo</label>
            <input type="email" placeholder="will@gmail.com" />
          </div>
          <div className="itemCreate-NU">
            <label>Contraseña</label>
            <input type="password" placeholder="contraseña" />
          </div>
          <div className="itemCreate-NU">
            <label>Telefono</label>
            <input type="text" placeholder="+52 963 156 4855" />
          </div>
          <div className="itemCreate-NU">
            <label>Direccion</label>
            <input type="text" placeholder="Chiapas, Mexico" />
          </div>
          <div className="itemCreate-NU">
            <label>Genero</label>
            <div className="gender-NU">
              <input type="radio" name="genero" id="male" value="Masculino" />
              <label for="male">Masculino</label>
              <input type="radio" name="genero" id="female" value="Femenino" />
              <label for="female">Femenino</label>
              <input type="radio" name="genero" id="other" value="otro" />
              <label for="other">Otro</label>
            </div>
          </div>
          <div className="itemCreate-NU">
            <label>Active</label>
            <select className="select-NU" name="active" id="active">
              <option value="yes">Si</option>
              <option value="no">No</option>
            </select>
          </div>
          <button className="button-NU">Crear</button>
        </form>
      </div>
    </>
  );
}
