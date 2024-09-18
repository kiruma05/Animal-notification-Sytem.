//import styled from 'styled-components';
import Spinner from '../../ui/Spinner';
import UserRow from './UserRow';
import { useUsers } from "./useUsers";
import Table from '../../ui/Table';
import Empty from '../../ui/Empty';



function UserTable() {
  const { isLoading, error, users } = useUsers(); 

  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading users...</div>;

  // Ensure users is always an array before mapping
  if (!Array.isArray(users)) return <Empty>No users available</Empty>;

  return (
    <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr">
      <Table.Header>
        <div>Image</div>
        <div>Full Name</div>
        <div>Email</div>
        <div>Role</div>
        <div>Operations</div>
      </Table.Header>
      <Table.Body data={users} 
                  render={(user) => (
        <UserRow user={user} key={user.id} />
      )} />
     
    </Table>
  );
}

export default UserTable;
