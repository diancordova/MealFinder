class AppBar extends HTMLElement {
 
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              
            }
            :host {
                display: block;
                width: 100%;
                background-color: orange;
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
            h2 {
                padding: 16px;
               
            }
            nav.menu ul {
                overflow:hidden;
                color:#fff;
                list-style: none;
                float:left;
                width: 100%;
                background: #1abc9c;
                -webkit-box-shadow: 1px 1px 1px 0px rgba(204,204,204,0.55);
                -moz-box-shadow: 1px 1px 1px 0px rgba(204,204,204,0.55);
                box-shadow: 1px 1px 1px 0px rgba(204,204,204,0.55);
            }
            
            nav.menu ul li {
                margin:0;
                float:left;
            }
            
            nav.menu ul a {
                padding:25px;
                display:block;
                font-weight:600;
                font-size: 16px;
                color:#fff;
                text-transform: uppercase;
                transition: all 0.5s ease;
                text-decoration: none;
            }
            
            nav.menu ul a:hover {
                text-decoration: none;
                background:#16a085;
            }
            
            .sidebar {
                float:right;
                width:200px;
            }
            
            .sidebar .widget {
                padding:25px;
                margin:0 0 25px;
                background: orange;
                border-bottom: 2px solid #fff;
                transition: all 0.5s ease;
            }
            
            .sidebar .widget:hover {
                border-bottom: 2px solid orange;
            }
            
            .sidebar .widget h2 {
                padding:0;
                margin:0 0 15px;
                color:white;
                font-size: 16px;
                font-weight:800;
                text-transform: uppercase;
            }
            
            .sidebar .widget p {
                font-size: 14px;
            }
            
            .sidebar .widget p:last-child {
                margin:0;
            }
            
            .blog {
                float:left;
            }
            @media screen and (max-width: 960px) {
            .sidebar {
                width:100%;
                margin:25px 0 0;
                float:right;
                display:block;
            }
        
            .sidebar .widget {
                padding:5%;
            }
        
            nav.menu ul {
                width: 100%;
            }
        
            nav.menu ul {
                float:inherit;
            }
        
            nav.menu ul li {
                float:inherit;
                margin:0;
            }
        
            nav.menu ul a {
                padding:15px;
                font-size: 16px;
                border-top:1px solid #1abf9f;
                border-bottom:1px solid #16a085;
            }

        }
        
        </style>
        <center><h2>🍔Meals Finder</h2></center>
        <nav class="menu">
			<ul>
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a target="_blank" href="https://www.dicoding.com" >Tutorial</a>
				</li>
				<li>
					<a target="_blank" href="https://themealdb.com">Source </a>
				</li>
			</ul>
		</nav>
		<!-- akhir bagian menu -->
 
		<!-- bagian sidebar website -->
		<aside class="sidebar">
			<div class="widget">
				<h2>Welcome</h2>
				<p>Selamat datang di latihan ES6 dan webpack, source ini dibangun menyesuaikan modul yang sudah di pelajari di pelatihan dicoding.</p>
			</div>
			<div class="widget">
				<h2>Data Source</h2>
				<p>Teman-teman bisa mengakses link datasource API dari dbMeal melalu link berikut <a target="_blank" href="https://www.themealdb.com">https://www.themealdb.com</a>.</p>
			</div>
		</aside>`
        ;
    }
 }
  
 customElements.define("app-bar", AppBar);