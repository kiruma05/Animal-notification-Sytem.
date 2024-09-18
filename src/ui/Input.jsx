import styled from "styled-components";

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.1rem 0.2rem;
  box-shadow: var(--shadow-sm);
  font-size: 1.4rem;
  width: 350px;

  @media (max-width: 1200px) {
    padding: 0.7rem 1.1rem; /* Adjust padding for medium screens */
    font-size: 1.3rem; /* Slightly smaller font size */
  }

  @media (max-width: 992px) {
    padding: 0.6rem 1rem; /* Further adjust padding for smaller screens */
    font-size: 1.2rem; /* Smaller font size for tablets */
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0.8rem; /* Reduce padding for tablets and small screens */
    font-size: 1.1rem; /* Adjust font size for smaller devices */
    width: 100%; /* Make inputs full width on small screens */
  }

  @media (max-width: 480px) {
    padding: 0.4rem 0.6rem; /* Minimal padding for very small screens */
    font-size: 1rem; /* Smallest font size for mobile devices */
    width: 100%;
  }
`;

export default Input;
