import { Link } from "react-router-dom";
import type { Product } from "../../data/products";
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "./../Button/Button";
import { useCart } from "../../hooks/useCart";
import styles from "./productCard.module.css";
interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };
  return (
    <Link to={`/products/${product.id}`} className={`${styles.productCard}`}>
      {/* Image */}
      <div className={`${styles.imageWrapper}`}>
        <img
          src={product.image}
          alt={product.name}
          className={`${styles.productImg}`}
        />
        {product.originalPrice && (
          <div className={`${styles.saleBadge}`}>SALE</div>
        )}
      </div>
      {/* Content */}
      <div className={`flex flex-col gap-sm ${styles.contentDiv}`}>
        {/* Category */}
        <p className={`text-sm color-foreground margin-block-none`}>
          {product.category}
        </p>
        {/* Title */}
        <h3 className={`${styles.productTitle} margin-block-none`}>
          {product.name}
        </h3>
        {/* Rating */}
        <div className="flex items-center gap-sm">
          <div className="flex items-center gap-sm text-md">
            <Star className={`${styles.starIcon}`} />
            <span className="color-black">{product.rating}</span>
          </div>
          <span className="color-foreground text-sm">({product.reviews})</span>
        </div>
        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-md">
            <span className="text-semibold color-black text-xl">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span
                className={`color-foreground text-sm ${styles.originalPrice}`}
              >
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>
        {/* Add to Cart Button */}
        <Button
          size="md"
          onClick={handleAddToCart}
          className={`w-full ${styles.productBtn}`}
        >
          <ShoppingCart className={`margin-r ${styles.shoppingCart}`} />
          Add to Cart
        </Button>
      </div>
    </Link>
  );
}
