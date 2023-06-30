import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'sonner'
import DentistProvider from './Components/utils/DentistContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <DentistProvider>
    <BrowserRouter>
      <App />
      <Toaster position="bottom-left" richColors expand={true} />
    </BrowserRouter>
  </DentistProvider>
  // </React.StrictMode>,
)


