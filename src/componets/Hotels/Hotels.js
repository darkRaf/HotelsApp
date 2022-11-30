import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import Hotel from './Hotel/Hotel';
import styles from './Hotels.module.css';

const propTypes = {
  hotels: PropTypes.array.isRequired,
};

const slowFunction = (count) => {
  for (let i = 0; i < 1000000000; i++) {}
  return count;
}
function Hotels(props) {

  useEffect(() => console.log('hotels render'));

  const count = useMemo(() => {
    return slowFunction(props.hotels.length);
  }, [props.hotels.length]);

  return (
    <div className={`${styles.container} container`}>
      <h2 className={styles.title}>Oferty ({count})</h2>
      {props.hotels.map(hotel => (
        <Hotel key={hotel.id} {...hotel} theme={props.theme} />
      ))}
    </div>
  );
}
// class Hotels extends PureComponent {
//   componentWillUnmount() {}

//   componentDidUpdate() {
//     console.log('Hotles render');
//   }

// shouldComponentUpdate(nextProps, nextState) {
//   return this.props.hotels !== nextProps.hotels;
// }

//   render() {
//     return (
//       <div className={`${styles.container} container`}>
//         <h2 className={styles.title}>Oferty</h2>
//         {this.props.hotels.map(hotel => (
//           <Hotel key={hotel.id} {...hotel}  theme={this.props.theme} />
//         ))}
//       </div>
//     );
//   }
// }

// function Hotels() {
//   return (
//     <div>
//       hotels
//     </div>
//   )
// }

Hotels.propTypes = propTypes;

const areEquall = (prevProps, nextProps) => {
  return prevProps.hotels === nextProps.hotels;
}

export default Hotels;
// export default React.memo(Hotels, areEquall);
