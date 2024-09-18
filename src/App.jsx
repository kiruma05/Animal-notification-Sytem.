import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from './features/authentication/AuthContext';
import ProtectedRoute from './features/authentication/ProtectedRoute';
import Cattles from "./pages/Cattles";
import Categories from "./pages/Categories";
import AddCategories from "./features/categories/AddCategories";
import Users from "./pages/Users";
import Transaction from "./pages/Transaction";
import Slaughter from "./features/transactions/Slaughter";
import Sales from "./features/transactions/Sales";
import Recovery from "./features/transactions/Recovery";
import DeathLose from "./features/transactions/DeathLose";
import Transfer from "./features/transactions/Transfer";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Ranch from "./pages/Ranch";
import Adimin from "./pages/Adimin";
import Recoder from "./pages/Recoder";
import Supervisor from "./pages/Supervisor";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";
import AddSubCategories from "./features/subCategories/AddSubCategories";



const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      //staleTime: 60 * 1000,
      staleTime: 0,
    }
  }
})

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false}/>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
        <Route  index element={<Navigate replace to="login" />} />
          <Route element={<AppLayout />}>
            {/* <Route index element={<Navigate replace to="dashboard" />} /> */}
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="categories" element={<Categories />}>
            <Route path="add-category" element={<AddCategories />} />
            <Route path="add-subcategory" element={<AddSubCategories />} />
            </Route>
            <Route path="transaction" element={<Transaction />}>
            <Route path="slaughter" element={<Slaughter />} />
            <Route path="sales" element={<Sales />} />
            <Route path="recovery" element={<Recovery />} />
            <Route path="deathLoses" element={<DeathLose />} />
            <Route path="transfer" element={<Transfer />} />
            </Route>
            <Route path="cattles" element={<Cattles />} />
            <Route path="users" element={<Users />} />
            <Route path="ranchies" element={<Ranch />} />
            <Route path="settings" element={<Settings />} />
            <Route path="account" element={<Account />} />
            <Route
            path="/adimin"
            element={
              <ProtectedRoute roles={['admin']}>
                <Adimin />
              </ProtectedRoute>
            }
          />

            <Route
            path="/recoder"
            element={
              <ProtectedRoute roles={['recoder']}>
                <Recoder />
              </ProtectedRoute>
            }
          />

<Route
            path="/supervisor"
            element={
              <ProtectedRoute roles={['supervisor']}>
                <Supervisor />
              </ProtectedRoute>
            }
          />
           
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
      position="top-center" 
      gutter={12}
      containerStyle={{margin: "8px"}}
      toastOptions={{
        success:{
          duration:3000,
        },
        error:{
          duration:5000,
        },
        style:{
          fontSize:"16px",
          padding: "16px 24px",
          backgroundColor:"var(--color-grey-0: #fff;)",
          color: "var(--color-grey-700: #fff;)"
        },
      }}
      />
      </QueryClientProvider>

      </AuthProvider>
  );
}

export default App;
