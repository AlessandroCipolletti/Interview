import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../routes/layout/Layout'
import YourOrder from '../routes/YourOrder/YourOrder'
import Page2 from '../routes/Page2/Page2'
import Page404 from '../routes/Page404/Page404'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="your-order" element={<YourOrder />} />
          <Route path="page2" element={<Page2 />} />

          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  )
}


export default App
