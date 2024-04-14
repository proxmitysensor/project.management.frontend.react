import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { Auth0Provider } from "@auth0/auth0-react";
import { getConfig } from "./auth/config.js";
import history from "./utils/history";

const onRedirectCallback = (appState) => {
    history.push(
        appState && appState.returnTo ? appState.returnTo : window.location.pathname
    );
};

// Please see https://auth0.github.io/auth0-react/interfaces/Auth0ProviderOptions.html
// for a full list of the available properties on the provider
const config = getConfig();

const providerConfig = {
    domain: config.domain,
    clientId: config.clientId,
    onRedirectCallback,
    authorizationParams: {
        redirect_uri: window.location.origin,
        ...(config.audience ? { audience: config.audience } : null),
    },
};


ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
        {...providerConfig}
    >
        <App />
    </Auth0Provider>,
)
