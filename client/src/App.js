
//components
import Messenger from "./components/Messenger";

//google oauth
import {GoogleOAuthProvider} from "@react-oauth/google"

function App() {
  const clientId = '944120576563-9r59qa3ijnn8hn4fk6v7a0p7djcuo87b.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
     <Messenger/>
    </GoogleOAuthProvider>
  );
}

export default App;
