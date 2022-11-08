import { BrowserRouter } from 'react-router-dom'
import { PostsContextProvider } from './contexts/PostsContext'
import { Router } from './Routes'

function App() {
  return (
    <BrowserRouter>
      <PostsContextProvider>
        <Router />
      </PostsContextProvider>
    </BrowserRouter>
  )
}

export default App
