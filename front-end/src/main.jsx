import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store'
import Router from './routes/router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <div className='min-h-screen'>
        <Router />
      </div>
    </Provider>
  </StrictMode>,
)
