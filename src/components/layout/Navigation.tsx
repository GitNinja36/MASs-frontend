import { Link, useLocation, useNavigate } from 'react-router-dom'

export function Navigation() {
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="fixed top-0 w-full z-50 border-b bg-[#050505]/80 backdrop-blur-md border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2">
          <img
            src="https://res.cloudinary.com/davtv5r1c/image/upload/v1768230956/image_fullvo.png"
            height="25"
            width="25"
            alt="Logo"
          />
          <span className="group-hover:text-[#FF3B00] transition-colors text-xl font-bold tracking-tighter font-display text-white">
            banza
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-xs font-mono tracking-widest text-gray-400">
          <Link
            to="/"
            className={`transition-colors hover:text-white ${isActive('/') ? 'text-white' : ''}`}
          >
            [01] HOME
          </Link>
          <Link
            to="/agent"
            className={`transition-colors hover:text-white ${isActive('/agent') ? 'text-white' : ''}`}
          >
            [02] SURVEY
          </Link>
          <Link
            to="/results"
            className={`transition-colors hover:text-white ${isActive('/results') ? 'text-white' : ''}`}
          >
            [03] RESULTS
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <span className="hidden lg:flex text-[10px] font-mono text-green-500 items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            SYSTEM ONLINE
          </span>
          {/* Hide button on Agent and Results pages */}
          {!isActive('/agent') && !isActive('/results') && (
            <button
              onClick={() => navigate('/agent')}
              className="border px-6 py-2 text-xs font-bold uppercase tracking-wider transition-all btn-magnetic border-white/20 text-white hover:bg-white hover:text-black"
            >
              Launch Survey
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}
