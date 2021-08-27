import { useAuth } from "../AuthContext"
import { Link, useHistory } from "react-router-dom"
import Contacts from './Perguntas'

import React, { useState } from 'react';
import Logo from '../images/tellmelogo_v2.svg';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
import FilterButton from '../partials/actions/FilterButton';
import Datepicker from '../partials/actions/Datepicker';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';
import Banner from '../partials/Banner';

import RealtimeTest from '../partials/dashboard/RealtimeTest';

function Dashboard() {
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



  

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Avatars */}
             

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
              
                {/* Datepicker built with flatpickr */}
               
                {/* Add view button */}
                           
              </div>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">

              {/* Line chart (Acme Plus) */}
              <DashboardCard01 />
              {/* Line chart (Acme Advanced) */}
              <DashboardCard02 />
              {/* Line chart (Acme Professional) */}
              <DashboardCard03 />
              {/* Bar chart (Direct vs Indirect) */}
              <DashboardCard04 />
              {/* Line chart (Real Time Value) */}
              <DashboardCard11 />
              
            </div>

          </div>
        </main><br></br>
        <div className="flex justify-center"><img src={Logo} width="80" height="20" alt="Icon 01"  /></div>
        <p className="flex justify-center text-xs">Tell.me - Quiz Gamificado 2021 © Todos os direitos reservados.</p>
        
      </div>
    </div>
  );
}

export default Dashboard;