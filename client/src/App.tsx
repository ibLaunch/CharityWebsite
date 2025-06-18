import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import ContactPage from "@/pages/Contact";
import ImpactCirclePage from "@/pages/ImpactCircle";
import YogaPage from "@/pages/Yoga";
import FoundersMessagePage from "@/pages/FoundersMessage";
import FAQPage from "@/pages/FAQ";
import BoardOfDirectorsPage from "@/pages/BoardOfDirectors";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/impact-circle" component={ImpactCirclePage} />
      <Route path="/yoga" component={YogaPage} />
      <Route path="/founders-message" component={FoundersMessagePage} />
      <Route path="/board-of-directors" component={BoardOfDirectorsPage} />
      <Route path="/faq" component={FAQPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
