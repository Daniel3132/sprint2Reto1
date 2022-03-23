import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cartas from '../components/Cartas'
import NavBar from '../components/NavBar'

export default class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Cartas/>}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
