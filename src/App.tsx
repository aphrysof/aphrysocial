import AuthLayout from "./_auth/AuthLayout";
import SignupForm from "./_auth/forms/SignupForm";
import SinginForm from "./_auth/forms/SinginForm";
import RootLayout from "./_root/RootLayout";
import { Home } from "./_root/pages";
import "./globals.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"


const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/**Private Route */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
        {/**Public  Route */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SinginForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;
