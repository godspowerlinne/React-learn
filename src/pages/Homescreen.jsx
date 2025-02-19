import React from 'react'
import Header from '../components/Header'
import Statistics from '../components/Statistics'
import TopCategories from '../components/TopCategories'
import TopCourses from '../components/TopCourses'
import TopInstructors from '../components/TopInstructors'
import CustomersReviews from '../components/CustomersReviews'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const Homescreen = () => {
    return (
        <>
            <Header />
            <Statistics />
            <TopCategories />
            <TopCourses />
            <TopInstructors />
            <CustomersReviews />
            <CTA />
            <Footer />
        </>
    )
}

export default Homescreen