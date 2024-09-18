import { useState } from "react";
import styled from "styled-components";
import CreateUserForm from "./CreateUserForm";
import { UserDeleteUser } from "./useDeleteUser";
import Table from "../../ui/Table";
//import { useCreateUser } from "./useCreateUser";

// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const User = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Email = styled.div`
  font-size: 1.6rem;
  font-weight: 100;
  font-family: "italic";
  color: var(--color-green-700);
`;

const Role = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-800);
  font-family: "sono";
  //color: var(--color-yellow-700);
  //color-brand-200:
`;

const EditButton = styled.button`
  border: none;
  border-radius: 4px;
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background-color: #28a745; 
  cursor: pointer;
  margin-right: 0.8rem;
  transition: background-color 0.3s ease;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const DeleteButton = styled.button`
  border: none;
  border-radius: 4px;
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background-color: #dc3545; 
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;


function UserRow({ user }) {
  const [showForm, setShowForm] = useState(false);
  const { isDeleting, deleteUser } = UserDeleteUser();
  

  const { id, fullName, email, password, role, image } = user;

  

  

  return (
    <>
      <Table.Row>
        <Img src={image} />
        <User>{fullName}</User>
        <Email>{email}</Email>
        <Role>{role}</Role>
        <div>
          <EditButton onClick={() => setShowForm((show) => !show)}>Edit</EditButton>
          <DeleteButton onClick={() => deleteUser(id)} disabled={isDeleting}>Delete</DeleteButton>
        </div>
      </Table.Row>
      {showForm && <CreateUserForm userToEdit={user} />}
    </>
  );
}

export default UserRow;
