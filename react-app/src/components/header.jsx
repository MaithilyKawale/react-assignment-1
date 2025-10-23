function Header({ title }) {
    const headerstyle = {
        color: 'blue',
        textAlign: 'center',
        padding: '10px'
    }
    return <h1 style={headerstyle}>{title}</h1>;

}

export default Header;