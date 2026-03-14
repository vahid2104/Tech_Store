import "./productDetails.css";
import { products, reviews as allReviews } from "../../data/products";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import {
  ArrowLeft,
  Check,
  Minus,
  Plus,
  Shield,
  ShoppingCart,
  Star,
  Truck,
} from "lucide-react";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";
export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find((p) => p.id === id);
  const productReviews = allReviews.filter((r) => r.productId === id);
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col gap-md text-center">
          <h2 className="text-2xl">Product Not Found</h2>
          <p className="color-foreground margin-b">
            The product you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate("/products")}>
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const images = [product.image, product.image, product.image];

  return (
    <div className="min-h-screen bg-color-white" style={{ padding: "2rem 0" }}>
      <div className="container flex flex-col gap-lg">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="border-none bg-color-white color-foreground flex items-center gap-sm text-md text-semibold back-btn"
        >
          <ArrowLeft className="" />
          Back
        </button>
        <div className="w-full flex flex-wrap justify-between gap-lg">
          {/* Image Gallery */}
          <div className="img-gallery-box">
            {/* Main Image */}
            <div className="w-full main-img">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full border-radius"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Thumbnail Images */}
            <div className="w-full flex gap-md">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex thumbnail-img ${selectedImage === idx ? "border-primary" : "border-simple"}`}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${idx + 1}`}
                    className="w-full h-full"
                    style={{ objectFit: "cover" }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info-box">
            {/* Category */}
            <p className="text-sm color-foreground margin-block-none">
              {product.category}
            </p>

            {/* Title */}
            <h1 className="margin-block-none">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-md margin-b">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`${i < Math.floor(product.rating) ? "fill-yellow" : "text-gray"}`}
                  />
                ))}
              </div>
              <span className="color-foreground text-sm">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-md margin-">
              <span className="text-3xl text-bold">${product.price}</span>
              {product.originalPrice && (
                <span
                  className="text-xl color-foreground"
                  style={{ textDecoration: "line-through" }}
                >
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-sm text-sm">
              {product.stock > 0 ? (
                <>
                  <Check style={{ color: "green" }} />
                  <span style={{ color: "green" }}>
                    In Stock ({product.stock} available)
                  </span>
                </>
              ) : (
                <span style={{ color: "red" }}>Out of Stock</span>
              )}
            </div>

            {/* Description */}
            <p className="color-foreground">{product.description}</p>

            {/* Specs */}
            {product.specs && (
              <div className="bg-color-gray border-radius padding border-box">
                <h3 className="margin-block-none">Tecnical Specifications:</h3>
                <ul
                  className="flex flex-wrap gap-md"
                  style={{ listStyle: "none", padding: "0" }}
                >
                  {product.specs?.map((spec, idx) => (
                    <li
                      key={idx}
                      className="flex gap-sm"
                      style={{ width: "45%" }}
                    >
                      <Check className="color-primary" />
                      <span className="text-sm">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Features */}
            {product.features && (
              <div>
                <h3 className="margin-block-none">Key Features:</h3>
                <ul
                  className="flex flex-col gap-sm"
                  style={{ listStyle: "none", padding: "0" }}
                >
                  {product.features.map((feature, idx) => (
                    <li className="flex items-center gap-sm text-sm" key={idx}>
                      <Check className="color-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="flex flex-col gap-md margin-b">
              <label>Quantity:</label>
              <div className="flex gap-lg items-center">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                  className="quantity-btn box-border bg-color-white flex items-center justify-center"
                >
                  <Minus />
                </button>
                <span className="text-xl text-center">{quantity}</span>
                <button
                  onClick={() =>
                    setQuantity(Math.min(product.stock, quantity + 1))
                  }
                  disabled={quantity >= product.stock}
                  className="quantity-btn box-border bg-color-white flex items-center justify-center"
                >
                  <Plus />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              className="gap-md margin-b"
              size="lg"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              <ShoppingCart />
              Add to Cart
            </Button>

            <hr
              style={{ width: "100%", height: "2px" }}
              className="border-none bg-color-gray margin-b"
            />

            {/* Additional Info */}
            <div className="flex flex-col gap-md text-sm">
              <div className="flex gap-md items-center">
                <Truck
                  className="color-primary"
                  style={{ marginTop: "-0.8rem" }}
                />
                <div>
                  <p className="text-semibold margin-block-none">
                    Free Shipping
                  </p>
                  <p className="color-foreground margin-block-none">
                    On orders over $100
                  </p>
                </div>
              </div>
              <div className="flex gap-md items-center">
                <Shield
                  className="color-primary"
                  style={{ marginTop: "-0.8rem" }}
                />
                <div>
                  <p className="text-semibold margin-block-none">
                    2 Year Warranty
                  </p>
                  <p className="color-foreground margin-block-none">
                    Extended warranty available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div>
          <h2>Customer Reviews</h2>
          {productReviews.length > 0 ? (
            <div className="box-border border-radius padding border-box">
              {productReviews.map((review) => (
                <div key={review.id}>
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-sm">
                      <h4 className="margin-block-none">{review.userName}</h4>
                      <p className="text-sm color-foreground margin-block-none">
                        {review.date}
                      </p>
                    </div>
                    <div>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`${
                            i < review.rating ? "fill-yellow" : "text-gray"
                          }`}
                          style={{ width: "1.2rem", height: "1.2rem" }}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="color-foreground">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="color-foreground">
              No reviews yet. Be the first to review this product!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
