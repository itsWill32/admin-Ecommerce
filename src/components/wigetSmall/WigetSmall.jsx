import { useEffect, useState } from "react";
import "./WigetSmall.css";
import { Visibility } from "@mui/icons-material";
import { userRequest } from "../../requestMethods";

export default function WigetSmall() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
        try {
            const res = await userRequest.get("users/allUsers/?new=true");
            setUsers(res.data);
        } catch (err) {
            console.log('Error en la solicitud:', err.response ? err.response.data : err.message);
        }
    };
    getUsers();
}, []);


  return (
    <>
      <div className="main-WSmall">
        <span className="title-WSmall"> Nuevos Miembros</span>
        <ul className="list-WSmall">
          {users.map(user => (
            <li className="itemL-Wsmall" key={user._id}>
            <img
              src={user.img || "https://images.pexels.com/photos/12378199/pexels-photo-12378199.jpeg?auto=compress&cs=tinysrgb&w=400" }
              alt="img-User"
              className="img-WSmall"
            />
            <div className="userContainer-WSmall">
              <span className="user-WSmall">{user.username}</span>
            </div>
            <button type="submit" className="button-WSmall">
              <Visibility className="icon-WSmall" />
              Ocultar
            </button>
          </li>
          ))}
        </ul>
      </div>
    </>
  );
}
