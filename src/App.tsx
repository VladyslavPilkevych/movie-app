import React from 'react';
import AppRoutes from './Routes/Routes';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import styled from 'styled-components';
import axios from 'axios';

export const CustomDarkBgContainer = styled.section`
  // padding: 20px 0 40px 5%;
  padding: 0 0 0 5%;
  background-color: ${(props) => props.theme.customTheme.colors.background};
`;

export const CustomDarkBg = styled.div`
  position: fixed;
  top: 0;
  right: 0px;
  bottom: 0;
  z-index: 1;
  width: 1px;
  background-color: rgba(0, 0, 0, 1);
  box-shadow: 0px 0 50px 40px rgba(0, 0, 0, 1);
`;

function App() {
  // React.useEffect(() => {
  //   // axios.get(`/api/movie?id=${movieId}`)
  //   axios
  //     .get('/api/movie?id=3')
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.error('There was an error!', error);
  //     });
  //     axios
  //     .get('/api/movies')
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('There was an error!', error);
  //     });
  // }, []); // todo: remove

  return (
    <div>
      <Header />
      <CustomDarkBg />
      <CustomDarkBgContainer>
        <AppRoutes />
      </CustomDarkBgContainer>
      <Footer />
    </div>
  );
}

export default React.memo(App);
