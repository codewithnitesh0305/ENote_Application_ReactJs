import { useState } from 'react'
import NavigationBar from './Component/Header/NavigationBar'
import SignIn from './Component/Authentication/SignIn'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SignUp from './Component/Authentication/SignUp'
import AllNotes from './Component/Notes/AllNotes'
import SaveOrUpdate from './Component/Notes/SaveOrUpdate'
import { getToken } from './Component/LocalStorage/TokenStorage'
import ProtectedRouter from './Component/Router/ProtectedRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/" />} />

        {/* Protected Route */}
        {/* <Route element={<ProtectedRouter/>}> */}
          <Route path="/allNotes" element={<AllNotes />} />
          <Route path='/saveOrUpdate' element={<SaveOrUpdate />} />
          <Route path='/updateNotes/:id' element={<SaveOrUpdate />} />
        {/* </Route> */}
      </Routes>
    </div>
  )
}

export default App
