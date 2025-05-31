import { Link, Outlet } from "react-router";

function BasicLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      

      {/* MAIN CONTENT */}
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}

export default BasicLayout;
