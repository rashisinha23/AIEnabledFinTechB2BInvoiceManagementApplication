// import React,{useState} from 'react'
// import { Button } from '@mui/material';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Axios from 'axios';
// const AddData = () => {
//     const url="http://localhost:8081/Mile_Stone_3/dataLoading/Create"
//     const [data,setData]=useState({
//         Customer_order_id:"",
//         Sales_Org:"",
//         DistributionChannel:""
//     })
//     function handle(e){
//         const newData={...data}
//         newData[e.target.id]=e.target.value
//         setData(newData)
//         console.log(newData)
//     }

//     function submit(e){
//         e.preventDefault();
//         Axios.post(url,{
//            Customer_order_id: data.Customer_order_id,
//            Sales_Org:data.Sales_Org,
//            DistributionChannel:data.DistributionChannel
//         })
//         .then(res=>{
//             console.log(res.data)
//         })
//     }
//   return (
//     <Box
//     component="form"
//     sx={{
      
//     }}
//     noValidate
//     autoComplete="off"
    
//   >
//     <Box onSubmit={(e)=>submit(e)}>
//     <Box >
//     <TextField onChange={(e)=>handle(e)} id="Customer_order_id" value={data.Customer_order_id} type="CUSTOMER ORDER ID" label="CUSTOMER ORDER ID" variant="outlined" sx={{backgroundColor:'white', width: '20ch',m:1}}/>
//     <TextField onChange={(e)=>handle(e)} id="Sales_Org" value={data.Sales_Org}  type="SALES ORG" label="SALES ORG" variant="outlined" sx={{backgroundColor:'white', width: '20ch',m:1}}/>
//     <TextField onChange={(e)=>handle(e)} id="DistributionChannel" value={data.DistributionChannel}  type="DISTRIBUTION CHANNEL" label="DISTRIBUTION CHANNEL" variant="outlined" sx={{backgroundColor:'white', width: '40ch',m:1}}/>
//     </Box>
//     <Box >
//     <TextField id="outlined-basic" type="CUSTOMER NUMBER" label="CUSTOMER NUMBER" variant="outlined" sx={{backgroundColor:'white', width: '20ch',m:1,}}/>
//     <TextField id="outlined-basic" type="COMPANY CODE" label="COMPANY CODE" variant="outlined" sx={{backgroundColor:'white', width: '20ch',m:1}}/>
//     <TextField id="outlined-basic" type="ORDER CURRENCY" label="ORDER CURRENCY" variant="outlined" sx={{backgroundColor:'white', width: '20ch',m:1}}/>
//     <TextField id="outlined-basic" type="AMOUNT IN USD" label="AMOUNT IN USD" variant="outlined" sx={{backgroundColor:'white', width: '20ch',m:1}}/>
//     <TextField id="outlined-basic" type="ORDER CREATION DATE" label="ORDER CREATION DATE" variant="outlined" sx={{backgroundColor:'white', width: '20ch',m:1}}/>
//     </Box>
//     <Button variant="contained">submit</Button>
//   </Box>
//   </Box>
//   )
// }

// export default AddData
// import React, { useState } from 'react';
// import { Button, Box, TextField } from '@mui/material';
// import axios from 'axios';

// const AddData = () => {
//   const url = "http://localhost:8081/Mile_Stone_3/add";
//   const [data, setData] = useState({
//     customerOrderId: "",
//       salesOrg: "",
//       distributionChannel: "",
//       customerNumber: "",
//       companyCode: "",
//       orderAmount: "",
//       orderCurrency: "",
//       amountInUSD: "",
//       orderCreation: ""

//   });
//   const {
//     customerOrderId,
//     salesOrg,
//     distributionChannel,
//     customerNumber,
//     companyCode,
//     orderAmount,
//     orderCurrency,
//     amountInUSD,
//     orderCreation
//   }=data;

//   const handleInputChange = (e) => {
//     setData({...data,[e.target.name]:e.target.value});
//   };
  

// //   const handleSubmit = async(e) => {
// //     // e.preventDefault();
// //     // Axios.post(url, data)
// //     //   .then(res => {
// //     //     console.log(res.data);
// //     //   })
// //     //   .catch(error => {
// //     //     console.error(error);
// //     //   });
// //     try {
// //         await Axios.post(url, user);
// //         console.log("Data successfully sent to the server");
// //         clearData();
// //       } catch (error) {
// //         console.error("Error while sending data:", error);
// //       }
// //     };
// //   };
// const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Form submitted");
//     try {
//       await axios.post("http://localhost:8081/Mile_Stone_3/add", data);
//       console.log("Data successfully sent to the server");
      
//     } catch (error) {
//       console.error("Error while sending data:", error);
//     }
//   };
  


