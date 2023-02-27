import React from 'react'
import { Link } from 'react-router-dom'

function LinkButton({ children, to, className }) {
	return (
		<Link to={to} className={className}>
			{children}
		</Link>
	)
}

export default LinkButton
