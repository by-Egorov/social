import * as React from 'react'
import { CssBaseline, Box, Container } from '@mui/material'

export default function SimpleContainer() {
	return (
		<>
			<CssBaseline />
			<Container maxWidth='lg'>
				<Box sx={{ bgcolor: '#dee0e1', height: '100vh' }}>
				
				</Box>
			</Container>
		</>
	)
}
