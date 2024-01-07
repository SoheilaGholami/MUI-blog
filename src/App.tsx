import "./App.css";
import PostProvider from "./context/postContext";
import Blog from "./pages/Blog";
function App() {
  return (
    <PostProvider>
      <Blog />
    </PostProvider>
  );
}

export default App;
