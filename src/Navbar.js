const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>Evan's Blog:</h1>
        <div className="links">
           <a href="/">Home</a>
           <a href="/create" style={{
              color: "black",
              backgroundColor: "#ffa500",
              borderRadius: "8px"
           }}>New Blog</a> 
        </div>
      </nav>  
    );

}

export default Navbar;