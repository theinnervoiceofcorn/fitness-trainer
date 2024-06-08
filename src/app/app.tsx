import ReactDOM from "react-dom/client";
import { AppProviders } from "./providers/appProviders";
import { AppRouter } from "./routers/appRouter";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppProviders>
    <AppRouter />
  </AppProviders>
);
