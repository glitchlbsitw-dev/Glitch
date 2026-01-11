window.onload = () => {

  const title = document.getElementById("title");
  const sub = document.getElementById("sub");
  const tl = document.getElementById("tl");
  const tr = document.getElementById("tr");
  const bl = document.getElementById("bl");
  const br = document.getElementById("br");
  const breach = document.getElementById("breach");
  const countdown = document.getElementById("countdown");
  const bg = document.getElementById("bg");
  const content = document.getElementById("content");

  function type(el, text, speed, callback) {
    let i = 0;
    el.innerHTML = "";
    const t = setInterval(() => {
      el.innerHTML = text.slice(0, i).replace(/\n/g, "<br>");
      i++;
      if (i > text.length) {
        clearInterval(t);
        if (callback) callback();
      }
    }, speed);
  }

  // ---- MAIN SEQUENCE ----

  // 1. Title
  type(title, "GLITCH", 80);

  // 2. Subtext
  setTimeout(() => {
    type(sub, "You were not supposed to be here.\nBut you found the bug.", 40, () => {

      // small dramatic pause
      setTimeout(startUnlocking, 600);

    });
  }, 600);

  // ---- CORNER LORE ----
  type(tl, "SYSTEM CORRUPTED\nREALITY DESYNCED\nGLITCH ACTIVE\nPLAYER FOUND\nUNEXPECTED PLAYER", 20);
  type(tr, "Made by people who should’ve been asleep.\nPowered by caffeine and bad ideas.\nThis site contains traces of creativity.\nGlitch is not responsible for sudden career choices.", 20);
  type(bl, "> Initializing GLITCH...\n> Injecting chaos...\n> Patching reality...\n> Loading game devs...\n> ERROR: Too much talent detected\n> Continuing anyway...", 20);
  type(br, "> connecting to glitch.club\n> bypassing boredom\n> overriding normal college life\n> access granted\n\n> compiling dreams...\n> rendering pixels...\n> debugging life choices...\n> done.", 20);

  // ---- UNLOCKING SEQUENCE ----

  function startUnlocking() {
    let time = 5;

    // Type "UNLOCKING"
    type(countdown, "UNLOCKING ", 60, () => {
      countdown.innerHTML = "UNLOCKING " + time;

      const timer = setInterval(() => {
        time--;
        if (time >= 0) {
          countdown.innerHTML = "UNLOCKING " + time;
        } else {
          clearInterval(timer);
          triggerBreach();
        }
      }, 1000);
    });
  }

  // ---- SYSTEM BREACH ----

  function triggerBreach() {
    breach.style.opacity = "1";
    breach.classList.add("active");

    // kill UI instantly
    content.style.opacity = "0";
    document.querySelectorAll(".corner").forEach(e => {
      e.style.opacity = "0";
      e.style.display = "none";
    });
    document.getElementById("proceed").style.pointerEvents = "auto";


    // video takes over
    bg.style.opacity = "1";
    setTimeout(() => {
      document.getElementById("proceed").classList.add("show");
    }, 4000);

    // remove breach after 2.5s
    setTimeout(() => {
      breach.classList.remove("active");
      breach.style.opacity = "0";
      breach.style.display = "none";
    }, 2500);
  }

};

document.getElementById("proceed").onclick = () => {
  const p2 = document.getElementById("page2");
  p2.style.opacity = "1";
  p2.style.pointerEvents = "auto";
};
