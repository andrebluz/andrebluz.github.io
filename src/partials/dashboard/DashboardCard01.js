import firebase from 'firebase'
import { useAuth } from "../../AuthContext"
import React,{ useRef, useState, useEffect } from 'react'


import { Link } from 'react-router-dom';
import LineChart from '../../charts/AdaptativeChart';
import DivPrint from '../../charts/DivPrint';
import Icon from '../../images/heart.svg';
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
//NOMES DOS OBJECTS - DATAS
let _datanota_1 = '';
let _datanota_2 = '';
let _datanota_3 = '';
let _datanota_4 = '';
let _datanota_5 = '';
let _datanota_6 = '';
let _datanota_7 = '';
let _datanota_8 = '';
let _datanota_9 = '';
let _datanota_10 = '';
let _datanota_11 = '';
let _datanota_12 = '';
let _datanota_13 = '';
let _datanota_14 = '';
//PERCENT
let compA = '';
let compB = '';
let compResult = '';
var cor = '';
var divPrint = '';


function DashboardCard01() {

  const chartValue = useRef(null);
  



  const { currentUser, logout } = useAuth()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([]);

    let notas = []
  let notas2 = []
  let datanota = []
 
  let responseList 



  function printUsers() {
    var users = firebase.database().ref('/users/'+currentUser.uid+'/Tema/Saude');
    users.on('value', (snapshot) => {
        snapshot.forEach((snap) => {
            const userObject = snap.val();
            //console.log(userObject+' user obj');
            const role = userObject['Nota'];
            notas.push(userObject)
            _nota1 = notas[0]
            console.log(_nota1)
            //console.log('notas array: '+notas[0])
            //console.log(role);
            //if (role === 'adm') {
             //   console.log('filtor ativado')
           // }
           

        });
        
    });}


    const getData2 = () => {
      firebase.database().ref("users/"+currentUser.uid).once("value")
      //firebase.database().ref("users/rYub7jvN8Sd9cSvNFNb6wYVuOch2").once("value")
  .then(function(snapshot) {
//console.log(snapshot.child("Tema/Saude/DataNota").val())

//pega os nomes sem o values do object do banco
datanota = Object.getOwnPropertyNames(snapshot.child("Tema/Saude/DataNota").val()).sort()

    snapshot.child("Tema/Saude/DataNota").forEach((snap) => {
      const userObject = snap.val()
      //console.log(snap.val())
      //console.log(userObject+' user obj');
      const role = userObject
      notas.unshift(userObject)
      _nota1 = notas[0]
      
      //console.log('notas array: '+notas[0])
      //console.log(role);
      //if (role === 'adm') {
       //   console.log('filtor ativado')
     // }
     

  });
  
  
  //console.log(_nota1)
  
  
    //console.log(snapshot.child("Tema").child("Saude/Nota").val())
    //console.log(snapshot.child("Tema").child("Matemática/Nota").val())
    //console.log(snapshot.child("username").val())
    
   
    
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
    //nomes dos objects do banco - datas
    _datanota_1 = datanota[0]
    _datanota_2 = datanota[1]
    _datanota_3 = datanota[2]
    _datanota_4 = datanota[3]
    _datanota_5 = datanota[4]
    _datanota_6 = datanota[5]
    _datanota_7 = datanota[6]
    _datanota_8 = datanota[7]
    _datanota_9 = datanota[8]
    _datanota_10 = datanota[9]
    _datanota_11 = datanota[10]
    _datanota_12 = datanota[11]
    _datanota_13 = datanota[12]
    _datanota_14 = datanota[13]

    compA = _nota1+_nota2+_nota3+_nota4+_nota5+_nota6+_nota7
    compB = _notaOW1+_notaOW2+_notaOW3+_notaOW4+_notaOW5+_notaOW6+_notaOW7

    console.log(_datanota_1)
    /**console.log(
      `Increase (from ${compA} to ${compB}) => `,
      (((compA/compB)-1) * 100).toFixed(2) + "%",
    )**/

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



  const getData3 = () => {
    
return(
  firebase.database().ref("users/qrOtXPSvCFSk4Re1asueOZtNGKk2").once("value")
  .then(function(snapshot) {

    snapshot.child("Tema/Saude/DataNota").forEach((snap) => {
      const userObject = snap.val();
      //console.log(userObject+' user obj');
      const role = userObject;
      notas.push(userObject)
      _nota1 = notas[0]
      
      //console.log('notas array: '+notas[0])
      //console.log(role);
      //if (role === 'adm') {
       //   console.log('filtor ativado')
     // }
     

  })

  //console.log(notas)
  //console.log(_nota1)
  
    //console.log(snapshot.child("Tema").child("Saude/Nota").val())
    //console.log(snapshot.child("Tema").child("Matemática/Nota").val())
    //console.log(snapshot.child("username").val())
    _user = snapshot.child("username").val()
    _nota1 = notas[0]
    
    
    setData(responseList)
    setLoading(true)
  })//,console.log("nota: "+_nota1)
  
)





}

function perc(){

  console.log(
    `Increase (from ${compA} to ${compB}) => `,
    (((compA/compB)-1) * 100).toFixed(2) + "%",
  )
}



useEffect(() => {
  
  getData2()
  console.log(datanota[0])
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
        <div className="text-3xl font-bold text-gray-800 mr-2">Saúde</div>
         
          <div className="text-3xl font-bold text-gray-800 mr-2">{_nota7}/10</div>
          
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="flex-grow">
        {/* Change the height attribute to adjust the chart height */}
        <LineChart data={{
    labels: [
      _datanota_1, _datanota_2, _datanota_3, _datanota_4, _datanota_5, _datanota_6, _datanota_7,
      //_datanota_8, _datanota_9, _datanota_10, _datanota_11, _datanota_12, _datanota_13, _datanota_14
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
  }} width={389} height={128} key={Math.random()} />
      </div>
    </div>
  )
}

export default DashboardCard01;
