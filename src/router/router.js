import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Products from '../components/Products/Products'
import Customer from '../components/Customer/Customer'
import StatsSummary from '../components/StatsSummary/StatsSummary'
import App from '../App'
import EditProducts from '../components/EditProducts/EditProducts'
import CouponDiscount from '../components/CouponDiscount/CouponDiscount'
import Profile from '../components/Profile/Profile'
import Fonts from '../components/FontsPalette'
import Icons from '../components/IconsPalette'


export default function Router() {
  return (
    <Routes>
        <Route path='/' element={<App/>} >
            <Route index path='/' element={<Products/>} />
            <Route path='customer' element={<Customer/>} />
            <Route path='statssummary' element={<StatsSummary/>} />
            <Route path='editproduct' element={<EditProducts/>} />
            <Route path='coupondiscount' element={<CouponDiscount/>} />
            <Route path='profile' element={<Profile/>} />
        </Route>
        <Route path='icons' element={<Icons/>} />
        <Route path='fonts' element={<Fonts/>} />
    </Routes>
  )
}
