import React, { useState } from "react";
import "./candidate.css";
import { DataGrid } from "@mui/x-data-grid";
import { CloudUpload } from "@mui/icons-material"; // Import the CloudUpload icon
import { productRows } from "./candidateinfo";

export default function Candidate() {
  const [data, setData] = useState(productRows);
  const [searchLocation, setSearchLocation] = useState("");
  const [searchPosition, setSearchPosition] = useState("");

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Candidate Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="candidateItem">
            <img className="candidateImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 300 },
    { field: "position", headerName: "Position", width: 200 },
    { field: "location", headerName: "Location", width: 200 },
    {
      field: "resume",
      headerName: "Resume",
      width: 200,
      renderCell: (params) => {
        return (
          <CloudUpload onClick={() => handleUpload(params.row.id)} className="uploadIcon" />
        );
      },
    },
  ];

  const getRowClassName = (params) => {
    return params.row.id === data[0].id ? "headerRow" : "";
  };

  const handleUpload = (id) => {
    // Implement the upload functionality here
    console.log("Upload resume for candidate with ID:", id);
  };

  // Filter function based on search criteria
  const filteredCandidates = data.filter((candidate) => {
    return (
      candidate.location.toLowerCase().includes(searchLocation.toLowerCase()) &&
      candidate.position.toLowerCase().includes(searchPosition.toLowerCase())
    );
  });

  return (
    <div className="candidate">
      <div className="searchBars">
        <input
          type="text"
          placeholder="Search by location"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by position"
          value={searchPosition}
          onChange={(e) => setSearchPosition(e.target.value)}
        />
      </div>
      <DataGrid
        rows={filteredCandidates}
        disableSelectionOnClick
        getRowClassName={getRowClassName}
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
