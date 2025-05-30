import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="w-full bg-white">
          <nav className="flex justify-between px-6 py-4">
            <div className="relative">
              {/* Desktop logo */}
              <img
                src="/printforge-logo.png"
                alt="PrintForge Logo"
                className="w-[200px] h-auto hidden md:block"
              />
              {/* Mobile logo */}
              <img
                src="/printforge-logo.png
                "
                alt="PrintForge Logo"
                className="w-[40px] h-auto block md:hidden"
              />
            </div>
            <ul className="flex items-center gap-2.5">
              <p>3D Models</p>
              <p>About</p>
            </ul>
          </nav>
        </header>
        {children}
        <footer className="flex items-center justify-center px-6 py-4 bg-gray-800 text-white">
          <p>&copy; 2023 PrintForge. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
