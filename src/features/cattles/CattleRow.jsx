import React, { useState } from 'react';

import styled from 'styled-components';
import Table from '../../ui/Table';
import CreateCattleForm from './CreateCattleForm';
import useDeleteCattle from './useDeleteCattle';


const Name = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-800);
  font-family: "italic";
`;
const Num = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
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


const CattleRow = ({ cattle }) => {
  const [showForm, setShowForm] = useState(false);
  const { isDeleting, deleteCattle } = useDeleteCattle();


const { tagNumber, DOB, ranchId, categoryName, subcategoryName, id } = cattle;

  return (
    <>
    <Table.Row>
      <Num>{tagNumber}</Num>
      <Name>{ranchId}</Name>
      <Name>{categoryName}-
        {subcategoryName}
      </Name>
      <Num>{DOB}</Num>
      <div>
          <EditButton onClick={() => setShowForm((show) => !show)}>Edit</EditButton>
          <DeleteButton onClick={() => deleteCattle(id)} disabled={isDeleting}>Delete</DeleteButton>
        </div>
    </Table.Row>
    {showForm && <CreateCattleForm cattleToEdit={cattle} />}
    </>
  );
};


export default CattleRow;
