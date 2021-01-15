import styled from 'styled-components'

import imgBackground from '../../images/banner.jpg'

export const Container = styled.div`
  .banner-default {
    background: url(${imgBackground}) no-repeat;
    margin-top: 4.8rem;
    height: 18.0rem;
    overflow: hidden;
    background-size: cover;
    background-position: center;  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    -webkit-box-shadow: 0px 9px 20px 1px rgba(0,0,0,0.74); 
    box-shadow: 0px 9px 20px 1px rgba(0,0,0,0.74);
  }

  .banner-default h1,
  .banner-default p {
    margin: 1.0rem;
    color: #E6E6E6;
  }

  @media (max-width: 900px) {
    .banner-default {
      margin-top: 3.6rem;
      height: 12.0rem;
    }

    .banner-default h1{
      font-size: 1.2rem;
      text-align: center;
    }
    .banner-default p {
      font-size: 0.8rem;
      text-align: center;
    }
  }
`
