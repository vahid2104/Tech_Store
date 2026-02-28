import { Link } from "react-router-dom"
import type { Product } from "../data/products"
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "./Button";
import { useCart } from "../hooks/useCart";
import "../styles/productCard.css"
interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product,}: ProductCardProps) {
    const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };
  return (
    <Link to={`/products/${product.id}`} className="product-card">
      {/* Image */}
      <div className="image-wrapper">
        <img src={product.image} alt={product.name} className="product-img"/>
        {product.originalPrice && (
          <div className="sale-badge">
            SALE
          </div>
        )}
      </div>
      {/* Content */}
      <div className="flex flex-col gap-sm" style={{padding: "16px"}}>
        {/* Category */}
        <p className="text-sm color-foreground" style={{marginBlock: "0"}}>{product.category}</p>
        {/* Title */}
        <h3 className="product-title" style={{marginBlock: "0"}}>{product.name}</h3>
        {/* Rating */}
        <div className="flex items-center gap-sm">
          <div className="flex items-center gap-sm text-md">
            <Star className="star-icon"/>
            <span className="color-black">{product.rating}</span>
          </div>
          <span className="color-foreground text-sm">
            ({product.reviews})
          </span>
        </div>
        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-md">
            <span className="text-semibold color-black text-xl">${product.price}</span>
            {product.originalPrice && (
              <span className="color-foreground text-sm" style={{textDecoration: "line-through"}}>${product.originalPrice}</span>
            )}
          </div>
        </div>
        {/* Add to Cart Button */}
        <Button
        size="md"
        onClick={handleAddToCart}
        className="w-full product-btn"
        >
          <ShoppingCart className="margin-r" style={{width: "18px", height: "18px"}}/>
          Add to Cart
        </Button>
      </div>
    </Link>
  )
}

