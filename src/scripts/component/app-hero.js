class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <style>
          .hero {
            position: relative;
            overflow: hidden;
            height: 100vh; /* Atur tinggi hero sejajar dengan tinggi layar */
          }
          
          .hero img {
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          
          .inner {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: #fff;
          }
          
          .title {
            font-size: 3rem;
            font-weight: 600;
            margin-bottom: 10px;
          }
          
          .subtitle {
            font-size: 1.8rem;
            margin: 0;
          }
          
          .hero:hover .picture {
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
          }
          
          .title {
            transition: font-size 0.3s ease-in-out;
          }
          
          .hero:hover .title {
            font-size: 3.5rem;
          }
          

          </style>
          <div class="hero">
          <picture>
            <source media="(max-width: 600px)" srcset="images/hero-image_2-small.jpg">
            <img src="/images/hero-image_2-large.jpg" alt="TrendzResto">
          </picture>
          <div class="inner">
              <h1 class="title">Trendz Resto</h1>
              <p class="subtitle">
                  Find the best Restaurant in your area
              </p>
          </div>
        </div>
        `;
  }
}

customElements.define('app-hero', AppHero);
