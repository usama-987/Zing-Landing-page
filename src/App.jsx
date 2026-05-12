import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './features/pages/Home'
import DeveloperAugmentation from './features/pages/DeveloperAugmentation'
import Marketing from './features/pages/Marketing'
import Partners from './features/pages/Partners'
import SoftwareDevelopment from './features/pages/SoftwareDevelopment'
import AppSumo from './features/pages/AppSumo'
import FutureConnoisseurs from './features/pages/FutureConnoisseurs'
import PrivacyPolicy from './features/pages/PrivacyPolicy'
import CancellationPolicy from './features/pages/CancellationPolicy'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const titles = {
      "/": "Home | Zing",
      "/developer-augmentation": "Developer Augmentation | Zing",
      "/marketing": "Marketing | Zing",
      "/partners": "Partners | Zing",
      "/software-development": "Software Development | Zing",
      "/story/appsumo": "AppSumo | Zing",
      "/story/future-connoisseurs": "Future Connoisseurs | Zing",
      "/privacy-policy": "Privacy Policy | Zing",
      "/cancellation-policy": "Cancellation Policy | Zing",
    };

    document.title = titles[pathname] || "Zing";
  }, [pathname]);

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
        <Route path="/software-development" element={<SoftwareDevelopment/>}/>
        <Route path="/story/appsumo" element={<AppSumo />} />
        <Route path="/story/future-connoisseurs" element={<FutureConnoisseurs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cancellation-policy" element={<CancellationPolicy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