//   return (
//     <Box
//       component="form"
//       sx={{
//         '& .MuiTextField-root': {
//           m: 1,
//           width: '20ch'
//         }
//       }}
//       noValidate
//       autoComplete="off"
//       onSubmit={handleSubmit}
//     >
//       <TextField
//         onChange={handleInputChange}
//         id="outlined-basic"
//               label="CUSTOMER ORDER ID"
//               variant="outlined"
//               name="customerOrderId"
//               value={customerOrderId}
              
//       />
//       <TextField
//         onChange={handleInputChange}
//         id="outlined-basic1"
//               label="SALES ORG"
//               variant="outlined"
//               name="salesOrg"
//               value={salesOrg}
//       />
//       <TextField
//         onChange={handleInputChange}
//         id="outlined-basic2"
//               label="DISTRIBUTION CHANNEL"
//               variant="outlined"
//               name="distributionChannel"
//               value={distributionChannel}

//       />
//       <TextField
//       onChange={handleInputChange}
//               id="outlined-basic3"
//               label="CUSTOMER NUMBER"
//               variant="outlined"
//               name="customerNumber"
//               value={customerNumber}
//       />
//       <TextField
//       onChange={handleInputChange}
//               id="outlined-basic4"
//               label="COMPANY CODE"
//               variant="outlined"
//               name="companyCode"
//               value={companyCode}
//       />
//       <TextField
//       onChange={handleInputChange}
//               id="outlined-basic5"
//               label="ORDER AMOUNT"
//               variant="outlined"
//               name="orderAmount"
//               value={orderAmount}
//       />
//       <TextField
//       onChange={handleInputChange}
//                id="outlined-basic6"
//               label="ORDER CURRENCY"
//               variant="outlined"
//               name="orderCurrency"
//               value={orderCurrency}
//       />
//       <TextField
//       onChange={handleInputChange}
//               id="outlined-basic7"
//               label="AMOUNT IN USD"
//               variant="outlined"
//               name="amountInUSD"
//               value={amountInUSD}
              
//       />
//       <TextField
//       onChange={handleInputChange}
//         id="orderCreation"
//         type="text"
//         name="orderCreation"
//         label="Order Creation Date"
//         variant="outlined"
//         value={orderCreation}
//       />
//       <Button type="submit" variant="contained">
//         Submit
//       </Button>
//     </Box>
//   );
// };

// export default AddData;


// export default function AddData() {
//     const [user, setUser] = useState({
//       customerOrderId: "",
//       salesOrg: "",
//       distributionChannel: "",
//       customerNumber: "",
//       companyCode: "",
//       orderAmount: "",
//       orderCurrency: "",
//       amountInUSD: "",
//       orderCreation: ""
//     });
  
//     const {
//       customerOrderId,
//       salesOrg,
//       distributionChannel,
//       customerNumber,
//       companyCode,
//       orderAmount,
//       orderCurrency,
//       amountInUSD,
//       orderCreation
//     } = user;
  
//     const onInputChange = (e) => {
//       setUser({ ...user, [e.target.name]: e.target.value });
//     };
  
//     const onSubmit = async (e) => {
//       e.preventDefault();
//       console.log("Form submitted");
//       try {
//         await axios.post("http://localhost:8081/Mile_Stone_3/add", user);
//         console.log("Data successfully sent to the server");
//         clearData();
//       } catch (error) {
//         console.error("Error while sending data:", error);
//       }
//     };
  
  
//     const clearData = () => {
//       setUser({
//         customerOrderId: "",
//         salesOrg: "",
//         distributionChannel: "",
//         customerNumber: "",
//         companyCode: "",
//         orderAmount: "",
//         orderCurrency: "",
//         amountInUSD: "",
//         orderCreation: ""
//       });
//     };
  
//     return (
//       <div className="box-1">
//         <form onSubmit={onSubmit}>
//           <div>
//             <TextField
//               id="outlined-basic"
//               label="CUSTOMER ORDER ID"
//               variant="outlined"
//               name="customerOrderId"
//               value={customerOrderId}
//               onChange={onInputChange}
//             />
//             <TextField
//               id="outlined-basic1"
//               label="SALES ORG"
//               variant="outlined"
//               name="salesOrg"
//               value={salesOrg}
//               onChange={onInputChange}
//             />
  
