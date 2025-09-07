import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  // 🔽 State for filters & search
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleClick = (e, movie) => {
    e.preventDefault();
    navigate(`/movie/${movie.title}`, { state: { movie } });
  };

  // 🔽 Your movies array
  const movies = [
    {
      title: "HIT-The Third Case",
      cast: "Nani, Srinidhi Shetty",
      genre: "Thriller",
      language: "Telugu",
      synopsis: "A gripping crime thriller.",
      directedBy: "Sailesh Kolanu",
      writtenBy: "Sailesh Kolanu",
      producedBy: "Prashanti Tipirneni, Nani",
      musicBy: "Mickey J. Meyer",
      runningTime: "157 minutes",
      country: "India",
      img: "/images/HIT3.jpg",
    },
    {
      title: "Saiyaara",
      cast: "Ahann Panday, Aneet Padda",
      genre: "Romance",
      language: "Hindi",
      synopsis: "A romantic drama.",
      directedBy: "Mohit Suri",
      writtenBy: "Sankalp Sadanah",
      producedBy: "Akshaye Widhani",
      musicBy: "John Stewart Eduri",
      runningTime: "156 minutes",
      country: "India",
      img: "/images/Saiyaara.jpg",
    },
    {
    title: "kingdom",
    cast: "Vijay Devarakonda, Satyadev, Bhagyashri Borse",
    genre: "Adventure",
    language: "Telugu",
    synopsis: "An epic adventure.",
    directedBy: "Gowtam Tinnanuri",
    writtenBy: "Gowtam Tinnanuri",
    producedBy: "Naga vamsi, Sai Sowjanya",
    musicBy: "Anirudh Ravichandar",
    runningTime: "158 minutes",
    country: "India",
    img: "/images/kingdom.jpg",
  },
  {
    title: "3BHK Family",
    cast: "Siddarth, R.Sarathkumar, Devayani, Meetha Ragunath, Chaithra",
    genre: "Comedy",
    language: "Tamil",
    synopsis: "A family comedy.",
    directedBy: "Sri Ganesh",
    writtenBy: "Sri Ganesh",
    producedBy: "Arun Viswa",
    musicBy: "Amrit Ramnath",
    runningTime: "141 minutes",
    country: "India",
    img: "/images/3BHK_poster.jpg",
  },
  {
    title: "Sitaare Zameen Par",
    cast: "Aamir Khan, Genelia D'Souza",
    genre: "Drama",
    language: "Hindi",
    synopsis: "An inspiring story.",
    directedBy: "R.S.Prasanna",
    writtenBy: "Divya Nidhi Sharma",
    producedBy: "Aamir Khan, Aparna Purohit",
    musicBy: "Shankar-Ehsann-Loy",
    runningTime: "158 minutes",
    country: "India",
    img: "/images/sitaare-zameen-par.jpg",
  },
  {
    title: "Metro In diNo",
    cast: "Anupam Kher, Sara Ali Khan, Ali Fazal, Aditya Roy Kapoor, Pankaj Tripathi, Konkona Sen Sharma, Fatima Sana Shaikh, Neena Gupta",
    genre: "Drama, Romance",
    language: "Hindi",
    synopsis: "Urban drama.",
    directedBy: "Anurag Basu",
    writtenBy: "Anurag Basu",
    producedBy: "Bhushan Kumar",
    musicBy: "Pritam Chakraborty",
    runningTime: "2h 42min",
    country: "India",
    img: "/images/mtero_indino.jpeg",
  },
  {
    title: "Jawan",
    cast: "Shah Rukh Khan, Nayanthara, Vijay Sethupathi",
    genre: "Action, Thriller",
    language: "Hindi",
    synopsis: "A man sets out to rectify the wrongs in society.",
    directedBy: "Atlee",
    writtenBy: "Atlee",
    producedBy: "Gauri Khan",
    musicBy: "Anirudh Ravichander",
    runningTime: "169 minutes",
    country: "India",
    img: "/images/jawan.jpg",
  },
  {
    title: "Pushpa: The Rise",
    cast: "Allu Arjun, Rashmika Mandanna, Fahadh Faasil",
    genre: "Action, Drama",
    language: "Telugu",
    synopsis: "The rise of a red sanders smuggler.",
    directedBy: "Sukumar",
    writtenBy: "Sukumar",
    producedBy: "Naveen Yerneni, Y. Ravi Shankar",
    musicBy: "Devi Sri Prasad",
    runningTime: "179 minutes",
    country: "India",
    img: "/images/pushpa.jpg",
  },
  {
    title: "Vikram",
    cast: "Kamal Haasan, Vijay Sethupathi, Fahadh Faasil",
    genre: "Action, Thriller",
    language: "Tamil",
    synopsis: "A special agent investigates a series of murders.",
    directedBy: "Lokesh Kanagaraj",
    writtenBy: "Lokesh Kanagaraj",
    producedBy: "Raaj Kamal Films International",
    musicBy: "Anirudh Ravichander",
    runningTime: "174 minutes",
    country: "India",
    img: "/images/vikram.jpg",
  },
  {
    title: "Drishyam 2",
    cast: "Ajay Devgn, Tabu, Shriya Saran",
    genre: "Crime, Drama, Thriller",
    language: "Hindi",
    synopsis: "A man tries to protect his family from a murder investigation.",
    directedBy: "Abhishek Pathak",
    writtenBy: "Jeethu Joseph",
    producedBy: "Bhushan Kumar, Kumar Mangat Pathak",
    musicBy: "Devi Sri Prasad",
    runningTime: "142 minutes",
    country: "India",
    img: "/images/drishyam.jpg",
  },
  {
    title: "KGF: Chapter 2",
    cast: "Yash, Sanjay Dutt, Raveena Tandon",
    genre: "Action, Crime, Drama",
    language: "Kannada",
    synopsis: "Rocky continues his quest for power in the Kolar Gold Fields.",
    directedBy: "Prashanth Neel",
    writtenBy: "Prashanth Neel",
    producedBy: "Vijay Kiragandur",
    musicBy: "Ravi Basrur",
    runningTime: "168 minutes",
    country: "India",
    img: "/images/kgf2.jpg",
  },
  {
    title: "RRR",
    cast: "N.T. Rama Rao Jr., Ram Charan, Alia Bhatt",
    genre: "Action, Drama",
    language: "Telugu",
    synopsis: "Two revolutionaries fight against British rule.",
    directedBy: "S. S. Rajamouli",
    writtenBy: "S. S. Rajamouli",
    producedBy: "D. V. V. Danayya",
    musicBy: "M. M. Keeravani",
    runningTime: "182 minutes",
    country: "India",
    img: "/images/rrr.jpg",
  },
  {
    title: "Premam",
    cast: "Nivin Pauly, Sai Pallavi, Madonna Sebastian",
    genre: "Romance, Feel Good",
    language: "Malayalam",
    synopsis: "A young man's journey through love and heartbreak.",
    directedBy: "Alphonse Puthren",
    writtenBy: "Alphonse Puthren",
    producedBy: "Anwar Rasheed",
    musicBy: "Rajesh Murugesan",
    runningTime: "156 minutes",
    country: "India",
    img: "/images/premam.jpg",
  },
  {
    title: "Jailer",
    cast: "Rajinikanth, Mohanlal, Jackie Shroff",
    genre: "Action, Thriller",
    language: "Tamil",
    synopsis: "A retired jailer faces a new threat.",
    directedBy: "Nelson Dilipkumar",
    writtenBy: "Nelson Dilipkumar",
    producedBy: "Kalanithi Maran",
    musicBy: "Anirudh Ravichander",
    runningTime: "168 minutes",
    country: "India",
    img: "/images/jailer.jpg",
  },
  {
    title: "Shershaah",
    cast: "Sidharth Malhotra, Kiara Advani",
    genre: "Action, Biography, Drama",
    language: "Hindi",
    synopsis: "The story of Captain Vikram Batra, a war hero.",
    directedBy: "Vishnuvardhan",
    writtenBy: "Sandeep Shrivastava",
    producedBy: "Karan Johar, Apoorva Mehta",
    musicBy: "Tanishk Bagchi",
    runningTime: "135 minutes",
    country: "India",
    img: "/images/shershaah.jpg",
  },
  {
    title: "Yeh Jawaani Hai Deewani",
    cast: "Ranbir Kapoor, Deepika Padukone, Aditya Roy Kapur, Kalki Koechlin",
    genre: "Romance, Drama",
    language: "Hindi",
    synopsis: "Four friends discover love and friendship on a life-changing trip.",
    directedBy: "Ayan Mukerji",
    writtenBy: "Ayan Mukerji",
    producedBy: "Karan Johar",
    musicBy: "Pritam",
    runningTime: "160 minutes",
    country: "India",
    img: "/images/yjhd.jpg",
  },
  {
    title: "Geetha Govindam",
    cast: "Vijay Deverakonda, Rashmika Mandanna",
    genre: "Romance, Comedy",
    language: "Telugu",
    synopsis: "A young lecturer falls in love with a woman who misunderstands him.",
    directedBy: "Parasuram",
    writtenBy: "Parasuram",
    producedBy: "Bunny Vas",
    musicBy: "Gopi Sundar",
    runningTime: "142 minutes",
    country: "India",
    img: "/images/geethagovindham.jpg",
  },
  {
    title: "Chennai Express",
    cast: "Shah Rukh Khan, Deepika Padukone",
    genre: "Comedy, Action, Romance",
    language: "Hindi",
    synopsis: "A man's journey to fulfill his grandfather's last wish turns into an adventure.",
    directedBy: "Rohit Shetty",
    writtenBy: "K. Subash",
    producedBy: "Gauri Khan, Ronnie Screwvala, Siddharth Roy Kapur",
    musicBy: "Vishal-Shekhar",
    runningTime: "141 minutes",
    country: "India",
    img: "/images/chennai.jpg",
  }
    
  ];

  // --- FILTER & SEARCH LOGIC ---
  const filteredMovies = movies.filter((movie) => {
    const matchesGenre = selectedGenre
      ? movie.genre.toLowerCase().includes(selectedGenre.toLowerCase())
      : true;
    const matchesLanguage = selectedLanguage
      ? movie.language.toLowerCase() === selectedLanguage.toLowerCase()
      : true;
    const matchesSearch = searchQuery
      ? movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    return matchesGenre && matchesLanguage && matchesSearch;
  });

  return (
    <div>
      {/* --- HEADER --- */}
      <header className="top-nav">
        <div className="logo-section">
          <img src="/images/logo2.jpeg" alt="CineZone Logo" className="logo" />
          <div>
            <h1 className="site-title">CineZone</h1>
            <p className="site-caption">
              From Classics to Hidden Gems — We've got you.
            </p>
          </div>
        </div>

        {/* --- FILTERS --- */}
        <nav className="nav-links">
          {/* Genre Dropdown */}
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="">All Genres</option>
            <option value="thriller">Thriller</option>
            <option value="romance">Romance</option>
            <option value="comedy">Comedy</option>
            <option value="action">Action</option>
            <option value="drama">Drama</option>
            <option value="feel good">Feel Good</option>
          </select>

          {/* Language Dropdown */}
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            <option value="">All Languages</option>
            <option value="telugu">Telugu</option>
            <option value="hindi">Hindi</option>
            <option value="tamil">Tamil</option>
            <option value="malayalam">Malayalam</option>
            <option value="kannada">Kannada</option>
          </select>

          {/* Search Box */}
          <form
            className="search-form"
            onSubmit={(e) => e.preventDefault()} // prevent page reload
          >
            <input
              type="text"
              placeholder="Search movies..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">
              🔍
            </button>
          </form>
        </nav>
      </header>

      {/* --- MOVIES GRID --- */}
      <section className="latest-section">
        <h2>Latest Movies</h2>
        <div className="movie-grid">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie, idx) => (
              <div
                key={idx}
                className="movie-card"
                onClick={(e) => handleClick(e, movie)}
              >
                <img src={movie.img} alt={movie.title} />
                <h3>{movie.title}</h3>
                <p>
                  {movie.genre} | {movie.language}
                </p>
              </div>
            ))
          ) : (
            <p>No movies found.</p>
          )}
        </div>
      </section>

      <footer className="footer">
        © 2025 CineZone. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Home;
