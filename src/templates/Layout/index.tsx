import { Outlet, NavLink, Link} from "react-router-dom"
import logo from '../../assets/images/logo.png'

function Layout() {
  return (
    <div className="w-full m-auto">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <img src={logo} className="h-10 mr-3" alt="logo Nitroclik" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-sky-700  dark:text-white">Nitroclik</span>
          </Link>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:text-sky-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-sky-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  className="[&.active]:text-sky-700  block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-sky-400 md:p-0 dark:text-white md:dark:text-blue-500"
                  to="/">Home</NavLink>
              </li>
              <li>
                <NavLink
                  className={'[&.active]:text-sky-700  block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-sky-400  md:p-0 dark:text-white md:dark:text-blue-500'}
                  to="/form">Form</NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <hr />
      <div className="container m-auto">
        <Outlet />

      </div>
    </div>
  )
}

export default Layout