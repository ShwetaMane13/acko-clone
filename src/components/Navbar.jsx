import logo from "./images/Logo.svg"

export const Navbar = () => {
    return (
    <div>
        <div className="home_nav">
            <nav className="main_nav">
                <a href="/"><img src={logo} id="logo" alt="logo" /></a>
            </nav>
        </div>
    </div>
    )
}