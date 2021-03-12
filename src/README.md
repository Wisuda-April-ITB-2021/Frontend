# STRUKTUR FOLDER UNTUK SRC

### api

Self-descriptive, di sini isinya fungsi-fungsi yang terhubung ke BE

### Components

Ada readme nya sendiri, bisa langsung di cek aja

### icons

Self-descriptive

### icons

Dibagi ke:

- bg (buat di template biasanya)
- decoration (buat dekor-dekor. sebagian besar asset gambar buat FE ditaruh sini)
- logo

### pages

Dibagi ke:

- Apresiasi
- ComingSoon (udah lewat, gausah disentuh" lagi)
- GaleriWisudawan (untuk subpages Galeri Wisudawan & Wisudawan)
- Landing (untuk page-page utama, misalnya Home, Panellum, sama Events)
- Shared (page yang bisa dipake kayak template berdasarkan url: OrganisasiPage)
- Template (buat container semua page)

### routes

Dipake buat nyusun react-router. Kalau mau liat navigasi, patokannya pake variabel yang udah di export di sini. Jadi import variabelnya biar ga hardcoded kalo mau pake <Link to="">. Ini emang rada nguli, cuma lebih enak karena semuanya dihandle di satu tempat

### styles

Dipake buat scss global dan asset terkait (misalnya font). Berhubungan sama styling, pakenya kebab-case ya (contohnya: homepage-container, button-icons-left). Jangan pake camelCase atau yang lain.
