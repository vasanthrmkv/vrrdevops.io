// 🌙 Dark mode toggle
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
};

// 📦 Load GitHub repositories
fetch("https://api.github.com/users/vasanthrmkv/repos")
  .then(res => res.json())
  .then(data => {
    const repoList = document.getElementById("repoList");
    repoList.innerHTML = "";

    data.slice(0, 6).forEach(repo => {
      repoList.innerHTML += `
        <div class="repo">
          <h3>${repo.name}</h3>
          <p>${repo.description || "DevOps project repository"}</p>
          <a href="${repo.html_url}" target="_blank">View Repo →</a>
        </div>
      `;
    });
  })
  .catch(() => {
    document.getElementById("repoList").innerText =
      "Unable to load repositories.";
  });

console.log("🚀 Senior DevOps Portfolio Loaded");
