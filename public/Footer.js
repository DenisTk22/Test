// const e = React.createElement;

class Footer extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { liked: false };
    // }

    render(){
    //     // if (this.state.liked) {
    //     //     return 'You liked this.';
    //     // }

        return (
            <>
                <nav className="footer__nav">
                    <ul className="footer__nav_links">
                        <li>
                            <a className="footer__nav_link" href="#main">
                                На главную
                            </a>
                        </li>
                        <li>
                            <a className="footer__nav_link" href="#about">
                                Обо мне
                            </a>
                        </li>
                        <li>
                            <a className="footer__nav_link" href="#motivation">
                                Мотивация
                            </a>
                        </li>
                    </ul>
                    <ul className="footer__nav_contacts">
                        <li>
                            <a
                                className="footer__nav_contact"
                                target="_blank"
                                href="https://t.me/+_K03Uly8P7A0MGI6"
                            >
                                Мой канал в телеграм
                            </a>
                        </li>
                        <li>
                            <a
                                className="footer__nav_contact"
                                target="_blank"
                                href="https://vk.com/dgsined"
                            >
                                Моя страница Вконтакте
                            </a>
                        </li>
                        <li className="footer__nav_email">Моя почта: allpost-s@ya.ru</li>
                    </ul>
                </nav>
            </>

        );
    }
}



// const domContainer = document.querySelector('#footer');
// const root = ReactDOM.createRoot(domContainer);
// root.render(e(Footer));