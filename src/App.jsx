import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './features/pages/Home'
import DeveloperAugmentation from './features/pages/DeveloperAugmentation'
import Marketing from './features/pages/Marketing'
import Partners from './features/pages/Partners'
import SoftwareDevelopment from './features/pages/SoftwareDevelopment'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/developer-augmentation" element={<DeveloperAugmentation />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/Software-Development" element={<SoftwareDevelopment/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
