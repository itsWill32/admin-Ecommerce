import "./Home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Graphic from "../../components/graphic/Graphic";
import WigetSmall from "../../components/wigetSmall/WigetSmall";
import WigetLarge from "../../components/WigetLarge/WigetLarge";
import { useState, useMemo, useEffect } from "react";
import { userRequest } from "../../requestMethods";

export default function Home() {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );


  useEffect (() => {
    const getStats = async () => {
      try{
          const res = await userRequest.get("/users/stats")
          res.data.map(item => {
            setUserStats(prev => [
              ...prev,
              {name:MONTHS[item._id-1], "Active User" : item.total}
            ])
          })
      } catch(err){
        console.log(err)
      };
    };
    getStats()
  }, [MONTHS])

    

  return (
    <>
      <div className="main-Home">
        <FeaturedInfo />
        <Graphic
          data={userStats}
          title={"Analisis de Usuarios"}
          grid
          dataKey={"Active User"}
        />
        <div className="widgets-Home">
          <WigetSmall />
          <WigetLarge />
        </div>
      </div>
    </>
  );
}


