import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell  from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Sidebar from './Sidebar';
import Button from '@mui/material/Button';
import { useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function ContactList() {

    let arr = useSelector((state:any)=> state.contact.value);
    const navigate =  useNavigate()

    function editrow(val:number){
      navigate('/contact',{state:{id:val}});
    } 

    return(
        <>
            <Sidebar />
            <div className='cont-text' style={{marginLeft:'250px'}}>
            <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">fname</TableCell>
                                <TableCell align="right">lname</TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell align="right">Edit</TableCell>
                                <TableCell align="right">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                           
                                <TableRow
                                   
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="right">
                                        {arr.submit.fname}
                                    </TableCell>
                                    <TableCell align="right">{arr.submit.lname}</TableCell>
                                    <TableCell align="right">{arr.submit.status}</TableCell>
                                    <TableCell align="right"><Button variant='contained'onClick={()=>editrow(arr.submit.id)} color="success">Edit</Button></TableCell>
                                    <TableCell align="right"><Button variant="outlined"  color="error">Delete</Button>
                                    </TableCell>
                                </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}