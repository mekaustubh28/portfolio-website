import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Error404 from '../404/error404';
import Blog1 from './blog1';
import Blog2 from './blog2';

export default function Blog() {
  return (
    <>
      <h1>Blog Section</h1>
      <Routes>
        <Route path="blog1" element={<Blog1 />} />
        <Route path="blog2" element={<Blog2 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}
