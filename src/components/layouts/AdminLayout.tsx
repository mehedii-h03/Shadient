import { Link, NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col-reverse items-center justify-center">
        {/* Page content here */}
        <div className="my-10 w-full px-10">
          <Outlet />
        </div>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu w-64 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <div className="p-8 flex justify-between items-center">
            <h3 className="text-xl font-medium">
              <Link to="/">Shadient</Link>
            </h3>
          </div>
          <li className="py-2 px-2 lg:px-8">
            <NavLink to={"/dashboard"}>Supplies</NavLink>
          </li>
          <li className="py-4 px-2 lg:px-8">
            <NavLink to={"/dashboard/create-supply"}>Create Supply</NavLink>
          </li>
          <div className="flex flex-col w-full border-opacity-50">
            <div className="divider"></div>
          </div>
          <li className="py-2 mt-1 px-2 lg:px-8">
            <NavLink to={"/"}>Home</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminLayout;
