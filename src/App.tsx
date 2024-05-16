import { Route, Routes } from 'react-router-dom';
import './globals.css';
import SignIn from './_auth/forms/sign-in';
import SignUp from './_auth/forms/sign-up';
import Home from './_root/pages/Home';
import RootLayout from './_root/RootLayout';
import AuthLayout from './_auth/auth-layout';
import ExplorePage from './_root/pages/explore';
import SavedPage from './_root/pages/saved';
import CreatePost from './_root/pages/create-post';
import EditPost from './_root/pages/edit-post';
import PostDetails from './_root/pages/post-details';

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
          <Route path='/explore' element={<ExplorePage />} />
          <Route path='/saved' element={<SavedPage />} />
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:id' element={<EditPost />} />
          <Route path='/posts/:id' element={<PostDetails />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
