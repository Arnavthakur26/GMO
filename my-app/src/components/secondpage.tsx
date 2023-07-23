// DataPage.tsx

import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import Departments from "./Department";
import Typography from "@mui/material/Typography";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export default function DataPage() {
  const [data, setData] = useState<Post[]>([]);

  const navigate = useNavigate();
  useEffect(() => {
    const details = localStorage.getItem("userDetails");
    if (!details) {
      navigate("/");
    }
    const fetchData = async () => {
      const response = await fetch(API_URL);
      const json = await response.json();
      setData(json);
    };

    fetchData();
  });

  return (
    <div style={{ height: 400, width: "100%", margin: "10px auto" }}>
      <Typography variant="h5" color="initial" style={{ margin: "10px auto" }}>
        Component 1
      </Typography>
      <DataGrid
        rows={data}
        columns={[
          { field: "id", headerName: "ID" },
          { field: "title", headerName: "Title", width: 200 },
          { field: "body", headerName: "Body", width: 500 },
        ]}
      />
      <Typography variant="h5" color="initial" style={{ margin: "10px auto" }}>
        Component 2
      </Typography>
      <Departments />
    </div>
  );
}
