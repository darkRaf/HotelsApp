import { useEffect, useState } from "react";
import moment from "moment";

export const BestHotel = props => {
  const [time, setTime] = useState('');

  // const hotel = props.getHotel({minHotels: 2}); // mozemy przekazac parametr do funkcji
  const hotel = props.getHotel();
  const endTime = moment().add(23, 'minutes').add(34, 'seconds');
  let intervalId = null;

  useEffect(() => {
    intervalId = setInterval(() => {
      const LeftTime = -moment().diff(endTime) / 1000;
      const minutes = Math.floor(LeftTime / 60);
      const seconds = Math.floor(LeftTime % 60);
      setTime(`minut: ${minutes}, sekund: ${seconds}`);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, []);



  if (!hotel) return null;

  return (
    <div className='card bg-success text-white'>
      <div className='card-header'>Najlepsza oferta!</div>
      <div className='card-body'>
        <div className='d-flex justify-content-between'>
          <h5>{hotel.name}</h5>
          <p>Ocena {hotel.rating}</p>
        </div>
        <p>Do końca oferty pozostało: {time}</p>
        <a href='#' className='btn btn-sm btn-light'>
          Pokaż
        </a>
      </div>
    </div>
  );
};
