const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "Trending"
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    category: "Iconic cities"
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    category: "Mountains"
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    category: "Castles"
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    category: "Camping"
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    category: "Amazing pools"
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    category: "Arctic"
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    category: "Iconic cities"
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    category: "Arctic"
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    category: "Iconic cities"
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    category: "Castles"
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    category: "Farms"
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "Farms"
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    category: "Domes"
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    category: "Domes"
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    category: "Mountains"
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    category: "Camping"
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    category: "Farms"
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    category: "Castles"
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "Trending"
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
    category: "Arctic"
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    category: "Farms"
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "Domes"
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
    category: "Castles"
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    category: "Boats"
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    category: "Boats"
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    category: "Arctic"
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    category: "Amazing pools"
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "Boats"
  },
  {
    title: "Chic Urban Studio",
    description: "Modern studio in the heart of downtown, perfect for solo travelers.",
    image: {
      filename: "listingimage",
      url: "https://thaka.bing.com/th/id/OIP.zLA46FKzZyLHXBieq7XTKQHaD4?w=336&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    price: 1300,
    location: "Chicago",
    country: "United States",
    category: "Trending"
  },
  {
    title: "Countryside Farmhouse",
    description: "Historic farmhouse surrounded by open fields and tranquility.",
    image: {
      filename: "listingimage",
      url: "https://thaka.bing.com/th/id/OIP.F5DE6bKS3Hwt3Uan3bj4AwHaE8?w=249&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    price: 1100,
    location: "Lancaster",
    country: "United States",
    category: "Farms"
  },
  {
    title: "Loft with Skyline Views",
    description: "Stylish loft with panoramic city skyline views.",
    image: {
      filename: "listingimage",
      url: "https://thaka.bing.com/th/id/OIP.X8d1iWmb0wgEWIzcazR4-gHaGN?w=165&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    price: 1800,
    location: "Seattle",
    country: "United States",
    category: "Arctic"
  },
  {
    title: "Riverside Cottage",
    description: "Quiet riverside cottage—perfect for reconnecting with nature.",
    image: {
      filename: "listingimage",
      url: "https://thaka.bing.com/th/id/OIP.9fWf0NKKDAny1BcYRL-qlAHaE8?w=183&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    price: 900,
    location: "Bath",
    country: "United Kingdom",
    category: "Boats"
  },
  {
    title: "Desert Retreat Villa",
    description: "A luxurious getaway in the heart of the desert.",
    image: {
      filename: "listingimage",
      url: "https://thaka.bing.com/th/id/OIP.edzaoCyZJ5pn5R90fkVVewHaD4?w=295&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    price: 3200,
    location: "Marrakesh",
    country: "Morocco",
    category: "Farms"
  },
  {
    title: "Forest Cabin Hideaway",
    description: "A cozy cabin hidden deep within the forest.",
    image: {
      filename: "listingimage",
      url: "https://thaka.bing.com/th/id/OIP.X8d1iWmb0wgEWIzcazR4-gHaGN?w=203&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    price: 950,
    location: "Smoky Mountains",
    country: "United States",
    category: "Camping"
  },
  {
    title: "Cliffside Modern Home",
    description: "Sleek modern home perched on a cliff with breathtaking views.",
    image: {
      filename: "listingimage",
      url: "https://thaka.bing.com/th/id/OIP.a3HPGZygj15xvpfPVUnGnAHaE8?w=252&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    price: 4500,
    location: "Santorini",
    country: "Greece",
    category: "Iconic cities"
  },
  {
    title: "Eco Beach Hut",
    description: "Minimalist eco hut right on the beach, perfect for unplugging.",
    image: {
      filename: "listingimage",
      url: "https://thaka.bing.com/th/id/OIP.cPA75cUW914q93EUX6_9LQHaFM?w=150&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    price: 750,
    location: "Koh Samui",
    country: "Thailand",
    category: "Arctic"
  },
  {
    title: "Snowy Cabin Adventure",
    description: "Rustic log cabin with easy access to skiing and snow fun.",
    image: {
      filename: "listingimage",
      url: "https://thaka.bing.com/th/id/OIP.Y2na684gSonIKDG0YQYzQQHaDj?w=319&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    price: 1200,
    location: "Whistler",
    country: "Canada",
    category: "Domes"
  },
  {
    title: "Lake Retreat House",
    description: "Spacious house overlooking a tranquil lake—perfect for families.",
    image: {
      filename: "listingimage",
      url: "https://thaka.bing.com/th/id/OIP.oIwKXPTpV39DVpP-pG8IhwHaE8?w=224&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    price: 1400,
    location: "Lake Como",
    country: "Italy",
    category: "Arctic"
  },
  {
    title: "Rustic Vineyard Villa",
    description: "Charming villa amidst rolling vineyards—taste the wine.",
    image: {
      filename: "listingimage",
      url: "https://thaka.bing.com/th/id/OIP.p9ZzPuRFMEiXhgq3G4UBPQHaDs?w=367&h=174&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    price: 2300,
    location: "Tuscany",
    country: "Italy",
    category: "Castles"
  },
  {
    title: "Modern Farm Loft",
    description: "Converted barn with modern amenities and farm surroundings.",
    image: {
      filename: "listingimage",
      url: "https://thaka.bing.com/th/id/OIP.VRWbab9oxzMsgcDsZlDkiQHaLH?w=123&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    price: 1600,
    location: "Napa Valley",
    country: "United States",
    category: "Farms"
  },
  {
    title: "Coastal Clifftop Home",
    description: "Peaceful home overlooking ocean cliffs at sunset.",
    image: {
      filename: "listingimage",
      url: "https://thaka.bing.com/th/id/OIP.Z5_cxJAOFMBcXjTYKKmWtAHaD4?w=317&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    price: 2700,
    location: "Big Sur",
    country: "United States",
    category: "Mountains"
  },
  {
    title: "Jungle Treehouse",
    description: "Adventure-filled treehouse in a tropical jungle canopy.",
    image: {
      filename: "listingimage",
      url: "https://thaka.bing.com/th/id/OIP.AxyZWdzUVcdD7gUhhrt5_AHaE8?w=239&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    price: 1250,
    location: "Bali",
    country: "Indonesia",
    category: "Mountains"
  },
  {
    title: "Historic Hacienda",
    description: "Charm, history, and vibrant culture in this hacienda house.",
    image: {
      filename: "listingimage",
      url: "https://thaka.bing.com/th/id/OIP.TAnmZ5bCLhF_e7Yfgf_yTwHaEK?w=258&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    price: 2000,
    location: "Mexico City",
    country: "Mexico",
    category: "Castles"
  },
  {
    title: "Island Bungalow Retreat",
    description: "Private bungalow on a serene island—escape the ordinary.",
    image: {
      filename: "listingimage",
      url: "https://thaka.bing.com/th/id/OIP.jA_6jN8lkYWEszxcHBkdRAHaFj?w=253&h=189&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    price: 2800,
    location: "Maldives",
    country: "Maldives",
    category: "Amazing pools"
  },
  {
    title: "Secluded Glamping Tent",
    description: "Glamorous camping in the wilderness with comfort.",
    image: {
      filename: "listingimage",
      url: "https://thaka.bing.com/th/id/OIP.mHvIGGtK5HGw9wI6G8B3dwHaE7?w=260&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    price: 800,
    location: "Sedona",
    country: "United States",
    category: "Camping"
  },
  {
    title: "Urban Penthouse Suite",
    description: "High-rise penthouse apartment with sweeping city views.",
    image: {
      filename: "listingimage",
      url: "https://thaka.bing.com/th/id/OIP.Io0OCCxG2y260qN5pmEkOwHaE-?w=248&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    price: 3500,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "Trending"
  },
  {
    title: "Misty Mountain Lodge",
    description: "Lodge surrounded by misty mountains and serene landscapes.",
    image: {
      filename: "listingimage",
      url: "https://thaka.bing.com/th/id/OIP.YfsMVAKEp5FsITIFshZ0NAHaDE?w=277&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    price: 1700,
    location: "Swiss Alps",
    country: "Switzerland",
    category: "Trending"
  },
  {
    title: "Vintage Airstream Camper",
    description: "Retro camper parked in scenic locations for a quirky stay.",
    image: {
      filename: "listingimage",
      url: "https://thaka.bing.com/th/id/OIP.tyJfxwaA9HqjXuTKLeAfUQHaE8?w=252&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    price: 600,
    location: "Route 66",
    country: "United States",
    category: "Trending"
  },
];

module.exports = { data: sampleListings };