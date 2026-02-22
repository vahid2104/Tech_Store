import { Link } from "react-router-dom"
import { Button } from "../components/Button"
import { ArrowRight, Shield, Truck, Zap } from "lucide-react"
import '../styles/home.css'
function Home() {
  return (
    <div style={{minHeight: "100vh"}}>
      {/* Hero Section */}
      <section className="w-full hero-section">
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
      <section className="w-full bg-color-gray" style={{padding: "10vh 0"}} >
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
    </div>
  )
}

export default Home