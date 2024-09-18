import React, { useState } from 'react';
import Heading from '../ui/Heading';
import Button from '../ui/Button';
import Row from '../ui/Row';
import CattleTable from '../features/cattles/CattleTable'; // Adjust path as needed
import CreateCattleForm from '../features/cattles/CreateCattleForm'; // Adjust path as needed

function Cattles() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Cattle</Heading>
        <p>Sort/Filter</p>
      </Row>
      <CattleTable />
      <Button onClick={() => setShowForm((show) => !show)}>Add New Cattle</Button>
      {showForm && <CreateCattleForm />}
    </>
  );
}

export default Cattles;
