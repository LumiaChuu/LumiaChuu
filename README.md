<div align="center">
  <h1 class="glow-text">👋 Welcome to LumiaChuu's Magical coding Universe ✨</h1>
</div>

<div align="center" class="pulse-element">
  <img src="https://readme-typing-svg.herokuapp.com/?lines=Fullstack+Developer;JavaScript+%26+React+Expert;Computer+Science+Student;Anime+Enthusiast;Pixel+Art+Creator;Tech+Explorer&font=Press+Start+2P&center=true&width=440&height=45&color=f75c7e&vCenter=true&size=16">
</div>

<div align="center" class="float-element">
  <img src="https://raw.githubusercontent.com/LumiaChuu/LumiaChuu/main/assets/images/coding-animation.gif" width="600" height="300" alt="Anime coding animation" />
</div>

## 💫 About Me

<img align="right" alt="Anime Coding" width="400" src="https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif">

- 🎓 I'm a **Computer Science student** at **Institut Teknologi Tangerang Selatan**
- 💻 I'm a **Fullstack Developer** specializing in **JavaScript, React, and Node.js**
- 🔭 I'm currently working on **web applications and anime-inspired game projects**
- 🌱 I'm learning **Advanced React Patterns, Next.js, and GraphQL**
- 👯 I'm looking to collaborate on **JavaScript/React open source projects**
- 💬 Ask me about **JavaScript, React, Node.js, Web Development, and Anime**
- 📫 How to reach me: **[dimasexe07@gmail.com](mailto:dimasexe07@gmail.com)**
- ⚡ Fun fact: **I collect retro game consoles and create pixel art in my free time!**

## 🚀 Tech Stack

### 💻 Frontend
<div align="center" class="tech-stack">
  <div class="tech-icons">
    <img src="https://skillicons.dev/icons?i=js,ts,react,nextjs,redux,html,css,tailwind,sass,webpack&perline=5" class="tech-icon" />
  </div>
</div>

### 🔧 Backend & Database
<div align="center" class="tech-stack">
  <div class="tech-icons">
    <img src="https://skillicons.dev/icons?i=nodejs,express,mongodb,mysql,firebase,graphql,prisma&perline=4" class="tech-icon" />
  </div>
</div>

### 🛠️ Tools & Others
<div align="center" class="tech-stack">
  <div class="tech-icons">
    <img src="https://skillicons.dev/icons?i=git,github,vscode,figma,jest,docker,vercel,netlify&perline=4" class="tech-icon" />
  </div>
</div>

<div align="center" class="pixel-art">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzM0ZDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/QDjpIL6oNCVZ4qzGs7/giphy.gif" width="150" alt="Pixel Art 1" />
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/3oKIPeQ5Ef1JSYgiAw/giphy.gif" width="150" alt="Pixel Art 2" />
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/l4KibK3JwaVo0CjDO/giphy.gif" width="150" alt="Pixel Art 3" />
</div>

## 💻 Code Showcase

<div class="code-snippet react-code">

```jsx
// React Component Sample
const AnimeCard = ({ anime }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="anime-card" onClick={() => setExpanded(!expanded)}>
      <img src={anime.coverImage} alt={anime.title} className="anime-cover" />
      <h3 className="anime-title">{anime.title}</h3>
      
      {expanded && (
        <div className="anime-details">
          <p>{anime.description}</p>
          <button onClick={(e) => {
            e.stopPropagation();
            window.open(anime.url, '_blank');
          }}>
            View Details
          </button>
        </div>
      )}
    </div>
  );
};
```

</div>

<div class="code-snippet js-code">

