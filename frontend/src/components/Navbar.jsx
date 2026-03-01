
function Navbar() {
  return (
    <>
    <div id="navbar">
        <div className="title-nav">
            <p>ZUSTAND DEMO</p>
            <h1>Starter Store</h1>
        </div>
        <div className="ref-navbar">
            <button className="shop">Shop</button>
            <button className="cart">
                Cart
                <div className="count-product">{0}</div>
            </button>
        </div>
    </div>
    </>
  )
}

export default Navbar