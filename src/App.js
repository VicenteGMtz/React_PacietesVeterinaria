import React,{Component} from 'react';
import './bootstrap.min.css';
import Header from './components/Headers';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListasCitas';



class App extends Component {
  state = { 
    citas: []

   }

   //cuando la aplicacion carga se toma del storage los datos agregandolo al state : es parecido al document ready de jqueru
   componentDidMount(){

    const citaLS= localStorage.getItem('citas');
    if(citaLS){
      this.setState({
        citas : JSON.parse(citaLS)
      })
    }

   }

   //cuando eliminamos  o agregamos citas
   componentDidUpdate(){
     localStorage.setItem('citas',JSON.stringify(this.state.citas));
   }



  crearNuevacita = datos =>{
    console.log(datos);
    //copiar el state acutal
    const citas=[...this.state.citas, datos];

    //agregar el nuevo state
    this.setState({
      citas
    });
  }

  eliminarCita= id =>{
    //toma una copias del state
    const citasActuales = [...this.state.citas];

    //utilizar filter para sacar el elementos @id del rreglo
    const citas= citasActuales.filter(cita=> cita.id !== id)

    //actualizar el state
    this.setState({
      citas
    })

  }

  render() { 
    return ( 
        <div className="container">
          <Header
            titulo='Adminstrador Pacientes Veterinaria'
          />
          <div className="row">
              <div className="col-md-10 mx-auto">
                <NuevaCita
                  crearNuevacita = {this.crearNuevacita}
                />
              </div>
              
              <div className="mt-5 col-md-10 mx-auto">
                <ListaCitas
                    citas = {this.state.citas}
                    eliminarCita ={this.eliminarCita}
                />
              </div>
          </div>
        </div>
     );
  }
}
 
export default App;

