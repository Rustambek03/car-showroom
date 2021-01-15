import Routes from "./Routes";
import { ToastProvider } from 'react-toast-notifications';

function App() {
  return (
    <div className="App">
      <ToastProvider>
        <Routes />
      </ToastProvider>
    </div>
  );
}

export default App;
