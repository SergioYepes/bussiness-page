import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "./components/ui/Tooltip";
import { Toaster as Sonner } from "./components/ui/Sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages";
import { Toaster } from "./components/ui/Toaster";


const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner/>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          {/*<Route path="*" element={<NotFound />} />*/}
        </Routes>
      </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  )
}

export default App
