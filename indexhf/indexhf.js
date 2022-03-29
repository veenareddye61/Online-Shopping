var headerDiv = $("header");
var headerData=`<nav class="header-nav">
        
            <div id="left-menu">
                <div id="logo"><a href="../index.html" id="logotxt"><span>OShop</span></a></div>
                <a href="../index.html#clothes">Clothing</a>
                <a href="../index.html#accessories">Accessories</a>
            </div>
            <div id="search-wrapper">
                <i class="fas fa-search" aria-hidden="true"></i>
                <input id="search-box" type="text" name="search" placeholder="Search for Clothing and Accessories">
            </div>
            <div id="right-menu">
                <div id="cart-wrapper">
                    <p id="cart-count">0</p>
                    <a href="../checkout/checkout.html"><i class="fas fa-shopping-cart" aria-hidden="true"></i></a>
                </div>
                <img src="data:image/png;base64,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">
            </div>
    </nav>` 

headerDiv.append(headerData);
prodCard=JSON.parse(localStorage.getItem("prodCard"));
  $("#cart-count").text(prodCard.length);
  var footerDiv = $("#footer")
var footerData = `<div>
<p class="footer-heading">Online Store</p>
<a href="/" class="footer-link">Men Clothing</a>
<a href="/" class="footer-link">Women Clothing</a>
<a href="/" class="footer-link">Men Accessories</a>
<a href="/" class="footer-link">Women Accessories</a>
</div>
<div>
<p class="footer-heading">Helpful Links</p>
<a href="/" class="footer-link">Home</a>
<a href="/" class="footer-link">About</a>
<a href="/" class="footer-link">Contact</a>
</div>
<div>
<p class="footer-heading">Partners</p>
<a href="/" class="footer-link">Zara</a>
<a href="/" class="footer-link">Pantaloons</a>
<a href="/" class="footer-link">Levis</a>
<a href="/" class="footer-link">UCB</a>
<a href="/" class="footer-link">+ Many More</a>
</div>
<div>
<p class="footer-heading">Address</p>
<p href="/" class="footer-link">Building 101</p>
<p href="/" class="footer-link">Central Avenue</p>
<p href="/" class="footer-link">LA - 902722</p>
<p href="/" class="footer-link">United States</p>
</div>`

footerDiv.append(footerData)
