import firebase from 'firebase'
import { useAuth } from "../../AuthContext"
import React,{ useRef, useState, useEffect } from 'react'


import { Link } from 'react-router-dom';
import LineChart from '../../charts/AdaptativeChart';
import DivPrint from '../../charts/DivPrint';
import Icon from '../../images/comp_1.svg';
import EditMenu from '../EditMenu';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

let _user = '';
let _nota1 = '';
let _nota2 = '';
let _nota3 = '';
let _nota4 = '';
let _nota5 = '';
let _nota6 = '';
let _nota7 = '';
//OLDER WEEK:
let _notaOW1 = '';
let _notaOW2 = '';
let _notaOW3 = '';
let _notaOW4 = '';
let _notaOW5 = '';
let _notaOW6 = '';
let _notaOW7 = '';
//PERCENT
let compA = '';
let compB = '';
let compResult = '';
var cor = '';
var divPrint = '';


function DashboardCard03() {

  const chartValue = useRef(null);
  



  const { currentUser, logout } = useAuth()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([]);

    let notas = []
  let notas2 = []
  let responseList 



    const getData2 = () => {
      firebase.database().ref("users/"+currentUser.uid).once("value")
  .then(function(snapshot) {

    snapshot.child("Tema/Tecnologia/DataNota").forEach((snap) => {
      const userObject = snap.val();
      //console.log(userObject+' user obj');
      const role = userObject;
      notas.unshift(userObject)
      _nota1 = notas[0]

  });
  
  
  //console.log(_nota1)
  
    _user = snapshot.child("username").val()
    _nota1 = notas[6]
    _nota2 = notas[5]
    _nota3 = notas[4]
    _nota4 = notas[3]
    _nota5 = notas[2]
    _nota6 = notas[1]
    _nota7 = notas[0]
    //older week:
    _notaOW1 = notas[13]
    _notaOW2 = notas[12]
    _notaOW3 = notas[11]
    _notaOW4 = notas[10]
    _notaOW5 = notas[9]
    _notaOW6 = notas[8]
    _notaOW7 = notas[7]

    compA = _nota1+_nota2+_nota3+_nota4+_nota5+_nota6+_nota7
    compB = _notaOW1+_notaOW2+_notaOW3+_notaOW4+_notaOW5+_notaOW6+_notaOW7

   /** console.log(
      `Increase (from ${compA} to ${compB}) => `,
      (((compA/compB)-1) * 100).toFixed(2) + "%",
    ) **/

    compResult = (((compA/compB)-1) * 100).toFixed(2) + "%"
    
    if(compA-compB >= 0){
      chartValue.current.style.backgroundColor = tailwindConfig().theme.colors.green[500];
    }
    if(compA-compB < 0 && compA-compB >= -4){
      chartValue.current.style.backgroundColor = tailwindConfig().theme.colors.yellow[500];
    }
    if(compA-compB < -4){
      chartValue.current.style.backgroundColor = tailwindConfig().theme.colors.red[500];
    }

    //console.log(notas2)
    
    setData(responseList)
    setLoading(true)
  })}





    useEffect(() => {
      getData2()
      //printUsers();
      //console.log(notas2)
      //console.log(_nota1)
      //getData3()
     

    }, [])


  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-gray-200">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <img src={Icon} width="32" height="32" alt="Icon 01" />
          {/* Menu button */}
          <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full pull-right" ref={chartValue}>{compResult}</div>
        </header>


        <div className="flex justify-between items-start mb-2">
        <div className="text-3xl font-bold text-gray-800 mr-2">Tecnologia</div>
         
        <div className="text-3xl font-bold text-gray-800 mr-2">{_nota7}/10</div>
          
        </div>
      </div>
      
      {/* Chart built with Chart.js 3 */}
      <div className="flex-grow">
        {/* Change the height attribute to adjust the chart height */}
        <LineChart data={{
    labels: [
      '12-01-2020', '01-01-2021', '02-01-2021',
      '03-01-2021', '04-01-2021', '05-01-2021',
      '06-01-2021',
    ],
    datasets: [
      // Indigo line
      {
        data: [
          _nota1, _nota2, _nota3, _nota4, _nota5, _nota6, _nota7,
        ],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
        borderColor: '#54adf0',
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        clip: 20,
      },
      // Gray line
      {
        data: [
          _notaOW1, _notaOW2, _notaOW3, _notaOW4, _notaOW5, _notaOW6, _notaOW7, 
        ],
        borderColor: tailwindConfig().theme.colors.gray[300],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.gray[300],
        clip: 20,
      },
    ],
  }} width={389} height={128} />
      </div>
    </div>
  );
}

export default DashboardCard03;
