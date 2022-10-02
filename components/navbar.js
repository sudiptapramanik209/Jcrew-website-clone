const navbar = () => {
  return `   <h1><a href="./index.html">J.CREW</a></h1>
  <div class="dropdown">
    <a class="drop_btn" href="./index.html">New</a>
    <div class="dropdown-content">
      <div id="new">
        <h3>Shop New Arrivals</h3>
        <p>For Women</p>
        <p>For Men</p>
        <p>For Girls</p>
        <p>For Boys</p>
      </div>
    </div>
  </div>
  <div class="dropdown">
    <a class="drop_btn" href="./filterpage/women.html">Women</a>
    <div class="dropdown-content">
      <div id="new">
        <h3><a href="./filterpage/women.html">Women</a></h3>
        <p>New Arrivals</p>
        <p>Best Seller</p>
        <p>Top Rate</p>
        <p>Brands We Love</p>
        <p>The Re-Imagined Show</p>
        <p>Shop All</p>
        <p>Sale</p>
      </div>
    </div>
  </div>
  <div class="dropdown">
    <a class="drop_btn" href="../filterpage/men.html">Men</a>
    <div class="dropdown-content">
      <div id="new">
        <h3>Men</h3>
        <p>New Arrivals</p>
        <p>Best Seller</p>
        <p>Top Rate</p>
        <p>Brands We Love</p>
        <p>The Re-Imagined Show</p>
        <p>Shop All</p>
        <p>Sale</p>
      </div>
    </div>
  </div>
  <div class="dropdown">
    <a class="drop_btn" href="">Kids</a>
    <div class="dropdown-content">
      <div id="new">
        <h3>Kids</h3>
        <p>Girls' New Arrivals</p>
        <p>Girls' Best Sellers</p>
        <p>Girls' Top Rated</p>
        <p>Boys' New Arrivals</p>
        <p>Boys' Best Sellers</p>
        <p>Boys' Top Rated</p>
      </div>
    </div>
  </div>
  <div class="dropdown">
    <a class="drop_btn" href="">Cashmere</a>
    <div class="dropdown-content">
      <div id="new">
        <h3>Shop Cashmere</h3>
        <p>For Women</p>
        <p>For Men</p>
        <p>For Girls</p>
        <p>For Boys</p>
        <p>For Baby</p>
      </div>
    </div>
  </div>
  <div class="dropdown">
    <a class="drop_btn" href="../index.html">Home</a>
    <div class="dropdown-content">
      <div id="new">
        <h3>Shop Home</h3>

        <p>Dining & Entertainment</p>
        <p>Bedding & Bath</p>
        <p>Candles & Fragrance</p>
        <p>Decor & Gifts</p>
        <p>Beauty & Wellness</p>
        <p>Home Office & Tech</p>
        <p>Travel & Gear</p>
        <p>Pets</p>
      </div>
    </div>
  </div>
  <div class="dropdown">
    <a class="drop_btn" href="">Stories</a>
    <div class="dropdown-content">
      <div id="new">
        <h3>STYLES</h3>

        <p>Introducing Brendon Babenzien</p>
        <p>Sporting life with Row New York</p>
        <p>Suiting up with Paul Dally</p>
        <p>Source materials</p>
        <p>Limited edition: BEAMS PLUS</p>
      </div>
    </div>
  </div>
  <div class="dropdown">
    <a class="drop_btn" href="">Sale</a>
    <div class="dropdown-content">
      <div id="new">
        <h3>Sale</h3>

        <p>Shop Women's Sale</p>
        <p>Shop Men's Sale</p>
        <p>Shop Girls' Sale</p>
        <p>Shop Boys' Sale</p>
      </div>
    </div>
  </div>
  <div id="right">
    <div id="input">
      <i id="icon" class="fa-solid fa-magnifying-glass"></i>
      <input id="search" type="text" placeholder="Search J.Crew" />
    </div>
    <button id="sign_btn" onclick="document.querySelector('.model').style.display='block'" style="width:auto;">
    <h3 id="sign">Sign In</h3>
    </button>
    
    <a id="cart" href="./checkout/checkout.html"><img id="cart1" src="./styles/img/shopping-bag.gif" alt="" srcset="" /></a>
  </div>`;
};

export { navbar };
