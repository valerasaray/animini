import React from "react";
import { Link } from "react-router-dom";

function LinkButton({ children, to }) {
    return (
        <Link
            to={to}
            className="m-3 p-2 md:p-3 border-2 border-black rounded-md text-white bg-black"
        >
            {children}
        </Link>
    );
}

export default LinkButton;
