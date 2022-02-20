const nav = document.querySelector(".left-pane");
const navItems = `
        <a class="menu-item" href="account.html">
            <span>Account</span>
            <img src="icons/account.svg" alt="account.svg" width="20px" height="20px"/>
        </a>
        <a class="menu-item" href="inventory.html">
            <span>Inventory</span>
            <img src="icons/inventory.svg" alt="inventory.svg" width="20px" height="20px"/>
        </a>
        <a class="menu-item" href="catalog.html">
            <span>Product Catalog</span>
            <img src="icons/cart.svg" alt="cart.svg" width="20px" height="20px"/>
        </a>
        <a class="menu-item" href="record-sales.html">
            <span>Record Sales</span>
            <img src="icons/record2.svg" alt="record2.svg" width="20px" height="20px"/>
        </a>
        <a class="menu-item" href="customers.html">
            <span>Customers</span>
            <img src="icons/customers.svg" alt="customers.svg" width="20px" height="20px"/>
        </a>
        <a class="menu-item" href="report.html">
            <span>Sales Report</span>
            <img src="icons/report.svg" alt="report.svg" width="20px" height="20px"/>
        </a>
	    <a class="menu-item" href="auth.html">
	        <span>Log out</span>
	        <img src="icons/logout.svg" alt="logout.svg" width="20px" height="20px"/>
	    </a>
`;

nav.innerHTML = navItems;

nav.querySelectorAll("a").forEach(anchor => {
    if (window.location.href === anchor.href) {
        anchor.setAttribute("style", "border:5px solid rgb(204,175,204);");
    }
});
