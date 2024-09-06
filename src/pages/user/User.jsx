import './User.css';
import {
        PermIdentity, 
        CalendarToday, 
        PhoneAndroid, 
        MailOutlined, 
        LocationSearching,
        Publish
    } from '@mui/icons-material';
import { Link } from 'react-router-dom';


export default function User() {
  return (
    <>
        <div className="main-User">
            <div className="titleCont-User">
                <h1 className='title-User' > Editar Usuario </h1>
                <Link to={"/NewUser"}>
                    <button className="buttonAdd-User"> Crear Usario</button>
                </Link>
            </div>

            <div className='container-User'>
                <div className='show-User'>
                    <div className="perfilContainer-User">
                        <img 
                            src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600" 
                            alt="user" 
                            className='img-User'
                        />
                        <div className="perfil-User">
                            <span className='name-User'>Will Espi</span>
                            <span className='title-User'>Ingeniero en Software</span>
                        </div>
                    </div>
                    <div className='mainData-User'> 
                        <span className='titleData-User'>Detalles de la Cuenta</span>
                        <div className='containerData-User'>
                            <PermIdentity className='iconData-User'/>
                            <span className='dataTitle-User'>ItsWill32</span>
                        </div>
                        <div className='containerData-User'>
                            <CalendarToday className='iconData-User'/>
                            <span className='dataTitle-User'>10.12.2004</span>
                        </div>
                        <span className='titleData-User'>Datos de Contacto</span>
                        <div className='containerData-User'>
                            <PhoneAndroid className='iconData-User'/>
                            <span className='dataTitle-User'>+52 963 156 4855</span>
                        </div>
                        <div className='containerData-User'>
                            <MailOutlined className='iconData-User'/>
                            <span className='dataTitle-User'>will@gmail.com</span>
                        </div>
                        <div className='containerData-User'>
                            <LocationSearching className='iconData-User'/>
                            <span className='dataTitle-User'>Chiapas, Mexico</span>
                        </div>
                    </div>
                </div>
                
                <div className='update-User'>
                    <span className='titleUpdate-User'>Editar</span>
                    <form className='formUpdate-User'>
                        <div className='updateAcount-User'>
                            <div className="updateItem-User">
                                <label> Username </label>
                                <input type="text" placeholder='ItsWill32' className='updateInput-User' />
                            </div>
                            <div className="updateItem-User">
                                <label> Nombre Completo </label>
                                <input type="text" placeholder='Will Espi' className='updateInput-User' />
                            </div>
                            <div className="updateItem-User">
                                <label> correo </label>
                                <input type="text" placeholder='will@gmail.com' className='updateInput-User' />
                            </div>
                            <div className="updateItem-User">
                                <label> Telefono </label>
                                <input type="text" placeholder='+52 963 156 4855' className='updateInput-User' />
                            </div>
                            <div className="updateItem-User">
                                <label> Direccion </label>
                                <input type="text" placeholder='Chiapas, Mexico' className='updateInput-User' />
                            </div>
                        </div>

                        <div className='updateMedia-User'>
                            <div className='updateImgCont-User'>
                                <img 
                                src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600" 
                                alt=""
                                className='imgUpdate-User' 
                                />

                                <label htmlFor="file"> <Publish className='iconUpdate-User'/> </label>
                                <input type="file" id="file" style={{display: 'none'}} />
                            </div>
                            <button className='buttonUpdate-User'>Actualizar </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}
