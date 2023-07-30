import React, { useEffect, useState } from 'react';
import { Box, Tab, Tabs, Typography, createTheme, ThemeProvider, Stack, TextField } from '@mui/material';
import axios from 'axios';
import Button from '@mui/material/Button';
import ShowTable from './ShowTable';
// import { data } from '../utils/StaticData'
import SearchBar from 'material-ui-search-bar';
import AddData from './AddData';
import Analytics from './Analytics';

const theme = createTheme({
    components: {
        MuiTab: {
            styleOverrides: {
                root: {
                    color: 'white', // Set tab text color to white
                    '&.Mui-selected': {
                        color: 'white', // Set selected tab text color to white
                        // Set selected tab background color to white
                    },

                },

            },
        },
    },
});
// const search = true
const Navbar = () => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const [search,setSearch] = useState(false)
    const [searched, setSearched] = useState("");

    const [data,setData] = useState([])
    const [refreh,setRefresh] = useState(0)    

    const [searchButton,setSearchButton] = useState(false)

    useEffect(()=>{
        const loadData = async() => {
            const responce = await axios.get('http://localhost:8081/Mile_Stone_3/dataLoading')
            // console.log("Data component")
            console.log(responce.data)
            setData(responce.data)
            // return responce
        }
        loadData()
    },[refreh])

    const refreshHandler = () => {
        setRefresh(refreh+1)
    }

    const [row, setRows] = useState(data)   

    const requestSearch = (searchedVal) => {

        setSearchButton(true)

        setSearched(searchedVal)
    };

    const handleSearchClicked = () => {
        setSearch(true)
        const filteredRows = data.filter((row) => {
            return row.customer_id.toString().includes(searched);
        });
        console.log("filterRows",filteredRows)
        
        setRows(filteredRows);
        setSearchButton(false)
    }

     const handleTabChange = (e, tabIndex) => {
        setCurrentTabIndex(tabIndex);
    };


    const cancelSearch = () => {
        setSearched("");
        requestSearch(searched);
        setRows(row)
    };

    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <Tabs sx={{ width: '60%' }} TabIndicatorProps={{ style: { background: 'white' } }} value={currentTabIndex} onChange={handleTabChange}>
                        <Tab label="Home" onClick={()=>setSearch(false)}/>
                        <Tab label="Add Data" />
                        <Tab label="Analytics View" />
                        {search && <Tab label="Search Result" />}
                    </Tabs>

                    <Stack sx={{ flexDirection: 'row', mr: "2%", mt: "1%", width: "40%", alignContent: 'flex-end',justifyContent:'space-between' }}>

                        <SearchBar
                            placeholder='CUSTOMER ORDER ID'
                            value={searched}
                            onChange={(searchVal) => requestSearch(searchVal)}
                            onCancelSearch={() => cancelSearch()}
                        />

                        {!searchButton?
                        <Button style={{borderRadius:'10px',height:'48px',marginLeft:'10px'}} variant="contained" color="success">
                            Advance Search
                        </Button>:
                        <Button sx={{borderRadius:'10px',width:'110px'}} variant="contained" color="error" onClick={handleSearchClicked}>
                            Search
                        </Button>}
                    </Stack>

                </Stack>

                {currentTabIndex === 0 && (
                    <Box sx={{ p: 3 }}>
                        <ShowTable row={data} />
                    </Box>
                )}

                {/* TAB 2 Contents */}
                {currentTabIndex === 1 && (
                    <Box sx={{ p: 3,height:'68vh' }}>
                        <AddData/>
                    </Box>
                )}
                {currentTabIndex === 2 && (
                    <Box sx={{ p: 3,height:'68vh' }}>
                        <Analytics data={row}/>
                    </Box>
                )}

                {
                    currentTabIndex === 3 && (
                        <Box sx={{ p: 3 }}>
                            <ShowTable row={row} />
                        </Box>
                    )
                }
            </Box>
            <Box sx={{position:'absolute',top:'88%',left:'17%'}}>
            <Button variant='contained' sx={{ color: 'white', backgroundColor: 'orange',width:'180px' }} onClick={refreshHandler} >
                Refresh Data
            </Button>
            </Box>
            
        </ThemeProvider>
    );
};

export default Navbar;