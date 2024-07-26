"use client";

import React, { Children, useState } from "react";

interface Props {
    children: any;
}

const Abstract = ({ children }: Props) => {
    const [isShowing, toggleShowing] = useState(false);

    const handleClick = () => {
        toggleShowing(!isShowing);
    };

    return (
        <>
            {!isShowing && (
                <button
                    onClick={handleClick}
                    className="underline hover:text-white pl-4 font-medium text-secondary-white"
                >
                    Show abstract
                </button>
            )}
            {isShowing && (
                <div className="max-w-prose">
                    <button
                        onClick={handleClick}
                        className="underline hover:text-white pl-4 font-medium text-secondary-white"
                    >
                        Hide abstract
                    </button>
                    <h4 className="text-white font-semibold italic pl-6 pt-4">
                        Abstract
                    </h4>
                    <p className=" text-secondary-white px-4">{children}</p>
                </div>
            )}
        </>
    );
};

export default Abstract;
