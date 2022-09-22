import { Routes, Route } from "react-router-dom";
import "./App.css";
import Post from "./pages/PostPages";
import PostDetailPages from "./pages/PostDetailPages";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Post></Post>} />

        <Route path="/:id" element={<PostDetailPages></PostDetailPages>}>
     
        </Route>
      </Routes>
    </div>
  );
}

export default App;
