import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import "../styles/products.css";
import { Button } from "../components/Button";
import { ProductCard } from "../components/ProductCard";
import { SlidersHorizontal, X } from "lucide-react";
export function Products() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const categoryQuery = searchParams.get("category") || "";

  const [selectedCategory, setSelectedCategory] = useState(categoryQuery);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search Filter
    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    // Category Filter
    if (selectedCategory && selectedCategory !== "all") {
      filtered = filtered.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase(),
      );
    }

    //Price Filter
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1],
    );

    // Rating Filter
    if (minRating > 0) {
      filtered = filtered.filter((p) => p.rating >= minRating);
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        // Here normally we used sort by date in a real app
        break;
      default:
        // featured - keep original order
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, priceRange, minRating, sortBy]);

  const clearFilters = () => {
    setSelectedCategory("");
    setPriceRange([0, 2000]);
    setMinRating(0);
  };

  return (
    <main className="w-full min-h-screen bg-color-white products-page-box">
      <div className="container">
        <div className="flex flex-wrap justify-between items-center margin-b">
          <div>
            <h1 className="text-bold products-page-h1">
              {searchQuery
                ? `Search Results for "${searchQuery}"`
                : selectedCategory
                  ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`
                  : "All Products"}
            </h1>
            <p className="color-foreground">
              {filteredProducts.length} products found
            </p>
          </div>
          <div className="flex flex-wrap gap-md">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest</option>
            </select>

            {/* Mobile Filter Button */}
            <Button
              variant="secondary"
              className="filter-btn"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal/>
              Filters
            </Button>
          </div>
        </div>
        <div className="flex justify-between">
          {/* Sidebar Filters - Desktop */}
          <aside className={`${showFilters ? 'block' : 'hidden'}`}>
            {/* Mobile Close Button */}
              <div className="flex justify-between items-center aside-header">
                <h2 className="text-xl font-semibold">Filters</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="aside-close-btn"
                >
                  <X  />
                </button>
              </div>
            <div className="w-full">
                <h3 className="font-semibold">Category</h3>
                <div className="flex flex-col" style={{gap: "0.5rem"}}>
                  {[
                    { id: 'all', name: 'All Products' },
                    { id: 'computers', name: 'Computers' },
                    { id: 'smartphones', name: 'Smartphones' },
                    { id: 'accessories', name: 'Accessories' }
                  ].map((cat) => (
                    <label key={cat.id} className="flex items-center" style={{cursor: "pointer"}}>
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat.id || (!selectedCategory && cat.id === 'all')}
                        onChange={() => setSelectedCategory(cat.id === 'all' ? '' : cat.id)}
                      />
                      <span className="text-md">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>
               {/* Price Range Filter */}
              <div className="w-full">
                <h3 className="font-semibold">Price Range</h3>
                <div>
                  <input
                    type="range"
                    min="0"
                    max="4000"
                    step="50"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  />
                  <div className="flex justify-between text-sm color-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
              {/* Rating Filter */}
              <div className="w-full">
                <h3 className="font-semibold">Minimum Rating</h3>
                <div className="flex flex-col" style={{gap: "0.3rem"}}>
                  {[0, 4, 4.5].map((rating) => (
                    <label key={rating} className="flex items-center" style={{cursor: "pointer"}}>
                      <input
                        type="radio"
                        name="rating"
                        checked={minRating === rating}
                        onChange={() => setMinRating(rating)}
                      />
                      <span className="text-md">
                        {rating === 0 ? 'All Ratings' : `${rating}+ Stars`}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              {/* Clear Filters */}
              <Button
                variant="secondary"
                className="w-full"
                style={{margin: "1rem 0", backgroundColor: "#e3e1e1"}}
                onClick={clearFilters}
              >
                Clear All Filters
              </Button>
          </aside>

          {/* Product Grid */}
          <div className="flex products-grid-div">
            {filteredProducts.length > 0 ? (
              <div className="w-full flex flex-wrap items-center justify-center" style={{gap: "1.5rem"}}>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  No products found matching your criteria.
                </p>
                <Button
                  variant="primary"
                  className="mt-4"
                  onClick={clearFilters}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
