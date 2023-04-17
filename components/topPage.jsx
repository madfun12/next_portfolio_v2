import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

export default function TopPage(props) {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggle() {
        setIsOpen(!isOpen);
        const mobileMenu = document.querySelector(".mobile-menu");
        const menuIcon = document.querySelector(".kahuna-burger");

        if (!isOpen) {
            mobileMenu.style.right = "0px";
            menuIcon.classList.add("active");
        } else {
            mobileMenu.style.right = "-200px";
            menuIcon.classList.remove("active");
        }
    }
    return (
        <div className="wrapper">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
                />
            </Head>
            <nav className="nav-bar">
                <div className="name-holder">
                    <Link className="name-logo" href="/">
                        madison
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
                <button
                    className="kahuna-burger"
                    aria-label="Menu"
                    aria-expanded={isOpen}
                    onClick={handleToggle}
                >
                    <div className="patty"></div>
                </button>
                <div className="mobile-menu">
                    <ul>
                        <li>
                            <Link href="/about" tabIndex={!isOpen ? "-1" : ""}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/projects"
                                tabIndex={!isOpen ? "-1" : ""}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" tabIndex={!isOpen ? "-1" : ""}>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                tabIndex={!isOpen ? "-1" : ""}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="main-content">{props.children}</div>
            <footer>
                <div className="footer-wrapper">
                    <p>
                        Copyright © 2023 Madison Funderburk. All Rights Reserved
                    </p>
                </div>
            </footer>
        </div>
    );
}
