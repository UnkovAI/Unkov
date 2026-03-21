import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, Redirect } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ScrollRestorer, BackToTop } from "./components/ScrollToTop";

// Pages
import Home               from "./pages/Home";
import Features           from "./pages/Features";
import HowItWorks         from "./pages/HowItWorks";
import Roadmap            from "./pages/Roadmap";
import Pricing            from "./pages/Pricing";
import Company            from "./pages/Company";
import ForInvestors       from "./pages/ForInvestors";
import Blog               from "./pages/Blog";
import Careers            from "./pages/Careers";
import Press              from "./pages/Press";
import Legal              from "./pages/Legal";
import Contact            from "./pages/Contact";
import Integrations       from "./pages/Integrations";
import EarlyAccess        from "./pages/EarlyAccess";
import FreeTrial          from "./pages/FreeTrial";
import InvestorGate       from "./pages/InvestorGate";
import PitchDeck          from "./pages/PitchDeck";
import SolutionBFSI       from "./pages/SolutionBFSI";
import SolutionHealthcare from "./pages/SolutionHealthcare";
import NotFound           from "./pages/NotFound";

// Force light mode
if (typeof document !== "undefined") {
  document.documentElement.classList.remove("dark");
  document.body.classList.remove("dark");
  document.documentElement.style.colorScheme = "light";
}

function Router() {
  return (
    <Switch>
      {/* Main pages */}
      <Route path="/"                     component={Home} />
      <Route path="/features"             component={Features} />
      <Route path="/how-it-works"         component={HowItWorks} />
      <Route path="/roadmap"              component={Roadmap} />
      <Route path="/pricing"              component={Pricing} />
      <Route path="/company"              component={Company} />
      <Route path="/blog"                 component={Blog} />
      <Route path="/careers"             component={Careers} />
      <Route path="/press"               component={Press} />
      <Route path="/legal"               component={Legal} />
      <Route path="/contact"             component={Contact} />
      <Route path="/integrations"        component={Integrations} />

      {/* Pilot flow */}
      <Route path="/early-access"        component={EarlyAccess} />
      <Route path="/free-trial"          component={FreeTrial} />

      {/* Solutions */}
      <Route path="/solutions/bfsi"      component={SolutionBFSI} />
      <Route path="/solutions/healthcare" component={SolutionHealthcare} />

      {/* Investors */}
      <Route path="/investor-gate"       component={InvestorGate} />
      <Route path="/for-investors"       component={ForInvestors} />
      <Route path="/pitch-deck"          component={PitchDeck} />

      {/* Removed demo pages — redirect to early-access */}
      <Route path="/demo">
        {() => <Redirect to="/early-access" />}
      </Route>
      <Route path="/demo-request">
        {() => <Redirect to="/early-access" />}
      </Route>
      <Route path="/features">
        {() => <Redirect to="/features" />}
      </Route>
      <Route path="/features">
        {() => <Redirect to="/features" />}
      </Route>
      <Route path="/features">
        {() => <Redirect to="/features" />}
      </Route>
      <Route path="/risk-heatmap">
        {() => <Redirect to="/features" />}
      </Route>
      <Route path="/ai-explainability">
        {() => <Redirect to="/features" />}
      </Route>
      <Route path="/access-simulator">
        {() => <Redirect to="/early-access" />}
      </Route>
      <Route path="/how-it-works">
        {() => <Redirect to="/how-it-works" />}
      </Route>
      <Route path="/msp-console">
        {() => <Redirect to="/features" />}
      </Route>
      <Route path="/threat-feed">
        {() => <Redirect to="/features" />}
      </Route>

      {/* Fallback */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <TooltipProvider>
        <Toaster />
        <ScrollRestorer />
        <Router />
        <BackToTop />
      </TooltipProvider>
    </ErrorBoundary>
  );
}

export default App;
