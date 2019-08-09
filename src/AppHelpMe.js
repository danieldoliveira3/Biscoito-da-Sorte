import React, {Component} from 'react'
import PrimarySearchAppBar from './components/Navbar'
import FotoPerfil from './components/FotoPerfil'
import Informacoes from './components/Informacoes'

class Perfil extends Component{
    render(){ 
        return (
            <div>
        <PrimarySearchAppBar/>
        <FotoPerfil />  
        <Informacoes nome="Luana Carvalho"/>
            
            
            </div>
          
            
            )
    }
       
    
}

export default Perfil