import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomePage from "./components/HomePage";
import PostPage from "./components/PostPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<PostPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
