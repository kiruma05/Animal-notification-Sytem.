import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  //background-color: var(--color-green-100);
  align-items: center;
  
  gap: 1.2rem; /* Space between logo and system name */
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
  /* You can add more styling here if needed */
`;

const SystemName = styled.h1`
  font-size: 2rem;
  color: var(--color-primary); /* Replace with your primary color */
  font-weight: 700;
  margin: 0;
  /* Add more styles if needed */
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/logo.png" alt="Logo" />
      <SystemName>Animal Notification System</SystemName>
     
    </StyledLogo>
  );
}

export default Logo;
