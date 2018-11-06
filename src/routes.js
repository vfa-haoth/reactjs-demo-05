import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Products from './components/Products';
import SignIn from './components/SignIn';

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <Home />
    },
    {
        path : '/about',
        exact : false,
        main : () => <About />
    },
    {
        path : '/contact',
        exact : false,
        main : () => <Contact />
    },
    {
        path : '/products',
        exact : false,
        main : ({match, location}) => <Products match={match} location={location}/>
    },
    {
        path : '/signin',
        exact : false,
        main : ({location}) => <SignIn location={location}/>
    },
    {
        path : '',
        exact : false,
        main : () => <NotFound />
    }
];

export default routes;