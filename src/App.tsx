import React from 'react';
import { useAppDispatch, useAppSelector } from './hook';
import { fetchPost } from './redux/slicePost';
import { Route, Routes } from "react-router-dom";

import { Home } from './pages/Home';
import "./scss/App.scss"
import { PostFull } from './pages/PostFull';
import { Layout } from './components/Layout';

function App() {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  const { loading } = useAppSelector((state) => state.post);
  return (
    <div className="App">
      {loading && <h2>Loading...</h2>}
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/postfull/:id"
            element={<PostFull />} // Передаем id в компонент PostFull
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
