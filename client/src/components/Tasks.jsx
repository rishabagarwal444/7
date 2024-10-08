import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

const columns = [
  { field: "taskTitle", headerName: "Task Title", width: 200 },
  { field: "taskDescription", headerName: "Task Description", width: 250 },
  { field: "taskListTitle", headerName: "Task list Title", width: 200 },
  { field: "createdBy", headerName: "Email ID", width: 200 },
  { field: "creationTime", headerName: "Created", width: 250 },
];

const Tasks = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/tasklists");
        const taskData = [];

        response.data.forEach((user) => {
          user.todoLists.forEach((todoList) => {
            todoList.tasks.forEach((task) => {
              const creationTime = task.createdAt
                ? new Date(task.createdAt._seconds * 1000).toLocaleString()
                : "N/A";
              taskData.push({
                id: task.taskId,
                taskTitle: task.title,
                taskDescription: task.description,
                taskListTitle: todoList.name,
                createdBy: user.email,
                creationTime: creationTime,
              });
            });
          });
        });

        setRows(taskData);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return (
    <>
      <h1 className="d-flex justify-content-center">Tasks</h1>
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

export default Tasks;
