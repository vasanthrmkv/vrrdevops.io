* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
}

body {
    background: #0f172a;
    color: #ffffff;
    line-height: 1.6;
}

.hero {
    height: 100vh;
    background: url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31') center/cover no-repeat;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
}

.hero-content {
    position: relative;
    z-index: 2;
}

.hero h1 {
    font-size: 3rem;
    color: #38bdf8;
}

.hero h2 {
    font-size: 1.8rem;
    margin-bottom: 15px;
}

.hero p {
    margin-bottom: 20px;
}

.btn {
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s ease;
}

.primary {
    background: #38bdf8;
    color: #000;
}

.secondary {
    background: transparent;
    border: 2px solid #38bdf8;
    color: #38bdf8;
}

.btn:hover {
    opacity: 0.8;
}

.section {
    padding: 60px 10%;
    text-align: center;
}

.dark {
    background: #1e293b;
}

.skills-grid,
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 30px;
}

.card, .project-card {
    background: #334155;
    padding: 20px;
    border-radius: 10px;
    transition: 0.3s;
}

.card:hover, .project-card:hover {
    transform: translateY(-5px);
}

footer {
    text-align: center;
    padding: 20px;
    background: #0f172a;
    border-top: 1px solid #334155;
}
