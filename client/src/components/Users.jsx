import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "email", headerName: "Email ID", width: 250 },
  { field: "password", headerName: "Password", width: 350 },
  { field: "signupTime", headerName: "Signup Time", width: 250 },
  { field: "ip", headerName: "IP Address", width: 200 },
];

const Users = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://react-task-7-db.onrender.com/users"
        );
        const data = await response.json();
        setRows(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <h1 className="d-flex justify-content-center">Users</h1>
      <div
        style={{ height: "calc(100vh - 80px)", width: "100%" }}
        className="mx-4"
      >
        <DataGrid
          rows={rows}
          columns={columns}
          loading={loading}
          disableSelectionOnClick
          hideFooterPagination
        />
      </div>
    </>
  );
};

export default Users;
