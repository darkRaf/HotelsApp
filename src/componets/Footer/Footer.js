import { useContext } from 'react';
import ThemeContext from '../../context/themeContext';

const Footer = props => {
  const theme = useContext(ThemeContext);
  
  return <div className={`text-center m3 text-${theme.color}`}>Created by RN 2022</div>;
};

export default Footer;
