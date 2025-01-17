import React, { useRef, useContext } from 'react'
import { Menubar } from 'primereact/menubar';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Avatar } from 'primereact/avatar';
import { Divider } from 'primereact/divider';
import { useNavigate } from 'react-router-dom';

export default function Nav() {

    const op = useRef(null);
    const setLocation = useNavigate();

    const handleLogout = () => {
        alert("Salir Sistema")
      };

    return (
        <nav>
            <label htmlFor="">Alumno Funval</label>
            <Avatar image="logo.png" shape="circle" onClick={(e) => op.current.toggle(e)}/>

            <OverlayPanel ref={op}>
                <div><i className='pi pi-user icono'></i> My profile</div>
                <div className='logout' onClick={handleLogout}> <i className='pi pi-sign-out'></i> Logout</div>
            </OverlayPanel>
        </nav>
    )
}
