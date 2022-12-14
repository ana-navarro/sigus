import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/auth/login/Login';
import { Register } from './pages/auth/register/Register';
import { PasswordReset } from './pages/auth/reset-pasword/PasswordReset';
import { ForgotPassword } from './pages/auth/reset-pasword/ForgotPassword';

import './style.css';
import './style.min.css';
import { Home } from './pages/home/Home';

import { Users } from './pages/admin/users/Users';
import { ShowUser } from './pages/admin/users/ShowUser';
import { EditUser } from './pages/admin/users/EditUser';
import { DeleteUser } from './pages/admin/users/DeleteUser';

import { Company } from './pages/admin/company/Company';
import { AddCompany } from './pages/admin/company/AddCompany';
import { ShowCompany } from './pages/admin/company/ShowCompany';
import { EditCompany } from './pages/admin/company/EditCompany';
import { DeleteCompany } from './pages/admin/company/DeleteCompany';
import { AddAddress } from './pages/admin/company/address/AddAddress';
import { EditAddress } from './pages/admin/company/address/EditAddress';
import { DeleteAddress } from './pages/admin/company/address/DeleteAddress';

import { Client } from './pages/admin/clients/Client';
import { ShowClient } from './pages/admin/clients/ShowClient';
import { CreateClient } from './pages/admin/clients/CreateClient';
import { EditClient } from './pages/admin/clients/EditClient';
import { DeleteClient } from './pages/admin/clients/DeleteClient';

import { Installations } from './pages/admin/installations/Installations';
import { AddInstallation } from './pages/admin/installations/AddInstallation';
import { ShowInstallation } from './pages/admin/installations/ShowInstallation';
import { EditInstallation } from './pages/admin/installations/EditInstallation';
import { DeleteInstallation } from './pages/admin/installations/DeleteInstallation';

import { Credit } from './pages/admin/credit/Credit';
import { ShowCredit } from './pages/admin/credit/CreditShow';
import { EditCredit } from './pages/admin/credit/CreditEdit';
import { CreditDelete } from './pages/admin/credit/CreditDelete';
import { CreditAdd } from './pages/admin/credit/CreditAdd';
import { Demo } from './pages/clients/Demo';
import { Success } from './pages/clients/Success';
import { Cancel } from './pages/clients/Cancel';
import { NotFound } from './pages/erros/NotFound';

import { Maintenance } from './pages/admin/maintenance/Maintenance';
import { MaintenanceInst } from './pages/admin/maintenance/MaintenanceInst';

import { Checklists } from './pages/admin/maintenance/Checklists/Checklists';
import { ShowChecklists } from './pages/admin/maintenance/Checklists/ShowChecklists';
import { AddChecklists } from './pages/admin/maintenance/Checklists/AddChecklists';
import { EditChecklist } from './pages/admin/maintenance/Checklists/EditChecklist';
import { DeleteChecklist } from './pages/admin/maintenance/Checklists/DeleteChecklist';

import { Pop } from './pages/admin/maintenance/POP/Pop';

