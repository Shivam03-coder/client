"use client"
import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';

interface EmployeeData {
  id: number;
  username: string;
  outletName: string;
  activeHours: number;
  ppGrade: string;
}

function createEmployeeData(
  id: number,
  username: string,
  outletName: string,
  activeHours: number,
  ppGrade: string,
): EmployeeData {
  return {
    id,
    username,
    outletName,
    activeHours,
    ppGrade,
  };
}

const employees = [
  createEmployeeData(1, 'Alice', 'Outlet 1', 40, 'A'),
  createEmployeeData(2, 'Bob', 'Outlet 2', 35, 'B'),
  createEmployeeData(3, 'Charlie', 'Outlet 1', 45, 'A'),
  createEmployeeData(4, 'David', 'Outlet 3', 30, 'C'),
  createEmployeeData(5, 'Eve', 'Outlet 2', 25, 'B'),
  createEmployeeData(6, 'Frank', 'Outlet 1', 50, 'A'),
  createEmployeeData(7, 'Grace', 'Outlet 3', 20, 'D'),
  createEmployeeData(8, 'Heidi', 'Outlet 2', 38, 'B'),
  createEmployeeData(9, 'Ivan', 'Outlet 1', 45, 'A'),
  createEmployeeData(10, 'Judy', 'Outlet 3', 32, 'C'),
  createEmployeeData(11, 'Mallory', 'Outlet 2', 37, 'B'),
  createEmployeeData(12, 'Niaj', 'Outlet 1', 28, 'C'),
  createEmployeeData(13, 'Olivia', 'Outlet 3', 42, 'A'),
  createEmployeeData(14, 'Peggy', 'Outlet 2', 36, 'B'),
  createEmployeeData(15, 'Sybil', 'Outlet 1', 29, 'C'),
  createEmployeeData(16, 'Trent', 'Outlet 3', 31, 'B'),
  createEmployeeData(17, 'Victor', 'Outlet 2', 26, 'D'),
  createEmployeeData(18, 'Walter', 'Outlet 1', 39, 'A'),
  createEmployeeData(19, 'Xena', 'Outlet 3', 33, 'B'),
  createEmployeeData(20, 'Yara', 'Outlet 2', 40, 'A'),
  createEmployeeData(20, 'Yara', 'Outlet 2', 40, 'A'),
  createEmployeeData(20, 'Yara', 'Outlet 2', 40, 'A'),
  createEmployeeData(20, 'Yara', 'Outlet 2', 40, 'A'),
  createEmployeeData(20, 'Yara', 'Outlet 2', 40, 'A'),
  createEmployeeData(20, 'Yara', 'Outlet 2', 40, 'A'),
  createEmployeeData(20, 'Yara', 'Outlet 2', 40, 'A'),
  createEmployeeData(20, 'Yara', 'Outlet 2', 40, 'A'),
  createEmployeeData(20, 'Yara', 'Outlet 2', 40, 'A'),
  createEmployeeData(20, 'Yara', 'Outlet 2', 40, 'A'),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof EmployeeData;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'username',
    numeric: false,
    disablePadding: true,
    label: 'Username',
  },
  {
    id: 'outletName',
    numeric: false,
    disablePadding: false,
    label: 'Outlet Name',
  },
  {
    id: 'activeHours',
    numeric: true,
    disablePadding: false,
    label: 'Active Hours',
  },
  {
    id: 'ppGrade',
    numeric: false,
    disablePadding: false,
    label: 'P-P Grade',
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof EmployeeData) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property: keyof EmployeeData) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all employees',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;
  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
        numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        },
      ]}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Employee List
        </Typography>
      )}
    </Toolbar>
  );
}

export default function EmployeeTable() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof EmployeeData>('username');
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof EmployeeData,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = employees.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  const filteredEmployees = employees.sort(getComparator(order, orderBy));

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <EnhancedTableToolbar numSelected={selected.length} />
      <TableContainer>
        <Table stickyHeader aria-label="employee table">
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={employees.length}
          />
          <TableBody>
            {filteredEmployees.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              const isItemSelected = isSelected(row.id);
              const labelId = `enhanced-table-checkbox-${row.id}`;

              return (
                <TableRow
                  hover
                  onClick={(event) => handleClick(event, row.id)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.id}
                  selected={isItemSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isItemSelected}
                      inputProps={{
                        'aria-labelledby': labelId,
                      }}
                    />
                  </TableCell>
                  <TableCell component="th" id={labelId} scope="row" padding="none">
                    {row.username}
                  </TableCell>
                  <TableCell align="left">{row.outletName}</TableCell>
                  <TableCell align="right">{row.activeHours}</TableCell>
                  <TableCell align="left">{row.ppGrade}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={employees.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
