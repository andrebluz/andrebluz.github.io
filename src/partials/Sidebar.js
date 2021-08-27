import { useAuth } from "../AuthContext"
import Login from "../Logout"

import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation, Link, useHistory } from 'react-router-dom';
import Icon1 from '../images/ico-1.svg';
import Icon2 from '../images/ico-2.svg';
import Icon3 from '../images/ico-3.svg';
import Icon4 from '../images/ico-4.svg';
import Icon5 from '../images/question.svg';
import Icon6 from '../images/logoff.svg';
import IconBack from '../images/back.svg';
import Logo from '../images/logotellme.svg';
import Separator from '../images/line.svg';

import iconTecnologia from '../images/comp_1.svg';
import IconIndustria from '../images/indust.svg';
import IconSaude from '../images/heart.svg';



function Sidebar({



  
  sidebarOpen,
  setSidebarOpen
}) {

  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }




  const location = useLocation();
  const { pathname } = location;
  const page = pathname.split('/')[1];

  const trigger = useRef(null);
  const sidebar = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="lg:w-64">
      {/* Sidebar backdrop (mobile only) */}
      <div className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`colorized absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 p-4 transition-transform duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}
      >

        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-gray-500 hover:text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <img src={IconBack} width="20" height="20" alt="Icon 02" />
          </button>
          {/* Logo */}
          <NavLink exact to="/" className="block">
          <img src={Logo} width="200" height="20" alt="Icon 01" />
          </NavLink>
        </div>

        {/* Links */}
        <div>
        <img src={Separator} width="240" height="20" alt="Icon 01" />
          <ul className="mt-3">
            {/* Dashboard */}
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === '' && 'bg-gray-900'}`}>
              <NavLink exact to="/" className={`block text-gray-200 hover:text-white transition duration-150 ${page === '' && 'hover:text-gray-200'}`}>
                <div className="flex flex-grow">
                <img src={Icon1} width="20" height="20" alt="Icon 01" />
                  <span className="text-base font-medium margin-l-15">Dashboard</span>
                </div>
              </NavLink>
            </li>
            <img src={Separator} width="240" height="20" alt="Icon 01" />
            <li className={`dropdown px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'perguntas' && 'bg-gray-900'}`}>
              
                <div className={`flex flex-grow block text-gray-200 hover:text-white transition duration-150 ${page === 'perguntas' && 'hover:text-gray-200'}`}>
                <img src={Icon5} width="20" height="20" alt="Icon 02" />
                  <span className="text-base font-medium margin-l-15">Editar Perguntas</span>
                  
                </div>
                <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
      <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
      <div className="flex flex-grow">
      <img src={IconSaude} width="16" height="16" alt="Icon 01" />
                  <span className="text-base font-medium margin-l-15"><NavLink exact to="/perguntas01">Saúde</NavLink></span>
                </div>
                </a></li>
                <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
      <div className="flex flex-grow">
      <img src={IconIndustria} width="16" height="16" alt="Icon 01" />
                  <span className="text-base font-medium margin-l-15"><NavLink exact to="/perguntas02">Indústria 4.0</NavLink></span>
                </div>
                </a></li>
                <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" exact to="/perguntas03">
      <div className="flex flex-grow">
      <img src={iconTecnologia} width="16" height="16" alt="Icon 01" />
                  <span className="text-base font-medium margin-l-15"><NavLink exact to="/perguntas03">Tecnologia</NavLink></span>
                </div>
                </a></li>
    </ul>

            </li>
            <img src={Separator} width="240" height="20" alt="Icon 01" />
            {/* Customers */}
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'colabs' && 'bg-gray-900'}`}>
              <NavLink exact to="/" className={`block text-gray-200 hover:text-white transition duration-150 ${page === 'customers' && 'hover:text-gray-200'}`}>
                <div className="flex flex-grow">
                <img src={Icon2} width="20" height="20" alt="Icon 02" />
                  <span className="text-base font-medium margin-l-15">Colaboradores</span>
                </div>
              </NavLink>
            </li>
            <img src={Separator} width="240" height="20" alt="Icon 01" />
            {/* Orders */}
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'mensagens' && 'bg-gray-900'}`}>
              <NavLink exact to="/" className={`block text-gray-200 hover:text-white transition duration-150 ${page === 'orders' && 'hover:text-gray-200'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex flex-grow">
                  <img src={Icon3} width="20" height="20" alt="Icon 03" />
                  <span className="text-base font-medium margin-l-15">Mensagens</span>
                  </div>
                  {/* Badge */}
                  <div className="flex flex-shrink-0 ml-2">
                    {/**<span className="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 rounded-sm">4</span>*/}
                  </div>
                </div>
              </NavLink>
            </li>
            <img src={Separator} width="240" height="20" alt="Icon 01" />
            {/* Campaigns */}
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'campanhas' && 'bg-gray-900'}`}>
              <NavLink exact to="/" className={`block text-gray-200 hover:text-white transition duration-150 ${page === 'campaigns' && 'hover:text-gray-200'}`}>
                <div className="flex flex-grow">
                <img src={Icon4} width="20" height="20" alt="Icon 04" />
                  <span className="text-base font-medium margin-l-15">Campanhas</span>
                </div>
              </NavLink>
            </li>
            {/* Logout */}
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'campanhas' && 'bg-gray-900'}`}>
              <NavLink  exact to="/logout" className={`block text-gray-200 hover:text-white transition duration-150 ${page === 'campaigns' && 'hover:text-gray-200'}`}>
                <div className="flex flex-grow">
                <img src={Icon6} width="20" height="20" alt="Icon 04" />
                  <span className="text-base font-medium margin-l-15">Logout</span>
                </div>
              </NavLink>
            </li>
            <img src={Separator} width="240" height="20" alt="Icon 01" />
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;