const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

(async () => {
  const browser = await puppeteer.launch({ 
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1200,800'] 
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 800 });

  const url = 'http://127.0.0.1:8080/?user=PichonJefe';
  const outDir = path.join(__dirname, '..', 'public', 'images', 'sescam');
  if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
  }

  console.log('Navigating to ' + url);
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  await page.goto(url, { waitUntil: 'networkidle0' });
  
  console.log('Forcing overlays to hide and showing main view...');
  await page.evaluate(() => {
      const access = document.getElementById('access-overlay');
      if(access) access.style.display = 'none';
      const login = document.getElementById('login-overlay');
      if(login) login.style.display = 'none';
  });

  await delay(2000); // Give it time to render

  // Screenshot 1: Home
  await page.screenshot({ path: path.join(outDir, 'home.png') });
  console.log('Saved home.png');

  // Click on "Ayudante de Cocina (Pinche)"
  await page.evaluate(() => {
    const btn = document.getElementById('btn-role-pinche');
    if (btn) btn.click();
  });
  await delay(1000);

  // Screenshot 2: Sources
  await page.screenshot({ path: path.join(outDir, 'sources.png') });
  console.log('Saved sources.png');

  // Click on "Modo Aleatorio"
  await page.evaluate(() => {
    const btn = document.getElementById('btn-random');
    if (btn) btn.click();
  });
  await delay(1000);

  // Screenshot 3: Random Mode Config
  await page.screenshot({ path: path.join(outDir, 'random.png') });
  console.log('Saved random.png');

  // Go back
  await page.evaluate(() => {
    const backBtn = document.getElementById('btn-back-random');
    if (backBtn) backBtn.click();
  });
  await delay(1000);

  // Click on "Academia 1" (which was btn-source-MAD or btn-source-Academia 1)
  await page.evaluate(() => {
    const btn = document.getElementById('btn-source-Academia 1');
    if (btn) btn.click();
  });
  await delay(1000);

  // Screenshot 4: General/Específica
  await page.screenshot({ path: path.join(outDir, 'general.png') });
  console.log('Saved general.png');

  await browser.close();
})();


