import ContactForm from '../components/ContactForm'
import ViewForm from '../components/ViewForm'
import firebase from '../firebase'
import { useAuth } from "../AuthContext"
import React,{ Fragment, useRef, useState, useEffect } from 'react'

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/PerguntasSaude';


import Logo from '../images/tellmelogo_v2.svg';

import Banner from '../partials/Banner';



const Perguntas = () => {

	var [currentId, setCurrentId] = useState('');
    var [contactObjects, setContactObjects, setContador] = useState({})
    const { currentUser, logout } = useAuth()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([]);

    let contador = [];
    let contador2 = [];
    let responseList ;
    let _question1 = '';


    const GetContador = () => {
      firebase.database().ref("temas").once("value")
   
  .then(function(snapshot) {
   
    snapshot.child("2/Perguntas").forEach((snap) => {
      const userObject = snap.val()

      const role = userObject
      contador.unshift(userObject)

  });
    
    //console.log(contador2)
    _question1 = contador2[0]
    
    setData(responseList)
    setLoading(true)
  })}

  

  const AddNewQuestion = () => {
    firebase.database().ref("temas").once("value").then(function(snapshot) {

 // contador2 = Object.getOwnPropertyNames(snapshot.child("1/Perguntas").val()).sort()
  //console.log(Object.getOwnPropertyNames(snapshot.child("1/Perguntas").val()).sort().length)

  setData(responseList)
  setLoading(true)
})}


    //Once components load complete
    useEffect(() => {

      
      
      AddNewQuestion()
      //console.log(Object.getOwnPropertyNames(firebase.database().ref('temas/1/Perguntas').once('value')).length)
      //console.log(contador)
      //contador2 = contador
      GetContador()
      //console.log(_question1)
      firebase.database().ref('temas/2/Perguntas').on('value', snapshot => { 
        //contador = Object.getOwnPropertyNames(snapshot.val()).sort().length
        
            if (snapshot.val() != null) {
              //console.log(Object.getOwnPropertyNames(snapshot.val()).sort().length)
              
                setContactObjects({
                    ...snapshot.val()
                });
               
            }
        })
        
    }, [])

var add2 = () => {
  firebase.database().ref("temas").once("value").then(function(snapshot) {

    contador2 = Object.getOwnPropertyNames(snapshot.child("2/Perguntas").val()).sort()
    console.log(Object.getOwnPropertyNames(snapshot.child("2/Perguntas").val()).sort().length)
  
    setData(responseList)
    setLoading(true)
  })
  

}



//OLD
var addOrEdit = (obj) => {
  if (currentId == '')
  firebase.database().ref('temas/2/Perguntas').push(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })
        else
        firebase.database().ref(`temas/2/Perguntas/`+currentId).set(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })
}



//NEW


    var addOrEditNew = (obj) => {
      if (currentId == '')
{
  firebase.database().ref("temas").once("value").then(function(snapshot) {


    if (snapshot.child("2/Perguntas").val() != null) {

    contador2 = Object.getOwnPropertyNames(snapshot.child("2/Perguntas").val()).sort().length
    } else{
      contador2 = 0
    }
 
    firebase.database().ref('temas/2/Perguntas/0'+(contador2+1)).set(
              obj,
              err => {
                  if (err)
                      console.log(err)
                  else
                      setCurrentId('')
              }) })
} else
      firebase.database().ref('temas/2/Perguntas/'+currentId).set(
              obj,
              err => {
                  if (err)
                      console.log(err)
                  else
                      setCurrentId('')
              })
  }

  const onDelete = id => {
    if (window.confirm('Deseja Deletar?')) {
      firebase.database().ref('temas/2/Perguntas/'+id).remove(
            err => {
                if (err)
                    console.log(err)
                else
                    setCurrentId('')
            })
    }
}

const okok = id => {
  tempkey = id
  console.log(tempkey)
  console.log(id)
}


var tempkey = ''

var onDelete3 = tempkey => {
 
  console.log(tempkey)
}

var onDelete2 = tempkey => {
 
    firebase.database().ref('temas/2/Perguntas/'+tempkey).remove(
          err => {
              if (err)
                  console.log(err)
              else
                  setCurrentId('')
          })
  tempkey = ''
  modal.classList.remove('fadeIn');
			modal.classList.add('fadeOut');
				modal.style.display = 'none';
}

