import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.0rem 2.1rem;
  border-right: 1px solid var(--color-grey-100);
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  height: 100vh; /* Full height */
  overflow-y: auto; /* Enable vertical scrolling */

  /* Default Sidebar layout */
  grid-row: 1 / -1;

  /* Mobile Devices */
  @media (max-width: 480px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 20rem;
    transform: ${(props) => (props.isOpen ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.3s ease-in-out;
    z-index: 999;
  }

  /* Tablets and Small Desktops */
  @media (min-width: 481px) and (max-width: 1024px) {
    width: 24rem;
    position: fixed;
    top: 0;
    left: 0;
    transform: ${(props) => (props.isOpen ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.3s ease-in-out;
    z-index: 999;
  }

  /* Large Desktops */
  @media (min-width: 1025px) {
    width: 26rem;
  }
`;

const ToggleButton = styled.button`
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 1000;
  background-color: black;
  color: white;
  border: none;
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  display: none;

  @media (max-width: 480px) {
    display: block;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    display: block;
  }
`;

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      <ToggleButton onClick={() => setIsOpen(!isOpen)}>
        ☰
      </ToggleButton>
      <StyledSidebar isOpen={isOpen}>
        <Logo />
        <MainNav />
      </StyledSidebar>
    </>
  );
}

export default Sidebar;
