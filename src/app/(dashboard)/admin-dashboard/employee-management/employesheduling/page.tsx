"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";
import { DaySchedule, EmployeeShift, ScheduleData } from "@/types"; // Assuming ScheduleData is the correct type
import { useGetShedulesQuery } from "@/store/api";

const ScheduleTable: React.FC = () => {
  // Fetch data using the hook and handle loading or error states if needed
  const { data: SchedularData, isLoading, error } = useGetShedulesQuery(null);

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error loading schedule data.</Typography>;

  return (
    <TableContainer component={Paper} style={{ marginTop: "20px" }}>
      <Table aria-label="schedule table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Shift ID</TableCell>
            <TableCell>Employees</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {SchedularData?.map((day:any,index:number) => (
            <React.Fragment key={index}>
              {/* Display the date as the first row with colspan */}
              <TableRow>
                <TableCell colSpan={3}>
                  <Typography variant="h6">
                    {new Date(day.date).toLocaleDateString()}
                  </Typography>
                </TableCell>
              </TableRow>
              {/* Display each shift within the date */}
              {day.shifts.map((shift : EmployeeShift[], shiftIndex:number) => (
                <TableRow key={`${index}-${shiftIndex}`}>
                  <TableCell />
                  
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScheduleTable;
