import { Button, FormControl, FormControlLabel, FormGroup, Input, InputLabel, RadioGroup, Typography, Radio, FormLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import { addEmployee } from "../Service/api";
import { useNavigate, Link } from 'react-router-dom';

const useStyle = makeStyles({
    container: {
        width: '50%',
        margin: 'auto',
        marginTop: 50
    },
    button: {
        width: '50%',
        margin: 'auto',
        marginTop: 15
    }
})


const initialvalues = {
    fname: '',
    lname: '',
    email: '',
    age: '',
    dob: '',
    gender: '',
    phone: ''
}

const AddEmployee = () => {
    const [employee, setEmployee] = useState(initialvalues);
    const {fname, lname, email, age, dob, gender, phone} = employee;

    const onValueChange= (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value});
    }
    const classes = useStyle();
    const navigate = useNavigate();
    const addEmployeeDetail = async() => {
        await addEmployee(employee);
        navigate('/AllEmployee');
        
    }

    return(
        <>
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add Employee</Typography>
            <FormControl>
                <InputLabel>First Name</InputLabel>
                <Input name="fname" onChange={(e) => onValueChange(e)} value={fname} />
            </FormControl>
            <FormControl>
                <InputLabel>Last Name</InputLabel>
                <Input name="lname" onChange={(e) => onValueChange(e)} value={lname} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input name="email" onChange={(e) => onValueChange(e)} value={email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Age</InputLabel>
                <Input name="age" onChange={(e) => onValueChange(e)} value={age}/>
            </FormControl>
            <FormControl>
                <InputLabel>DOB</InputLabel>
                <Input name="dob" onChange={(e) => onValueChange(e)} value={dob}/>
            </FormControl>
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="male"
                    name="gender"
                    onChange={(e) => onValueChange(e)} value={gender}

                >
                    <FormControlLabel value="Male" control={<Radio color="primary"/>} label="Male" />
                    <FormControlLabel value="Female" control={<Radio color="primary" />} label="Female" ></FormControlLabel>
                    <FormControlLabel value="Other" control={<Radio color="primary" />} label="Other" />
                </RadioGroup>
            </FormControl>
            <FormControl>
                <InputLabel>Contact</InputLabel>
                <Input name="phone" onChange={(e) => onValueChange(e)} value={phone}/>
            </FormControl>
            <Button variant="contained" onClick={() => addEmployeeDetail()} color="primary" className={classes.button}>Add Employee</Button>
            <Button variant="contained" color="primary" component={Link} to="/" style={{marginBottom: 15}}  className={classes.button}>Back</Button>
        </FormGroup>
        </>
    );
}

export default AddEmployee;