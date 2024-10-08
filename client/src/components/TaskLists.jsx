import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

const columns = [
  { field: "taskListTitle", headerName: "Task List Title", width: 200 },
  { field: "createdBy", headerName: "Email ID", width: 200 },
  {
    field: "noOfTasks",
    headerName: "No. of Tasks",
    type: "number",
    width: 150,
  },
  { field: "creationTime", headerName: "Created", width: 250 },
  { field: "lastUpdated", headerName: "Last Updated", width: 250 },
];

const TaskLists = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTaskLists = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://react-task-7-db.onrender.com/tasklists"
        );
        const formattedData = [];

        response.data.forEach((user) => {
          user.todoLists.forEach((todoList) => {
            const createdAt = todoList.createdAt
              ? new Date(todoList.createdAt._seconds * 1000).toLocaleString()
              : "N/A";
            const updatedAt = todoList.updatedAt
              ? new Date(todoList.updatedAt._seconds * 1000).toLocaleString()
              : "N/A";

            formattedData.push({
              id: todoList.todoListId,
              taskListTitle: todoList.name,
              createdBy: user.email,
              noOfTasks: todoList.no_of_tasks,
              creationTime: createdAt,
              lastUpdated: updatedAt,
            });
          });
        });

        setRows(formattedData);
      } catch (error) {
        console.error("Error fetching task lists:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTaskLists();
  }, []);

  return (
    <>
      <h1 className="d-flex justify-content-center">Task Lists</h1>
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

export default TaskLists;
