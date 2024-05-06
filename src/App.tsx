import { Route, Routes } from 'react-router-dom';
import './globals.css';
import SignIn from './_auth/forms/sign-in';
import Home from './_root/pages/Home';
import RootLayout from './_root/RootLayout';
import SignUp from './_auth/forms/sign-up';
import AuthLayout from './_auth/auth-layout';

function App() {

  return (
    <main className='flex h-screen'>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>

        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
