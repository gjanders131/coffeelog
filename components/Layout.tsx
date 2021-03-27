import Footer from "./Footer";
import Nav from "./Nav";

export interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
