import React from "react";
import './cabecera.scss';
import imagenes from '/Generation/react/reactParaYo/reactkiara/src/assets/imagenes'

function CabeceraComponent (){
    return <header className="cabecera">
        <div className="logo">
        <img className="logopng" src={imagenes.img1}></img>
            <span className="tensenas">TenSeñas</span>
        </div>
        <nav>
			<ul className="lista">
				<li><a href="#">Inicio</a></li>
				<li><a href="#">Acerca de</a></li>
				<li><a href="#">Contacto</a></li>
			</ul>
            <button className="buttonInicio">
            <picture></picture>
            <span>Inicia Sesión</span>
        </button>
		</nav>

        

    </header>
}

export default CabeceraComponent;