import {
	Box,
	Divider,
	Avatar,
	List,
	ListItem,
	ListItemText,
	ListItemAvatar,
	Typography,
} from '@mui/material'
import { deepOrange } from '@mui/material/colors'

const DrawerList = ({ toggleDrawer, users }) => {
	return (
		<Box
			sx={{ minWidth: 250 }}
			role='presentation'
			onClick={toggleDrawer(false)}>
			<List>
				{users.map(user => (
					<ListItem alignItems='flex-start' key={user._id}>
						<ListItemAvatar>
							<Avatar sx={{ bgcolor: deepOrange[500] }}>{user.username[0]}</Avatar>
						</ListItemAvatar>
						<ListItemText
							primary={user.username}
							secondary={
								<Typography
									component='span'
									variant='body2'
									sx={{ color: 'text.primary', display: 'inline' }}>
									{user.email}
								</Typography>
							}
						/>
					</ListItem>
				))}
			</List>
			<Divider />
		</Box>
	)
}
export default DrawerList
