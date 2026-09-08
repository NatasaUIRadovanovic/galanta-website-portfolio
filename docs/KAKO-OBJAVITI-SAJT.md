# Kako objaviti i održavati Galanta portfolio — kompletan vodič

Ovo uputstvo je pisano za **nekoga ko nije programer**. Sve objašnjeno polako, bez pretpostavke da znaš terminologiju.

**Namena dokumenta:** Kada nastaviš rad u Cursor-u, **okaci ovaj fajl u chat** — asistent odmah zna gde je projekat, kako je objavljen i kako se ažurira. Ne moraš ponovo da objašnjavaš GitHub/Netlify setup.

**Poslednje ažuriranje:** septembar 2026 — hero tipografija, glass dugmad, gradijent outline-i, logo v2.

| | |
|---|---|
| **Live sajt** | **https://galanta-design-studio.netlify.app** |
| **GitHub repo** | https://github.com/NatasaUIRadovanovic/galanta-website-portfolio |
| **Netlify dashboard** | https://app.netlify.com — sajt `galanta-design-studio` |
| **Netlify Deploys** | https://app.netlify.com (otvori sajt → tab **Deploys**) |
| **GitHub username** | `NatasaUIRadovanovic` (mala/velika slova u URL-u — GitHub ne pravi razliku) |
| **Projekat na Mac-u** | `/Users/natasa/Projects/Test_sajt` |
| **Grana** | `main` |

**Link se ne menja** kad ažuriraš sadržaj — isti URL ostaje na LinkedIn-u, Behance-u, vizit karti. Menja se samo sadržaj iza linka.

---

## Stanje projekta (šta je trenutno na sajtu)

### Tehnički setup
- **Način objave:** GitHub + Netlify (Način 2) — **ne** Netlify Drop
- **Build command:** prazno | **Publish directory:** `.`
- **Auto publish:** uključen — deploy sa `main` grane
- **Javnost:** sajt je **Public** (Make public urađen)
- **Lokalni preview:** uvek `python3 -m http.server 8000` → http://localhost:8000 (ne `file://`)

### Sadržaj i dizajn na live sajtu (posle sept. 2026 polish-a)

- **Hero**
  - Eyebrow: **Clash Display**, ljubičasti gradijent tekst (`--gradient-accent-text`)
  - H1: **Clash Display** (veći od sekcijskih naslova)
  - Subtitle: svetlija siva (`--color-hero-subtitle`)
  - **Primary dugme:** liquid glass (providnije) + suptilan gradijent outline + blagi warm glow
  - **Secondary dugme:** samo gradijent outline; hover = blaga providna pozadina
- **Selected Work / About / Contact naslovi (h2):** **Clash Display**, manji od h1
- **Work kartice:** klasična siva ivica (bez gradijent outline-a)
- **Pilule na karticama:** ljubičasti gradijent outline kao NDA kartica (`--gradient-pill-outline`)
- **NDA kartica („More work“):** suptilan gradijent outline (`--gradient-nda-outline`); eyebrow kao hero
- **Contact:** primary dugme **„Send an email“** (mailto) + adresa ispod za copy/paste; LinkedIn + Behance
- **Logotipi v2:** `logo-nav.png`, `logo-about.png`, `favicon.png`, `icon-app.png` (transparent PNG)

### Sadržaj (tekst)
- **Hero:** web/mobile product design; fokus na **redesign postojećih proizvoda**
- **Work:** 3 case study kartice — PawStay, Spona Sales, UXZGB
- **NDA CTA kartica** ispod Work grid-a (puna širina, email za privatni walkthrough)
- **About:** tagovi redosled **Skills → AI workflow → Tools**
  - Skills uključuje: Product Redesign, Cross-functional Collaboration, …
  - AI workflow uključuje: **Cursor**, GPT & Claude, …
- **Contact:** dugme „Send an email“ + adresa ispod; LinkedIn + Behance; NDA rad preko emaila pa Google Meet

### Kontakt na sajtu
- Email: `natasa.radovanovic1991@gmail.com`
- LinkedIn: https://www.linkedin.com/in/natasa-radovanovic-b51b3b107/
- Behance: https://www.behance.net/natasaradovanovic

---

# ⭐ SVAKODNEVNI RAD — kako ažuriraš već objavljen sajt

**Ovo je najvažniji deo.** Koristiš ga svaki put kad nešto promeniš.