//             <TextField
//               id="outlined-basic2"
//               label="DISTRIBUTION CHANNEL"
//               variant="outlined"
//               name="distributionChannel"
//               value={distributionChannel}
//               onChange={onInputChange}
//             />
//             <TextField
//               id="outlined-basic3"
//               label="CUSTOMER NUMBER"
//               variant="outlined"
//               name="customerNumber"
//               value={customerNumber}
//               onChange={onInputChange}
//             />
//           </div>
//           <div>
//             <TextField
//               id="outlined-basic4"
//               label="COMPANY CODE"
//               variant="outlined"
//               name="companyCode"
//               value={companyCode}
//               onChange={onInputChange}
//             />
//             <TextField
//               id="outlined-basic5"
//               label="ORDER AMOUNT"
//               variant="outlined"
//               name="orderAmount"
//               value={orderAmount}
//               onChange={onInputChange}
//             />
//             <TextField
//               id="outlined-basic6"
//               label="ORDER CURRENCY"
//               variant="outlined"
//               name="orderCurrency"
//               value={orderCurrency}
//               onChange={onInputChange}
//             />
  
//             <TextField
//               id="outlined-basic7"
//               label="AMOUNT IN USD"
//               variant="outlined"
//               name="amountInUSD"
//               value={amountInUSD}
//               onChange={onInputChange}
//             />
//             <TextField
//               id="outlined-basic8"
//               label="ORDER CREATION DATE"
//               variant="outlined"
//               name="orderCreation"
//               value={orderCreation}
//               onChange={onInputChange}
//             />
//           </div>
//           <Button type="submit">Add</Button>
//           <Button type="button" onClick={clearData}>
//             Clear Data
//           </Button>
//         </form>
//       </div>
//     );
//   }


import React, { useState } from 'react';
import { Button, Box, TextField,Stack } from '@mui/material';
import axios from 'axios';
// import '../App.css';

const AddData = () => {
  const url = "http://localhost:8081/Mile_Stone_3/add";
  const [data, setData] = useState({
    customerOrderId: "",
    salesOrg: "",
    distributionChannel: "",
    customerNumber: "",
    companyCode: "",
    orderAmount: "",
    orderCurrency: "",
    amountInUSD: "",
    orderCreation: ""
  });

  const {
    customerOrderId,
    salesOrg,
    distributionChannel,
    customerNumber,
    companyCode,
    orderAmount,
    orderCurrency,
    amountInUSD,
    orderCreation
  } = data;

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const clearData = () => {
    setData({
      customerOrderId: "",
      salesOrg: "",
      distributionChannel: "",
      customerNumber: "",
      companyCode: "",
      orderAmount: "",
      orderCurrency: "",
      amountInUSD: "",
      orderCreation: ""
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    try {
      await axios.post("http://localhost:8081/Mile_Stone_3/add", data);
      console.log("Data successfully sent to the server");
    } catch (error) {
      console.error("Error while sending data:", error);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {
          m: 1,
          width: '20ch',
          color: 'white', // Set text color to white
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white', // Set border color to white
              // backgroundColor:'white'
            },
          },
        },
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        onChange={handleInputChange}
        // className="addstyle"
        id="outlined-basic"
        label="CUSTOMER ORDER ID"
        variant="outlined"
        name="customerOrderId"
        value={customerOrderId}
      />
      <TextField
        onChange={handleInputChange}
        id="outlined-basic1"
        label="SALES ORG"
        variant="outlined"
        name="salesOrg"
        value={salesOrg}
      />
      <TextField
        onChange={handleInputChange}
        id="outlined-basic2"
        label="DISTRIBUTION CHANNEL"
        variant="outlined"
        name="distributionChannel"
        value={distributionChannel}
      />
      <TextField
        onChange={handleInputChange}
        id="outlined-basic3"
        label="CUSTOMER NUMBER"
        variant="outlined"
        name="customerNumber"
        value={customerNumber}
      />
      <TextField
        onChange={handleInputChange}
        id="outlined-basic4"
        label="COMPANY CODE"
        variant="outlined"
        name="companyCode"
        value={companyCode}
      />
      <TextField
        onChange={handleInputChange}
        id="outlined-basic5"
        label="ORDER AMOUNT"
        variant="outlined"
        name="orderAmount"
        value={orderAmount}
      />
      <TextField
        onChange={handleInputChange}
        id="outlined-basic6"
        label="ORDER CURRENCY"
        variant="outlined"
        name="orderCurrency"
        value={orderCurrency}
      />
      <TextField
        onChange={handleInputChange}
        id="outlined-basic7"
        label="AMOUNT IN USD"
        variant="outlined"
        name="amountInUSD"
        value={amountInUSD}
      />
      <TextField
        type='date'
        onChange={handleInputChange}
        id="outlined-basic8"
        // label="ORDER CREATION DATE"
        variant="outlined"
        name="orderCreation"
        value={orderCreation}
      />
      <br />
      <Stack sx={{flexDirection:'row',marginLeft:'40%'}}>
      <Button type="submit" variant="contained" sx={{backgroundColor:'orange'}}>
        Submit
      </Button>
      <Button  variant="contained" sx={{backgroundColor:'red'}} onClick={clearData}>Clear</Button>
      </Stack>
      
    </Box>
  );
};

export default AddData;