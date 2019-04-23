import React from "react";
import style from "./style.scss";

const SocButton = ({ link, text, classlist, datasoc, socicon }) => {
    return (
        <a
            target="_blank"
            href={link}
            className={`btn-soc ${classlist}`}
            data-soc={datasoc}
            onClick={console.log("click")}
        >
            <span className="authoriz-icon">
                <i className={socicon} />
            </span>
            <span className="authoriz-text">{text}</span>
        </a>
    );
};

export default SocButton;
