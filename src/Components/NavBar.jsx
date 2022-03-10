import {AppBar, makeStyles, Toolbar, Typography} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const userStyle = makeStyles({
    header: {
        background: '#111111'
    },
    tabs: {
        color: '#ffffff',
        textDecoration: 'none',
        marginRight: 20,
        fontSize: 20
    }
})


const NavBar = () => {
    const classes = userStyle();
    return(
        <AppBar className={classes.header} position="static">
            <Toolbar>
                <NavLink className={classes.tabs} to="./">Employees Management App</NavLink>
                {/* <NavLink className={classes.tabs}  to="AddEmployee">Add Employee</NavLink> */}
                {/* <NavLink className={classes.tabs} to="AllEmployee">All Employee</NavLink> */}
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;