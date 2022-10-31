import React from 'react';
import Hero from './components/Hero';
import Products from './components/Products';
import Featured from './components/Featured';
import Footer from './components/Footer';
import { productData, productDataTwo } from './data';
import { GlobalStyle } from './globalStyle';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Hero />
            <Products heading='Choose your favorite' data={ productData } />
            <Featured />
            <Products heading='Sweet treats for you' data={ productDataTwo } />
            <Footer />
        </>
    )
}

export default App;