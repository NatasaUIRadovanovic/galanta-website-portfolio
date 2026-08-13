# Kako objaviti Galanta portfolio sajt — korak po korak

Ovo uputstvo je pisano za **nekoga ko nije programer**. Sve objašnjeno polako, bez pretpostavke da znaš terminologiju.

**Poslednje ažuriranje:** sajt je spreman za objavu (responzivan dizajn, mobilni meni, favicon). Preporučeni put: **Način 2 — GitHub + Netlify**.

---

## Gde si sada? (tvoj sledeći korak)

| Korak | Status | Šta radiš |
|-------|--------|-----------|
| 1. Sajt lokalno radi | ✅ Gotovo | Testirala si na `localhost:8000` + telefon |
| 2. Git na Mac-u | ✅ Gotovo | Projekat već ima Git istoriju |
| 3. GitHub nalog + repo | ⬜ **Sledeće** | Deo A ispod — 15 min |
| 4. `git push` | ⬜ Posle koraka 3 | Pošalješ fajlove na GitHub |
| 5. Netlify + GitHub | ⬜ Posle koraka 4 | Deo B — sajt ide online |
| 6. Provera na telefonu | ⬜ Na kraju | Otvoriš `tvoj-sajt.netlify.app` |

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
   - **Repository name:** `galanta-portfolio` (ili kako hoćeš)
   - **Public** ili **Private** — oba rade; Private ako ne želiš da kod bude javan
   - **NE štikliraj** „Add a README“ (već imaš fajlove)
4. Klikni **Create repository**

GitHub će ti pokazati stranicu sa uputstvima. **Ostavi tu stranicu otvorenu.**

### Korak 3 — Pošalji projekat sa Mac-a na GitHub

**Pre prvog push-a** — sačuvaj poslednje izmene (responzivni dizajn, meni, favicon):

```bash
cd /Users/natasa/Projects/Test_sajt
git add .
git commit -m "Spremno za objavu — responzivni sajt i mobilni meni"
```

Zatim poveži GitHub (samo **prvi put** — zameni `TVOJ_GITHUB_USERNAME`):

```bash
git remote add origin https://github.com/TVOJ_GITHUB_USERNAME/galanta-portfolio.git
git branch -M main
git push -u origin main
```

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

---

## DEO B — Netlify povezan sa GitHub-om

### Korak 1 — Dodaj sajt

1. **https://app.netlify.com** → uloguj se
2. **Add new site** → **Import an existing project**
3. Izaberi **GitHub** → dozvoli Netlify-u pristup
4. Nađi repozitorijum **galanta-portfolio** → klikni

### Korak 2 — Podešavanja build-a

Netlify pita za build settings. Za tvoj sajt:

| Polje | Vrednost |
|-------|----------|
| **Branch to deploy** | `main` |
| **Build command** | *(ostavi prazno)* |
| **Publish directory** | `.` *(tačka = root folder)* |

Klikni **Deploy site**.

Sačekaj 1–2 minuta. Status će postati **Published** — klikni link, sajt je live.

### Korak 3 — Lepše ime (opciono)

Isto kao u Načinu 1: **Domain management → Edit site name**.

---

## Kako ažuriraš sajt posle objave (GitHub + Netlify)

Svaki put kada nešto promeniš u projektu:

### 1. Izmeni fajlove

- Cursor ili Finder
- Slike: uvek u `assets/images/` preko Findera (ne preko chat-a — kompresuje)

### 2. Sačuvaj verziju u Git

Terminal:

```bash
cd /Users/natasa/Projects/Test_sajt
git add .
git commit -m "Opis izmene na srpskom ili engleskom, npr. Novi Spona hero"
git push
```

### 3. Sačekaj Netlify

1. Idi na Netlify dashboard → tvoj sajt → **Deploys**
2. Za ~1 min videćeš novi deploy **Published**
3. Otvori sajt — ako vidiš staro, **Cmd + Shift + R** (hard refresh)

**To je ceo proces ažuriranja.** Tri komande u Terminalu.

---

# NAČIN 3 — Sopstveni domen (opciono, kasnije)

Ako kupiš domen npr. `galantadesign.com`:

1. Kupovina: Namecheap, GoDaddy, Cloudflare, Google Domains, itd.
2. Netlify → sajt → **Domain management → Add custom domain**
3. Netlify ti kaže koje DNS zapise da dodaš kod registrara domena
4. Sačekaj 5 min – 48h da se propagira

Ne moraš odmah — `tvoj-ime.netlify.app` je potpuno validan portfolio link.

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
| **Build** | Kod tebe nema build-a — nema kompajliranja, samo fajlovi |

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

**`git push` ne radi**  
→ Proveri GitHub login / token. Proveri da si u pravom folderu (`cd /Users/natasa/Projects/Test_sajt`).

**Link ne otvara case study**  
→ Uvek testiraj lokalno pre publish-a (`python3 -m http.server 8000`).

**Ne nađem folder Test_sajt**  
→ Finder → Cmd + Shift + G → `/Users/natasa/Projects/Test_sajt`

**Sendvič meni ne radi**  
→ Otvori sajt preko **http://localhost:8000**, ne direktno iz Findera.

**Deploy na Netlify pukne**  
→ Proveri: Build command = prazno, Publish directory = `.` (tačka)

---

## Checklist pre prvog publish-a

- [ ] Email tačan u Contact sekciji
- [ ] LinkedIn i Behance linkovi rade
- [x] Sve slike se učitavaju (Spona hero, PawStay, UXZGB)
- [x] Provereno na telefonu (sendvič meni, scroll, fontovi)
- [ ] `git push` uspeo na GitHub
- [ ] Netlify deploy status: **Published**

---

## Pomoć — gde šta u projektu

| Šta | Fajl |
|-----|------|
| Početna strana | `index.html` |
| Case study stranice | `cases/pawstay.html`, `cases/spona-sales.html`, `cases/uxzgb.html` |
| Slike | `assets/images/` |
| Favicon (tab) | `assets/images/galanta/favicon.png` |
| G app ikonica | `assets/images/galanta/icon-app.png` |
| Nav wordmark | `assets/images/galanta/logo-nav.png` |
| Boje, dugmad, mobilni meni | `assets/css/styles.css` |
| Kako menjati sadržaj | [`HOW-TO-UPDATE.md`](HOW-TO-UPDATE.md) (engleski) |

Detaljnije kako da **menjaš sadržaj** posle objave: [`HOW-TO-UPDATE.md`](HOW-TO-UPDATE.md).

Projekat ima **Git** — posle svake izmene: `git add .` → `git commit -m "opis"` → `git push`.

---

*Srećno sa objavom — Galanta Design Studio 🟣*
