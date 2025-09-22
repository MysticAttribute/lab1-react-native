import './App.css'
import Inventory from './compnents/Inventory'
import Resources from './compnents/Resources'
import CraftGrid from './compnents/CraftGrid'
import Garbage from './compnents/Garbage'
import PossibleCrafts from './compnents/PossibleCrafts'
import DiscoveredRecepies from './compnents/DiscoveredRecepies'

function App() {

  return (
    <>
    <div className="flex flex-col w-screen h-screen p-2">
      <div className="h-full w-full flex gap-6">
        <div className="w-1/4 p-2 flex flex-col">
          <PossibleCrafts />
        </div>

        <div className="flex-1 p-2 rounded flex flex-col justify-center items-center">
          <CraftGrid />
          <div className='absolute top-4 right-4'>
            <DiscoveredRecepies />
          </div>
        </div>

      </div>

      <div className="h-full w-full flex gap-6">
        <Resources />
        <div className='flex-1 flex flex-col'>
          <Inventory />
        </div>
          <Garbage />
      </div>
    </div>
    </>
  )
}

export default App
