import Image from "next/image"
import Link from "next/link"

const routes = [
  {
    id: 'about-me', 
    name: 'About Me', 
    path: '/about-me'
  }, 
  {
    id: 'projects', 
    name: 'Projects', 
    path: '/projects'
  }, 
  {
    id: 'contact-me',
    name: 'Contact Me', 
    path: '/contact-me'
  }
]

export function Header() {
   return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image 
              width={40}
              height={40}
              src="/fox-logo.webp" className="h-8" alt="7FOX7 Logo" 
            />
          </Link>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 font-semibold text-primary-color">
              {
                routes.map((route) => (
                  <li key={route.id}>
                    <Link href={route.path} 
                      className="block py-2 px-3 rounded hover:hover-color md:border-0 md:hover:text-hover-color md:p-0">
                      {route.name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </nav>     
    </header>
   )
}