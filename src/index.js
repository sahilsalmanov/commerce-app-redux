import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { LoginProvider } from './pages/PublicPages/LoginContext'
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';


const queryClient = new QueryClient({
    defaultOptions:{
        queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false
        }
    }
})



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <QueryClientProvider client={queryClient}>
     <LoginProvider>
        <BrowserRouter>
            <App></App>
        </BrowserRouter>
    </LoginProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
