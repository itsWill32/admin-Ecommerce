import { useEffect, useState } from 'react';
import './FeaturedInfo.css';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { userRequest } from '../../redux/apiCalls';

export default function FeaturedInfo() {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("/oders/statsMonthly");
        console.log("Datos de la API:", res.data);

        if (res.data && Array.isArray(res.data)) {
          setIncome(res.data);
          const totalCurrent = res.data[1]?.total || 0;
          const totalPrevious = res.data[0]?.total || 0;

          // Calcula el porcentaje de cambio correctamente
          const percentageChange = totalPrevious > 0 ? ((totalCurrent - totalPrevious) / totalPrevious) * 100 : 0;
          setPerc(percentageChange);
        } else {
          console.error('Formato de datos inesperado', res.data);
        }
      } catch (err) {
        console.error('Error al obtener los datos', err);
      }
    };
    getIncome();
  }, []);

  return (
    <>
      <div className="main-Featured">
        <div className='card-Featured'>
          <span className='title-Featured'>Ganancias</span>
          <div className='moneyFeatured-container'>
            <span className='money-Featured'>
              $ {income[1]?.total || 'N/A'}
            </span>
            <span className='moneyRate-Featured'>
              {perc.toFixed(2)}%
              {perc < 0 ? <ArrowDownward className='icon-Featured negative' /> : <ArrowUpward className='icon-Featured' />}
            </span>
          </div>
          <span className='desc-Featured'> Comparado con el mes pasado</span>
        </div>

        <div className='card-Featured'>
          <span className='title-Featured'>Ventas</span>
          <div className='moneyFeatured-container'>
            <span className='money-Featured'>$10,000</span>
            <span className='moneyRate-Featured'>-1.4
              <ArrowDownward className='icon-Featured negative' />
            </span>
          </div>
          <span className='desc-Featured'> Comparado con el mes pasado</span>
        </div>

        <div className='card-Featured'>
          <span className='title-Featured'>Costos</span>
          <div className='moneyFeatured-container'>
            <span className='money-Featured'>$50,000</span>
            <span className='moneyRate-Featured'>+11.4
              <ArrowUpward className='icon-Featured' />
            </span>
          </div>
          <span className='desc-Featured'> Comparado con el mes pasado</span>
        </div>

      </div>
    </>
  );
}
