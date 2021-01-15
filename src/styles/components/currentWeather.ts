import styled from 'styled-components'

import imgBackground from '../../images/sunshine.jpg'

export const Container = styled.div`
  
  background: url(${imgBackground}) no-repeat;
  margin: 1.0rem;
  height: 8.0rem;
  max-width: 60rem;
  width: 90%;
  border-radius: 0.5rem;
  padding: 1rem;
  overflow: hidden;
  background-size: cover;
  background-position: center; 
  color: #E6E6E6; 

  display: flex;
  justify-content: space-between;
  align-items: center;

  .temp-area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .temp-area .temp-max{
    font-size: 2.4rem;
  }

  .temp-area .temp-min{
    color: #C6C6C6;
  }

  .weather-description-area{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .weather-description-area .weather-description-info p{
    font-size: 1.4rem;
  }

  .weather-description-area img{
    height: 4.8rem;
  }

  @media (max-width: 900px) {
    .temp-area .temp-max{
      font-size: 1.6rem;
    }

    .temp-area .temp-min{
      font-size: 1.2rem;
    }

    .humidity-info .humidity{
      font-size: 1.0rem;
    }

    .weather-description-area .weather-description-info h2{
      font-size: 1.4rem;
    }

    .weather-description-area .weather-description-info p{
      font-size: 0.8rem;
    }
  }
`
