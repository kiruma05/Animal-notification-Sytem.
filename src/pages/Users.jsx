//import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";
import Button from "../ui/Button"
import Row from "../ui/Row";

import UserTable from "../features/users/UserTable";
import { useState } from "react";
import CreateUserForm from "../features/users/CreateUserForm";

function Users() {
  const [showForm, setShowForm]=useState(false);
  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">All users</Heading>
      
      <p>Sort/Filter</p>
    </Row>
    <UserTable />
    <Button onClick={()=>setShowForm((show)=>!show)}>Add New User</Button>
    {showForm && <CreateUserForm />}
    </>
  );
}

export default Users;
