// src/pages/MovieDetails.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Home.css"; // reuse same styles

function MovieDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.movie) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>Movie details not found</h2>
        <button
          onClick={() => navigate("/home")}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "#00adb5",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          ← Back to Home
        </button>
      </div>
    );
  }

  const { movie } = state;

  return (
    <section className="movie-details-section">
      <div className="movie-details-card">
        <img
          src={movie.img}
          alt={movie.title}
          style={{ maxWidth: "250px", borderRadius: "10px", marginBottom: "20px" }}
        />
        <h2>{movie.title}</h2>
        <p><strong>Cast:</strong> {movie.cast}</p>
        <p><strong>Genre:</strong> {movie.genre}</p>
        <p><strong>Synopsis:</strong> {movie.synopsis}</p>
        <p><strong>Directed by:</strong> {movie.directedBy}</p>
        <p><strong>Written by:</strong> {movie.writtenBy}</p>
        <p><strong>Produced by:</strong> {movie.producedBy}</p>
        <p><strong>Music by:</strong> {movie.musicBy}</p>
        <p><strong>Running time:</strong> {movie.runningTime}</p>
        <p><strong>Country:</strong> {movie.country}</p>
        <p><strong>Language:</strong> {movie.language}</p>

        <button
          onClick={() => navigate("/home")}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "#00adb5",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          ← Back to Home
        </button>
      </div>
    </section>
  );
}

export default MovieDetails;
