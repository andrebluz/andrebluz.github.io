import firebase from 'firebase'
import { useAuth } from "../../AuthContext"
import React,{ useRef, useState, useEffect } from 'react'



let _user = '';
var allowedEmoji = [] 

function WelcomeBanner() {
  const { currentUser, logout } = useAuth()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([]);


    const getData2 = () => {
      firebase.database().ref("users/"+currentUser.uid).once("value")
  .then(function(snapshot) {
    _user = snapshot.child("username").val()
    allowedEmoji = [...'😊👽🖖✌️🤟🤘🤙🚀👋'] 
    
    setLoading(true)
  })}




  useEffect(() => {
    
    getData2()
  }, [])


  return (
    <div className="relative colorized-banner p-4 sm:p-6 rounded-sm overflow-hidden mb-8">

      {/* Background illustration */}
      <div className="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block" aria-hidden="true">
        <svg width="319" height="198" xmlnsXlink="http://www.w3.org/1999/xlink">
         
          <g fill="none" fillRule="evenodd">
            <g transform="rotate(64 36.592 105.604)">
              <mask id="welcome-d" fill="#fff">
                <use xlinkHref="#welcome-a" />
              </mask>
              <use fill="url(#welcome-b)" xlinkHref="#welcome-a" />
              <path fill="url(#welcome-c)" mask="url(#welcome-d)" d="M64-24h80v152H64z" />
            </g>
            <g transform="rotate(-51 91.324 -105.372)">
              <mask id="welcome-f" fill="#fff">
                <use xlinkHref="#welcome-e" />
              </mask>
              <use fill="url(#welcome-b)" xlinkHref="#welcome-e" />
              <path fill="url(#welcome-c)" mask="url(#welcome-f)" d="M40.333-15.147h50v95h-50z" />
            </g>
            <g transform="rotate(44 61.546 392.623)">
              <mask id="welcome-h" fill="#fff">
                <use xlinkHref="#welcome-g" />
              </mask>
              <use fill="url(#welcome-b)" xlinkHref="#welcome-g" />
              <path fill="url(#welcome-c)" mask="url(#welcome-h)" d="M40.333-15.147h50v95h-50z" />
            </g>
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative">
        <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">Perguntas: Indústria 4.0</h1>
      </div>

    </div>
  );
}

export default WelcomeBanner;