const [sidebarOpen, setSidebarOpen] = useState(false);

const modal = document.querySelector('.main-modal');
const modal2 = document.querySelector('.edit-modal');
const modal3 = document.querySelector('.view-modal');
		const closeButton = document.querySelectorAll('.modal-close');
    const closeButton2 = document.querySelectorAll('.modal-close2');
    const closeButton3 = document.querySelectorAll('.modal-close3');

		const modalClose = () => {
			modal.classList.remove('fadeIn');
			modal.classList.add('fadeOut');
			setTimeout(() => {
				modal.style.display = 'none';
			}, 500);
		}

    const modalClose2 = () => {
			modal2.classList.remove('fadeIn');
			modal2.classList.add('fadeOut');
			setTimeout(() => {
				modal2.style.display = 'none';
			}, 500);
		}

    const modalClose3 = () => {
			modal3.classList.remove('fadeIn');
			modal3.classList.add('fadeOut');
			setTimeout(() => {
				modal3.style.display = 'none';
			}, 500);
		}

		const openModal = (id) => {
			modal.classList.remove('fadeOut');
			modal.classList.add('fadeIn');
			modal.style.display = 'flex';

      tempkey = id
  console.log(tempkey)
		}

    const openModal2 = (condition) => {
      if (!condition){
        setCurrentId('')
      }
			modal2.classList.remove('fadeOut');
			modal2.classList.add('fadeIn');
			modal2.style.display = 'flex';
  console.log(tempkey)
		}

    const openModal3 = (condition) => {
      if (!condition){
        setCurrentId('')
      }
			modal3.classList.remove('fadeOut');
			modal3.classList.add('fadeIn');
			modal3.style.display = 'flex';
  console.log(tempkey)
		}

		for (let i = 0; i < closeButton.length; i++) {

			const elements = closeButton[i];

			elements.onclick = (e) => modalClose();

			modal.style.display = 'none';

			window.onclick = function (event) {
				if (event.target == modal) modalClose();
			}
		}

    for (let i = 0; i < closeButton2.length; i++) {

			const elements2 = closeButton2[i];

			elements2.onclick = (e) => modalClose2();

			modal.style.display = 'none';

			window.onclick = function (event) {
				if (event.target == modal) modalClose2();
			}
		}

    for (let i = 0; i < closeButton3.length; i++) {

			const elements3 = closeButton3[i];

			elements3.onclick = (e) => modalClose3();

			modal.style.display = 'none';

			window.onclick = function (event) {
				if (event.target == modal) modalClose3();
			}
		}

    var testkey = 1;

    function addTestkey(){
      testkey++;
    }

  return (
        <>
        
        <div class="main-modal flex flex-col space-y-4 min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none hidden" >
          
        <div class="absolute bg-blue-500 opacity-50 inset-0 z-0 overflow-hidden"></div>
    <div class="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
      <div class="">
			<div class="text-center p-5 flex-auto justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 flex items-center text-red-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg>
                        <h2 class="text-xl font-bold py-4 ">Você tem certeza que deseja deletar essa pergunta?</h2>
                        <p class="text-sm text-gray-500 px-18">Se decidir deleta-la, não será possível desfazer essa alteração.</p>    
        </div>
		</div>
		<div class="p-3  mt-2 text-center space-x-4 md:block">
    <button
						class="modal-close mb-2 md:mb-0 bg-blue-500 border border-blue-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-600">Cancelar</button>
            
            <button class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600" onClick={() => { onDelete2(tempkey) }}>Quero Deletar</button>
            </div></div>
	</div>
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
      <div className="sm:flex sm:justify-between sm:items-center mb-12">

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
     
        
      </div>


      <div className="jumbotron jumbotron-fluid buttoncenter">
      <button onClick={() => {openModal2(false)}}
						class="modal-close mb-2 md:mb-0 bg-blue-500 border border-blue-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-600 ">Adicionar Pergunta</button>
            
            </div>
            <div className="row">


                <div class="edit-modal flex flex-col space-y-4 min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none hidden" >
          
          <div class="absolute bg-blue-500 opacity-50 inset-0 z-0"></div>
      <div class="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white overflow-auto">
        <div class="">
              <div class="text-center p-5 flex-auto justify-center">
                  
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 flex items-center text-blue-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                  <path fill-rule="evenodd" d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
  </svg>
                          <h2 class="text-xl font-bold py-4 ">Adicionar ou Editar Pergunta:</h2>


                    <ContactForm {...({ currentId, contactObjects, addOrEdit })} ></ContactForm> </div>

          <div class="p-3  mt-2 text-center space-x-4 md:block">
              <button class="modal-close2 mb-2 md:mb-0 bg-yellow-500 border border-yellow-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-yellow-600">Fechar sem Salvar</button>
              </div></div>
      </div>




      






                </div>
                <div className="">
                  <div className="">
                  <div class="">
                  <div class="bg-white shadow-md rounded my-6">
                    <table className=" table-auto" >
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">nº</th>
                                <th className="py-3 px-6 text-left">Pergunta:</th>
                                <th className="py-3 px-6 text-left md2">Resposta:</th>
                                <th className="py-3 px-6 text-left md2">A:</th>
                                <th className="py-3 px-6 text-left md2">B:</th>
                                <th className="py-3 px-6 text-left md2">C:</th>
                                <th className="py-3 px-6 text-left md2">D:</th>
                                <th className="py-3 px-6 text-left">AÇÕES:</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {
                                Object.keys(contactObjects).map((key) => (
                                    <tr key={key} className="border-b border-gray-200 hover:bg-gray-200">
                                      <td><div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full pull-right numberclass">{testkey}</div></td>
                                        <td className="py-3 px-6 text-left " width="45%">{contactObjects[key].Pergunta}</td>
                                        <td className="py-3 px-6 text-left md2">{contactObjects[key].Resposta}</td>
                                        <td className="py-3 px-6 text-left md2">{contactObjects[key].A}</td>
                                        <td className="py-3 px-6 text-left md2">{contactObjects[key].B}</td>
                                        <td className="py-3 px-6 text-left md2">{contactObjects[key].C}</td>
                                        <td className="py-3 px-6 text-left md2">{contactObjects[key].D}</td>
                                        <td className="bg-light"width="20%">

                                            <div class="flex item-center justify-center">{addTestkey()}

                                            <div class="w-5 mr-2 transform text-gray-500 hover:text-blue-700 hover:scale-110" onClick={() => { setCurrentId(key); openModal3(true) }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>

                                        <div class="w-5 mr-2 transform text-blue-500 hover:text-blue-700 hover:scale-110"  onClick={() => { setCurrentId(key); openModal2(true) }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </div>
                                        <div class="w-5 mr-2 transform text-red-500 hover:text-red-700 hover:scale-110"  onClick={() => { okok(key) }} onClick={() => { openModal(key) }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div></div>
                                            
                                        </td><br/><br/><br/>
                                    </tr>
                                ),)
                            }
                        </tbody>

                        


                    </table>
                    </div></div></div></div>
                    
                    
                    <div class="buttoncenter">
                <button onClick={() => {openModal2(false)}}
						class="modal-close mb-2 md:mb-0 bg-blue-500 border border-blue-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-600">Adicionar Pergunta</button>
                
            </div></div><br/><br/>

    </div>
  </main><br></br>
  <div className="flex justify-center"><img src={Logo} width="80" height="20" alt="Icon 01"  /></div>
  <p className="flex justify-center text-xs">Tell.me - Quiz Gamificado 2021 © Todos os direitos reservados.</p>
  
</div>
</div>


<div class="view-modal flex flex-col space-y-4 min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none hidden" >
          
          <div class="absolute bg-blue-500 opacity-50 inset-0 z-0 overflow-hidden"></div>
      <div class="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
        <div class="">
              <div class="text-center p-5 flex-auto justify-center">
                  
                  <svg class="w-16 h-16 flex items-center mx-auto"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        


  
                          <h2 class="text-xl font-bold py-4 ">Visualizador de Pergunta:</h2>


                    <ViewForm {...({ currentId, contactObjects, addOrEdit })} ></ViewForm> </div>

          <div class="p-3  mt-2 text-center space-x-4 md:block">
              <button class="modal-close3 mb-2 md:mb-0 bg-blue-500 border border-blue-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-600">Fechar</button>
              </div></div>
              </div> </div>

            
        </>
    );
}

export default Perguntas;