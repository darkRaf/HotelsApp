import { useEffect, useState } from "react";

const quotes = [
  '"Podróż to jedyna rzecz na którą wydajemy pieniądze, a stajemy się bogatsi. " - Anonim',
  '"Podrózowanie czy skromności. Widzisz, jak newiele',
  '"Życie daje każdmu tyle, ile sam ma odwagę sobie wziąść, a ja nie zamierzam zrezygnować z niczego, co mi się należy." - Jacek Pałkiewicz',
  '"Nie czekaj. Pora nigdy nie będzie idealna. " - Napoleon Hill"',
]

const styles = {
  width: '100%',
  position: 'absolute',
  top: '10px',
  left: 0,
  rigth: 0,
  textAlign: 'center',
  color: '#fff',
  fontStyle: 'italic',
};


export const InspiringQuote = props => {

  const [qoute, setQuote] = useState('Wczytywanie...');
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    setLoading(true);
  }, [])

  useEffect( () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, [loading])

  return (
    <p style={styles}>{qoute}</p>
  )
}