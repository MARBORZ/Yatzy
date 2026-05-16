# 🎲 Yatzy Game (JavaScript)

Et fullt spillbart **Yatzy**-spill bygget med **Vanilla JavaScript**, HTML og CSS.  
Prosjektet fokuserer på ren spilllogikk-separasjon, tydelig UI-tilstandshåndtering og klassiske Yatzy-regler.

---

## 📖 Om Spillet

**Yatzy** er et terningspill hvor målet er å score høyest totalt ved å velge kategorier basert på terningkombinasjoner.

- Du spiller **ett spill** med **15 kategorier**
- Hver kategori kan brukes **kun én gang**
- Spillet slutter når **alle kategorier er fylt**

---

## 🎮 Hvordan Spille (Regler Brukt i Dette Prosjektet)

### 🎲 Terninger & Runder
- Du kaster **5 terninger**
- Du har **opptil 3 kast per runde**
- Etter hvert kast kan du **holde terninger** du vil beholde
- Holdte terninger kastes ikke igjen
- Etter å ha valgt en kategori, tilbakestilles runden

---

### 🧮 Poengkategorier

#### Øvre Seksjon
| Kategori | Regel |
|--------|------|
| Enere – Seksere | Sum av terninger med den verdien |

**Øvre Bonus**
- Hvis total øvre poengsum er **63 eller mer**, får du en **+50 bonus**
- Bonus legges automatisk til totalpoengsum
- Du kan velge kategorier i vilkårlig rekkefølge (moderne regler)

---

#### Nedre Seksjon
| Kategori | Regel |
|--------|------|
| Par | Høyeste par |
| To Par | To forskjellige par |
| Tre Like | Tre like terninger |
| Fire Like | Fire like terninger |
| Hus | Ett par + tre like |
| Liten Straight | 1–2–3–4–5 |
| Stor Straight | 2–3–4–5–6 |
| Yatzy | Fem like terninger (50 poeng) |
| Sjanse | Sum av alle terninger |

---

### 🏁 Spill Over
- Spillet slutter når **alle kategorier er brukt**
- En **Game Over-skjerm** vises
- Sluttpoengsum inkluderer:
  - Alle valgte kategoripoeng
  - Øvre seksjonsbonus (hvis oppnådd)

---

## 🧠 Tekniske Høydepunkter

- Klar separasjon av bekymringer:
  - `YatzyLogic` — spillregler & poengberegning
  - `YatzyDOM` — rendering & UI-oppdateringer
- Ingen rammeverk — **ren JavaScript**
- Fullt deterministisk poenglogikk
- Responsivt layout med adaptiv terningskalering
- Ren tilstandstilbakestilling og omstartshåndtering

---

## 🚀 Hvordan Kjøre

Åpne ganske enkelt `index.html` i en nettleser  
(eller bruk en lokal server for ES-moduler)

---

## 🎯 Læringsmål

- Vanilla JavaScript spillutvikling
- Separasjon av spilllogikk og UI
- Tilstandshåndtering uten rammeverk
- DOM-manipulering og hendelseshåndtering
- Spillregler-implementering

---

## 👤 Forfatter

**Laget av:**  
**Amadi Masuev**

Dette prosjektet ble designet og implementert som et komplett, strukturert Yatzy-spill med ren arkitektur og klassiske regler.

---

## ✅ Status

✔ Prosjekt fullført  
✔ Fullt spillbart  
✔ Klar for distribusjon
