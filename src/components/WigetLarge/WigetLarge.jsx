import "./WigetLarge.css";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import {format} from 'timeago.js'

export default function WigetLarge() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("oders/allOrders");
        setOrders(res.data);
        console.log('order')
      } catch (err) {
        console.log(
          "Error en la solicitud:",
          err.response ? err.response.data : err.message
        );
      }
    };
    getUsers();
  }, []);

  const Button = ({ type }) => {
    return <button className={"button-WLarge " + type}>{type}</button>;
  };

  return (
    <>
      <div className="main-WLarge">
        <h3 className="title-WLarge">Ultima Transaccion</h3>
        <table className="tableWLarge">
          <tr className="trWLarge">
            <th className="thWLarge">Cliente</th>
            <th className="thWLarge">Fecha</th>
            <th className="thWLarge">Monto</th>
            <th className="thWLarge">Estatus</th>
          </tr>

          {orders.map((order) => {
            <tr className="trWLarge" key={order._id}>
              <td className="client-WLarge">
                <span className="user-WLarge"> {order.userId} </span>
              </td>
              <td className="date-WLarge"> {format(order.createdAt)} </td>
              <td className="amount-WLarge"> {order.amount} </td>
              <td className="status-WLarge">
                <Button type={order.status} />
              </td>
            </tr>;
          })}
        </table>
      </div>
    </>
  );
}
