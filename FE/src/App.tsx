import './App.css'
import { Button } from './components/Button'
import { PlusIcon } from './icons/PlusIcon'

function App() {
  return (
    <>
      <Button startIcon={<PlusIcon/>} size = "sm" variant="primary" text="Share"/>
      <Button size = "md" variant="secondary" text="Add conte"/>
      <Button size = "lg" variant="secondary" text="Add Content" />
      </>
  )
}

export default App
