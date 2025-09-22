export default function NavBar() {
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">🌌 قصص الطقس الفضائي</a>
            </div>
            <ul className="navbar-links">
                <li><a href="/">الرئيسية</a></li>
                <li><a href="/stories">القصص</a></li>
            </ul>
        </nav>
    )
}