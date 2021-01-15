import styled from 'styled-components'

export const Container = styled.div`
  .navbar-default {
    height: 4.8rem;
    width: 100%;
    padding: 0.2rem;
    background: #ffbc59;
    display: flex;
    align-items: center;
    justify-content: center;
    position:fixed;
    top: 0;
    z-index: 2;
  }

  .navbar-default img {
    height: 100%;
  }

  @media (max-width: 900px) {
    .navbar-default {
      height: 3.6rem; 
    }
  }
`
