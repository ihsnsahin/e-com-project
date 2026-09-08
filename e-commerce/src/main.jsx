import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { myStore } from './store/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={myStore}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
      <ToastContainer />
    </BrowserRouter>
  </Provider>

)
