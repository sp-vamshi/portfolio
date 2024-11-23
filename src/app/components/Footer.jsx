import Logo from "./Logo"

export default function Footer() {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white ">
      <div className="container p-12 flex justify-between">
        {/* <span>LOGO</span> */}
        <Logo />
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
}
