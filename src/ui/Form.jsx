import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
      width: 100%;
      max-width: 600px; /* Limit the form width on larger screens */
      margin: 0 auto; /* Center the form */
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
      max-width: 100%; /* Ensure modal form doesn't exceed screen width on small devices */
    `}

  overflow: hidden;
  font-size: 1.4rem;

  /* For medium screens (tablets, small desktops) */
  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 3rem 5rem;
    max-width: 700px;
    font-size: 1.6rem;
  }

  /* For large screens (large desktops) */
  @media (min-width: 1025px) {
    padding: 4rem 6rem;
    max-width: 800px;
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    padding: 2rem; /* Adjust padding on smaller screens */
    ${(props) =>
      props.type === "modal" &&
      css`
        width: 90%; /* Make modal form responsive */
      `}
  }

  @media (max-width: 480px) {
    padding: 1.6rem; /* Further adjust padding on very small screens */
    font-size: 1.2rem; /* Adjust font size for better readability */
    ${(props) =>
      props.type === "modal" &&
      css`
        width: 100%; /* Ensure modal form is full width on very small screens */
      `}
  }
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
