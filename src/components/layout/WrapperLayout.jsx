import React from 'react'
import Header from '../common/Header';
import Footer from '../common/Footer';

const WrapperLayout = (title, description) => (WrapperComponent) => {
    // console.log(title)
    return (props) => {
        return (
            <>
                <Header />
                <div>
                    <WrapperComponent {...props} />
                </div>
                <Footer />
            </>
        )
    }
}

export default WrapperLayout