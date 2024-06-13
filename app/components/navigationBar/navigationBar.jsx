'use client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navigationBar.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import NavDropdown from 'react-bootstrap/NavDropdown';

//import { useAuth } from '../context/authContext';
import { LiaSignOutAltSolid } from "react-icons/lia";
import { LiaSignInAltSolid } from "react-icons/lia";
import { BsCart4 } from "react-icons/bs";
import { IoIosArrowDropright } from "react-icons/io";

import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { ListGroup } from 'reactstrap';


function NavigationBar() {
  //const  {currentUser} = useAuth();
  const router = useRouter();
  const [mouseHover_cart, setMouseHover_cart] = useState(false);
  const [mouseHover_signIn, setMouseHover_signIn] = useState(false);
  const [mouseHover_signOut, setMouseHover_signOut] = useState(false); 
  const [mouseHover_offCanvas, setMouseHover_offCanvas] = useState(false);
  const [mouseHover_home, setMouseHover_home] = useState(false);
  const [mouseHover_menu, setMouseHover_menu] = useState(false);

  //off canvas
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const handleCloseCanvas = () => setShowOffCanvas(false);
  const handleShowCanvas = () => setShowOffCanvas(true);

  /*
  const handleSignOut = () => {
    const auth = getAuth();
    
    signOut(auth)
    .then(() => {
      // ログアウトされたことをわかりやすくするためのアラート
      //alert( 'ログアウト完了！' );
      router.push('/login');
    })
    .catch((error) => {
      console.log(error);
    });
  };
  */
  
  return(
    <div className='main'>
      <Navbar bg="primary" data-bs-theme="dark">
      <Offcanvas className="OffCanvas" show={showOffCanvas} onHide={handleCloseCanvas}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Contents</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup>
            <a href='./' className='list-group-item list-group-item-action'>ポケモン図鑑</a>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>

        <Container>
        <IoIosArrowDropright
          className='icon'
          size={30}
          color={mouseHover_offCanvas ? 'rgb(0,255,174)' :'#ccc'}
          onMouseEnter={() => setMouseHover_offCanvas(true)}
          onMouseLeave={() => setMouseHover_offCanvas(false)}
          onClick={handleShowCanvas} />
        <Navbar.Brand href="#home">Pokemon dictionary</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="./dictionary">ホーム</Nav.Link>
              <NavDropdown title="メニュー" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">ポケモン図鑑</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Other
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
        </Navbar.Collapse>



          <div className='ms-auto'>
              <div className='message'>
                  <Nav.Link className='signIn' href='./register'>
                    <LiaSignInAltSolid 
                      className='icon'
                      size={30}
                      color={mouseHover_signIn ? 'rgb(0,255,174)' :'#ccc'}
                      onMouseEnter={() => setMouseHover_signIn(true)}
                      onMouseLeave={() => setMouseHover_signIn(false)}/>
                    <span className='remark'>sign in</span>
                  </Nav.Link>  
              </div>
            </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;