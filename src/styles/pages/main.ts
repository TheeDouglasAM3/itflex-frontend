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

  .search-city .search-input-group #button-search {
    margin-top: 1.0rem;
    cursor: pointer;
    background: #3892F3;
    transition: background 0.2s;
    border-color: #4F4F4F;
  }

  .search-city .search-input-group #button-search:hover {
    background: #0753A3;
  }

  ul { 
    width: 100%;
    margin-bottom: 1.6rem;
  }

  @media (max-width: 900px) {
    .search-city p {
      font-size: 1.2rem;
    }
  }
  
`
