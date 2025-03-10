// Sample React component showcasing LumiaChuu's React skills
const AnimeCard = ({ anime }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="anime-card" onClick={() => setExpanded(!expanded)}>
      <img src={anime.coverImage} alt={anime.title} className="anime-cover" />
      <h3 className="anime-title">{anime.title}</h3>
      
      {expanded && (
        <div className="anime-details">
          <p className="anime-description">{anime.description}</p>
          <div className="anime-meta">
            <span className="anime-rating">⭐ {anime.rating}</span>
            <span className="anime-episodes">{anime.episodes} episodes</span>
          </div>
          <button 
            className="anime-button"
            onClick={(e) => {
              e.stopPropagation();
              window.open(anime.url, '_blank');
            }}
          >
            View Details
          </button>
        </div>
      )}
    </div>
  );
};

// Sample custom hook for fetching anime data
const useAnimeData = (query) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.example.com/anime?q=${query}`);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const result = await response.json();
        setData(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { data, loading, error };
};

// Sample Redux slice for anime management
import { createSlice } from '@reduxjs/toolkit';

const animeSlice = createSlice({
  name: 'anime',
  initialState: {
    favorites: [],
    watchlist: [],
    currentlyWatching: []
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(anime => anime.id !== action.payload.id);
    },
    addToWatchlist: (state, action) => {
      state.watchlist.push(action.payload);
    },
    moveToCurrentlyWatching: (state, action) => {
      state.watchlist = state.watchlist.filter(anime => anime.id !== action.payload.id);
      state.currentlyWatching.push(action.payload);
    }
  }
});

export const { 
  addToFavorites, 
  removeFromFavorites, 
  addToWatchlist, 
  moveToCurrentlyWatching 
} = animeSlice.actions;

export default animeSlice.reducer;