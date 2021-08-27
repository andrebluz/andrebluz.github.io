import React, { useState, useEffect } from 'react';

const ViewForm = (props) => {
    const initialFieldValues = {
        Pergunta: '',
        Resposta: '',
        A: '',
        B: '',
        C: '',
        D: ''
    }

    var [values, setValues] = useState(initialFieldValues)


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

    return (
        
        
        <form autoComplete="off" onSubmit={handleFormSubmit}>





           
                          






                          <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        
                    </div>
                </div>
                <p className="py-3 px-6 text-left"><b>Pergunta:</b> {values.Pergunta}</p>
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                           
                        </div>
                    </div>

                    <p className="py-3 px-6 text-left"><b>Resposta:</b> {values.Resposta}</p>
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                           
                        </div>
                    </div>
                    <p className="py-3 px-6 text-left"><b>A:</b> {values.A}</p>
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            
                        </div>
                    </div>
                    <p className="py-3 px-6 text-left"><b>B:</b> {values.B}</p>
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                           
                        </div>
                    </div>
                    <p className="py-3 px-6 text-left"><b>C:</b> {values.C}</p>
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            
                        </div>
                    </div>
                    <p className="py-3 px-6 text-left"><b>D:</b> {values.D}</p>
                </div>
            </div>








          








            
        </form>
    );
}

export default ViewForm;