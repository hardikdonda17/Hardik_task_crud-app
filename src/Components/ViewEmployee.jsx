import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { getEmployee} from "../Service/api";
import { useParams, Link } from "react-router-dom";


const useStyle = makeStyles({
    table: {
        width: '90%',
        margin: 'auto',
        marginTop: 50
    },
    thead: {
        '& > *': {
            background: '#111111',
            color: '#ffffff',
            fontSize: 16
        }
    },
    button: {
        margin: 'auto',
        marginTop: 15,
        display: 'flex',
        width: '15%'
    }
})

const ViewEmployee = () => {
    const [employees, setEmployee] = useState([]);
    const classes = useStyle();
    const {id} = useParams();
    useEffect(()=>{
        getOneEMployee();
    },[])
    const getOneEMployee = async() =>{
        const response = await getEmployee(id);
        // console.log(response);
        setEmployee(response.data);
    }

    return(
        <>
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Forst Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>DOB</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>Phone</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow key={employees.id}>
                    <TableCell>{employees.id}</TableCell>
                    <TableCell>{employees.fname}</TableCell>
                    <TableCell>{employees.lname}</TableCell>
                    <TableCell>{employees.email}</TableCell>
                    <TableCell>{employees.age}</TableCell>
                    <TableCell>{employees.dob}</TableCell>
                    <TableCell>{employees.gender}</TableCell>
                    <TableCell>{employees.phone}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
        <Button variant="contained" color="primary" component={Link} to="/"  className={classes.button}>Back</Button>
        </>
    );
}

export default ViewEmployee;
