// Unauthenticated Routes Components.
import Home from '../pages/Home';
import Login from '../pages/Login';



export const baseRoutes = [
	{
		name: 'Home',
		path: '/',
		component: <Home />
	},
	{
		name: 'Login',
		path: '/login',
		component: <Login />
	},
];