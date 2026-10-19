
import Country from "../models/countries";
import Destination from "../models/Destinations";

export const COUNTRIES = [
  new Country("c1", "United States", "#f44336"),
  new Country("c2", "Japan", "#2196f3"),
  new Country("c3", "Italy", "#4caf50"),
  new Country("c4", "France", "#ff9800"),
  new Country("c5", "Greece", "#9c27b0"),
  new Country("c6", "Australia", "#ffeb3b"),
  new Country("c7", "Canada", "#03a9f4"),
  new Country("c8", "Mexico", "#8bc34a"),
  new Country("c9", "Spain", "#ff5722"),
  new Country("c10", "United Kingdom", "#673ab7"),
];

export const DESTINATIONS = [
  new Destination(
    "d1",
    "c1",
    "Grand Canyon",
    1200,
    1919,
    4.9,
    "A breathtaking natural wonder in Arizona known for its colorful rock formations and scenic hiking trails.",
    "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1000"
  ),
  new Destination(
    "d2",
    "c1",
    "New York City",
    1800,
    1624,
    4.7,
    "A famous American city known for Times Square, Central Park, Broadway, and the Statue of Liberty.",
    "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1000"
  ),
  new Destination(
    "d3",
    "c2",
    "Tokyo",
    2000,
    1603,
    4.8,
    "Japan's capital city featuring modern technology, traditional temples, incredible shopping, and Japanese cuisine.",
    "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1000"
  ),
  new Destination(
    "d4",
    "c2",
    "Kyoto",
    1500,
    794,
    4.9,
    "A historic Japanese city famous for its ancient shrines, beautiful gardens, and traditional architecture.",
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1000"
  ),
  new Destination(
    "d5",
    "c3",
    "Rome",
    1700,
    -753,
    4.8,
    "Italy's historic capital featuring the Colosseum, Roman Forum, Vatican City, and world-famous Italian food.",
    "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1000"
  ),
  new Destination(
    "d6",
    "c3",
    "Venice",
    1900,
    421,
    4.7,
    "A beautiful Italian city built on canals, famous for gondola rides, historic bridges, and stunning architecture.",
    "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=1000"
  ),
  new Destination(
    "d7",
    "c4",
    "Paris",
    2200,
    -250,
    4.9,
    "The capital of France, known for the Eiffel Tower, Louvre Museum, romantic streets, and French cuisine.",
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1000"
  ),
  new Destination(
    "d8",
    "c4",
    "Nice",
    1600,
    -350,
    4.6,
    "A beautiful coastal city along the French Riviera featuring Mediterranean beaches and colorful architecture.",
    "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1000"
  ),
  new Destination(
    "d9",
    "c5",
    "Santorini",
    2100,
    1956,
    4.9,
    "A famous Greek island known for its white buildings, blue domes, spectacular sunsets, and ocean views.",
    "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1000"
  ),
  new Destination(
    "d10",
    "c5",
    "Athens",
    1400,
    -3000,
    4.7,
    "The historic capital of Greece, home to the Acropolis, Parthenon, ancient ruins, and Greek culture.",
    "https://images.unsplash.com/photo-1555993539-1732b0258235?w=1000"
  ),
  new Destination(
    "d11",
    "c6",
    "Sydney",
    2400,
    1788,
    4.8,
    "Australia's famous harbor city featuring the Sydney Opera House, Harbour Bridge, and beautiful beaches.",
    "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1000"
  ),
  new Destination(
    "d12",
    "c6",
    "Melbourne",
    2000,
    1835,
    4.7,
    "A vibrant Australian city known for its art, coffee culture, sporting events, and coastal attractions.",
    "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=1000"
  ),
  new Destination(
    "d13",
    "c7",
    "Banff National Park",
    1700,
    1885,
    4.9,
    "A spectacular Canadian national park featuring turquoise lakes, snow-covered mountains, and wildlife.",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1000"
  ),
  new Destination(
    "d14",
    "c7",
    "Toronto",
    1600,
    1793,
    4.6,
    "Canada's largest city, featuring the CN Tower, diverse neighborhoods, museums, and waterfront attractions.",
    "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=1000"
  ),
  new Destination(
    "d15",
    "c8",
    "Cancun",
    1500,
    1970,
    4.8,
    "A tropical Mexican vacation destination known for white sand beaches, clear blue water, and luxury resorts.",
    "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?w=1000"
  ),
  new Destination(
    "d16",
    "c8",
    "Mexico City",
    1300,
    1325,
    4.7,
    "Mexico's capital city featuring historic landmarks, museums, colorful neighborhoods, and amazing cuisine.",
    "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?w=1000"
  ),
  new Destination(
    "d17",
    "c9",
    "Barcelona",
    1800,
    -15,
    4.8,
    "A beautiful Spanish city known for its beaches, unique architecture, and the famous Sagrada Familia.",
    "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1000"
  ),
  new Destination(
    "d18",
    "c9",
    "Madrid",
    1600,
    865,
    4.7,
    "Spain's capital city, known for the Royal Palace, Prado Museum, historic plazas, and lively restaurants.",
    "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1000"
  ),
  new Destination(
    "d19",
    "c10",
    "London",
    2300,
    47,
    4.8,
    "The capital of England, famous for Big Ben, Buckingham Palace, Tower Bridge, and its rich history.",
    "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1000"
  ),
  new Destination(
    "d20",
    "c10",
    "Edinburgh",
    1700,
    1125,
    4.7,
    "Scotland's historic capital known for Edinburgh Castle, medieval streets, scenic hills, and cultural festivals.",
    "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=1000"
  ),
];
