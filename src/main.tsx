import { createRoot } from 'react-dom/client'
import App from './App'
import './tailwind.css'
import SnowFall from './components/SnowFall'
import DragConstraints from './components/ui/DragConstraints'

createRoot(document.getElementById('root')!).render(
  <>
    <div className='fixed top-0 h-screen  w-screen z-10 '>
      <DragConstraints />
    </div>
    <App />
    <SnowFall />
  </>
)
