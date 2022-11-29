import { useEffect, useState } from 'react';
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

const App = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('danger');
  const [isAuthenticated, setIiAuthenticated] = useState(false);

  // 1.
  // const [state, setState] = useState({
  //   hotels: [],
  //   loading: true,
  //   theme: 'primary',
  //   isAuthenticated: true,
  // });

  const changeTeme = () => {
    const newTheme = theme === 'primary' ? 'danger' : 'primary';
    setTheme(newTheme);

    // 1.
    // const newState = {...state};
    // newState.theme = 'warning';
    // setState({ newState });
  };

  const searchHandler = term => {
    // console.log('App', term);
    const newHotels = [...backendHotels].filter(x => x.name.toLowerCase().includes(term.toLowerCase()));
    setHotels(newHotels);
  };

  useEffect(() => {
    setTimeout(() => {
      setHotels(backendHotels);
      setLoading(false);
    }, 1000);
  }, []);

  const header = (
    <Header>
      <Searchbar onSearch={term => searchHandler(term)} />
      <ThemeButton onChange={changeTeme} />
    </Header>
  );

  const menu = <Menu />;

  const content = loading ? <LoadingIcon /> : <Hotels hotels={hotels} />;

  const footer = <Footer />;

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        login: () => setIiAuthenticated(true),
        logout: () => setIiAuthenticated(false),
      }}>
      <ThemeContext.Provider
        value={{
          color: theme,
          changeColor: changeTeme,
        }}>
        <div className='App'>
          <Layout header={header} menu={menu} content={content} footer={footer} />
        </div>
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
