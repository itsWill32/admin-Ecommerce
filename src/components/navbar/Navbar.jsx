import './Navbar.css';
import {NotificationsNone, Settings, Logout} from '@mui/icons-material';
import { useDispatch } from "react-redux";
import { logoutUser } from '../../redux/apiCalls';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        logoutUser(dispatch, navigate);
    };

  return (
    <>
        <div className='main-Navbar'>
            <div className='container-Nav'>
                <div className=''>
                    <span className='logo-Nav'>Admin Mode</span>
                </div>
                <div className='container-Icons'>
                    <div className='icons-Nav'>
                        <Logout onClick={handleLogout} />
                    </div>
                    <div className='icons-Nav'>
                        <NotificationsNone/>
                        <span className="iconBadge">2</span>
                    </div>
                    <div className='icons-Nav'>
                        <Settings/>
                    </div>
                    <div className='icons-Nav'>
                        <img src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600" alt="perfil" className='avatar-Icon'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