### Šta **NE** objavljuje sajt

| Akcija | Šta radi | Da li ide na live sajt? |
|--------|----------|-------------------------|
| **Cmd + S** u Cursor-u | Čuva fajl na Mac-u | ❌ NE |
| Desni klik → Save | Isto | ❌ NE |
| Osvežavanje localhost | Vidiš lokalnu verziju | ❌ NE |

**Cmd + S nema obaveštenje** — beli krug pored imena fajla nestane = sačuvano. To je normalno.

### Šta **JESTE** objavljuje

```
1. Izmena u Cursor-u
2. Cmd + S
3. Terminal (tri komande):
4. Netlify deploy (~1 min)
5. Cmd + Shift + R na live sajtu
```

**Copy-paste za svaku izmenu:**

```bash
cd /Users/natasa/Projects/Test_sajt
git add .
git commit -m "Kratak opis šta si promenila, npr. NDA CTA širina"
git push
```

Ako menjaš **samo jedan fajl**, može preciznije:

```bash
cd /Users/natasa/Projects/Test_sajt
git add index.html assets/css/styles.css
git commit -m "Opis izmene"
git push
```

### Posle `git push`

1. **Netlify** → sajt `galanta-design-studio` → tab **Deploys**
2. Sačekaj status **Published** (obično 30 sek – 2 min)
3. Otvori https://galanta-design-studio.netlify.app
4. **Cmd + Shift + R** (hard refresh — inače vidiš staro)

### Ako push prošao ali sajt star

**Prvo proveri da li je GitHub noviji od live sajta:**
1. GitHub → repo → `index.html` → traži npr. `Send an email` ili `styles.css?v=31`
2. Live sajt → View Page Source (desni klik) → traži isto
3. Ako GitHub ima novo, a live ne → Netlify nije objavio poslednji deploy

**Rešenje — ručno pokreni deploy:**

1. Netlify → **Deploys**
2. Proveri da je **najnoviji** red (tvoja commit poruka) status **Published** — ne samo „Ready“
3. Ako nije Published: klikni na taj deploy → **Publish deploy** (ako postoji)
4. Ili: **Trigger deploy** → **Deploy project**
5. Ako i dalje staro: **Deploy project without cache**

**Brza provera posle deploy-a:** u source kodu live sajta mora biti `styles.css?v=31` i dugme `Send an email`.

### Kako znaš da je uspelo

| Gde | Šta vidiš |
|-----|-----------|
| **Terminal** | `main -> main` bez greške |
| **Netlify Deploys** | Novi red **Published** + tvoja commit poruka |
| **Live sajt** | Nova izmena posle Cmd + Shift + R |

### `git push` traži lozinku

- **Username:** `natasauiradovanovic` ili `NatasaUIRadovanovic`
- **Password:** GitHub **token** (`ghp_...`) — **NE** GitHub lozinka
- Token: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → štikliraj `repo`

---

## Gde si sada? (setup — završeno ✅)

| Korak | Status |
|-------|--------|
| 1. Sajt lokalno radi | ✅ |
| 2. Git na Mac-u | ✅ |
| 3. GitHub repo `galanta-website-portfolio` | ✅ |
| 4. `git push` | ✅ |
| 5. Netlify + GitHub | ✅ |
| 6. Sajt javan (Make public) | ✅ |
| 7. Ime: `galanta-design-studio.netlify.app` | ✅ |

