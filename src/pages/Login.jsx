import styled from "styled-components";
import Logo from "../ui/Logo";
import LoginForm from "../features/authentication/LoginForm";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: flex; /* Use flexbox layout */
  flex-direction: column;
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
  gap: 3.2rem;
  padding: 2rem; /* Add padding for better spacing on smaller screens */
  background-color: var(--color-grey-50);

  /* Small Desktops */
  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 3rem; /* Adjust padding for small desktops */
    gap: 2rem; /* Adjust gap for small desktops */
  }

  /* Large Desktops */
  @media (min-width: 1025px) {
    padding: 4rem; /* Increase padding for large desktops */
    gap: 3rem; /* Increase gap for large desktops */
  }

  /* Mobile Devices */
  @media (max-width: 768px) {
    padding: 6rem; /* Adjust padding for smaller screens */
    gap: 1rem; /* Reduce gap for smaller screens */
  }

  @media (max-width: 480px) {
    padding: 4rem; /* Adjust padding for very small screens */
    gap: 0.8rem; /* Reduce gap for very small screens */
  }
`;

const StyledHeading = styled.h4`
  text-align: center;
  font-size: 2rem;
  color: var(--color-primary); /* Replace with your primary color */
  margin-bottom: 1.6rem; /* Space below the heading */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Add text shadow */
  font-style: italic; /* Italic font style */

  /* Small Desktops */
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 1.8rem; /* Adjust font size for small desktops */
    margin-bottom: 1.4rem; /* Adjust margin for small desktops */
  }

  /* Large Desktops */
  @media (min-width: 1025px) {
    font-size: 2.2rem; /* Increase font size for large desktops */
    margin-bottom: 2rem; /* Increase margin for large desktops */
  }

  /* Mobile Devices */
  @media (max-width: 768px) {
    font-size: 1.6rem; /* Reduce font size for smaller screens */
    margin-bottom: 1.2rem; /* Adjust margin for smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 1.4rem; /* Further reduce font size for very small screens */
    margin-bottom: 1rem; /* Adjust margin for very small screens */
  }
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <StyledHeading>Login to your Account</StyledHeading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
