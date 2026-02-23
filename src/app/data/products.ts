export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  stock: number;
  features?: string[];
  specs?: string[];
}

export const products: Product[] = [
  // Computers Category - MacBook Series (4 products)
  {
    id: "c1",
    name: "MacBook Air 13\" M3",
    price: 1299,
    originalPrice: 1399,
    category: "Computers",
    image: "https://images.unsplash.com/photo-1667940903819-9319fe82949f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.9,
    reviews: 2847,
    description: "The incredibly thin and light MacBook Air with M3 chip delivers exceptional performance and up to 18 hours of battery life.",
    stock: 145,
    specs: ["Apple M3 chip", "13.6-inch Liquid Retina", "8GB RAM", "256GB SSD"],
    features: [
      "8-core CPU and 10-core GPU",
      "1080p FaceTime HD camera",
      "MagSafe 3 charging",
      "Two Thunderbolt ports"
    ]
  },
  {
    id: "c2",
    name: "MacBook Air 15\" M3",
    price: 1499,
    category: "Computers",
    image: "https://images.unsplash.com/photo-1667940903819-9319fe82949f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.9,
    reviews: 1923,
    description: "The spacious 15-inch MacBook Air features the powerful M3 chip, perfect for multitasking and creative work.",
    stock: 98,
    specs: ["Apple M3 chip", "15.3-inch Liquid Retina", "8GB RAM", "512GB SSD"],
    features: [
      "Larger immersive display",
      "Six-speaker sound system",
      "Up to 18 hours battery life",
      "Fanless design"
    ]
  },
  {
    id: "c3",
    name: "MacBook Pro 14\" M3 Pro",
    price: 1999,
    originalPrice: 2199,
    category: "Computers",
    image: "https://images.unsplash.com/photo-1675668409245-955188b96bf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.9,
    reviews: 3456,
    description: "Professional-grade laptop with M3 Pro chip, stunning Liquid Retina XDR display, and exceptional performance for demanding workflows.",
    stock: 76,
    specs: ["Apple M3 Pro chip", "14.2-inch Liquid Retina XDR", "18GB RAM", "512GB SSD"],
    features: [
      "12-core CPU and 18-core GPU",
      "ProMotion 120Hz display",
      "Three Thunderbolt 4 ports",
      "Up to 18 hours battery life"
    ]
  },
  {
    id: "c4",
    name: "MacBook Pro 16\" M3 Max",
    price: 2999,
    category: "Computers",
    image: "https://images.unsplash.com/photo-1675668409245-955188b96bf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.9,
    reviews: 1867,
    description: "The ultimate MacBook Pro with M3 Max chip. Unparalleled performance for the most demanding professional workflows.",
    stock: 43,
    specs: ["Apple M3 Max chip", "16.2-inch Liquid Retina XDR", "36GB RAM", "1TB SSD"],
    features: [
      "16-core CPU and 40-core GPU",
      "Up to 22 hours battery life",
      "96W USB-C Power Adapter",
      "Advanced thermal system"
    ]
  },

  // Computers Category - Asus Series (4 products)
  {
    id: "c5",
    name: "ASUS ROG Strix G16",
    price: 1899,
    originalPrice: 2099,
    category: "Computers",
    image: "https://images.unsplash.com/photo-1642099716324-4cd41f0c9f4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.8,
    reviews: 1534,
    description: "Dominate the competition with this powerful gaming laptop featuring RTX 4070, 240Hz display, and advanced cooling.",
    stock: 67,
    specs: ["Intel Core i9-13980HX", "RTX 4070 8GB", "32GB DDR5", "1TB SSD"],
    features: [
      "16-inch QHD 240Hz display",
      "ROG Intelligent Cooling",
      "Per-key RGB keyboard",
      "Dolby Atmos audio"
    ]
  },
  {
    id: "c6",
    name: "ASUS ZenBook 14 OLED",
    price: 1099,
    category: "Computers",
    image: "https://images.unsplash.com/photo-1572532350840-f682a3cf9dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.7,
    reviews: 2341,
    description: "Premium ultraportable laptop with stunning OLED display, powerful performance, and all-day battery life.",
    stock: 123,
    specs: ["Intel Core i7-1355U", "Intel Iris Xe", "16GB LPDDR5", "512GB SSD"],
    features: [
      "14-inch 2.8K OLED display",
      "Ultra-slim 16.9mm profile",
      "NumberPad 2.0",
      "Up to 18 hours battery"
    ]
  },
  {
    id: "c7",
    name: "ASUS TUF Gaming A15",
    price: 1299,
    originalPrice: 1449,
    category: "Computers",
    image: "https://images.unsplash.com/photo-1742477012574-2e8990c6730d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.6,
    reviews: 1892,
    description: "Military-grade durable gaming laptop with AMD Ryzen power, RTX graphics, and efficient cooling system.",
    stock: 89,
    specs: ["AMD Ryzen 7 7735HS", "RTX 4060 8GB", "16GB DDR5", "512GB SSD"],
    features: [
      "15.6-inch FHD 144Hz",
      "MIL-STD-810H certified",
      "Self-cleaning cooling",
      "RGB backlit keyboard"
    ]
  },
  {
    id: "c8",
    name: "ASUS VivoBook 15",
    price: 649,
    category: "Computers",
    image: "https://images.unsplash.com/photo-1698512475067-74ed7c956c8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.5,
    reviews: 3234,
    description: "Affordable everyday laptop with modern design, solid performance, and full-size keyboard perfect for students and home use.",
    stock: 234,
    specs: ["AMD Ryzen 5 7520U", "Radeon Graphics", "8GB RAM", "512GB SSD"],
    features: [
      "15.6-inch FHD display",
      "Ergonomic keyboard",
      "Fast charging support",
      "Windows 11 Home"
    ]
  },

  // Computers Category - Lenovo Series (4 products)
  {
    id: "c9",
    name: "Lenovo ThinkPad X1 Carbon Gen 11",
    price: 1799,
    category: "Computers",
    image: "https://images.unsplash.com/photo-1763162410742-1d0097cea556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.8,
    reviews: 1678,
    description: "Premium business ultrabook with legendary ThinkPad reliability, stunning display, and enterprise-grade security.",
    stock: 78,
    specs: ["Intel Core i7-1365U", "Intel Iris Xe", "16GB LPDDR5", "512GB SSD"],
    features: [
      "14-inch 2.8K OLED display",
      "TrackPoint and glass trackpad",
      "MIL-STD-810H tested",
      "Up to 19.5 hours battery"
    ]
  },
  {
    id: "c10",
    name: "Lenovo Legion Pro 5",
    price: 1599,
    originalPrice: 1799,
    category: "Computers",
    image: "https://images.unsplash.com/photo-1760999462723-765888b01772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.7,
    reviews: 2123,
    description: "Powerful gaming laptop with RTX 4060, high refresh display, and advanced Legion Coldfront 5.0 cooling system.",
    stock: 92,
    specs: ["AMD Ryzen 7 7745HX", "RTX 4060 8GB", "16GB DDR5", "1TB SSD"],
    features: [
      "16-inch WQXGA 240Hz",
      "Legion Coldfront 5.0",
      "TrueStrike keyboard",
      "Nahimic Audio"
    ]
  },
  {
    id: "c11",
    name: "Lenovo Yoga 9i 2-in-1",
    price: 1399,
    category: "Computers",
    image: "https://images.unsplash.com/photo-1579362243176-b746a02bc030?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.8,
    reviews: 1456,
    description: "Versatile 2-in-1 convertible with OLED display, active pen support, and rotating soundbar for immersive audio.",
    stock: 67,
    specs: ["Intel Core i7-1360P", "Intel Iris Xe", "16GB LPDDR5", "512GB SSD"],
    features: [
      "14-inch 2.8K OLED touchscreen",
      "360-degree hinge",
      "Rotating soundbar",
      "Active Pen included"
    ]
  },
  {
    id: "c12",
    name: "Lenovo IdeaPad 3",
    price: 549,
    originalPrice: 649,
    category: "Computers",
    image: "https://images.unsplash.com/photo-1763162139130-240507e9fad5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.4,
    reviews: 4567,
    description: "Budget-friendly laptop with reliable performance, modern features, and great value for everyday computing tasks.",
    stock: 345,
    specs: ["Intel Core i5-1235U", "Intel UHD Graphics", "8GB RAM", "512GB SSD"],
    features: [
      "15.6-inch FHD display",
      "Privacy shutter",
      "Dolby Audio",
      "Windows 11 Home"
    ]
  },

  // Smartphones Category - Apple iPhone Series (4 products)
  {
    id: "s1",
    name: "iPhone 15 Pro Max",
    price: 1199,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1697898706680-5e1dcc9b50fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.9,
    reviews: 5678,
    description: "The ultimate iPhone with titanium design, A17 Pro chip, and revolutionary camera system with 5x telephoto zoom.",
    stock: 156,
    specs: ["A17 Pro chip", "6.7-inch Super Retina XDR", "256GB storage", "48MP camera"],
    features: [
      "Titanium aerospace-grade design",
      "Action button",
      "USB-C with USB 3 speeds",
      "Up to 29 hours video playback"
    ]
  },
  {
    id: "s2",
    name: "iPhone 15 Pro",
    price: 999,
    originalPrice: 1099,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1697898706680-5e1dcc9b50fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.9,
    reviews: 6234,
    description: "Pro performance in a perfectly sized titanium design with A17 Pro chip and advanced triple camera system.",
    stock: 198,
    specs: ["A17 Pro chip", "6.1-inch Super Retina XDR", "128GB storage", "48MP camera"],
    features: [
      "Titanium design",
      "ProMotion 120Hz display",
      "3x Telephoto camera",
      "All-day battery life"
    ]
  },
  {
    id: "s3",
    name: "iPhone 15",
    price: 799,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1697898706680-5e1dcc9b50fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.8,
    reviews: 7891,
    description: "The iPhone 15 brings Dynamic Island, 48MP main camera, and USB-C to everyone. Powerful A16 Bionic chip.",
    stock: 267,
    specs: ["A16 Bionic chip", "6.1-inch Super Retina XDR", "128GB storage", "48MP camera"],
    features: [
      "Dynamic Island",
      "USB-C connector",
      "Ceramic Shield",
      "Water and dust resistant"
    ]
  },
  {
    id: "s4",
    name: "iPhone SE (3rd Generation)",
    price: 429,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1697898706680-5e1dcc9b50fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.7,
    reviews: 4523,
    description: "Affordable iPhone with powerful A15 Bionic chip, 5G, and classic design with Touch ID. Amazing value.",
    stock: 423,
    specs: ["A15 Bionic chip", "4.7-inch Retina HD", "64GB storage", "12MP camera"],
    features: [
      "Touch ID",
      "5G connectivity",
      "Wireless charging",
      "iOS 17"
    ]
  },

  // Smartphones Category - Samsung Galaxy Series (4 products)
  {
    id: "s5",
    name: "Samsung Galaxy S24 Ultra",
    price: 1299,
    originalPrice: 1399,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1705585174953-9b2aa8afc174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.9,
    reviews: 4321,
    description: "Ultimate Galaxy phone with integrated S Pen, 200MP camera, Galaxy AI features, and stunning 6.8\" QHD+ display.",
    stock: 134,
    specs: ["Snapdragon 8 Gen 3", "6.8-inch Dynamic AMOLED 2X", "256GB storage", "200MP camera"],
    features: [
      "Integrated S Pen",
      "Galaxy AI features",
      "120Hz adaptive display",
      "5000mAh battery"
    ]
  },
  {
    id: "s6",
    name: "Samsung Galaxy S24+",
    price: 999,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1721864428907-647320ec2917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.8,
    reviews: 3456,
    description: "Premium Galaxy experience with large display, powerful performance, and advanced camera system with AI enhancements.",
    stock: 178,
    specs: ["Snapdragon 8 Gen 3", "6.7-inch Dynamic AMOLED 2X", "256GB storage", "50MP camera"],
    features: [
      "QHD+ 120Hz display",
      "Circle to Search",
      "Live Translate",
      "4900mAh battery"
    ]
  },
  {
    id: "s7",
    name: "Samsung Galaxy Z Flip 5",
    price: 999,
    originalPrice: 1099,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1676121228785-f1dcd462025f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.7,
    reviews: 2789,
    description: "Stylish foldable phone that fits in your pocket. Large cover screen and powerful Flex Mode capabilities.",
    stock: 89,
    specs: ["Snapdragon 8 Gen 2", "6.7-inch Dynamic AMOLED 2X", "256GB storage", "12MP camera"],
    features: [
      "3.4-inch cover screen",
      "Flex Mode",
      "IPX8 water resistant",
      "Foldable design"
    ]
  },
  {
    id: "s8",
    name: "Samsung Galaxy A54 5G",
    price: 449,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1721864428907-647320ec2917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.6,
    reviews: 5234,
    description: "Mid-range champion with premium features: 120Hz Super AMOLED display, versatile cameras, and 2-day battery life.",
    stock: 298,
    specs: ["Exynos 1380", "6.4-inch Super AMOLED", "128GB storage", "50MP camera"],
    features: [
      "120Hz display",
      "IP67 water resistance",
      "5000mAh battery",
      "4 years of updates"
    ]
  },

  // Smartphones Category - Google Pixel Series (4 products)
  {
    id: "s9",
    name: "Google Pixel 8 Pro",
    price: 999,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1697355360151-2866de32ad4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.8,
    reviews: 3678,
    description: "Google's most advanced phone with Tensor G3, best-in-class AI cameras, and 7 years of OS updates. Temperature sensor included.",
    stock: 145,
    specs: ["Google Tensor G3", "6.7-inch LTPO OLED", "128GB storage", "50MP camera"],
    features: [
      "Magic Editor and Best Take",
      "Temperature sensor",
      "7 years of updates",
      "Fast wireless charging"
    ]
  },
  {
    id: "s10",
    name: "Google Pixel 8",
    price: 699,
    originalPrice: 799,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1697355360151-2866de32ad4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.7,
    reviews: 4567,
    description: "Perfectly sized Pixel with Tensor G3, brilliant Actua display, and Google's best AI features. 7 years of updates.",
    stock: 234,
    specs: ["Google Tensor G3", "6.2-inch OLED", "128GB storage", "50MP camera"],
    features: [
      "Actua display",
      "Magic Eraser",
      "Call Screen",
      "All-day battery"
    ]
  },
  {
    id: "s11",
    name: "Google Pixel 8a",
    price: 499,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1758691031749-607d43c14f63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.7,
    reviews: 3891,
    description: "Pixel magic at an amazing price. Tensor G3 power, excellent cameras, and 7 years of updates. Incredible value.",
    stock: 345,
    specs: ["Google Tensor G3", "6.1-inch OLED", "128GB storage", "64MP camera"],
    features: [
      "Google AI features",
      "7 years of updates",
      "Magic Eraser",
      "Fast charging"
    ]
  },
  {
    id: "s12",
    name: "Google Pixel Fold",
    price: 1799,
    originalPrice: 1899,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1763107218889-e42a84c0cab8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.6,
    reviews: 1234,
    description: "Google's first foldable phone with tablet-sized screen, Tensor G2 power, and the most durable hinge ever.",
    stock: 45,
    specs: ["Google Tensor G2", "7.6-inch OLED Foldable", "256GB storage", "48MP camera"],
    features: [
      "Foldable design",
      "Multitasking capabilities",
      "IPX8 water resistant",
      "Google AI features"
    ]
  },

  // Accessories Category (11 products)
  {
    id: "a1",
    name: "AirPods Pro (2nd generation)",
    price: 249,
    originalPrice: 279,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1695634463848-4db4e47703a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.9,
    reviews: 7234,
    description: "Premium wireless earbuds with active noise cancellation, adaptive audio, and personalized spatial audio. MagSafe charging case.",
    stock: 267,
    specs: ["H2 chip", "Active Noise Cancellation", "Up to 6 hours listening", "MagSafe charging"],
    features: [
      "Adaptive Audio",
      "Personalized Spatial Audio",
      "Sweat and water resistant",
      "Find My integration"
    ]
  },
  {
    id: "a2",
    name: "Apple Watch Series 9",
    price: 399,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1696660760822-833afde62f94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.8,
    reviews: 5678,
    description: "Your ultimate health and fitness companion with advanced sensors, bright display, and seamless Apple ecosystem integration.",
    stock: 198,
    specs: ["S9 chip", "Always-On Retina display", "Up to 18 hours", "ECG and SpO2"],
    features: [
      "Double tap gesture",
      "Precision Finding",
      "Advanced health features",
      "Crash Detection"
    ]
  },
  {
    id: "a3",
    name: "Samsung Galaxy Buds2 Pro",
    price: 229,
    originalPrice: 249,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1618213520536-ce37aabcd9e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.7,
    reviews: 4321,
    description: "Premium wireless earbuds with intelligent ANC, 360 Audio, and Hi-Fi sound. Perfect companion for Galaxy devices.",
    stock: 234,
    specs: ["Intelligent ANC", "360 Audio", "Up to 8 hours", "Wireless charging"],
    features: [
      "Enhanced 360 Audio",
      "Voice Detect",
      "IPX7 water resistant",
      "SmartThings Find"
    ]
  },
  {
    id: "a4",
    name: "Samsung Galaxy Watch 6",
    price: 299,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553545204-4f7d339aa06a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.7,
    reviews: 3456,
    description: "Advanced smartwatch with comprehensive health tracking, larger display, and seamless Galaxy ecosystem integration.",
    stock: 156,
    specs: ["Exynos W930", "Super AMOLED display", "Up to 40 hours", "Sleep tracking"],
    features: [
      "Body composition analysis",
      "Advanced sleep coaching",
      "5ATM + IP68 + MIL-STD-810H",
      "Wear OS powered by Samsung"
    ]
  },
  {
    id: "a5",
    name: "Google Pixel Buds Pro",
    price: 199,
    originalPrice: 229,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1590658308017-35148deff6a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.6,
    reviews: 2789,
    description: "Premium wireless earbuds with Silent Seal ANC, transparency mode, and seamless Google Assistant integration.",
    stock: 189,
    specs: ["Custom audio chip", "Active Noise Cancellation", "Up to 11 hours", "Wireless charging"],
    features: [
      "Silent Seal ANC",
      "Spatial audio",
      "IPX4 water resistant",
      "Google Assistant integration"
    ]
  },
  {
    id: "a6",
    name: "Anker PowerBank 20000mAh",
    price: 55,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1566793474285-2decf0fc182a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.8,
    reviews: 8901,
    description: "High-capacity portable charger with fast charging support. Keep all your devices powered on the go.",
    stock: 456,
    specs: ["20000mAh capacity", "USB-C PD 30W", "Dual USB-A ports", "Smart charging"],
    features: [
      "Charges iPhone 4-5 times",
      "Fast charging support",
      "MultiProtect safety system",
      "Compact design"
    ]
  },
  {
    id: "a7",
    name: "Logitech MX Master 3S",
    price: 99,
    originalPrice: 129,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1611846199341-e68b0da801eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.8,
    reviews: 5432,
    description: "Premium wireless mouse with ultra-precise scrolling, customizable buttons, and works on any surface including glass.",
    stock: 234,
    specs: ["8K DPI sensor", "Quiet clicks", "USB-C charging", "Multi-device"],
    features: [
      "MagSpeed scrolling",
      "Ergonomic design",
      "70 days on full charge",
      "Connect up to 3 devices"
    ]
  },
  {
    id: "a8",
    name: "USB-C to USB-C Cable (3-Pack)",
    price: 29,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1760708825913-65a50b3dc39b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.7,
    reviews: 6789,
    description: "Premium braided USB-C cables supporting 100W fast charging and 480Mbps data transfer. Durable and tangle-free.",
    stock: 567,
    specs: ["100W Power Delivery", "480Mbps data transfer", "Braided nylon", "6ft length"],
    features: [
      "Fast charging support",
      "Durable braided design",
      "Universal compatibility",
      "3-pack value"
    ]
  },
  {
    id: "a9",
    name: "Laptop Sleeve 13-14 inch",
    price: 35,
    originalPrice: 45,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1689757855413-9e366c2011f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.6,
    reviews: 4321,
    description: "Premium protective laptop sleeve with soft interior, water-resistant exterior, and additional pocket for accessories.",
    stock: 345,
    specs: ["Fits 13-14 inch laptops", "Water-resistant", "Soft microfiber lining", "Front pocket"],
    features: [
      "360-degree protection",
      "Water-resistant material",
      "Slim and lightweight",
      "Stylish design"
    ]
  },
  {
    id: "a10",
    name: "Wireless Charging Pad 15W",
    price: 39,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1591290619618-904f6dd935e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.7,
    reviews: 3456,
    description: "Fast wireless charging pad compatible with iPhone, Samsung, and Google Pixel. Sleek design with LED indicator.",
    stock: 289,
    specs: ["15W fast charging", "Qi certified", "LED indicator", "Non-slip surface"],
    features: [
      "Universal compatibility",
      "Case-friendly up to 5mm",
      "Overheat protection",
      "Compact design"
    ]
  },
  {
    id: "a11",
    name: "Phone Stand Adjustable",
    price: 19,
    originalPrice: 25,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    rating: 4.5,
    reviews: 5678,
    description: "Adjustable aluminum phone stand perfect for video calls, watching videos, or hands-free use. Universal compatibility.",
    stock: 456,
    specs: ["Aluminum alloy", "Multi-angle adjustment", "Anti-slip pads", "Foldable design"],
    features: [
      "360-degree rotation",
      "Sturdy and stable",
      "Portable and lightweight",
      "Fits all phone sizes"
    ]
  }
];

export const categories = [
  { id: "all", name: "All Products", icon: "Grid3x3" },
  { id: "computers", name: "Computers", icon: "Laptop" },
  { id: "smartphones", name: "Smartphones", icon: "Smartphone" },
  { id: "accessories", name: "Accessories", icon: "Headphones" }
];

// Mock reviews data
export const reviews = [
  {
    id: "r1",
    productId: "c1",
    userName: "John Smith",
    rating: 5,
    comment: "Absolutely love this MacBook! The M3 chip is incredibly fast and the battery life is outstanding.",
    date: "January 15, 2026"
  },
  {
    id: "r2",
    productId: "s1",
    userName: "Sarah Johnson",
    rating: 5,
    comment: "Best iPhone yet! The titanium design feels premium and the camera quality is unmatched.",
    date: "February 8, 2026"
  }
];
