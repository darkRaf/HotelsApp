import { useCallback, useEffect, useReducer, useState } from 'react';
import './App.css';
import Header from './componets/Header/Header';
import Searchbar from './componets/UI/Searchbar/Searchbar';
import Hotels from './componets/Hotels/Hotels';
import Menu from './componets/Menu/Menu';
import LoadingIcon from './componets/UI/LoadingIcon/LoadingIcon';
import Layout from './componets/Layout/Layout';
import Footer from './componets/Footer/Footer';
import ThemeButton from './componets/UI/ThemeButton/ThemeButton';
import ThemeContext from './context/themeContext';
import AuthContext from './context/authContext';
import { BestHotel } from './componets/Hotels/BestHotel/BestHotel';
import { InspiringQuote } from './componets/InspiringQuote/InspiringQuote';

const backendHotels = [
  {
    id: 1,
    name: 'Hotel Blue Resort',
    city: 'Warszawa',
    rating: 8.3,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nulla voluptatibus eveniet et quidem iste tempore omnis accusamus, ducimus ipsum illum, pariatur cupiditate neque, atque est voluptatum cumque. Laboriosam mollitia facilis delectus, provident, ad saepe adipisci molestiae beatae iusto assumenda soluta esse.',
    image: '',
  },
  {
    id: 2,
    name: 'Raj na ziemi',
    city: 'Jelenia Góra',
    rating: 8.8,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nulla voluptatibus eveniet et quidem iste tempore omnis accusamus, ducimus ipsum illum, pariatur cupiditate neque, atque est voluptatum cumque.',
    image: '',
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'change-theme':
      const theme = state.theme === 'danger' ? 'primary' : 'danger'
      return {
        ...state,
        theme,
      };

    case 'set-hotels':
      return {
        ...state,
        hotels: action.hotels,
      };

    case 'set-loading':
      return {
        ...state,
        loading: action.loading,
      };
    case 'login':
      return {
        ...state,
        isAuthenticated: true
      };
    case 'logout':
      return {
        ...state,
        isAuthenticated: false,
      };

    default:
      throw new Error('Nie ma takiej akcji: ' + action.type);
  }
};

const initialState = {
  hotels: [],
  loading: true,
  isAuthenticated: false,
  theme: 'danger',
};

const App = () => {
  // const [hotels, setHotels] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [theme, setTheme] = useState('danger');
  // const [isAuthenticated, setIiAuthenticated] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);

  // 1.
  // const [state, setState] = useState({
  //   hotels: [],
  //   loading: true,
  //   theme: 'primary',
  //   isAuthenticated: true,
  // });

  // const changeTeme = () => {
  //   dispatch({ type: 'change-theme' });

  // const newTheme = theme === 'primary' ? 'danger' : 'primary';
  // setTheme(newTheme);

  // 1.
  // const newState = {...state};
  // newState.theme = 'warning';
  // setState({ newState });
  // };

  const searchHandler = term => {
    // console.log('App', term);
    const newHotels = [...backendHotels].filter(x =>
      x.name.toLowerCase().includes(term.toLowerCase())
    );
    // setHotels(newHotels);
    dispatch({ type: 'set-hotels', hotels: newHotels });
  };

  const getBesthotel = useCallback(() => {
    if (state.hotels.length < 2) {
      return null;
    } else {
      return state.hotels.sort((a,b) => a.rating > b.rating ? -1 : 1)[0];
    }
  }, [state.hotels]);

  useEffect(() => {
    setTimeout(() => {
      // setHotels(backendHotels);
      dispatch({ type: 'set-hotels', hotels: backendHotels });
      // setLoading(false);
      dispatch({ type: 'set-loading', loading: false });
    }, 1000);
  }, []);

  const header = (
    <Header>
      <InspiringQuote />
      <Searchbar onSearch={term => searchHandler(term)} />
      <ThemeButton />
    </Header>
  );

  const menu = <Menu />;

  const content = state.loading
    ? <LoadingIcon />
    : (<>
        {getBesthotel() ? <BestHotel getHotel={getBesthotel}></BestHotel>: null}
        <Hotels hotels={state.hotels} />
      </>);

  const footer = <Footer />;

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        // login: () => setIiAuthenticated(true),
        login: () => dispatch({ type: 'login' }),
        // logout: () => setIiAuthenticated(false),
        logout: () => dispatch({ type: 'logout' }),
      }}>
      <ThemeContext.Provider
        value={{
          color: state.theme,
          changeColor: () => dispatch({ type: 'change-theme' }),
        }}>
        <div className='App'>
          <Layout header={header} menu={menu} content={content} footer={footer} />
        </div>
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
