import React from "react";
import {Link, NavLink} from "react-router-dom"
import { links } from "../../constants/road"

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            links.map((item) => {
                                return (
                                    <li key={item.id} className="nav-item">
                                        <NavLink className={
                                            ({ isActive}) => (isActive ? "nav-link active" : "nav-link")
                                        } to={item.href}>
                                            {item.name}
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Поиск"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Поиск
                        </button>
                    </form>
                </div>
            </div>
        </nav>

    )
}
export default Header;