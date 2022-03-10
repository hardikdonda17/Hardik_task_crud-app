import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";
import { getEmployee, deleteEmployee } from "../Service/api";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
    table: {
        width: '90%',
        margin: 'auto',
        marginTop: 15
    },
    thead: {
        '& > *': {
            background: '#111111',
            color: '#ffffff',
            fontSize: 16
        }
    },
    button: {
        marginLeft: 15
    }
})

const AllEmployee = () => {

    const [employees, setEmployee] = useState([]);
    const classes = useStyle();
    useEffect(()=>{
        getAllEMployee();
    },[])
    const getAllEMployee = async() =>{


        const response = await getEmployee();
        // console.log(response);
        setEmployee(response.data);
        
    }

    const deleteEmployeeData = async (id) => {
        await deleteEmployee(id);
        getAllEMployee();
    }

    return(
        <>
        <Button variant="contained" color="primary" component={Link} to="/AddEmployee" style={{marginTop: 15, marginLeft: 75}} className={classes.button}>Add Employee</Button>
        
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {                    
                    employees.map(employee => (
                        <TableRow key={employee.id}>
                            <TableCell>{employee.fname}</TableCell>
                            <TableCell>{employee.lname}</TableCell>
                            <TableCell>{employee.email}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" component={Link} to={`/EditEmployee/${employee.id}`} >Edit</Button>
                                <Button variant="contained" color="secondary" onClick={() => deleteEmployeeData(employee.id)} className={classes.button}>Delete</Button>
                                <Button variant="contained" component={Link}  className={classes.button} to={`/ViewEmployee/${employee.id}`} >View</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
                
            </TableBody>
        </Table>
        </>
    );
}

export default AllEmployee;