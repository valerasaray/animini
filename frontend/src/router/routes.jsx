import MinimizePage from '../components/MinimizePage'
import NotFoundPage from '../components/NotFoundPage'
import RemoveBackgroundPage from '../components/RemoveBackgroundPage'

const routes = [
	{ path: 'removebg', element: RemoveBackgroundPage },
	{ path: 'minimize', element: MinimizePage },
	{ path: '*', element: NotFoundPage },
]

export default routes
