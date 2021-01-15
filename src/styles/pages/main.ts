import styled from 'styled-components'

export const Container = styled.div`
  .search-city {
    margin-top: 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .search-city p {
    margin-top: 1.0rem;
    font-size: 1.6rem;
  }

  .search-city .search-input-group {
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search-city .search-input-group input {
    margin-top: 1.0rem;
    width: 50%;
    padding: 0.6rem;
  }

  .search-city .search-input-group button {
    margin-top: 1.0rem;
    width: 5.6rem;
    padding: 0.31rem;
    cursor: pointer;
    background: #3892F3;
    transition: background 0.2s;
    border-color: #4F4F4F;
  }

  .search-city .search-input-group button:hover {
    background: #0753A3;
  }

  ul { 
    width: 100%;
    margin-top: 1.6rem;
    margin-bottom: 1.6rem;
  }

  ul > li {
    padding: 0.8rem;
    margin: 0.2rem;
    background: #add7f7;
    height: 3.6rem;
    max-width: 60rem;
    width: 90%;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul > li:nth-of-type(odd) {
    background-color: #d7ecfc;
  }

  ul > li > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul > li > div > span {
    margin: 0.4rem;
  }

  ul > li > .weather-description {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 20.0rem;
  }

  .linha-vertical {
    height: 2.8rem;
    border-left: 2px solid #3E3E3E;
  }

  .temp-min-text {
    color: #7f7f7f;
  }
`
