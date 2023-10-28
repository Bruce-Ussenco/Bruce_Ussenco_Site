function NavBar() {
    return (
        <div>
            <nav>
                <a href="/">Página inicial </a>
                <a href="/test/page">Sobre </a>
                <a href="">Contato </a>
            </nav>
            <style jsx>{`
                nav {
                    background-color: #ff0000;
                    padding: 10px;
                }

                nav a {
                    text-decoration: none;
                    color: white;
                }
            `}</style>
        </div>
    )
}

export default NavBar;