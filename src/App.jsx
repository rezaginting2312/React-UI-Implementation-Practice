
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // State untuk menyimpan data mahasiswa
  const [mahasiswa, setMahasiswa] = useState([
    {
      nim: "23120001",
      nama: "Andi Pratama",
      noHp: "081234567890",
      email: "andi@gmail.com",
      alamat: "Medan",
      prodi: "Informatika",
      tahunMasuk: "2023",
    },
    {
      nim: "23120002",
      nama: "Budi Santoso",
      noHp: "081298765432",
      email: "budi@gmail.com",
      alamat: "Binjai",
      prodi: "Sistem Informasi",
      tahunMasuk: "2023",
    },
    {
      nim: "23120003",
      nama: "Citra Lestari",
      noHp: "082112345678",
      email: "citra@gmail.com",
      alamat: "Deli Serdang",
      prodi: "Informatika",
      tahunMasuk: "2023",
    },
    {
      nim: "23120004",
      nama: "Dimas Saputra",
      noHp: "085212345678",
      email: "dimas@gmail.com",
      alamat: "Medan",
      prodi: "Teknik Komputer",
      tahunMasuk: "2024",
    },
    {
      nim: "23120005",
      nama: "Eka Wulandari",
      noHp: "087812345678",
      email: "eka@gmail.com",
      alamat: "Tebing Tinggi",
      prodi: "Informatika",
      tahunMasuk: "2024",
    },
  ]);

  // State untuk menyimpan waktu
  const [waktu, setWaktu] = useState(new Date());

  // useEffect untuk menjalankan jam digital
  useEffect(() => {
    const interval = setInterval(() => {
      setWaktu(new Date());
    }, 1000);

    // Cleanup interval ketika komponen di-unmount
    return () => clearInterval(interval);
  }, []);

  // Format waktu
  const jam = waktu.toLocaleTimeString("id-ID");

  return (
    <div className="app">
      <header className="header">
        <h1>Student Management</h1>
        <p>Sistem Informasi Data Mahasiswa</p>
      </header>

      <main className="container">
        <div className="top-section">
          <div>
            <h2>Daftar Data Mahasiswa</h2>
            <p className="total">
              Total Mahasiswa: <strong>{mahasiswa.length}</strong>
            </p>
          </div>

          <div className="clock">
            <span>🕐</span> {jam}
          </div>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>NIM</th>
                <th>Nama Mahasiswa</th>
                <th>No. HP</th>
                <th>Email</th>
                <th>Alamat</th>
                <th>Program Studi</th>
                <th>Tahun Masuk</th>
              </tr>
            </thead>

            <tbody>
              {mahasiswa.map((mhs) => (
                <tr key={mhs.nim}>
                  <td>{mhs.nim}</td>
                  <td>{mhs.nama}</td>
                  <td>{mhs.noHp}</td>
                  <td>{mhs.email}</td>
                  <td>{mhs.alamat}</td>
                  <td>{mhs.prodi}</td>
                  <td>{mhs.tahunMasuk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <footer>
        <p>Student Management © 2026</p>
      </footer>
    </div>
  );
}

export default App;
