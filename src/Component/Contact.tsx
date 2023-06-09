import * as React from 'react';
import Sidebar from './Sidebar';
import Button from '@mui/material/Button';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import { useDispatch,useSelector} from 'react-redux';
import { contactstore } from '../features/ContactRedu';
import {useLocation , useNavigate} from 'react-router-dom';


export default function Contact() {
    const navigate = useNavigate();
    const state = useLocation();
    let arr = useSelector((state:any)=> state.contact.value);
    let [submit,submitset] = React.useState({id:1,fname:'',lname:'',status:''});
    let [storedata,setStoreData] = React.useState([{}]);
    const dispatch = useDispatch();
    const onSubmit = () => {
        storedata.push(submit);
        dispatch(contactstore({submit}));
        navigate('/contactlist')
        console.log(storedata);
    }
    React.useEffect(()=>{
        if(state.state!=null){
            submit.fname = arr.submit.fname;submit.lname= arr.submit.lname;submit.status=arr.submit.status;
            console.log(submit)
        }
    },[state.state!=null])
    return (
        <div>
            <Sidebar />
            <div className='cont-text' >
                <h3  >Create Contact</h3>
                <form >
                    <div className='cont'>
                        <label>First Name:</label>
                        <TextField
                            size="small"
                            
                            onChange={(e)=>{submit.fname = e.target.value}}
                            value={submit.fname}
                        />
                    </div>
                    <div className='cont'>
                        <label>Last Name:</label>
                        <TextField
                            size="small"
                            onChange={(e)=>{submit.lname = e.target.value}}
                            value={submit.lname}
                        />
                    </div>
                    <div className='cont'>
                        <label>Status:</label>
                        <RadioGroup
                            onChange={(e)=>{submit.status=e.target.value}}
                            value={submit.status}
                        >
                            <FormControlLabel value="Active" control={<Radio />} label="Active" />
                            <FormControlLabel value="Inactive" control={<Radio />} label="Inactive" />
                        </RadioGroup>
                    </div>
                    <div style={{textAlign:'center'}}>
                    <Button  variant="contained" style={{ marginTop: '30px' }} onClick={onSubmit}>Submit</Button>
                    </div>
                </form >
            </div>
        </div>
    )

}
