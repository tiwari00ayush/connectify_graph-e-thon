import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import "./index.css";
import { LandingPage, Layout, AboutUs, Home, Details } from "./pages";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import {
  Age,
  DetailLayout,
  Interest,
  Personality,
  Skills,
  SocialMedia,
  Success,
} from "./pages/details/index.js";
import {
  RootLayout,
  Profile,
  ProfileAbout,
  ProfileEducation,
  ProfileInterest,
  ProfileLinks,
  CreatePost,
  Group,
  Offers,
} from "./pages/root";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="root" element={<RootLayout />}>
        <Route path="" element={<Home />} />
        <Route path="profile" element={<Profile />}>
          <Route path="" element={<ProfileAbout />} />
          <Route path="education" element={<ProfileEducation />} />
          <Route path="interest" element={<ProfileInterest />} />
          <Route path="links" element={<ProfileLinks />} />
        </Route>
        <Route path="create" element={<CreatePost />} />
        <Route path="group" element={<Group />} />
        <Route path="offers" element={<Offers />} />
      </Route>
      <Route path="" element={<LandingPage />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="details" element={<DetailLayout />}>
        <Route path="age" element={<Age />} />
        <Route path="skills" element={<Skills />} />
        <Route path="interest" element={<Interest />} />
        <Route path="personality" element={<Personality />} />x
        <Route path="social" element={<SocialMedia />} />
        <Route path="success" element={<Success />} />
      </Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
