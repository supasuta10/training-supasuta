import React from 'react'
import { Layout } from './../Template/Layout';
import { NavLink } from 'react-router-dom';

const Notfound = () => {
  return (
    <Layout>
        <center><h1 className="text-center font-bold text-5xl">
            ไม่พบหน้าที่ต้องการ
        </h1></center>
        <center><p className="text-center"> กรุณาลองใหม่อีกครั้ง </p></center>
        <center><NavLink to="/">กลับหน้าหลัก</NavLink></center>
    </Layout>
  )
}

export default Notfound