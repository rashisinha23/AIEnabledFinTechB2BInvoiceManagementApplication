


import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, createTheme, ThemeProvider } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Stack, TextField } from '@mui/material';
import './ShowTable.css';
import axios from 'axios';

const ShowTable = ({ row }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [activate, setActivate] = useState(false);
  const [open, setOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  // console.log("rows",row)

  const theme = createTheme({
    components: {
      MuiDataGrid: {
        styleOverrides: {
          root: {
            '& .MuiDataGrid-cell': {
              backgroundColor: 'grey', // Set your desired background color
              color: 'white'

            },
            '& .MuiDataGrid-columnHeader': {
              backgroundColor: 'grey', // Set your desired background color
              color: 'white'
            },
            '& .MuiDataGrid-footerContainer': {
              backgroundColor: 'grey', // Set pagination background color
              color: 'white', // Set pagination text color
            },
            '& .MuiToolbar-root': {
              backgroundColor: 'grey', // Set pagination background color
              color: 'white', // Set pagination text color
            },
          },
        },
      },
    },
  });

  useEffect(() => {
    setActivate(selectedRows.length == 1);
  }, [selectedRows]);

  const columns = [
    { field: 'sl_no', headerName: 'Sl_No', width: 80 },
    { field: 'customerOrderID', headerName: 'CUSTOMER ORDER ID', width: 200 },
    { field: 'saleOrg', headerName: 'SALES ORG', width: 100 },
    { field: 'distribution', headerName: 'DISTRIBUTION CHANNEL', width: 250 },
    { field: 'companycode', headerName: 'COMPANY CODE', width: 160 },
    { field: 'ordercreation', headerName: 'ORDER CREATION', width: 150 },
    { field: 'orderAmt', headerName: 'ORDER AMOUNT', width: 150 },
    { field: 'customerno', headerName: 'CUSTOMER NUMBER', width: 180 },
    { field: 'amountInUsd', headerName: 'AMOUNT IN USD', width: 180 },
    { field: 'orderCurrency', headerName: 'ORDER CURRENCY', width: 180 },
  ];

  const rows = row.map((row, index) => ({
    id: index,
    selected: false,
    sl_no: row.Sl_no,
    customerOrderID: row.customer_id,
    saleOrg: row.sales_org,
    distribution: row.distribution_channel,
    companycode: row.company_code,
    ordercreation: row.order_creation_date,
    orderAmt: row.order_amount,
    customerno: row.customer_number,
    amountInUsd:row.amount_usd,
    orderCurrency:row.order_currency
  }));

  const handleDelete = async () => {
    setOpen(false)
    if (selectedRows.length > 0) {
      const selectedRow = rows.find((row) => row.id === selectedRows[0]);
      const selectedSerial = selectedRow ? selectedRow.sl_no : null;

      if (selectedSerial) {
        try {
          const response = await axios.delete('http://localhost:8081/Mile_Stone_3/delete', {
            params: { sl_no: selectedSerial }
          });
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  const handleEdit = () => {
    if (selectedRows.length === 1) {
      const selectedRow = rows.find((row) => row.id === selectedRows[0]);
      setSelectedRowData(selectedRow);
      setEditModalOpen(true);
    }
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
  };


  return (
    <div >
      <ThemeProvider theme={theme}>

        <DataGrid sx={{ border: 0, borderBottom: '2px solid white', height: '68vh' }}
          rows={rows}
          columns={columns}

          checkboxSelection

          onRowSelectionModelChange={(newRowSelectionModel) => {
            setSelectedRows(newRowSelectionModel);
          }}

          className="custom-datagrid" // Add custom class for styling
        />
        <Stack style={{ position: 'absolute', top: '88.3%', flexDirection: 'row', left: '29%' }}>
          <Button sx={{ mr: '5px', color: 'white', backgroundColor: 'orange' }} variant='contained' disabled={!activate}
            onClick={() => setOpen(true)}>
            Delete
          </Button>

          <Dialog
            open={open}
            onClose={() => setOpen(false)}

            aria-labelledby='dialog-title'
            aria-describedby='dialog-description'>
            <DialogTitle id='dialog-title'>
              <p style={{ alignItems: 'left', fontSize: '20px', paddingBottom: '0' }}>
                Delete Records?</p>
            </DialogTitle>
            <DialogContentText id='dialog-desciption'>
              <div style={{ marginLeft: '20px', marginBottom: '10px' }}>Are you sure you want to delete</div>

            </DialogContentText>
            <DialogActions sx={{ alignItems: 'center' }}>
              {/* <div style={{display:'flex',justifyContent:'center',alignItems:'center',paddingRight:'0px'}}> */}
              <Button variant='outlined' onClick={handleDelete}
                sx={{ width: "140px", color: 'black', border: '0.5px solid black' }}
              >Confirm</Button>

              <Button variant='outlined'
                sx={{ width: "140px", color: 'black', border: '0.5px solid black' }}
                onClick={() => setOpen(false)}>Cancel</Button>
              {/* </div> */}

            </DialogActions>
          </Dialog>

          <Button
            variant='contained'
            disabled={!activate}
            sx={{ mr: '5px', color: 'white', backgroundColor: 'orange' }}
            onClick={handleEdit}
          >
            Edit
          </Button>

        </Stack>
        <Dialog open={editModalOpen} onClose={handleEditModalClose}>
          <DialogTitle>Edit</DialogTitle>
          <DialogContent>
            {selectedRowData && (
              <div style={{ width: "50%" }}>
                <Stack sx={{ flexDirection: "row", width: "300px", justifyContent: "space-between", paddingTop: "8px" }}>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Order Currency"
                    multiline
                    maxRows={1}
                    sx={{ paddingRight: "5px" }}

                  />
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Company Code"
                    multiline
                    maxRows={1}

                  />

                </Stack>
                <Stack sx={{ width: "300px", paddingTop: "10px" }}>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Distribution Channel"
                    multiline
                    maxRows={1}

                  />
                </Stack>

              </div>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleEditModalClose} variant="outlined" sx={{ width: "140px", color: 'black', border: '0.5px solid black' }}>Cancel</Button>
            <Button onClick={handleEditModalClose} variant="outlined" sx={{ width: "150px", marginRight: "15px", color: 'black', border: '0.5px solid black' }}>
              Save Changes
            </Button>
          </DialogActions>
        </Dialog>


      </ThemeProvider>
    </div>
  );
};

export default ShowTable;