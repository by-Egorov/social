import React, { useState } from 'react'
import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	Button,
	IconButton,
	Drawer,
} from '@mui/material'
import DrawerList from '../../components/DrawerList'
import Content from '../../components/Content'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'

const Home = ({users}) => {

	const [open, setOpen] = useState(false)

	const toggleDrawer = newOpen => () => {
		setOpen(newOpen)
	}

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2 }}>
						<MenuIcon onClick={toggleDrawer(true)}/>
						<Drawer open={open} onClose={toggleDrawer(false)}>
							<DrawerList toggleDrawer={toggleDrawer} users={users}/>
						</Drawer>
					</IconButton>
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						Social
					</Typography>
					<Button color='inherit'><Link to='/register' style={{textDecoration: 'none', color: 'inherit'}}>LOGIN</Link></Button>
				</Toolbar>
			</AppBar>
			<Content/>
		</Box>
	)
}

export default Home
