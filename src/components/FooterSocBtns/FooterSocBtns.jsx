import React, { Component } from "react";
import style from "./style.scss";

class FooterSocBtns extends Component {
    render() {
        return (
            <div className="FooterSocBtns">
                <a
                    className="socbtn vk"
                    href="http://r.mail.ru/r/4166?btype=redir&gpmddealid=37880303&puid1=27&puid2=1&puid3=28&%random%"
                    target="_blank"
                >
                    <i className="fa fa-vk" />
                </a>
                <a
                    className="socbtn fb"
                    href="http://r.mail.ru/r/4166?btype=redir&gpmddealid=37880304&puid1=27&puid2=1&puid3=28&%random%"
                    target="_blank"
                >
                    <i className="fa fa-facebook" />
                </a>
                <a
                    className="socbtn insta"
                    href="http://r.mail.ru/r/4166?btype=redir&gpmddealid=37880305&puid1=27&puid2=1&puid3=28&%random%"
                    target="_blank"
                >
                    <i className="fa fa-instagram" />
                </a>
            </div>
        );
    }
}

export default FooterSocBtns;
