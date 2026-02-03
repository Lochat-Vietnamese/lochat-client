import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "@/app/router/AppRouter";
import { AppProviders } from "@/app/provider/AppProvider";

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