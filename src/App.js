import React, { Component } from 'react';
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

class App extends Component {
  hotels = [
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

  state = {
    hotels: [],
    loading: true,
    theme: 'primary',
    isAuthenticated: true,
  };

  searchHandler = term => {
    // console.log('App', term);
    const hotels = [...this.hotels].filter(x => x.name.toLowerCase().includes(term.toLowerCase()));
    this.setState({ hotels });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ hotels: this.hotels, loading: false });
    }, 1000);
  }

  changeTeme = () => {
    const newTheme = this.state.theme === 'primary' ? 'danger' : 'primary';
    this.setState({ theme: newTheme });
  };

  render() {
    const header = (
      <Header>
        <Searchbar onSearch={term => this.searchHandler(term)} />
        <ThemeButton onChange={this.changeTeme} />
      </Header>
    );

    const menu = <Menu />;

    const content = this.state.loading ? <LoadingIcon /> : <Hotels hotels={this.state.hotels} />;

    const footer = <Footer />;

    return (
      <AuthContext.Provider
        value={{
          isAuthenticated: this.state.isAuthenticated,
          login: () => this.setState({ isAuthenticated: true }),
          logout: () => this.setState({ isAuthenticated: false }),
        }}>
        <ThemeContext.Provider
          value={{
            color: this.state.theme,
            changeColor: this.changeTeme,
          }}>
          <div className='App'>
            <Layout header={header} menu={menu} content={content} footer={footer} />
          </div>
        </ThemeContext.Provider>
      </AuthContext.Provider>
    );
  }
}

export default App;
