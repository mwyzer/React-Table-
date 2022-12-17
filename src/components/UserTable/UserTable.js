import React, { useEffect, useState } from 'react';
import DataTable from '../common/DataTable/DataTable';

const columns = [
  { field: 'id', headerName: 'User ID', width: 150 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'signup_date', headerName: 'Signup Date', width: 200 },
];

const userTableStyles = {
  height: '650px',
};

const UserTable = ({ onError }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    fetch('https://my.api.mockaroo.com/users/123.json?key=3a7848a0')
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch(() => onError());
  }, []);

  return (
    <DataTable
      rows={users}
      columns={columns}
      loading={!users.length}
      sx={userTableStyles}
    />
  );
};

export default UserTable;
