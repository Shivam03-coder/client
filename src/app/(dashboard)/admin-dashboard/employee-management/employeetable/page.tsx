"use client";
import * as React from "react";
import { alpha } from "@mui/material/styles";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
  Paper,
  Checkbox,
  TextField,
  Modal,
  TablePagination,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { useGetEmployeesQuery } from "@/store/api";
import { Button } from "@/components/ui/button";

interface EmployeeData {
  _id: string;
  firstname: string;
  email: string;
  phonenumber: string;
  skill: string;
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

interface EnhancedTableHeadProps {
  order: Order;
  orderBy: keyof EmployeeData;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof EmployeeData
  ) => void;
  rowCount: number;
  numSelected: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function EnhancedTableHead(props: EnhancedTableHeadProps) {
  const {
    order,
    orderBy,
    onRequestSort,
    rowCount,
    onSelectAllClick,
    numSelected,
  } = props;
  const headCells = [
    {
      id: "firstname",
      numeric: false,
      disablePadding: true,
      label: "First Name",
    },
    { id: "email", numeric: false, disablePadding: false, label: "Email" },
    {
      id: "phonenumber",
      numeric: false,
      disablePadding: false,
      label: "Phone Number",
    },
    { id: "skill", numeric: false, disablePadding: false, label: "Skill" },
    { id: "actions", numeric: false, disablePadding: false, label: "Actions" },
  ];

  return (
    <TableHead>
      <TableRow >
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all employees" }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            className="bg-secondary"
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={(event) =>
                onRequestSort(event, headCell.id as keyof EmployeeData)
              }
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
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
  onOpenCreateModal: () => void;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected, onOpenCreateModal } = props;

  return (
    <Toolbar
      className="bg-secondary shadow-2xl"
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
        numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        },
      ]}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Employee List
        </Typography>
      )}
      <Button className="text-secondary" onClick={onOpenCreateModal}>
        Add Employee
      </Button>
    </Toolbar>
  );
}

export default function EmployeeTable() {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof EmployeeData>("firstname");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [openModal, setOpenModal] = React.useState(false);
  const [currentEmployee, setCurrentEmployee] =
    React.useState<EmployeeData | null>(null);
  const [employeeData, setEmployeeData] = React.useState<EmployeeData>({
    _id: "",
    firstname: "",
    email: "",
    phonenumber: "",
    skill: "",
  });

  const { data: employees, isError } = useGetEmployeesQuery(null);
  // const [createEmployee] = useCreateEmployeeMutation();
  // const [updateEmployee] = useUpdateEmployeeMutation();
  // const [deleteEmployee] = useDeleteEmployeeMutation();

  if (isError) {
    return <div>Some error occurred</div>;
  }

  const newMappedData: EmployeeData[] =
    employees?.map((item: any) => ({
      _id: item._id,
      firstname: item.firstname,
      email: item.email,
      phonenumber: item.phonenumber,
      skill: item.skill,
    })) || [];

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof EmployeeData
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = newMappedData.map((n) => n._id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id: string) => selected.indexOf(id) !== -1;

  const handleOpenModal = () => {
    setCurrentEmployee(null);
    setEmployeeData({
      _id: "",
      firstname: "",
      email: "",
      phonenumber: "",
      skill: "",
    });
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // const handleSave = async () => {
  //   if (currentEmployee) {
  //     // Update employee
  //     await updateEmployee({ id: currentEmployee._id, ...employeeData });
  //   } else {
  //     // Create employee
  //     await createEmployee(employeeData);
  //   }
  //   handleCloseModal();
  // };

  const handleEdit = (employee: EmployeeData) => {
    setCurrentEmployee(employee);
    setEmployeeData(employee);
    setOpenModal(true);
  };

  // const handleDelete = async (id: string) => {
  //   await deleteEmployee(id);
  // };

  const filteredEmployees = newMappedData.sort(getComparator(order, orderBy));

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <EnhancedTableToolbar
        numSelected={selected.length}
        onOpenCreateModal={handleOpenModal}
      />
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={filteredEmployees.length}
            onSelectAllClick={handleSelectAllClick}
          />
          <TableBody>
            {filteredEmployees
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                const isItemSelected = isSelected(row._id);
                const labelId = `enhanced-table-checkbox-${row._id}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row._id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row._id}
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.firstname}
                    </TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.phonenumber}</TableCell>
                    <TableCell>{row.skill}</TableCell>
                    <TableCell className="space-x-3">
                      <Button
                        className="text-secondary px-5"
                        onClick={() => handleEdit(row)}
                      >
                        Edit
                      </Button>
                      <Button
                        className="text-secondary"
                        // onClick={() => handleDelete(row._id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredEmployees.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      {/* Modal for creating/updating employee */}
      <Modal
       
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box  className="rounded-2xl" sx={{ ...style, width: 400 }}>
          <Typography id="modal-title" variant="h6" component="h2">
            {currentEmployee ? "Edit Employee" : "Add Employee"}
          </Typography>
          <TextField
            label="First Name"
            value={employeeData.firstname}
            onChange={(e) =>
              setEmployeeData({ ...employeeData, firstname: e.target.value })
            }
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            value={employeeData.email}
            onChange={(e) =>
              setEmployeeData({ ...employeeData, email: e.target.value })
            }
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone Number"
            value={employeeData.phonenumber}
            onChange={(e) =>
              setEmployeeData({ ...employeeData, phonenumber: e.target.value })
            }
            fullWidth
            margin="normal"
          />
          <TextField
            label="Skill"
            value={employeeData.skill}
            onChange={(e) =>
              setEmployeeData({ ...employeeData, skill: e.target.value })
            }
            fullWidth
            margin="normal"
          />
          <Button
            className="text-secondary"
            // onClick={handleSave}
          >
            {currentEmployee ? "Update" : "Create"}
          </Button>
        </Box>
      </Modal>
    </Paper>
  );
}

// Style for the modal
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
