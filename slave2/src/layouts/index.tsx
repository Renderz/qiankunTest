import { Outlet, useLocation } from "@umijs/max";

const Layout = () => {
  const location = useLocation();

  console.log(location);
  return (
    <div>
      Layout
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
