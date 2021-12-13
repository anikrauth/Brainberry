import NavMenu from './nav';
import { IoCartOutline } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";
import React from 'react';
import Button from '../../Button';
import "./header.css";
import { Link } from 'react-router-dom';


export default function Header(to, BtnContent) {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-custom">

            <div className="container">

                <a className="navbar-brand me-5" href="/">
                    <img
                        src="/Images/cosma.png"
                        height="48"
                        alt="Cosma Logo"
                        loading="lazy"
                    />
                    <span className='ms-3'>
                        Cosma Therapy
                    </span>
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarButtonsExample"
                    aria-controls="navbarButtonsExample"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <IoMenuOutline className='barContent' />
                </button>


                <div className="collapse navbar-collapse" id="navbarButtonsExample">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/"><a className="nav-link" >Home</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/"><a className="nav-link" >Features</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/"><a className="nav-link" >Subscribe</a></Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Services
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li>
                                    <Link to="/">
                                        <a class="dropdown-item">Healthcare Professionals</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/healthcare-organisations">
                                        <a class="dropdown-item">Healthcare Organisations</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/research-organisations">
                                        <a class="dropdown-item">Research Rganisations</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dementia-communities">
                                        <a class="dropdown-item">Dementia Communities</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/"><a className="nav-link" >Blog</a></Link>
                        </li>
                    </ul>

                    <form class="d-flex input-group w-auto">
                        <input
                            type="search"
                            class="form-control"
                            placeholder="Type query"
                            aria-label="Search"
                        />
                        <button
                            class="customBtn btn-outline-primary"
                            type="button"
                            data-mdb-ripple-color="dark"
                        >
                            Search
                        </button>
                    </form>
                    <div className="d-flex align-items-center ml-20">
                        <Button to="/login" BtnContent='Login/signup' />
                    </div>
                    <div className="d-flex align-items-center ml-20">
                        <Link to="/checkout">
                            <a><IoCartOutline className='cartIcon' />
                                <span class="badge rounded-pill badge-notification bg-danger">0</span></a>
                        </Link>
                    </div>

                </div>

            </div>

        </nav>
    )
}