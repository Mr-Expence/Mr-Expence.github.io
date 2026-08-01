const RATINGS = [
  800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000,
  2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3300,
  3400, 3500,
];
async function roll(min, max) {
  const btn = document.getElementById("roll-btn");
  btn.textContent = "Loading…";
  btn.disabled = true;
  try {
    const res = await fetch("https://codeforces.com/api/problemset.problems");
    const json = await res.json();
    const pool = json.result.problems.filter(
      (p) => p.rating >= min && p.rating <= max,
    );
    const p = pool[Math.floor(Math.random() * pool.length)];
    window.open(
      `https://codeforces.com/problemset/problem/${p.contestId}/${p.index}`,
      "_blank",
    );
  } catch {
    alert("Could not reach Codeforces. Check your connection.");
  } finally {
    btn.textContent = "🎲 Random Problem";
    btn.disabled = false;
  }
}