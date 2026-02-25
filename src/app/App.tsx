import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "@/app/router/AppRouter";
import { AppProviders } from "@/app/provider/AppProviders";
import "@/styles/App.css";

function App() {
    return (
        <BrowserRouter>
            <AppProviders>
                <AppRouter />
            </AppProviders>
        </BrowserRouter>
    );
}

export default App;