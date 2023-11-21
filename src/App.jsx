import Body from './Components/Body'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
function App() {
  return (
    <>
      <div>
      <Header/>
      <div className='flex pt-2'>
      <Sidebar/>
      <div>
        <Body/>
      </div>
      </div>
      
      </div>
    </>
  )
}

export default App