function App() {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/forgotpassword/:id" element={<ForgotPassword />} />
        <Route path="/demo/:id" element={<Demo />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Navigation />
            </ProtectedRoutes>
          }
        >
          <Route
            index
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route path="*" element={<NotFound />} />

          {/* User Routes */}
          <Route
            path="register"
            element={
              <ProtectedRoutes>
                <Register />
              </ProtectedRoutes>
            }
          />
          <Route
            path="users"
            element={
              <ProtectedRoutes>
                <Users />
              </ProtectedRoutes>
            }
          />
          <Route
            path="user/:idUser"
            element={
              <ProtectedRoutes>
                <ShowUser />
              </ProtectedRoutes>
            }
          />
          <Route
            path="user/:idUser/edit"
            element={
              <ProtectedRoutes>
                <EditUser />
              </ProtectedRoutes>
            }
          />
          <Route
            path="user/:idUser/delete"
            element={
              <ProtectedRoutes>
                <DeleteUser />
              </ProtectedRoutes>
            }
          />

          {/* Company Routes */}
          <Route
            path="company"
            element={
              <ProtectedRoutes>
                <Company />
              </ProtectedRoutes>
            }
          />
          <Route
            path="company/add"
            element={
              <ProtectedRoutes>
                <AddCompany />
              </ProtectedRoutes>
            }
          />
          <Route
            path="company/:idCompany"
            element={
              <ProtectedRoutes>
                <ShowCompany />
              </ProtectedRoutes>
            }
          />
          <Route
            path="company/:idCompany/edit"
            element={
              <ProtectedRoutes>
                <EditCompany />
              </ProtectedRoutes>
            }
          />
          <Route
            path="company/:idDelete/delete"
            element={
              <ProtectedRoutes>
                <DeleteCompany />
              </ProtectedRoutes>
            }
          />

          {/* Installations Routes */}
          <Route
            path="installations"
            element={
              <ProtectedRoutes>
                <Installations />
              </ProtectedRoutes>
            }
          />
          <Route
            path="installations/:idInstallation"
            element={
              <ProtectedRoutes>
                <ShowInstallation />
              </ProtectedRoutes>
            }
          />
          <Route
            path="installations/add"
            element={
              <ProtectedRoutes>
                <AddInstallation />
              </ProtectedRoutes>
            }
          />
          <Route
            path="installations/:idInstallation/edit"
            element={
              <ProtectedRoutes>
                <EditInstallation />
              </ProtectedRoutes>
            }
          />
          <Route
            path="installations/:idInstallation/delete"
            element={
              <ProtectedRoutes>
                <DeleteInstallation />
              </ProtectedRoutes>
            }
          />

          {/* Address Routes */}
          <Route
            path="company/:idCompany/address/add"
            element={
              <ProtectedRoutes>
                <AddAddress />
              </ProtectedRoutes>
            }
          />
          <Route
            path="company/:idAddress/address/edit"
            element={
              <ProtectedRoutes>
                <EditAddress />
              </ProtectedRoutes>
            }
          />
          <Route
            path="company/:idAddress/address/delete"
            element={
              <ProtectedRoutes>
                <DeleteAddress />
              </ProtectedRoutes>
            }
          />

          {/*Client Routes*/}
          <Route
            path="clients"
            element={
              <ProtectedRoutes>
                <Client />
              </ProtectedRoutes>
            }
          />
          <Route
            path="clients/:idClient"
            element={
              <ProtectedRoutes>
                <ShowClient />
              </ProtectedRoutes>
            }
          />
          <Route
            path="clients/add"
            element={
              <ProtectedRoutes>
                <CreateClient />
              </ProtectedRoutes>
            }
          />
          <Route
            path="clients/:idClient/edit"
            element={
              <ProtectedRoutes>
                <EditClient />
              </ProtectedRoutes>
            }
          />
          <Route
            path="clients/:idClient/delete"
            element={
              <ProtectedRoutes>
                <DeleteClient />
              </ProtectedRoutes>
            }
          />

          {/* Credit Routes */}
          <Route
            path="credit"
            element={
              <ProtectedRoutes>
                <Credit />
              </ProtectedRoutes>
            }
          />
          <Route
            path="credit/:idCredit"
            element={
              <ProtectedRoutes>
                <ShowCredit />
              </ProtectedRoutes>
            }
          />
          <Route
            path="credit/add"
            element={
              <ProtectedRoutes>
                <CreditAdd />
              </ProtectedRoutes>
            }
          />
          <Route
            path="credit/:idCredit/edit"
            element={
              <ProtectedRoutes>
                <EditCredit />
              </ProtectedRoutes>
            }
          />
          <Route
            path="credit/:idCredit/delete"
            element={
              <ProtectedRoutes>
                <CreditDelete />
              </ProtectedRoutes>
            }
          />

          {/* Maintenance Routes */}
          <Route
            path="maintenance"
            element={
              <ProtectedRoutes>
                <Maintenance />
              </ProtectedRoutes>
            }
          />
          <Route
            path="maintenance/installations/"
            element={
              <ProtectedRoutes>
                <MaintenanceInst />
              </ProtectedRoutes>
            }
          />
          <Route
            path="maintenance/installations/checklists/:idInstallations"
            element={
              <ProtectedRoutes>
                <Checklists />
              </ProtectedRoutes>
            }
          />
          <Route
            path="maintenance/installations/checklists/add/:idInstallations"
            element={
              <ProtectedRoutes>
                <AddChecklists />
              </ProtectedRoutes>
            }
          />
          <Route
            path="maintenance/installations/checklists/show/:idChecklist"
            element={
              <ProtectedRoutes>
                <ShowChecklists />
              </ProtectedRoutes>
            }
          />
          <Route
            path="maintenance/installations/checklists/edit/:idChecklist"
            element={
              <ProtectedRoutes>
                <EditChecklist />
              </ProtectedRoutes>
            }
          />
          <Route
            path="maintenance/installations/checklists/delete/:idChecklist"
            element={
              <ProtectedRoutes>
                <DeleteChecklist />
              </ProtectedRoutes>
            }
          />

          <Route
            path="maintenance/pop"
            element={
              <ProtectedRoutes>
                <Pop />
              </ProtectedRoutes>
            }
          />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export function ProtectedRoutes({ children }) {
  const user = sessionStorage.getItem('x-auth-token');
  if (user && user !== '') {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default App;
