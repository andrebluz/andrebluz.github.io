import React, { useState, useEffect } from 'react';

const ContactForm = (props) => {

    
    const initialFieldValues = {
        Pergunta: '',
        Resposta: '',
        A: '',
        B: '',
        C: '',
        D: ''
    }

    var [values, setValues] = useState(initialFieldValues)

    var changeQuestion = (id) => {
        values.Resposta = id
        console.log(id)
    }
    
    useEffect(() => {

        
        if (props.currentId == '')
            setValues({ ...initialFieldValues })
        else
            setValues({
                ...props.contactObjects[props.currentId]
            })
    }, [props.currentId, props.contactObjects])

    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        props.addOrEdit(values);
    }

    

   

function OnInput(e) {
  this.style.height = "auto";
  this.style.height = (this.scrollHeight) + "px";
}



    return (
        
        
        <form autoComplete="off" onSubmit={handleFormSubmit}>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />



    <div class="flex p-4 ">

    <div>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 flex items-center text-blue-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
</svg>

  </div>

      <div class="ml-3 flex flex-col w-full">
        <textarea value={values.Pergunta} onChange={handleInputChange} name="Pergunta" placeholder="Pergunta"
         placeholder="Faça sua questão aqui." class="form-control peer h-10 w-full border border-1.5 rounded-md border-blue-500 text-gray-900 focus:outline-none focus:border-red-600 focus:border-2 p-3 w-full text-xl resize-none outline-none h-32 "></textarea>

    
      </div>
    </div>




            <div className="form-row">
                <div className="form-group input-group col-md-6">
                   
                </div>
                <div class="relative flex-1">
          <textarea value={values.A}
                        onChange={handleInputChange} name="A" placeholder="A"
                        type="text" rows="5" className="form-control textareatype peer h-10 w-full border border-1.5 rounded-md border-blue-500 text-gray-900 placeholder-transparent focus:outline-none focus:border-red-600 focus:border-2 p-3" placeholder="Resposta A" />
          <label for="arrival" class="textareatype-margin text-lg absolute left-2 px-1 -top-2.5 bg-white text-blue-800 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-sm">A:</label>
        </div>
                <div class="relative flex-1">
          <textarea value={values.B}
                        onChange={handleInputChange} name="B" placeholder="B"
                        type="text" rows="5" className="form-control textareatype peer h-10 w-full border border-1.5 rounded-md border-blue-500 text-gray-900 placeholder-transparent focus:outline-none focus:border-red-600 focus:border-2 p-3" placeholder="Resposta B" />
          <label for="arrival" class="textareatype-margin text-lg absolute left-2 px-1 -top-2.5 bg-white text-blue-800 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-sm">B:</label>
        </div>
                <div class="relative flex-1">
          <textarea value={values.C}
                        onChange={handleInputChange} name="C" placeholder="C"
                        type="text" rows="5" className="form-control textareatype peer h-10 w-full border border-1.5 rounded-md border-blue-500 text-gray-900 placeholder-transparent focus:outline-none focus:border-red-600 focus:border-2 p-3" placeholder="Resposta C" />
          <label for="arrival" class="textareatype-margin text-lg absolute left-2 px-1 -top-2.5 bg-white text-blue-800 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-sm">C:</label>
        </div>
                <div class="relative flex-1">
          <textarea value={values.D}
                        onChange={handleInputChange} name="D" placeholder="D"
                        type="text" rows="5" className="form-control textareatype  peer h-10 w-full border border-1.5 rounded-md border-blue-500 text-gray-900 placeholder-transparent focus:outline-none focus:border-red-600 focus:border-2 p-3" placeholder="Resposta D" />
          <label for="arrival" class="textareatype-margin text-lg absolute left-2 px-1 -top-2.5 bg-white text-blue-800 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-sm">D:</label>
        </div>

               
        <div class="col-span-6 sm:col-span-4">
      <label class="block text-sm font-medium text-gray-700">Resposta:</label>
      <select name="Resposta" value={values.Resposta}  onChange={handleInputChange} className="form-control mt-1 block w-full py-2 px-3 border border-blue-500 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" >
        <option value={values.Resposta} disabled>-- {values.Resposta} --</option>
        <option value={values.A} data-val={values.A}>A - {values.A}</option>
        <option value={values.B} data-val={values.B}>B - {values.B}</option>
        <option value={values.C} data-val={values.C}>C - {values.C}</option>
        <option value={values.D}  data-val={values.D}>D - {values.D}</option>
      </select>
    </div>
        <br></br>
            </div>
            
            <div className="form-group">
                <input type="submit" value={props.currentId == "" ? "Adicionar e Fechar" : "Atualizar e Fechar"} className="modal-close2 mb-2 md:mb-0 bg-blue-500 border border-blue-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-600" />
            </div>









          








            
        </form>
    );
}

export default ContactForm;