
import firebase from 'firebase'
import { useAuth } from "./AuthContext"
import React,{ useRef, useState, useEffect } from 'react'



var stdNo=0;
var _notaSaude = 0;
var _notaMatematica = 0;
let _user = 'none';
function FetchAllData(){
    firebase.database().ref('users/qrOtXPSvCFSk4Re1asueOZtNGKk2').once('value',function(snapshot){
            snapshot.forEach(
                function(ChildSnapshot){
                    let user = 'teste'
                    let tema1 = ChildSnapshot.val().Saude;
                    let tema2 = ChildSnapshot.val().Saude;

                    additemsToList(user, tema1, tema2);
                }
            )
    })
}

function additemsToList(username, tema1, tema2){
    var ul=document.getElementById('list')
    var header=document.createElement('h2')

    var _username=document.createElement('li')
    var _tema1=document.createElement('li')
    var _tema2=document.createElement('li')

    header.innerHTML='Usuários: '+(++stdNo)

    _username.innerHTML='Nome: '+username
    _tema1.innerHTML='Tema Matematica: '+tema1
    _tema2.innerHTML='Tema Saude: '+tema2

    ul.appendChild(header)
    ul.appendChild(_username)
    ul.appendChild(_tema1)
    ul.appendChild(_tema2)

    
}

const Graph = () =>{
    const { currentUser, logout } = useAuth()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([]);


    //firebase.database().ref('users').child('qrOtXPSvCFSk4Re1asueOZtNGKk2').child('Tema').child('Saude').set({Nota: 9});
    //firebase.database().ref('users').child('qrOtXPSvCFSk4Re1asueOZtNGKk2').child('Tema').child('Saude').remove();

    const getData = () => {
        firebase.database().ref(`users/qrOtXPSvCFSk4Re1asueOZtNGKk2`).on('value', function (snapshot) {
            snapshot.forEach(
                function(ChildSnapshot){
                    //console.log(ChildSnapshot.val())
                    let responseList = ChildSnapshot.val().Saude
                    setData(responseList)
                    setLoading(true)
                    //_nota = ChildSnapshot.val().Saude.Nota
                    
                }
            )
        });
      }

      const getData2 = () => {
      firebase.database().ref("users/qrOtXPSvCFSk4Re1asueOZtNGKk2").once("value")
  .then(function(snapshot) {
    console.log(snapshot.child("Tema").child("Saude/Nota").val())
    console.log(snapshot.child("Tema").child("Matemática/Nota").val())
    _notaSaude = snapshot.child("Tema").child("Saude/Nota").val()
    _notaMatematica = snapshot.child("Tema").child("Matemática/Nota").val()
    _user = snapshot.child("username").val()
    let responseList = snapshot.child("Saude/Nota").val()
    setData(responseList)
    setLoading(true)
  })}

      //_nota = 10;
      useEffect(() => {
        getData()
        getData2()
      }, [])

    return(
        <div>
            <p>User: {_user}</p>
       
        </div> 
    )
}

export default Graph
