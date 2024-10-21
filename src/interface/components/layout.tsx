import { Location } from "./location";
import { SocialMedia } from "./social-media";
import { Header } from "./header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex items-center justify-end bg-stone-800 px-6 py-2.5 sm:justify-between sm:px-8 md:px-12">
        <div className="hidden sm:block">
          <Location hasIcon />
        </div>
        <SocialMedia />
      </div>
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export { Layout };