```javascript
// Custom React Hook for Data Fetching
const useAnimeData = (query) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.example.com/anime?q=${query}`);
        const result = await response.json();
        setData(result.data);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query]);

  return { data, loading };
};
```

</div>

## 📊 GitHub Stats

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=LumiaChuu&show_icons=true&theme=radical" alt="GitHub Stats" />
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=LumiaChuu&theme=radical" alt="GitHub Streak" />
</div>

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=LumiaChuu&layout=compact&theme=radical" alt="Top Languages" />
</div>

## 🏆 GitHub Trophies

<div align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=LumiaChuu&theme=radical&no-frame=false&no-bg=true&margin-w=4" alt="GitHub Trophies" />
</div>

## 🔥 My Contributions

<div align="center" class="rotate-element">
  <img src="https://github.com/LumiaChuu/LumiaChuu/blob/output/github-contribution-grid-snake-dark.svg" alt="Snake animation" />
</div>

## 📌 Pinned Repositories

<div align="center">
  <a href="https://github.com/LumiaChuu/react-anime-dashboard" class="custom-card">
    <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=LumiaChuu&repo=react-anime-dashboard&theme=synthwave" />
  </a>
  <a href="https://github.com/LumiaChuu/fullstack-portfolio" class="custom-card">
    <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=LumiaChuu&repo=fullstack-portfolio&theme=synthwave" />
  </a>
</div>
<div align="center" style="margin-top: 10px;">
  <a href="https://github.com/LumiaChuu/anime-pixel-adventure" class="custom-card">
    <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=LumiaChuu&repo=anime-pixel-adventure&theme=synthwave" />
  </a>
  <a href="https://github.com/LumiaChuu/mern-social-app" class="custom-card">
    <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=LumiaChuu&repo=mern-social-app&theme=synthwave" />
  </a>
</div>

## 🌐 Connect with Me

<div align="center">
  <a href="https://x.com/KOHUBISNIS" target="_blank" class="social-icon">
    <img src="https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white" alt="Twitter" />
  </a>
  <a href="https://www.linkedin.com/in/dimas-ramadhan-9a1534355/" target="_blank" class="social-icon">
    <img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://www.instagram.com/haegel_/" target="_blank" class="social-icon">
    <img src="https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white" alt="Instagram" />
  </a>
  <a href="https://discordapp.com/users/1218576961924759593" target="_blank" class="social-icon">
    <img src="https://img.shields.io/badge/Discord-%237289DA.svg?style=for-the-badge&logo=discord&logoColor=white" alt="Discord" />
  </a>
</div>

---

<div align="center">
  <img src="https://komarev.com/ghpvc/?username=LumiaChuu&style=flat-square&color=blueviolet" alt="Profile Views" />
  <img src="https://img.shields.io/github/followers/LumiaChuu?style=social" alt="GitHub Followers" />
</div>

<!-- CSS Styles for animations -->
<style>
  @import url('https://lumiachuu.github.io/assets/css/style.css');
  
  /* Additional retro pixel styling */
  .pixel-art {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 20px 0;
    background: rgba(0, 0, 0, 0.2);
    padding: 20px;
    border-radius: 8px;
    border: 2px solid #ff00ff;
    box-shadow: 0 0 10px #00ffff;
  }
  
  h1, h2 {
    font-family: 'Press Start 2P', cursive;
  }
  
  /* Anime-inspired elements */
  body {
    background-image: url('https://raw.githubusercontent.com/LumiaChuu/LumiaChuu/main/assets/images/background-pattern.png');
    background-size: 100px;
    background-color: #121212;
    color: #f8f8f2;
  }
  
  /* Code snippet styling */
  .code-snippet {
    background: rgba(40, 44, 52, 0.8);
    border-radius: 6px;
    padding: 15px;
    margin: 20px 0;
    font-family: 'Fira Code', monospace;
    border-left: 4px solid #61dafb;
    color: #f8f8f2;
    overflow-x: auto;
  }
  
  .react-code {
    border-left-color: #61dafb;
  }
  
  .js-code {
    border-left-color: #f7df1e;
  }
  
  /* Tech stack styling */
  .tech-stack {
    background: rgba(0, 0, 0, 0.2);
    padding: 15px;
    border-radius: 8px;
    border: 2px solid #ff00ff;
    margin: 10px 0;
    box-shadow: 0 0 10px rgba(97, 218, 251, 0.5);
  }
</style>

<!-- Google Fonts for Pixel Typography and Code -->
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">

<!-- Interactive Elements -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Add sparkle effect to headings
    const headings = document.querySelectorAll('h1, h2');
    headings.forEach(heading => {
      heading.addEventListener('mouseover', function() {
        this.style.textShadow = '0 0 15px #ff00ff, 0 0 25px #ff00ff';
      });
      heading.addEventListener('mouseout', function() {
        this.style.textShadow = '';
      });
    });
    
    // Add click effect to tech icons
    const techIcons = document.querySelectorAll('.tech-icon');
    techIcons.forEach(icon => {
      icon.addEventListener('click', function() {
        this.classList.add('clicked');
        setTimeout(() => {
          this.classList.remove('clicked');
        }, 500);
      });
    });
  });
</script>

<!-- Add this to your GitHub profile repository to enable the snake animation:
Create a .github/workflows/snake.yml file with the appropriate GitHub Action configuration -->