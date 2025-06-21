import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Page Imports
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import ProgramDetailPage from "./pages/programs/[slug]";
import VerifyCertificate from "./pages/VerifyCertificate";
import WhatsSpecialPage from "./pages/WhatsSpecial";
import ContactUsPage from "./pages/ContactUs";
import LoginPage from "./pages/Login";
import NotFound from "./pages/NotFound";

// Layout Imports
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SonnerToaster />
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/:slug" element={<ProgramDetailPage />} />
            <Route path="/verify" element={<VerifyCertificate />} />
            <Route path="/special" element={<WhatsSpecialPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
