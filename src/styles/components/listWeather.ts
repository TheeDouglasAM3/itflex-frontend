import styled from 'styled-components'

export const Container = styled.li`
  
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
 

  :nth-of-type(odd) {
    background-color: #d7ecfc !important;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > div > span {
    margin: 0.4rem;
  }

  > .weather-description {
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

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 7rem;
    padding: 0.2rem;

    > div > span {
      margin: 0.2rem;
    }

    > .weather-description {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 20.0rem;
    }
  }
`
