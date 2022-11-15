import { Component } from 'react';
import './App.css';
import Header from './componets/Header/Header';
import Hotels from './componets/Hotels/Hotels';
import Menu from './componets/Menu/Menu';

class App extends Component {
  hotels = [
    {
      id: 1,
      name: 'Hotel Blue Resort',
      city: 'Warszawa',
      rating: '8.3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nulla voluptatibus eveniet et quidem iste tempore omnis accusamus, ducimus ipsum illum, pariatur cupiditate neque, atque est voluptatum cumque. Laboriosam mollitia facilis delectus, provident, ad saepe adipisci molestiae beatae iusto assumenda soluta esse.',
      image: '',
    },
    {
      id: 2,
      name: 'Raj na ziemi',
      city: 'Jelenia Góra',
      rating: '8.8',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nulla voluptatibus eveniet et quidem iste tempore omnis accusamus, ducimus ipsum illum, pariatur cupiditate neque, atque est voluptatum cumque.',
      image: '',
    },
  ];

  state = {
    hotels: this.hotels,
  };

  searchHandler = (term) => {
    // console.log('App', term);
    const hotels = [...this.hotels].filter(x => x.name.toLowerCase().includes(term.toLowerCase()));
    this.setState({ hotels });
  }

  render() {
    return (
      <div className='App'>
        <Header onSearch={this.searchHandler} />
        <Menu />
        <Hotels hotels={this.state.hotels} />
      </div>
    );
  }
}

export default App;
