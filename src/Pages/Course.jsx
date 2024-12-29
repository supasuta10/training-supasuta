import React from 'react'
import Layout from '../Template/Layout'
import CourseCard from './../Components/CourseCard';

const Course = () => {
    const CourseList = [
        {
            title: "Basic React Native",
            duration: "5 Day",
            price: "7,500"
        },

        {
            title: "Power BI Dashboard",
            duration: "4 Day",
            price: "5,500"
        },

        {
            title: "UI Design with Figma",
            duration: "3 Day",
            price: "5,000"
        },

        {
            title: "Cross Platform with Flutter",
            duration: "5 Day",
            price: "6,500"
        }
    ]
  return (
    <Layout>
        <h1>Refrech Course</h1>
        <hr />
        {
            CourseList.map((b)=>(
                <CourseCard key={b.title} {...b} />
            ))
        }
    </Layout>
  )
}

export default Course