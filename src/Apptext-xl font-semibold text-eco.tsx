
import { Route, Routes }-text-primary">Эк from "react-router-dom";
import { ToоОфис</span>aster } from "@/components/ui/
          </div>
          <navtoaster";
import "./App className="hidden md:flex space-x-4">.css";
import Index
            <Button variant="ghost" className="flex from "./pages/Index";
import Not items-center gap-2">
              Found from "./pages/NotFound";
import Profile from "./pages/Profile";
import Monitoring<Building2 className="h-4 w-4" from "./pages/Monitoring";
import />
              <span>Мой оф Devices from "./pages/Devices";
importис</span>
            </Button> Reports from "./pages/Reports";
import Settings from "./pages/Settings";
            <Button variant="ghost" className="flex items-center gap-2">
              

function App() {
  return (
    <div className="App">
      <Routes<Activity className="h-4 w-4">
        <Route path="/" element={ />
              <span>Мони<Index />} />
        <Route pathторинг</span>
            </Button="/profile" element={<Profile />} />>
            <Button variant="ghost" className
        <Route path="/monitoring" element={="flex items-center gap-2"><Monitoring />} />
        <Route
              <BarChart3 className="h path="/devices" element={<Devices />-4 w-4" />
              } />
        <Route path="/reports" element={<Reports />} />
        <span>Отчеты</span><Route path="/settings" element={<Settings />
            </Button>
            <Button variant="} />
        <Route path="*"ghost" className="flex items-center gap- element={<NotFound />} />
      2">
              <Settings className="h-4</Routes>
      <Toaster /> w-4" />
              <span
    </div>
  );
}

export default App;
