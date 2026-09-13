import { Switch, Route } from "wouter";
import { lazy, Suspense } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Home stays eagerly loaded: it is the landing page for nearly all traffic,
// and making it wait on a second network round-trip would hurt LCP.
import Home from "@/pages/Home";

// Everything else is split into its own chunk so a first-time visitor does
// not download all nine pages up front.
const ContactPage = lazy(() => import("@/pages/Contact"));
const ImpactCirclePage = lazy(() => import("@/pages/ImpactCircle"));
const YogaPage = lazy(() => import("@/pages/Yoga"));
const FoundersMessagePage = lazy(() => import("@/pages/FoundersMessage"));
const BoardOfDirectorsPage = lazy(() => import("@/pages/BoardOfDirectors"));
const FAQPage = lazy(() => import("@/pages/FAQ"));
const MasterChefFarmwellPage = lazy(() => import("@/pages/MasterChefFarmwell"));
const OneGaneshForAllPage = lazy(() => import("@/pages/OneGaneshForAll"));
const NotFound = lazy(() => import("@/pages/not-found"));

/** Neutral placeholder shown only while a route chunk is in flight. */
function RouteFallback() {
  return <div className="min-h-screen bg-white" aria-busy="true" />;
}

function Router() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/impact-circle" component={ImpactCirclePage} />
        <Route path="/yoga" component={YogaPage} />
        <Route path="/founders-message" component={FoundersMessagePage} />
        <Route path="/board-of-directors" component={BoardOfDirectorsPage} />
        <Route path="/faq" component={FAQPage} />
        <Route path="/master-chef-farmwell" component={MasterChefFarmwellPage} />
        <Route path="/one-ganesh-for-all" component={OneGaneshForAllPage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
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
