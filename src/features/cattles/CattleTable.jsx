import React from 'react';
import { useCattle } from './useCattle';
import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import Empty from '../../ui/Empty';
import CattleRow from './CattleRow';

const CattleTable = () => {
  const { isLoading, error, cattles } = useCattle();

  if (isLoading) return <Spinner />;
  if (error) return <Empty>No available Cattles...</Empty>;

  // Ensure cattles is always an array before mapping
  if (!Array.isArray(cattles)) return <Empty>No cattles available</Empty>;

  return (
    <Table columns="0.6fr 2fr 2.4fr 1rem 3.2rem">
      <Table.Header>
      <div>Tag Number</div>
        <div>Ranch ID</div>
        <div>Category Name</div>
        <div>DOB</div>
        <div>Operations</div>
      </Table.Header>
      <Table.Body data={cattles} 
                  render={(cattle) => (
        <CattleRow cattle={cattle} key={cattle.id} />
      )} />
    </Table>
  );
};

export default CattleTable;

