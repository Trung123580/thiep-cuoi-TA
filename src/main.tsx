import { createRoot } from 'react-dom/client'
import SnowFall from './components/SnowFall'
import ProviderRedux from './components/ProviderRedux'
import App from './App'
import './tailwind.css'
import DragConstraints from './components/ui/DragConstraints'

createRoot(document.getElementById('root')!).render(
  <ProviderRedux>
    <DragConstraints />
    <App />
    <SnowFall />
    <div className='fixed right-0 bottom-0'>asasdasdasdasdasdd</div>
  </ProviderRedux>
)
