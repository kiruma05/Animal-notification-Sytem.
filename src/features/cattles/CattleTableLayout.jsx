import React from 'react';
import styled from 'styled-components';
import CattleRow from './CattleRow'; // Create this component similarly to UserRow

const Table = styled.div`
  border: 2px solid var(--color-grey--200);
  font-size: 1.4rem;
  background-color: var(--color-grey--0);
  border-radius: 8px;
  overflow-x: auto;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 1.2fr 1.3fr 1fr 2.1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  background-color: var(--color-grey-800);
  border-bottom: 1px solid var(--color-grey-600);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 800;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

const CattleTableLayout = ({ cattles }) => {
  return (
    <Table role="table">
      <TableHeader role="row">
        <div>Tag Number</div>
        <div>BOT</div>
        <div>Ranch ID</div>
        <div>Subcategory Name</div>
        <div>Operations</div>
      </TableHeader>
      {cattles.map((cattle) => (
        <CattleRow cattle={cattle} key={cattle.id} />
      ))}
    </Table>
  );
};

export default CattleTableLayout;
