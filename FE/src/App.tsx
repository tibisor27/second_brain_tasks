import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {
  return (
    <>
      <Button startIcon={<PlusIcon size="md"/>}
        size = "sm" 
        variant="primary" 
        text={"Share"}
        endIcon={<ShareIcon size="md"/>}
        />
      </>
  )
}

export default App
