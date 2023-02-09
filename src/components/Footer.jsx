import React from "react";
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer-wrap">
            <a href='https://github.com/bloo327/color-guesser' rel="noreferrer" target='_blank'><FaGithub className="github"/></a>
        </div>
    )
}

export default Footer