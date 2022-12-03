import Hotel from "../Hotel/Hotel";

export const BestHotel = props => {
  const hotel = props.getHotel({minHotels: 2});

  if (!hotel) return null;

  return (
    <div className='card bg-success text-white'>
      <div className='card-header'>Najlepsza oferta!</div>
      <div className='card-body'>
        <div className='d-flex justify-content-between'>
          <h5>{hotel.name}</h5>
          <p>Ocena {hotel.rating}</p>
        </div>
        <a href='#' className='btn btn-sm btn-light'>
          Pokaż
        </a>
      </div>
    </div>
  );
};
