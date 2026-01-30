import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPageRoutes from "./routes/LandingPageRoutes";
import DashboardPageRoutes from "./routes/DashboardPageRoutes";
import PageNotFound from "./landing_page/PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<LandingPageRoutes />} />
        <Route path="/dashboard/*" element={<DashboardPageRoutes />} />
        {/* 404 */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
