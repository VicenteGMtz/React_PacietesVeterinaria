import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

//    __________________________________________________
const stateInicial = { 
    cita: {
       mascota : '',
       propietario : '',
       fecha : '',
       hora : '',
       sintomas : ''
    },
    error : false
 }

 class NuevaCita extends Component {

    
     
     state = { ...stateInicial }

      //cuando el usuario escribe en los imputs__________________________________________________
      handleChange = (e)=>{
          //colocar lo que el usuario escriba en el state
          this.setState({
              cita :{
                  ...this.state.cita,
                  [e.target.name] : e.target.value
              }
          })
          console.log(e.target.name +' : ' + e.target.name.value); 
      }

      //cuando el usuario envia el formulario______________________________________________________
      handleSubmit = (e) =>{
          e.preventDefault();

          //extraer los valores del state
          const {mascota, propietario, fecha, hora, sintomas }=this.state.cita;

          //validar que todos los campos esten llenos
          if(mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === ''){
              this.setState({
                  error : true
              });
              
              //detener la ejecucion
              return;
          }

          //generar objeto con los datos

          const nuevaCita={...this.state.cita};
          nuevaCita.id=uuid();

          console.log('despues de validacion');

          //agregar la cita al state
          this.props.crearNuevacita(nuevaCita);

          // Colocar en el state el stateInicial
          this.setState({
              ...stateInicial
          })

      }


     render() { 

        //extraer valor del state_________________________________________________________________________
        const { error } = this.state;

         return ( 
             <div className="card mt-5 py-5">
                 <div className="card-body">
                     <h2 className="card-title text-center mb-5">
                         Llena el formulario para crear una nueva cita
                     </h2>
                     {error? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios</div> : null}
                     <form onSubmit={this.handleSubmit}>
                         <div className="form-group row">
                             <label className="ol-sm-4 col-lg-2 col-form-label">
                                 Nombre Macota:
                             </label>
                             <div className="col-sm-8 col-lg-10">
                                 <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nomnre de mascota"
                                    name="mascota"
                                    onChange={this.handleChange}
                                    value={this.state.cita.mascota}
                                 />
                             </div>
                         </div> {/* form-group */}


                         <div className="form-group row">
                             <label className="ol-sm-4 col-lg-2 col-form-label">
                                 Nombre Dueño:
                             </label>
                             <div className="col-sm-8 col-lg-10">
                                 <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nomnre dueño mascota"
                                    name="propietario"
                                    onChange={this.handleChange}
                                    value={this.state.cita.propietario}
                                 />
                             </div>
                         </div> {/* form-group */}


                         <div className="form-group row">
                             <label className="ol-sm-4 col-lg-2 col-form-label">
                                 Fecha:
                             </label>
                             <div className="col-sm-8 col-lg-4">
                                 <input
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}
                                 />
                             </div>
                        
                             <label className="ol-sm-4 col-lg-2 col-form-label">
                                 Hora:
                             </label>
                             <div className="col-sm-8 col-lg-4">
                                 <input
                                    type="time"
                                    className="form-control"
                                    name="hora"
                                    onChange={this.handleChange}
                                    value={this.state.cita.hora}
                                 />
                             </div>
                         </div> {/* form-group */}


                         <div className="form-group row">
                             <label className="ol-sm-4 col-lg-2 col-form-label">
                                 Sintomas:
                             </label>

                             <div className="col-sm-8 col-lg-10">

                                 <textarea 
                                    className="form-control"
                                    name="sintomas"
                                    placeholder="Escribe los sintomas"
                                    onChange={this.handleChange}
                                    value={this.state.cita.sintomas}
                                 ></textarea>
                               
                             </div>
                         </div> {/* form-group */}

                         <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar nueva cita"/>




                     </form>
                 </div>
             </div>
          );
     }
 }

 NuevaCita.propTypes={
    crearNuevacita : PropTypes.func.isRequired
 }
  
 export default NuevaCita;