import { Link } from "react-router-dom"
import { Button } from "../components/Button"
import { ArrowRight, Headphones, Laptop, Shield, Smartphone, Truck, Zap } from "lucide-react"
import '../styles/home.css'
function Home() {
  return (
    <div style={{minHeight: "100vh"}}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container flex items-center justify-between home-hero-section">
          <div className="home-hero-left">
            <h1 className="text-4xl text-bold margin-b">Discover the Latest in Texhnology</h1>
            <p className="text-lg color-foreground">Shop premium computers, smartphones, and accessories from top brands. Free shipping on orders over $100 with fast delivery.</p>
            <div className="flex flex-wrap">
              <Link to="/products" className="margin-r margin-b">
              <Button size="lg">
                Shop Now
                <ArrowRight />
              </Button>
              </Link>
              <Link to="/products?category=computers">
              <Button variant="secondary" size="lg">
                Browse Categories
              </Button>
              </Link>
            </div>
          </div>
          <div>
            <img className="home-hero-right" src="https://images.unsplash.com/photo-1761795084688-bb007bc51697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" alt="Texhnology Store" />
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="bg-color-gray">
         <div className="container flex flex-wrap justify-between">
          <div className="feature-box">
            <div className="feature-icon-box">
              <Truck className="feature-icon" />
            </div>
            <div className="h-full">
              <h3 className="text-semibold">Free Shipping</h3>
              <p className="text-md color-foreground">On orders over $100</p>
            </div>
          </div>
          <div className="feature-box">
            <div className="feature-icon-box">
              <Shield className="feature-icon" />
            </div>
            <div className="h-full">
              <h3 className="text-semibold">Free Shipping</h3>
              <p className="text-md color-foreground">On orders over $100</p>
            </div>
          </div>
          <div className="feature-box">
            <div className="feature-icon-box">
              <Zap className="feature-icon" />
            </div>
            <div className="h-full">
              <h3 className="text-semibold">Free Shipping</h3>
              <p className="text-md color-foreground">On orders over $100</p>
            </div>
          </div>
         </div>
      </section>
      {/* Category Preview */}
      <section>
        <div className="container flex flex-col">
          <h2 className="category-section-title">Shop by Category</h2>
          <div className="w-full flex flex-wrap items-start justify-between">
            <Link to="/products?category=computers" className="category-card">
             <img src="https://images.unsplash.com/photo-1717390996865-57d607483101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" 
             alt="Computers"
             className="category-img" />
             <div className="category-card-overlay" />
             <div className="category-card-content">
              <div className="category-icon-box">
                <Laptop className="category-icon"/>
              </div>
              <h3 className="category-card-title">Computers</h3>
              <p className="category-card-text">12+ products</p>
             </div>
            </Link>
            <Link to="/products?category=smartphones" className="category-card">
             <img src="https://images.unsplash.com/photo-1697545806152-dcbf88b3befb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" 
             alt="Smartphones"
             className="category-img" />
             <div className="category-card-overlay" />
             <div className="category-card-content">
              <div className="category-icon-box">
                <Smartphone className="category-icon"/>
              </div>
              <h3 className="category-card-title">Smartphones</h3>
              <p className="category-card-text">11+ products</p>
             </div>
            </Link>
            <Link to="/products?category=accessories" className="category-card">
             <img src="https://images.unsplash.com/photo-1693279504914-d08266ecbe66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" 
             alt="Accessories"
             className="category-img" />
             <div className="category-card-overlay" />
             <div className="category-card-content">
              <div className="category-icon-box">
                <Headphones className="category-icon"/>
              </div>
              <h3 className="category-card-title">Accessories</h3>
              <p className="category-card-text">12+ products</p>
             </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home