**Svaki sledeći rad:** sekcija [⭐ SVAKODNEVNI RAD](#-svakodnevni-rad--kako-ažuriraš-već-objavljen-sajt) iznad.

---

## Šta zapravo objavljuješ?

Tvoj sajt **nije aplikacija** sa bazom podataka. To je folder sa fajlovima:

- `index.html` — početna strana
- `cases/` — case study stranice
- `assets/` — slike, boje, efekti
- `partials/` — header, footer, work grid

Kada ga „objaviš“, ti fajlovi idu na **hosting** (Netlify ili slično) i dobijaš **link** tipa `tvoj-sajt.netlify.app` koji možeš staviti na LinkedIn, Behance, vizit kartu.

---

## Pre nego što kreneš — brza provera

Otvori sajt lokalno da vidiš da li sve izgleda dobro:

1. Otvori **Terminal** (Spotlight: ukucaj „Terminal“)
2. Ukucaj ovo i pritisni Enter:

```bash
cd /Users/natasa/Projects/Test_sajt
python3 -m http.server 8000
```

3. Otvori browser (Chrome/Safari) i idi na: **http://localhost:8000**

⚠️ **Ne otvaraj** `index.html` dvostrukim klikom iz Findera — sendvič meni i neke stvari ne rade bez servera. Uvek koristi `localhost:8000`.

4. Proveri:
   - [x] Početna strana — tekst, dugmad, slike
   - [x] PawStay, Spona, UXZGB case study — otvaraju se, slike se vide
   - [ ] Email u Contact sekciji je tačan *(proveri pre publish-a)*
   - [ ] LinkedIn / Behance linkovi rade
   - [x] Mobilni meni (sendvič) — overlay + Work / About / Contact
   - [x] Favicon (mala G ikonica u tabu browsera)

5. Kada završiš, u Terminalu pritisni **Ctrl + C** da zaustaviš server.

---

## Gde ti je projekat na Mac-u?

```
/Users/natasa/Projects/Test_sajt
```

**Finder → Idi → Idi u fasciklu…** (Cmd + Shift + G) → nalepi putanju gore.

---

# NAČIN 1 — Najbrži (5 minuta): Netlify Drop

**Dobar za:** prvi put da vidiš sajt online odmah.  
**Loš za:** česta ažuriranja (moraš ponovo da vučeš folder).

### Korak 1 — Napravi Netlify nalog

1. Idi na **https://www.netlify.com**
2. Klikni **Sign up**
3. Registruj se (možeš sa Google nalogom — najlakše)

### Korak 2 — Objavi folder

1. Uloguj se na Netlify
2. Idi na **https://app.netlify.com/drop**
3. Otvori Finder → idi u `/Users/natasa/Projects/Test_sajt`
4. **Prevuci ceo folder `Test_sajt`** u prozor Netlify Drop (ne samo pojedinačne fajlove — ceo folder)

### Korak 3 — Sačekaj

Netlify uploaduje fajlove (može potrajati 1–3 min zbog slika).

Kada završi, dobijaš link tipa:

```
https://neko-random-ime-123.netlify.app
```

To je **tvoj live sajt**. Otvori ga, pošalji sebi link, proveri na telefonu.

### Korak 4 — Lepše ime (opciono)

1. Na Netlify dashboard-u klikni na sajt
2. **Site configuration → Domain management → Options → Edit site name**
3. Promeni u nešto tipa `galanta-portfolio` → dobijaš `galanta-portfolio.netlify.app`

### Kako ažuriraš kasnije (Drop način)

1. Izmeniš fajlove u Cursor-u ili Finder-u
2. Ponovo otvoriš **https://app.netlify.com/drop**
3. Ponovo prevučeš **isti folder**

⚠️ Svaki Drop može napraviti **novi** sajt. Bolje je preći na Način 2 kada želiš ozbiljno održavanje.

---

# NAČIN 2 — Preporučeno: GitHub + Netlify

**Dobar za:** backup koda, istorija izmena, jedan klik ažuriranje.  
**Jednom podesiš — posle samo „push“ i sajt se sam osveži.**

Ovde koristiš dve stvari:

| Servis | Šta radi |
|--------|----------|
| **GitHub** | Čuva kopiju tvog projekta u oblaku (kao Google Drive za kod) |
| **Netlify** | Uzima fajlove sa GitHub-a i prikazuje ih kao sajt |

---

## DEO A — GitHub (prvi put)

### Korak 1 — Napravi GitHub nalog

1. Idi na **https://github.com**
2. **Sign up** — besplatno
3. Potvrdi email

### Korak 2 — Napravi prazan repozitorijum

1. Ulogovana si na GitHub
2. Desno gore **+** → **New repository**
3. Popuni:
   - **Repository name:** npr. `galanta-website-portfolio` (ime može biti bilo koje — **zapamti tačno koje si unela**)
   - **Public** ili **Private** — oba rade; Private ako ne želiš da kod bude javan
   - **NE štikliraj** „Add a README“ (već imaš fajlove)
4. Klikni **Create repository**

⚠️ **Ime repoa mora da se poklapa** sa onim u Terminal komandi. Ako si napravila `galanta-website-portfolio`, u Terminalu mora biti isto to ime — ne `galanta-portfolio` iz primera ispod.

GitHub će ti pokazati stranicu sa uputstvima. **Ostavi tu stranicu otvorenu.**

### Korak 3 — Pošalji projekat sa Mac-a na GitHub

**Pre prvog push-a** — sačuvaj poslednje izmene (responzivni dizajn, meni, favicon):

```bash
cd /Users/natasa/Projects/Test_sajt
git add .
git commit -m "Spremno za objavu — responzivni sajt i mobilni meni"
```

Zatim poveži GitHub (samo **prvi put** — zameni username i **tačno ime repoa**):

```bash
git remote add origin https://github.com/TVOJ_GITHUB_USERNAME/IME-TVOG-REPOA.git
git branch -M main
git push -u origin main
```

**Tvoj slučaj** (već podešeno — koristi samo ako ponovo push-uješ):

```bash
cd /Users/natasa/Projects/Test_sajt
git push -u origin main
```

Repo: `https://github.com/NatasaUIRadovanovic/galanta-website-portfolio`

Ako GitHub kaže da `remote origin already exists`, preskoči `git remote add` i samo uradi `git push -u origin main`.

**Prvi put** GitHub će tražiti login:
- Može otvoriti browser prozor — uloguj se
- Ili traži **Personal Access Token** umesto lozinke (GitHub više ne prihvata običnu lozinku u Terminalu)

Ako traži token (detaljnije, 2024+):
1. GitHub → desno gore **avatar** → **Settings**
2. Levo dole **Developer settings** → **Personal access tokens** → **Tokens (classic)**
3. **Generate new token (classic)** → ime npr. `portfolio`
4. Štikliraj **`repo`** (cela kutija)
5. **Generate token** → **kopiraj odmah** (nećeš ga više videti!)
6. U Terminalu, kada traži **Password**, nalepi token (ne GitHub lozinku)

Kada `git push` uspe — osveži GitHub stranicu repozitorijuma. Trebalo bi da vidiš sve fajlove (`index.html`, `assets/`, `docs/`, itd.).

### ✅ Provera — šta tačno vidiš na GitHub-u?

Kada otvoriš repo u browseru, **ne vidiš lep sajt** — vidiš **listu fajlova** (kao Finder). To je normalno. GitHub je skladište koda, ne portfolio u browseru.

U listi fajlova treba da vidiš nešto ovako:

```
assets/          ← folder (plava ikonica fascikle)
cases/           ← folder
docs/            ← folder
partials/        ← folder
index.html       ← FAJL (bela ikonica) — ovo JE početna strana
README.md
netlify.toml
...
```

**Važno:** `index.html` **nije folder** — zove se **`index.html`** (sa `.html` na kraju). Može biti ispod `docs/` u listi jer GitHub sortira abecedno. Klikni na njega — videćeš HTML kod početne strane. To znači da je sve u redu.

Portfolio **vizuelno** vidiš tek kad povežeš **Netlify** (Deo B) — tada dobijaš pravi link tipa `https://neko-ime.netlify.app`.

---

## DEO B — Netlify povezan sa GitHub-om

### Korak 1 — Dodaj sajt

1. **https://app.netlify.com** → uloguj se
2. **Add new site** → **Import an existing project**
3. Izaberi **GitHub** → dozvoli Netlify-u pristup
4. Nađi repozitorijum **`galanta-website-portfolio`** → klikni

   *(Ne traži `galanta-portfolio` — tvoj repo se zove `galanta-website-portfolio`.)*

### Korak 2 — Podešavanja build-a

Netlify pita za build settings. Za tvoj sajt:

| Polje | Vrednost |
|-------|----------|
| **Branch to deploy** | `main` |
| **Build command** | *(ostavi prazno)* |
| **Publish directory** | `.` *(tačka = root folder)* |

Klikni **Deploy site**.

Deploy obično traje **10 sekundi do 5 minuta**. Faze: Building → Deploying → Post processing → **Published**.

⚠️ **F5 u Netlify dashboard-u** ponekad ne osvežava status — ako piše „Post processing“ dugo, otvori link ručno u browseru ili sačekaj da piše **Published**.

### Korak 3 — Učini sajt javnim (obavezno!)

Od 2026. Netlify **novi sajtovi kreću kao privatni**. Deploy može biti uspešan, ali link ne rade drugi ljudi dok ne objaviš.

1. Na dashboard-u klikni **Make public** (banner ili u podešavanjima)
2. Ili: **Site configuration → General → Visitor access / Project visibility → Production deploys → Public**

**Provera:** otvori link u **Incognito** prozoru (Cmd + Shift + N) — mora da se vidi portfolio, ne „Sign in to Netlify“.

### Korak 4 — Lepše ime

**Site configuration → Domain management → Edit site name**

Tvoj sajt: **`galanta-design-studio`** → https://galanta-design-studio.netlify.app

### Korak 5 — Provera live sajta

Otvori **https://galanta-design-studio.netlify.app** i proveri:

- [x] Početna — hero, Work, About, Contact
- [x] PawStay, Spona, UXZGB — case study stranice
- [ ] Email u Contact sekciji tačan
- [ ] LinkedIn / Behance linkovi rade
- [x] Mobilni meni na telefonu
- [x] Favicon (G ikonica u tabu)

**Ne koristi** dugački preview link (`6a7dcbbb...--ime.netlify.app`) za deljenje — koristi glavni: **galanta-design-studio.netlify.app**

---

## Kako ažuriraš sajt posle objave (GitHub + Netlify)

→ **Detaljno:** vidi sekciju [⭐ SVAKODNEVNI RAD](#-svakodnevni-rad--kako-ažuriraš-već-objavljen-sajt) na vrhu dokumenta.

Ukratko:

1. Izmeni fajlove u Cursor-u / Finder-u → **Cmd + S**
2. Terminal: `git add .` → `git commit -m "opis"` → `git push`
3. Netlify → **Deploys** → **Published**
4. https://galanta-design-studio.netlify.app + **Cmd + Shift + R**

Slike: uvek u `assets/images/` preko **Findera** (chat kompresuje).

---

# Kako menjati tekst i sekcije na početnoj

Glavni fajl: **`index.html`** (Cmd + P → ukucaj `index.html`)

| Šta menjaš | Gde u `index.html` | Traži (Cmd + F) |
|------------|-------------------|-----------------|
| Hero naslov | `.hero__title` | `hero__title` |
| Hero podnaslov | `.hero__subtitle` | `hero__subtitle` |
| Work uvod | `.section-lead` u `#work` | `Selected Work` |
| NDA kartica (tekst + dugme) | `.nda-cta` | `nda-cta` |
| About pasusi | `.about__text` | `about__text` |
| About tagovi (Skills / AI / Tools) | `.about__tag-groups` | `about__tag-label` |
| Contact (tekst + dugme + adresa) | `#contact` | `contact__actions` |

### NDA CTA kartica
- HTML: `index.html` → blok `nda-cta`
- Stilovi: `assets/css/styles.css` → traži `.nda-cta`
- Posle CSS izmene: u `index.html` povećaj broj u `styles.css?v=31` → `?v=32` (browser keš)

### Fontovi (učitavaju se u `index.html`)
- **Clash Display** — hero eyebrow, h1, h2 naslovi sekcija, NDA eyebrow
- **Inter** — body tekst
- **Space Grotesk** — rezervni display font u CSS-u

### Dizajn tokeni (CSS)
Glavni fajl: `assets/css/styles.css` → sekcija `:root` na vrhu:
- `--gradient-accent-text` — eyebrow / email gradijent
- `--gradient-pill-outline` — pilule na work karticama
- `--gradient-nda-outline` — ivica NDA kartice
- `--gradient-outline` / `--gradient-outline-primary` — secondary / primary dugme ivice

### About tagovi — redosled
U `index.html`, redosled blokova unutar `.about__tag-groups`:
1. Skills  
2. AI workflow  
3. Tools  

Novi tag = novi `<li>...</li>` unutar odgovarajuće `<ul>`.

### Work kartice (3 projekta)
Fajl: **`partials/work-grid.html`** — učitava se automatski na početnu.

---

# Kako dodati novi projekat u portfolio

Trenutno imaš **3 projekta** na početnoj (PawStay, Spona, UXZGB). Svaki novi projekat = **nova case study stranica** + **nova kartica** u Work sekciji.

## Šta treba da pripremiš pre nego što kreneš

- [ ] Ime projekta (npr. „Finance App“)
- [ ] Kratak opis (1 rečenica za karticu)
- [ ] Tag (npr. „Web · SaaS · Live“ ili „Concept · Mobile“)
- [ ] Slike — hero, ekrani, proces (PNG/JPG, puna rezolucija)
- [ ] Tekst case study-ja: problem → proces → rešenje → rezultat
- [ ] Da li je NDA? (ako da, ne stavljaj osetljive ekrane — piši generički)

---

## Korak 1 — Folder za slike

1. Finder → **Cmd + Shift + G** → `/Users/natasa/Projects/Test_sajt/assets/images/`
2. Napravi novi folder, npr. `finance-app` (mala slova, crtica umesto razmaka)
3. Prevuci slike u taj folder

**Obavezno:** slike dodaj preko **Findera**, ne preko chat-a u Cursor-u (chat ih smanji i izgledaju mutno).

Preporučene slike:

| Fajl | Namena |
|------|--------|
| `card.png` | Slika na kartici na početnoj (≈640×480) |
| `hero.png` | Velika slika na vrhu case study stranice |
| ostale | Ekrani, wireframe-i, before/after… |

---

## Korak 2 — Nova case study stranica

1. U Cursor-u otvori folder `cases/`
2. **Dupliraj** postojeći fajl koji ti je najbliži — npr. kopiraj `pawstay.html` ili `spona-sales.html`
3. Preimenuj kopiju u npr. `finance-app.html` (mala slova, crtica)

4. U novom fajlu promeni:

| Šta | Primer |
|-----|--------|
| `<title>` u `<head>` | `Finance App — Galanta Design Studio` |
| `case-hero__tag` | `Web · Fintech` |
| `case-hero__title` | Naslov projekta |
| `case-hero__summary` | 2–3 rečenice |
| `case-meta` | Role, Timeline, Platform, Outcome |
| Putanje slika | `../assets/images/finance-app/hero.png` |

5. Sekcije koje već postoje u fajlu — popuni tekstom:
   - The problem
   - My role & process
   - The solution
   - Outcome / results

**Savet:** ne moraš sve sekcije odjednom. Možeš prvo objaviti sa hero slikom i kratkim tekstom, pa dopunjavati kasnije.

---

## Korak 3 — Kartica na početnoj (Work sekcija)

Otvori fajl **`partials/work-grid.html`**.

Na **kraj** fajla (posle poslednje `</article>`) dodaj novu karticu — kopiraj postojeću i promeni:

```html
<article class="case-card">
  <a href="cases/finance-app.html" class="case-card__link">
    <div class="case-card__media" aria-label="Finance App preview">
      <img src="assets/images/finance-app/card.png" alt="" class="case-card__image" width="640" height="480" loading="lazy">
    </div>
    <div class="case-card__body">
      <h3>Finance App</h3>
      <p>Kratak opis koji se vidi na kartici — jedna rečenica.</p>
      <span class="case-card__tag">Web · Fintech · Concept</span>
    </div>
  </a>
</article>
```

**Važno:**
- `href="cases/..."` mora da odgovara imenu HTML fajla iz koraka 2
- `src="assets/images/..."` mora da odgovara folderu slika iz koraka 1

---

## Korak 4 — Provera lokalno (pre objave)

Terminal:

```bash
cd /Users/natasa/Projects/Test_sajt
python3 -m http.server 8000
```

U browseru: **http://localhost:8000**

Proveri:
- [ ] Nova kartica se vidi u Work sekciji
- [ ] Klik na karticu otvara case study
- [ ] Slike se učitavaju (nema praznih mesta)
- [ ] Mobilni meni radi
- [ ] „Back“ / logo vodi na početnu

Zaustavi server: **Ctrl + C**

---

## Korak 5 — Objavi na live sajt

Terminal:

```bash
cd /Users/natasa/Projects/Test_sajt
git add .
git commit -m "Dodat projekat: Finance App"
git push
```

1. Sačekaj ~1 min
2. Netlify → **Deploys** → status **Published**
3. Otvori **https://galanta-design-studio.netlify.app**
4. Ako vidiš staro: **Cmd + Shift + R** (hard refresh)

**To je sve.** Svaki sledeći projekat = isti proces (slike → HTML stranica → kartica → test → push).

---

## Brzi pregled — koji fajl za šta

| Želim da… | Fajl |
|-----------|------|
| Dodam novi projekat na početnu | `partials/work-grid.html` |
| Napišem case study stranicu | `cases/ime-projekta.html` (kopiraj `pawstay.html`) |
| Dodam slike | `assets/images/ime-projekta/` |
| Promenim tekst About / Contact | `index.html` |
| Promenim boje / dugmad | `assets/css/styles.css` |

Detaljnije (engleski): [`HOW-TO-UPDATE.md`](HOW-TO-UPDATE.md)

---

## NDA projekti — šta možeš da pokažeš

Ako klijentski rad ne sme javno:

- Opis procesa bez imena proizvoda
- Wireframe-i i generički UI (bez logoa klijenta)
- Metrike tipa „+20% konverzija“ bez screenshot-a
- Link ka Behance-u ako imaš blur / ograničenu verziju

PawStay je dobar primer: jasan proces, bez NDA sadržaja.

### NDA CTA na sajtu (već urađeno)
- Kartica ispod Work sekcije — email prvo, pa Google Meet u dogovoru
- **Ne stavljaj** javni Google Meet link na sajt (NDA + kontrola termina)
- Kasnije opciono: Calendly kao drugo dugme pored emaila

---

## Redosled projekata na početnoj

Projekti u `work-grid.html` idu **odozgo nadole** — prvi u fajlu = prva kartica levo/gore.

Da staviš novi projekat **na prvo mesto**, premesti ceo `<article>...</article>` blok na vrh fajla.

---

# NAČIN 3 — Sopstveni domen (opciono, kasnije)

Ako kupiš domen npr. `galantadesign.com`:

1. Kupovina: Namecheap, GoDaddy, Cloudflare, Google Domains, itd.
2. Netlify → sajt → **Domain management → Add custom domain**
3. Netlify ti kaže koje DNS zapise da dodaš kod registrara domena
4. Sačekaj 5 min – 48h da se propagira

Ne moraš odmah — **galanta-design-studio.netlify.app** je potpuno validan portfolio link.

---

# Hosting — Netlify vs Vercel (kratko)

| | **Netlify** (tvoj izbor) | **Vercel** |
|---|--------------------------|------------|
| Cena za portfolio | **$0** | **$0** (Hobby) |
| GitHub auto deploy | ✅ | ✅ |
| Komercijalni sajt na free planu | ✅ dozvoljeno | ❌ samo lični projekti |
| Tvoj projekat | `netlify.toml` spreman | `vercel.json` postoji ali ne koristiš |

Oba su pouzdana. Ostani na Netlify — setup je gotov.

---

## Rečnik — šta znače reči

| Termin | Značenje jednostavno |
|--------|---------------------|
| **Deploy / objavi** | Stavi sajt online da svi mogu da ga vide |
| **Hosting** | Server gde „leži“ tvoj sajt |
| **Git** | Sistem koji pamti svaku verziju projekta na tvom Mac-u |
| **GitHub** | Git u oblaku — backup + deljenje |
| **commit** | Sačuvana „snimka“ izmena sa porukom |
| **push** | Pošalji snimke sa Mac-a na GitHub |
| **Repository (repo)** | Folder projekta na GitHub-u |
| **Branch `main`** | Glavna verzija sajta |
| **Netlify Drop** | Prevuci folder → sajt online |
| **Trigger deploy** | Ručno pokretanje novog deploy-a na Netlify (Deploy project) |
| **Hard refresh** | Cmd + Shift + R — browser učitava sveže sa servera |
| **Token** | GitHub ključ umesto lozinke u Terminalu (`ghp_...`) |

---

## Koji način da izabereš?

| Situacija | Izaberi |
|-----------|---------|
| „Hoću da vidim online za 5 min“ | **Način 1 — Drop** |
| „Hoću da učim i ažuriram svaki mesec“ | **Način 2 — GitHub + Netlify** |
| „Imam svoj domen“ | Način 2 + custom domain |

---

## Česte greške

**Slike izgledaju mutno na sajtu**  
→ Stavi punu rezoluciju u `assets/images/` preko Findera, ne preko Cursor chat-a.

**Sajt pokazuje staru verziju**  
→ Cmd + Shift + R u browseru. Proveri na Netlify da je deploy zelen.

**`git push` ne radi — „Repository not found“**  
→ Najčešće: **ime repoa na GitHub-u ne odgovara** imenu u Terminalu. Proveri tačan naziv na GitHub-u (npr. `galanta-website-portfolio`), pa ispravi link:

```bash
git remote set-url origin https://github.com/NatasaUIRadovanovic/galanta-website-portfolio.git
git push -u origin main
```

**`git push` ne radi — „Invalid username or token“**  
→ Umesto GitHub lozinke mora **Personal Access Token** (`ghp_...`). Token se vidi samo jednom — ako izgubiš, napravi novi (Settings → Developer settings → Tokens classic → štikliraj `repo`).

**`remote origin already exists` + URL sa `TVOJE_IME`**  
→ Ranije je ostao pogrešan placeholder. Ispravi sa `git remote set-url origin ...` (gore), pa push ponovo.

**Ne vidim `index` na GitHub-u**  
→ Traži **`index.html`** (fajl, ne folder). Sortirano je abecedno — obično ispod `docs/`.

**Link ne otvara case study**  
→ Uvek testiraj lokalno pre publish-a (`python3 -m http.server 8000`).

**Ne nađem folder Test_sajt**  
→ Finder → Cmd + Shift + G → `/Users/natasa/Projects/Test_sajt`

**Sendvič meni ne radi**  
→ Otvori sajt preko **http://localhost:8000**, ne direktno iz Findera.

**Deploy na Netlify pukne**  
→ Proveri: Build command = prazno, Publish directory = `.` (tačka)

**Sajt radi meni, ali link ne rade drugi**  
→ Sajt je još **privatan**. Netlify → **Make public** → proveri u Incognito prozoru.

**Deploy uspeo, ali piše „Post processing“ dugo**  
→ Normalno do 5–10 min na prvom deploy-u. Osveži stranicu ili otvori link ručno u browseru.

**Push prošao, GitHub ima izmene, live sajt star**  
→ Netlify → **Trigger deploy** → **Deploy project**. Proveri da Deploys pokazuje najnoviji commit.

**Mislila sam da Cmd + S objavljuje**  
→ Cmd + S samo lokalno. Obavezno: `git add` → `git commit` → `git push` → sačekaj Netlify.

**F5 u Netlify dashboard-u ne osvežava deploy status**  
→ Normalno. Otvori Deploys tab ponovo ili sačekaj da piše Published.

---

## Checklist — objava (završeno ✅)

- [ ] Email tačan u Contact sekciji
- [ ] LinkedIn i Behance linkovi rade
- [x] Sve slike se učitavaju (Spona hero, PawStay, UXZGB)
- [x] Provereno na telefonu (sendvič meni, scroll, fontovi)
- [x] `git push` uspeo na GitHub
- [x] Netlify deploy: **Published**
- [x] Sajt javan: **https://galanta-design-studio.netlify.app**

---

## Pomoć — mapa fajlova u projektu

| Šta | Fajl |
|-----|------|
| Početna strana (hero, about, contact, NDA CTA) | `index.html` |
| Work kartice (3 projekta) | `partials/work-grid.html` |
| Case study stranice | `cases/pawstay.html`, `cases/spona-sales.html`, `cases/uxzgb.html` |
| Novi case study | kopiraj `cases/pawstay.html` → `cases/ime.html` |
| Slike | `assets/images/` (podfolder po projektu) |
| Boje, dugmad, mobilni meni, NDA kartica stil | `assets/css/styles.css` |
| Case study stilovi | `assets/css/case.css` |
| Galaxy efekti, meni JS | `assets/js/main.js`, `assets/css/effects.css` |
| Favicon | `assets/images/galanta/favicon.png` |
| Nav logo | `assets/images/galanta/logo-nav.png` |
| **Ovaj vodič (srpski)** | `docs/KAKO-OBJAVITI-SAJT.md` |
| Vodič za izmene (engleski) | `docs/HOW-TO-UPDATE.md` |
| Netlify config | `netlify.toml` |

### Tehničke napomene (za nastavak rada)
- Navigacija je **ugrađena u HTML** (`index.html` + case stranice) — ne učitava se iz `partials/header.html` na live stranicama
- `partials/work-grid.html` i `partials/footer.html` se učitavaju preko JS (`main.js`)
- Uvek testiraj na **localhost:8000**, ne dvostrukim klikom na HTML
- Posle CSS/JS izmene: povećaj `?v=` broj u `index.html` da browser učita novo

---

## Za nastavak rada u Cursor-u

Kada otvoriš novi chat, nalepi:

> Radim na Galanta portfolio. Projekat: `/Users/natasa/Projects/Test_sajt`. Live: https://galanta-design-studio.netlify.app. GitHub + Netlify. Vodič: `docs/KAKO-OBJAVITI-SAJT.md`.

Ili samo **okaci ovaj fajl** — sadrži sve potrebno.

---

*Portfolio live: **https://galanta-design-studio.netlify.app** — Galanta Design Studio 🟣*
