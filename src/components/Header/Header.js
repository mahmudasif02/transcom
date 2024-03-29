import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import {AiOutlineSearch} from 'react-icons/ai';
import './Header.css';
import LoginModal from '../LoginModal/LoginModal';
import SignupModal from '../SignupModal/SignupModal';
import ResetModal from '../ResetModal/ResetModal';

const Header = () => {

    const [loginIsOpen,setLoginIsOpen] = useState(false);
    const [signupIsOpen, setSignupIsOpen] = useState(false);
    const [resetIsOpen, setResetIsOpen] = useState(false);

    const handleLoginOpen = () => {
        setLoginIsOpen(true);
        setSignupIsOpen(false);
        setResetIsOpen(false);
        document.body.style.overflow = 'hidden';
    }

    const handleSignupOpen = () => {
        setLoginIsOpen(false);
        setSignupIsOpen(true);
        setResetIsOpen(false);
        document.body.style.overflow = 'hidden';
    }

    const handleResetOpen = () => {
        setLoginIsOpen(false);
        setSignupIsOpen(false);
        setResetIsOpen(true);
        document.body.style.overflow = 'hidden';
    }

    const handleClose = () => {
        setLoginIsOpen(false)
        setSignupIsOpen(false);
        setResetIsOpen(false);
        document.body.style.overflow = 'unset';
    }

    return (
        <header className="bg-white">
            <div className ="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light pt-4 pb-4">
                    <Link className="navbar-brand d-flex align-items-center" to="/"><img src={logo} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto col-lg-8">
                            <form className="form-inline rounded p-2 w-100">
                                <AiOutlineSearch size={25}></AiOutlineSearch>
                                <input className="border-0 ml-1" type="search" placeholder="Search your products from here" aria-label="Search" />
                            </form>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <button className="btn btn primary btn-theme pr-5 pl-5" onClick={handleLoginOpen}>Join</button>
                        </ul>
                    </div>
                    <LoginModal handleSignupOpen={handleSignupOpen} handleResetOpen={handleResetOpen} loginIsOpen={loginIsOpen} handleClose={handleClose}></LoginModal>
                    <SignupModal handleLoginOpen={handleLoginOpen} signupIsOpen={signupIsOpen} handleClose={handleClose}></SignupModal>
                    <ResetModal handleClose={handleClose} resetIsOpen={resetIsOpen} handleResetOpen={handleResetOpen} handleLoginOpen={handleLoginOpen}></ResetModal>
                </nav>
            </div>
            
        </header>
    );
};

export default Header;