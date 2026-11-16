# Student Management - ReactJS

Aplikasi sederhana untuk menampilkan data mahasiswa menggunakan ReactJS. Project ini dibuat untuk memenuhi tugas implementasi React Hooks, yaitu `useState`, `useEffect`, serta looping data menggunakan fungsi `.map()`.

## Teknologi yang Digunakan

- ReactJS
- JavaScript
- Vite
- Vanilla CSS

## Fitur Aplikasi

1. Menampilkan daftar data mahasiswa dalam bentuk tabel.
2. Menyimpan data mahasiswa menggunakan `useState`.
3. Menampilkan minimal 5 data mahasiswa dummy.
4. Melakukan looping data menggunakan `.map()`.
5. Menampilkan jumlah mahasiswa.
6. Menampilkan jam digital secara real-time.
7. Memperbarui waktu setiap 1 detik menggunakan `setInterval()`.
8. Membersihkan interval menggunakan `clearInterval()` saat komponen di-unmount.

## Struktur Data Mahasiswa

Informasi yang ditampilkan meliputi:

- NIM
- Nama Mahasiswa
- No. HP
- Email
- Alamat
- Program Studi
- Tahun Masuk

## Instalasi dan Menjalankan Project

1. Clone repository:

   ```bash
   git clone URL_REPOSITORY
   ```

2. Masuk ke folder project:

   ```bash
   cd student-management-react
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Jalankan aplikasi:

   ```bash
   npm run dev
   ```

5. Buka alamat yang muncul di terminal, biasanya:

   ```text
   http://localhost:5173/
   ```


## Hasil Screenshot
<img width="1919" height="1079" alt="Screenshot 2026-11-16 231204" src="https://github.com/user-attachments/assets/407f39ee-f81c-43a8-a855-a8917d2a77a7" />

## Implementasi React Hooks

| React Hooks | Kegunaan |
|---|---|
| useState | Menyimpan data mahasiswa dan waktu saat ini. |
| useEffect | Menjalankan interval jam digital. |
| setInterval | Memperbarui waktu setiap 1 detik. |
| clearInterval | Menghentikan interval saat komponen di-unmount. |
| map() | Melakukan looping data mahasiswa ke dalam tabel. |

## Catatan

- Data mahasiswa menggunakan data dummy.
- Tidak menggunakan backend maupun database.
- Seluruh data disimpan di dalam state React.

## Tujuan Project

Memahami penggunaan React Hooks (`useState` dan `useEffect`) serta penerapan looping data menggunakan `.map()` dalam pengembangan aplikasi ReactJS sederhana.

---

**Student Management © 2026**
