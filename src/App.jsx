import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './features/pages/Home'
import DeveloperAugmentation from './features/pages/DeveloperAugmentation'
import Marketing from './features/pages/Marketing'
import Partners from './features/pages/Partners'
import SoftwareDevelopment from './features/pages/SoftwareDevelopment'
import AppSumo from './features/pages/AppSumo'
import FutureConnoisseurs from './features/pages/FutureConnoisseurs'

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/developer-augmentation" element={<DeveloperAugmentation />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/Software-Development" element={<SoftwareDevelopment/>}/>
        <Route path="/story/appsumo" element={<AppSumo />} />
        <Route path="/story/future-connoisseurs" element={<FutureConnoisseurs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
