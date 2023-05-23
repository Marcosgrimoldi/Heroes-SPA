import {NavBar} from '../../ui';
import { Navigate, Route, Routes } from 'react-router-dom';
import { DcPage, MarvelPage,Search,Heroes } from '../pages';

export const HeroesRoutes = () => {
  return (
    <>
    <NavBar/>

    <div className="container">

    <Routes>
        <Route path="marvel" element={<MarvelPage/>}/> 
        <Route path="dc" element={<DcPage/>}/> 
        <Route path="/" element={<Navigate to = "/marvel"/>}/> 
        <Route path="/search" element={<Search to = "/search"/>}/> 
        <Route path="heroes/:id" element={<Heroes to = "/heroes"/>}/> 
    </Routes>

    </div>
    </>
  )
}
