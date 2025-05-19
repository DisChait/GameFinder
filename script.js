
window.onload = function () {
  var gameForm = document.forms.gameForm;

  if (gameForm) {
    gameForm.onsubmit = function () {
      var genre = gameForm.genre.value;
      var category = gameForm.category.value;

      var platformElements = gameForm.platform;
      var formatElements = gameForm.format;

      var platform = "";
      var format = "";

      var i;
      for (i = 0; i < platformElements.length; i++) {
        if (platformElements[i].checked) {
          platform = platformElements[i].value;
        }
      }

      for (i = 0; i < formatElements.length; i++) {
        if (formatElements[i].checked) {
          format = formatElements[i].value;
        }
      }

      localStorage.setItem("genre", genre);
      localStorage.setItem("category", category);
      localStorage.setItem("platform", platform);
      localStorage.setItem("format", format);

      window.location.href = "results.html";
      return false;
    };
  }

  if (document.getElementById("results")) {
    var genre = localStorage.getItem("genre");
    var category = localStorage.getItem("category");
    var platform = localStorage.getItem("platform");
    var format = localStorage.getItem("format");

    var games = [
      {
        title: "Elden Ring",
        genre: "rpg",
        category: "adventure",
        format: "singleplayer",
        platforms: ["pc", "xbox", "playstation"],
        description: "A massive fantasy world full of mystery and danger.",
        image: "Images/EldenRing.jpg"
      },
      {
        title: "God of War",
        genre: "action",
        category: "adventure",
        format: "singleplayer",
        platforms: ["pc", "playstation"],
        description: "A mythological journey of father and son.",
        image: "Images/GOW.png"
      },
      {
        title: "Red Dead Redemption 2",
        genre: "rpg",
        category: "adventure",
        format: "singleplayer",
        platforms: ["pc", "xbox", "playstation"],
        description: "An epic tale of life in America’s unforgiving heartland.",
        image: "Images/RDR2.jpg"
      },
      {
        title: "The Witcher 3: Wild Hunt",
        genre: "rpg",
        category: "adventure",
        format: "singleplayer",
        platforms: ["pc", "xbox", "playstation"],
        description: "Become a monster slayer for hire and embark on an epic journey.",
        image: "Images/Witcher3.jpg"
      },
      {
        title: "Hades",
        genre: "action",
        category: "puzzle",
        format: "singleplayer",
        platforms: ["pc", "xbox", "playstation"],
        description: "Battle out of hell in this rogue-like dungeon crawler.",
        image: "Images/hades.jpg"
      },
      {
        title: "Horizon Zero Dawn",
        genre: "action",
        category: "adventure",
        format: "singleplayer",
        platforms: ["pc", "playstation"],
        description: "Explore a post-apocalyptic world overrun by robotic creatures.",
        image: "Images/HZD.jpg"
      },
      {
        title: "Spider-Man: Miles Morales",
        genre: "action",
        category: "adventure",
        format: "singleplayer",
        platforms: ["pc", "playstation"],
        description: "Swing through New York City as the young hero Miles Morales.",
        image: "Images/MM.jpg"
      },
      {
        title: "Death Stranding",
        genre: "simulation",
        category: "adventure",
        format: "singleplayer",
        platforms: ["pc", "playstation"],
        description: "Reconnect a fractured society in a post-apocalyptic world.",
        image: "Images/DeathStranding.jpg"
      },
      {
        title: "Cyberpunk 2077",
        genre: "rpg",
        category: "adventure",
        format: "singleplayer",
        platforms: ["pc", "xbox", "playstation"],
        description: "Become a cyberpunk mercenary in a vibrant open-world city.",
        image: "Images/Cyberpunk_2077.jpg"
      },
      {
        title: "Assassin's Creed Valhalla",
        genre: "action",
        category: "adventure",
        format: "singleplayer",
        platforms: ["pc", "xbox", "playstation"],
        description: "Lead Viking raids across England and write your own saga.",
        image: "Images/ACVALHALLA.jpg"
      },
      {
        title: "Black Myth: Wukong",
        genre: "action",
        category: "adventure",
        format: "singleplayer",
        platforms: ["pc", "xbox", "playstation"],
        description: "Experience Chinese mythology in this action RPG inspired by Journey to the West.",
        image: "Images/BMWUKONG.jpg"
      },
   
      {
        title: "Indiana Jones and the Great Circle",
        genre: "action",
        category: "adventure",
        format: "singleplayer",
        platforms: ["pc", "xbox", "playstation"],
        description: "Embark on a globe-trotting adventure as the iconic archaeologist.",
        image: "Images/INDIE.jpg"
      },
    
      // MULTIPLAYER GAMES
      {
        title: "Fortnite",
        genre: "action",
        category: "strategy",
        format: "multiplayer",
        platforms: ["pc", "xbox", "playstation"],
        description: "Battle Royale game where you build and fight to be the last one standing.",
        image: "Images/Fortnite.jpg"
      },
      {
        title: "Apex Legends",
        genre: "action",
        category: "puzzle",
        format: "multiplayer",
        platforms: ["pc", "xbox", "playstation"],
        description: "A free-to-play Battle Royale game set in the Titanfall universe.",
        image: "Images/Apex_legends.jpg"
      },
      {
        title: "Call of Duty: Warzone",
        genre: "action",
        category: "strategy",
        format: "multiplayer",
        platforms: ["pc", "xbox", "playstation"],
        description: "Massive combat arena with up to 150 players.",
        image: "Images/CODW.jpg"
      },
      {
        title: "Valorant",
        genre: "action",
        category: "strategy",
        format: "multiplayer",
        platforms: ["pc"],
        description: "A 5v5 character-based tactical shooter.",
        image: "Images/Valorant.jpg"
      },
      {
        title: "League of Legends",
        genre: "rpg",
        category: "strategy",
        format: "multiplayer",
        platforms: ["pc"],
        description: "A fast-paced, competitive online game that blends RTS with RPG elements.",
        image: "Images/LOL.jpg"
      },
      {
        title: "Rocket League",
        genre: "simulation",
        category: "puzzle",
        format: "multiplayer",
        platforms: ["pc", "xbox", "playstation"],
        description: "High-powered hybrid of arcade-style soccer and vehicular mayhem.",
        image: "Images/RL.jpg"
      },
      {
        title: "Minecraft",
        genre: "simulation",
        category: "adventure",
        format: "multiplayer",
        platforms: ["pc", "xbox", "playstation"],
        description: "A game about placing blocks and going on adventures.",
        image: "Images/Minecraft.jpg"
      },
      {
        title: "GTA Online",
        genre: "rpg",
        category: "adventure",
        format: "multiplayer",
        platforms: ["pc", "xbox", "playstation"],
        description: "Experience GTA V's story and multiplayer modes.",
        image: "Images/GTA.jpg"
      },
    ];
    function shuffleArray(array) {
      array.sort(function () {
        return 0.5 - Math.random();
      });
    }

    var results = [];
    var i;
    for (i = 0; i < games.length; i++) {
      var g = games[i];
      if (
        g.genre === genre &&
        g.category === category &&
        g.format === format &&
        g.platforms.indexOf(platform) !== -1
      ) {
        results.push(g);
      }
    }

    shuffleArray(results);

    var finalResults = [];

    if (results.length >= 2) {
      finalResults = [results[0], results[1]];
    } else if (results.length === 1) {
      finalResults.push(results[0]);
      for (i = 0; i < games.length; i++) {
        if (games[i].title !== results[0].title) {
          finalResults.push(games[i]);
          break;
        }
      }
    }

    var resultsBox = document.getElementById("results");

    if (finalResults.length === 0) {
      resultsBox.innerHTML = "<p>No matching games found. Try different settings.</p>";
    } else {
      for (i = 0; i < finalResults.length; i++) {
        resultsBox.innerHTML += `
          <div class="game-box">
            <img src="${finalResults[i].image}" alt="Game Cover" class="game-image" />
            <div class="game-info">
              <div class="result-title">Rec #${i + 1}</div>
              <h3>${finalResults[i].title}</h3>
              <p><strong>Description:</strong> ${finalResults[i].description}</p>
              <p><strong>Genre:</strong> ${finalResults[i].genre}</p>
              <p><strong>Category:</strong> ${finalResults[i].category}</p>
              <p><strong>Format:</strong> ${finalResults[i].format}</p>
              <div class="platform-tags">
                ${finalResults[i].platforms.map(function(p) {
                  return `<button>${p.charAt(0).toUpperCase() + p.slice(1)}</button>`;
                }).join('')}
              </div>
            </div>
          </div>`;
      }
    }
  }

var toggleBtn = document.querySelector(".cheat-toggle");
var cheatSheet = document.querySelector(".cheat-sheet");

if (toggleBtn && cheatSheet) {
  toggleBtn.addEventListener("click", function () {
    if (cheatSheet.style.display === "none") {
      cheatSheet.style.display = "block";
      toggleBtn.textContent = "✖ Hide Cheat Sheet";
    } else {
      cheatSheet.style.display = "none";
      toggleBtn.textContent = "📋 Show Cheat Sheet";
    }
  });
}

};
