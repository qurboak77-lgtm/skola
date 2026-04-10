import { NavLink, Outlet } from 'react-router-dom';
import './AdminLayout.css';

const AdminLayout = () => {
  return (
    <div className="admin-wrapper">
      <header className="admin-header">
        <h1>Administration</h1>
      </header>
      <div className="admin-body">
        <nav className="admin-sidebar">
          <NavLink
            to="/admin/products"
            className={({ isActive }) => isActive ? 'admin-nav-link active' : 'admin-nav-link'}
          >
            Produkter
          </NavLink>
        </nav>
        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

