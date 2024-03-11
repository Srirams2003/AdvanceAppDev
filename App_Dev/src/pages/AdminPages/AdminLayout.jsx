// import React from 'react';
import propTypes from 'prop-types';
import AdminSidebar from './AdminSideBar';

const AdminLayout = ({ children }) => {
  return (
    <div>
      
      <div className="container-fluid">
        <div className="row">
          <aside className="col-md-3 col-lg-2">
            <AdminSidebar />
          </aside>
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            {children}
          </main>
        </div>
      </div>
      
    </div>
  );
};

AdminLayout.propTypes = {
  children: propTypes.node.isRequired,
};

export default AdminLayout;
