import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { IoIosLogOut } from "react-icons/io"

const Sidebar = () => {
  const router = useRouter()
  const { pathname } = router

  // Example credentials data
  const credentials = [
    { name: 'military', label: 'Military Hospital', dashboardPath: '/militarydashborad' },
    { name: 'shrasshine', label: 'shrasshine', dashboardPath: '/dashboard' },
    { name: 'KVT', label: 'KVT Dashboard', dashboardPath: '/Kvtdashborad' },
    { name: 'JCO MAP LINE', label: 'JCO MAP LINE', dashboardPath: '/jcomaplinedashborad' },
    { name: 'user2', label: 'User 2 Dashboard', dashboardPath: '/user2dashboard' },
    { name: 'user3', label: 'User 3 Dashboard', dashboardPath: '/user3dashboard' }
  ]

  const [activeCredential, setActiveCredential] = useState(null)

  useEffect(() => {
    const storedCredential = localStorage.getItem('activeCredential')
    if (storedCredential) {
      setActiveCredential(storedCredential)  // Set the active credential if it exists
    } else {
      console.log("No activeCredential found in localStorage")
    }
  }, [])  // This effect runs only once when the component is mounted

  // Find the current credential's configuration
  const currentCredential = credentials.find(
    (cred) => cred.name === activeCredential
  ) || credentials[0]  // Fallback to the first one if no activeCredential is found

  const getLinkClasses = (href) => {
    return pathname === href
      ? "flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:bg-gray-700 group"
      : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
  }

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('activeCredential')  // Also clear the active credential on logout
    router.push('/')
  }

  return (
    <aside
      id="logo-sidebar"
      className="h-full px-3 py-4 overflow-y-auto bg-[#209ea7]"
      aria-label="Sidebar"
    >
      <div className="h-full">
        {currentCredential && (
          <Link href="#" className="flex items-center ps-2.5 mb-5">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              {currentCredential.label}
            </span>
          </Link>
        )}

        <ul className="space-y-2 font-medium">
          <li>
            <Link
              href={currentCredential.dashboardPath}
              className={getLinkClasses(currentCredential.dashboardPath)}
            >
              <svg
                className="w-5 h-5 text-white transition duration-75 dark:text-white group-hover:text-white dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className="ms-3">Dashboard</span>
            </Link>
          </li>

          {/* Example Link for Tanks */}
          <li>
            <Link
              href={`${currentCredential.dashboardPath}/tanks`}
              className={getLinkClasses(`${currentCredential.dashboardPath}/tanks`)}
            >
              <svg
                className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-white group-hover:text-white dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
              </svg>
              <span className="ms-3">Tanks</span>
            </Link>
          </li>

          {/* Example Link for Data Analytics */}
          <li>
            <Link
              href={`${currentCredential.dashboardPath}/data`}
              className={getLinkClasses(`${currentCredential.dashboardPath}/data`)}
            >
              <svg
                className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-white group-hover:text-white dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 13.293a1 1 0 0 1 1.414 0l2.293 2.293V10a1 1 0 1 1 2 0v5.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414Z" />
              </svg>
              <span className="ms-3">Data Analytics</span>
            </Link>
          </li>

          <li>
            <button
              onClick={handleLogout}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <IoIosLogOut className="w-5 h-5" />
              <span className="ms-3">Log out</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
