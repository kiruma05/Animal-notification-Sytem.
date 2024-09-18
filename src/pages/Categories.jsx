import React from 'react';
//import Header from '../ui/Header';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const StyledCatLayout = styled.div`
  /* display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr; */
  height: 100vh;

  /* Handle layout for small screens */
  @media (max-width: 1024px) {
    grid-template-columns: 1fr; /* Single column layout */
    grid-template-rows: auto 1fr;
  }

  @media (max-width: 480px){
    grid-template-columns: 1fr; /* Single column layout */
    grid-template-rows: auto 1fr;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 2rem 2.4rem; /* Adjust padding for better spacing */
  overflow: auto; /* Allows scrolling if content overflows */

  /* Handle layout for small screens */
  @media (max-width: 1024px) {
    padding: 1rem; /* Reduced padding for smaller screens */
  }

  /* Handle very small screens */
  @media (max-width: 480px) {
    padding: 0.8rem; /* Further reduced padding for very small screens */
  }
`;

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
 flex-direction: column;
  gap: 3.2rem;
  padding: 0 1rem; /* Added padding to prevent content from touching edges */
  overflow-x: auto; /* Enable horizontal scrolling if content overflows */
  font-size: 0.6rem; /* Default font size */

  /* Handle font size for smaller screens */
  @media (max-width: 1024px) {
    font-size: 0.4rem; /* Reduced font size for tablets and small desktops */
  }

  @media (max-width: 768px) {
    font-size: 0.2rem; /* Further reduced font size for small screens */
  }

  @media (max-width: 480px) {
    font-size: 0.5rem; /* Smaller font size for very small screens */
    padding: 0; /* Remove padding for very small screens */
  }
`;

function Categories() {
  

  return (
    <StyledCatLayout> 
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledCatLayout>
  );
}

export default Categories;
