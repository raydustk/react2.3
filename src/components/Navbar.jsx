import { NavLink } from 'react-router-dom'
import Pokemon from '../views/Pokemon'
import Home from '../views/Home'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function MyNavbar(){
    const setActiveClass = ({isActive}) => (isActive ? "active" : undefined)
    return (
        <>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark">
                <Container>
                <Navbar.Brand href="https://github.com/jierzen/desafio-3-react-ii" style={{fontStyle:'oblique'}}>PokeDex DesafioLATAM</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" style={{fontSize:'20px'}}>
                     
                            <NavLink  style={{textDecoration: 'none'}} className={ setActiveClass } to="/" element={<Home/>}>Home</NavLink>
                            -
                            <NavLink style={{color: 'red',textDecoration: 'none', paddingLeft: '40px'}} className={ setActiveClass } to="https://pokeapi.co/" element={<Pokemon/>}>Pokemones</NavLink>
                 
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}