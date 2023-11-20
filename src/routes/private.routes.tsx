import { Route, Routes } from 'react-router-dom'
import { ServicesList } from '../pages/ServicesList'


export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/services" element={<ServicesList />} />
    </Routes>
  )
}
