import { createRoot } from 'react-dom/client'
import SnowFall from './components/SnowFall'
import ProviderRedux from './components/ProviderRedux'
import App from './App'
import './tailwind.css'

createRoot(document.getElementById('root')!).render(
  <ProviderRedux>
    {/* <div className='fixed top-0 h-screen w-screen z-10'>
      <DragConstraints />
    </div> */}
    <App />
    <SnowFall />
  </ProviderRedux>
)
