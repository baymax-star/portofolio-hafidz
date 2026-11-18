import React, { useState } from 'react';
import {
  ShieldAlert,
  Award,
  ExternalLink,
  Code2,
  Cpu,
  Globe,
  Mail,
  MapPin,
  GraduationCap,
  Music,
  Camera,
  CheckCircle2,
  FolderOpen,
  Menu,
  X,
  Trophy,
  Flame,
  Zap,
  Target,
  Activity,
  Sparkles,
  UserCheck,
  Radio
} from 'lucide-react';

/**
 * KONFIGURASI TAUTAN GOOGLE DRIVE
 * Format link pratinjau Google Drive (/view) memastikan file terbuka langsung di tab baru tanpa terunduh otomatis.
 */
const DRIVE_LINKS = {
  bnspNetworkAdmin: 'https://drive.google.com/file/d/1ngmCyrytf5GfGz8b3WhsKP3s3fKtrqiR/view?usp=sharing',
  komdigiNetworkAdmin: 'https://drive.google.com/file/d/1AnMMkJ1Z2a7xM4s6PgCeTVrtEyQm1WI8/view?usp=drive_link',
  komdigiWebDeveloper: 'https://drive.google.com/file/d/10pi0fa2e1UlJtXYBJySU_XXGEIuklS45/view?usp=drive_link',
  komdigiDatascient: 'https://drive.google.com/file/d/1sxdd9qhznYi_ZbkjG7ru1lS98wVhmd0I/view?usp=sharing',
  internshipOppo: 'https://drive.google.com/file/d/1P5yppgS3vBttVYKasqAYyrAYJLIdyTZF/view?usp=drive_link',
  unitechUny: 'https://drive.google.com/file/d/1GxYXBMHkGx6WKMQ2NHNTrPYHJfTbAzwI/view?usp=drive_link',
  toeflLkpb: 'https://drive.google.com/file/d/1FX2Kl0UBsq2HTMwS3KO5PNqfWcSKZBgq/view?usp=drive_link',
};

/**
 * Fungsi helper untuk menghapus seluruh tanda hubung (-, –, —) pada teks
 * dan merapikan spasi berlebih.
 */
const removeHyphens = (text = '') => {
  return String(text)
    .replace(/[-–—]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

const PLAYER_STATS = [
  { label: 'IOT', name: 'IoT & Embedded', rating: 92 },
  { label: 'NET', name: 'Network Admin', rating: 90 },
  { label: 'WEB', name: 'Full Stack Web', rating: 88 },
  { label: 'DAT', name: 'Data Science', rating: 85 },
  { label: 'ELC', name: 'Electrical Test', rating: 89 },
  { label: 'ENG', name: 'English TOEFL', rating: 91 },
];

const TACTICAL_NODES = [
  {
    id: 'gk',
    pos: 'GK',
    role: 'Network Security & Infrastructure',
    title: 'Penjaga Pertahanan Jaringan',
    x: 10,
    y: 50,
    summary:
      'Mengamankan jalur komunikasi data, konfigurasi switch, routing antar Autonomous System, serta pemulihan jaringan.',
    skills: ['BNSP Network Admin', 'Routing AS', 'Network Security'],
  },
  {
    id: 'cb1',
    pos: 'CB',
    role: 'Embedded Systems & ESP32',
    title: 'Fondasi Perangkat Keras IoT',
    x: 28,
    y: 30,
    summary:
      'Merancang arsitektur mikrokontroler ESP32 dan integrasi sensor gas presisi tinggi (MQ 135 & MQ 136) untuk kondisi lapangan ekstrem.',
    skills: ['ESP32', 'Calibration Equations', 'Hardware Assembly'],
  },
  {
    id: 'cb2',
    pos: 'CB',
    role: 'Electrical Testing & Validation',
    title: 'Pengujian & Keandalan Sistem',
    x: 28,
    y: 70,
    summary:
      'Memastikan kualitas rangkaian kelistrikan, ketahanan komponen, serta standar keselamatan industri manufaktur.',
    skills: ['D4 Teknik Elektro', 'Quality Assurance', 'Validation'],
  },
  {
    id: 'cm',
    pos: 'CM',
    role: 'LoRa & MQTT SN Telemetry',
    title: 'Pengatur Ritme Transmisi Data',
    x: 52,
    y: 50,
    summary:
      'Menghubungkan node jarak jauh melalui komunikasi nirkabel LoRa SX1276 dan protokol ringan MQTT SN tanpa ketergantungan internet.',
    skills: ['LoRa SX1276', 'MQTT SN', 'Gateway Bridge'],
  },
  {
    id: 'lw',
    pos: 'LW',
    role: 'Data Science & Analytics',
    title: 'Analisis Pola & Prediksi',
    x: 74,
    y: 25,
    summary:
      'Mengolah data telemetri sensor menjadi wawasan terstruktur dan sistem peringatan dini otomatis.',
    skills: ['Associate Data Scientist', 'Python & Pandas', 'Data Modeling'],
  },
  {
    id: 'rw',
    pos: 'RW',
    role: 'Full Stack Web & Mobile',
    title: 'Antarmuka & Aplikasi Pengguna',
    x: 74,
    y: 75,
    summary:
      'Membangun dashboard pemantauan real time berbasis React, PHP CodeIgniter, MySQL, serta aplikasi mobile Flutter.',
    skills: ['React & Tailwind', 'PHP CodeIgniter', 'Flutter & MySQL'],
  },
  {
    id: 'st',
    pos: 'ST',
    role: 'End to End Innovation',
    title: 'Eksekusi Solusi Tepat Guna',
    x: 90,
    y: 50,
    summary:
      'Menyatukan perangkat keras, jaringan, dan perangkat lunak menjadi produk inovatif yang teruji di kompetisi nasional dan industri.',
    skills: ['Juara Harapan 2 U NITECH', 'OPPO Internship', 'System Analyst'],
  },
];

const CERTIFICATES_DATA = [
  {
    id: 'bnsp-net',
    title: 'Sertifikat Kompetensi Network Administrator Muda',
    subtitle: 'Junior Network Administrator',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP) & LSP UNY',
    credentialNumber: 'No. Reg. ICT.1272.00011 2024',
    date: '18 November 2024',
    category: 'Sertifikasi Profesi',
    rarity: 'gold',
    rating: '94',
    driveUrl: DRIVE_LINKS.bnspNetworkAdmin,
  },
  {
    id: 'komdigi-net',
    title: 'Intermediate Associate Network Administrator',
    subtitle: 'Digital Talent Scholarship 2026',
    issuer: 'Kementerian Komunikasi dan Digital (KOMDIGI)',
    credentialNumber: '21212088840 4136/DTA/BLSDM.Komdigi/2026',
    date: '30 Oktober 2026',
    category: 'Pelatihan Nasional',
    rarity: 'emerald',
    rating: '91',
    driveUrl: DRIVE_LINKS.komdigiNetworkAdmin,
  },
  {
    id: 'komdigi-web',
    title: 'Intermediate Assistant Web Developer',
    subtitle: 'Digital Talent Scholarship 2026',
    issuer: 'Kementerian Komunikasi dan Digital (KOMDIGI)',
    credentialNumber: '21211989840 2675/DTA/BLSDM.Komdigi/2026',
    date: '5 Oktober 2026',
    category: 'Pengembangan Web',
    rarity: 'emerald',
    rating: '90',
    driveUrl: DRIVE_LINKS.komdigiWebDeveloper,
  },
  {
    id: 'komdigi-ds',
    title: 'Associate Data Scientist',
    subtitle: 'Digital Talent Scholarship 2026',
    issuer: 'Kementerian Komunikasi dan Digital (KOMDIGI)',
    credentialNumber: 'Digital Talent Academy KOMDIGI 2026',
    date: 'Oktober 2026',
    category: 'Data Science',
    rarity: 'emerald',
    rating: '89',
    driveUrl: DRIVE_LINKS.komdigiDatascient,
  },
  {
    id: 'oppo-intern',
    title: 'Certificate of Internship Mechanical Engineer',
    subtitle: '90 Days Industrial Internship Program',
    issuer: 'PT. Bright Mobile Telecommunication (OPPO)',
    credentialNumber: 'No. 001/SKM/HR BMT/II/2025',
    date: '04 November 2024 s.d. 03 Februari 2025',
    category: 'Pengalaman Industri',
    rarity: 'gold',
    rating: '93',
    driveUrl: DRIVE_LINKS.internshipOppo,
  },
  {
    id: 'unitech-2023',
    title: 'Juara Harapan 2 UNY National Innovation Technology',
    subtitle: 'U NITECH 2023 UNY Festival #11',
    issuer: 'Universitas Negeri Yogyakarta',
    credentialNumber: 'No. 055/B/U NITECH UKMRT/UNY/IV/2023',
    date: '19 Mei 2023',
    category: 'Penghargaan Kompetisi',
    rarity: 'gold',
    rating: '92',
    driveUrl: DRIVE_LINKS.unitechUny,
  },
  {
    id: 'toefl-570',
    title: 'TOEFL Certificate Skor 570',
    subtitle: 'English Proficiency Assessment',
    issuer: 'Lembaga Kajian dan Pengajaran Bahasa (LKPB)',
    credentialNumber: 'No. 0039/S/TOF.Onl/LKPB/IX/2026',
    date: '5 September 2026',
    category: 'Bahasa Inggris',
    rarity: 'emerald',
    rating: '91',
    driveUrl: DRIVE_LINKS.toeflLkpb,
  },
];

const MATCH_HIGHLIGHTS = [
  {
    minute: "90'",
    competition: 'FINAL PROJECT • VOLCANIC IOT',
    title: 'Sistem Pemantauan Gas Vulkanik Berbasis IoT & LoRa',
    score: 'OFFLINE READY',
    description:
      'Perancangan perangkat pemantauan gas beracun (CO2 dan H2S) portabel tanpa ketergantungan internet menggunakan ESP32, modul LoRa SX1276, protokol MQTT SN, serta notifikasi peringatan otomatis WhatsApp.',
    tags: ['ESP32', 'LoRa SX1276', 'MQTT SN', 'WhatsApp Gateway'],
  },
  {
    minute: "78'",
    competition: 'LEAGUE CUP • FULL STACK',
    title: 'Aplikasi Web Full Stack & Sistem Informasi Terpadu',
    score: 'PRODUCTION',
    description:
      'Pengembangan aplikasi web responsif dan terstruktur menggunakan PHP, CodeIgniter, React, JavaScript, serta basis data MySQL untuk otomasi layanan dan pelaporan real time.',
    tags: ['PHP', 'CodeIgniter', 'MySQL', 'React'],
  },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNode, setActiveNode] = useState(TACTICAL_NODES[3]);
  const [kudosCount, setKudosCount] = useState(11);
  const [cheered, setCheered] = useState(false);

  const categories = [
    'Semua',
    'Sertifikasi Profesi',
    'Pelatihan Nasional',
    'Pengembangan Web',
    'Data Science',
    'Pengalaman Industri',
    'Penghargaan Kompetisi',
    'Bahasa Inggris',
  ];

  const filteredCertificates =
    selectedCategory === 'Semua'
      ? CERTIFICATES_DATA
      : CERTIFICATES_DATA.filter((cert) => cert.category === selectedCategory);

  const handleOpenDrive = (e, url) => {
    if (!url || url.includes('GANTI_DENGAN_ID_FILE')) {
      e.preventDefault();
      alert(
        'Tautan Google Drive belum dikonfigurasi pada objek DRIVE_LINKS di bagian atas App.jsx.'
      );
    }
  };

  const handleCheer = () => {
    setKudosCount((prev) => prev + 1);
    setCheered(true);
    setTimeout(() => setCheered(false), 600);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Stadium Floodlight Ambient Glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
      </div>

      {/* Matchday Scoreboard Header */}
      <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-emerald-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 text-slate-950 font-black flex items-center justify-center shadow-lg shadow-emerald-500/25 group-hover:scale-105 transition-transform">
              10
            </div>
            <div>
              <span className="block font-extrabold text-sm sm:text-base tracking-wide text-white uppercase">
                {removeHyphens('Hafidz Ramadhan')}
              </span>
              <span className="block text-[10px] font-semibold tracking-widest text-emerald-400 uppercase">
                {removeHyphens('Engineering Squad')}
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-300">
            <a href="#tactics" className="hover:text-emerald-400 transition-colors">
              Papan Taktik
            </a>
            <a href="#highlights" className="hover:text-emerald-400 transition-colors">
              Match Highlights
            </a>
            <a href="#trophy-room" className="hover:text-emerald-400 transition-colors">
              Ruang Trofi
            </a>
            <a href="#off-pitch" className="hover:text-emerald-400 transition-colors">
              Off Pitch
            </a>
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={handleCheer}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${
                cheered
                  ? 'bg-amber-400 text-slate-950 border-amber-300 scale-105'
                  : 'bg-slate-900 text-amber-400 border-amber-400/40 hover:bg-amber-400/10'
              }`}
              title="Beri Dukungan Stadion"
            >
              <Flame className="w-3.5 h-3.5" />
              <span>{kudosCount}</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-800"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-emerald-500/20 px-4 py-3 space-y-2 text-xs font-bold uppercase tracking-wider">
            <a
              href="#tactics"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-emerald-400"
            >
              Papan Taktik
            </a>
            <a
              href="#highlights"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-emerald-400"
            >
              Match Highlights
            </a>
            <a
              href="#trophy-room"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-emerald-400"
            >
              Ruang Trofi
            </a>
            <a
              href="#off-pitch"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-emerald-400"
            >
              Off Pitch
            </a>
          </div>
        )}
      </header>

      {/* Hero Section: Stadium & Ultimate Player Card */}
      <section
        id="top"
        className="relative z-10 py-16 sm:py-20 px-4 border-b border-emerald-500/20 bg-gradient-to-b from-emerald-950/50 via-slate-950 to-slate-950"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Pitch Intro */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-5">
              <Radio className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
              <span>{removeHyphens('MATCHDAY READY • SLEMAN, YOGYAKARTA')}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-tight mb-4">
              {removeHyphens('Moch. Hafidz Nur Ramadhan, S.Tr.T.')}
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              {removeHyphens(
                'Playmaker di bidang rekayasa elektro, arsitektur IoT LoRa, administrasi jaringan, serta pengembangan aplikasi web full stack dengan presisi taktis tinggi.'
              )}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#trophy-room"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-slate-950 font-extrabold px-6 py-3 rounded-xl transition-all text-sm uppercase tracking-wider shadow-lg shadow-emerald-500/25"
              >
                <Trophy className="w-4 h-4" />
                <span>Buka Ruang Trofi</span>
              </a>

              <a
                href="#tactics"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-emerald-300 border border-emerald-500/40 font-bold px-5 py-3 rounded-xl transition-colors text-sm uppercase tracking-wider"
              >
                <Target className="w-4 h-4" />
                <span>Papan Taktik</span>
              </a>
            </div>
          </div>

          {/* Right: Ultimate Player Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm rounded-3xl p-6 bg-gradient-to-br from-amber-300/20 via-slate-900 to-emerald-500/20 border-2 border-amber-400/50 shadow-2xl shadow-emerald-500/10 relative overflow-hidden">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="block text-4xl font-black text-amber-400 leading-none">91</span>
                  <span className="block text-xs font-extrabold tracking-widest text-emerald-300 uppercase mt-1">
                    CAM • ENG
                  </span>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-950/70 border border-amber-400/30 text-[11px] font-bold text-amber-300 uppercase">
                    <GraduationCap className="w-3.5 h-3.5" />
                    D4 ELEKTRO
                  </span>
                  <span className="flex items-center justify-end gap-1 text-xs text-slate-300 mt-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    Indonesia
                  </span>
                </div>
              </div>

              <div className="my-4 py-4 px-3 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 text-slate-950 font-black text-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  HR
                </div>
                <div>
                  <p className="font-black text-white text-base uppercase tracking-wide">
                    {removeHyphens('Hafidz Ramadhan')}
                  </p>
                  <p className="text-xs text-emerald-400 font-semibold">
                    {removeHyphens('IoT • Network • Web Developer')}
                  </p>
                </div>
              </div>

              {/* 6 Atribut Utama */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 pt-3 border-t border-amber-400/20 text-xs">
                {PLAYER_STATS.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <span className="text-slate-300 font-semibold">
                      <strong className="text-amber-400 font-black mr-1.5">{stat.rating}</strong>
                      {stat.label}
                    </span>
                    <span className="text-[10px] text-slate-400 truncate max-w-[90px]">
                      {removeHyphens(stat.name)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tactical Pitch Board */}
      <section id="tactics" className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400">
              INTERACTIVE FORMATION 4 3 3
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mt-1">
              Papan Taktik Keahlian
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            Klik posisi pemain di lapangan hijau untuk melihat peran teknis secara interaktif.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Lapangan Sepak Bola Interaktif */}
          <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[380px] rounded-3xl border-2 border-emerald-400/40 bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 overflow-hidden shadow-xl p-4 select-none">
            {/* Garis Lapangan */}
            <div className="absolute inset-4 border-2 border-white/30 rounded-xl pointer-events-none" />
            <div className="absolute top-4 bottom-4 left-1/2 w-0.5 bg-white/30 -translate-x-1/2 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full border-2 border-white/30 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute top-1/2 left-4 w-14 h-36 border-2 border-l-0 border-white/30 -translate-y-1/2 pointer-events-none" />
            <div className="absolute top-1/2 right-4 w-14 h-36 border-2 border-r-0 border-white/30 -translate-y-1/2 pointer-events-none" />

            {/* Node Pemain */}
            {TACTICAL_NODES.map((node) => {
              const isSelected = activeNode.id === node.id;
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setActiveNode(node)}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group transition-transform focus:outline-none ${
                    isSelected ? 'scale-110 z-20' : 'hover:scale-105 z-10'
                  }`}
                >
                  <span
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full font-black text-xs flex items-center justify-center border-2 shadow-lg transition-all ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950 border-white ring-4 ring-amber-400/40'
                        : 'bg-slate-950/90 text-emerald-300 border-emerald-300 group-hover:bg-emerald-400 group-hover:text-slate-950'
                    }`}
                  >
                    {node.pos}
                  </span>
                  <span
                    className={`mt-1 px-2 py-0.5 rounded text-[10px] font-bold whitespace-nowrap shadow ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950'
                        : 'bg-slate-950/80 text-white'
                    }`}
                  >
                    {removeHyphens(node.pos === 'ST' ? 'INNOVATION' : node.role.split('&')[0])}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Panel Detail Taktik */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-emerald-500/30 rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-extrabold uppercase mb-4">
                <Zap className="w-3.5 h-3.5" />
                <span>POSISI {activeNode.pos}</span>
              </div>

              <h3 className="text-xl font-black text-white mb-1">
                {removeHyphens(activeNode.title)}
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
                {removeHyphens(activeNode.role)}
              </p>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {removeHyphens(activeNode.summary)}
              </p>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Kompetensi Kunci Posisi Ini:
              </p>
              <div className="flex flex-wrap gap-2">
                {activeNode.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-lg bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold"
                  >
                    {removeHyphens(skill)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Match Highlights (Proyek) */}
      <section
        id="highlights"
        className="relative z-10 bg-slate-900/60 border-y border-emerald-500/20 py-16 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
              SEASON HIGHLIGHTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mt-1">
              Proyek & Rekam Jejak Lapangan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MATCH_HIGHLIGHTS.map((match, idx) => (
              <div
                key={idx}
                className="bg-slate-950 border border-slate-800 hover:border-emerald-400/50 rounded-3xl p-6 transition-all shadow-lg"
              >
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-400 uppercase tracking-wider">
                    <Activity className="w-4 h-4" />
                    {removeHyphens(match.competition)}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-black">
                    {match.minute} • {removeHyphens(match.score)}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-white mb-3">
                  {removeHyphens(match.title)}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {removeHyphens(match.description)}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                  {match.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-200"
                    >
                      {removeHyphens(tag)}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trophy Room (Sertifikat Google Drive Tab Baru) */}
      <section id="trophy-room" className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
              OFFICIAL TROPHY CABINET
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mt-1">
              Ruang Trofi & Sertifikat
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              {removeHyphens(
                'Klik kartu trofi untuk membuka pratinjau dokumen asli secara langsung di tab baru Google Drive.'
              )}
            </p>
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-300 bg-emerald-500/15 border border-emerald-400/30 px-3.5 py-2 rounded-xl">
            <FolderOpen className="w-4 h-4" />
            <span>Pratinjau Online Google Drive</span>
          </div>
        </div>

        {/* Filter Kategori */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/25'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-emerald-400/40'
              }`}
            >
              {removeHyphens(cat)}
            </button>
          ))}
        </div>

        {/* Grid Kartu Trofi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredCertificates.map((cert) => {
            const isGold = cert.rarity === 'gold';
            return (
              <a
                key={cert.id}
                href={cert.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => handleOpenDrive(e, cert.driveUrl)}
                className={`group rounded-3xl p-6 border transition-all flex flex-col justify-between bg-slate-900/90 hover:-translate-y-1 shadow-lg ${
                  isGold
                    ? 'border-amber-400/40 hover:border-amber-300'
                    : 'border-emerald-500/30 hover:border-emerald-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-extrabold uppercase px-3 py-1 rounded-lg ${
                        isGold
                          ? 'bg-amber-400/15 text-amber-300 border border-amber-400/30'
                          : 'bg-emerald-500/15 text-emerald-300 border border-emerald-400/30'
                      }`}
                    >
                      <Trophy className="w-3.5 h-3.5" />
                      {removeHyphens(cert.category)}
                    </span>

                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-400 font-semibold">
                        {removeHyphens(cert.date)}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded font-black text-xs ${
                          isGold
                            ? 'bg-amber-400 text-slate-950'
                            : 'bg-emerald-400 text-slate-950'
                        }`}
                      >
                        OVR {cert.rating}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-white group-hover:text-amber-300 transition-colors mb-1">
                    {removeHyphens(cert.title)}
                  </h3>
                  <p className="text-xs font-bold text-emerald-400 mb-4">
                    {removeHyphens(cert.subtitle)}
                  </p>

                  <div className="space-y-1.5 text-xs text-slate-300 border-t border-slate-800 pt-3.5 mb-5">
                    <p>
                      <span className="font-bold text-slate-400">Penerbit:</span>{' '}
                      {removeHyphens(cert.issuer)}
                    </p>
                    <p>
                      <span className="font-bold text-slate-400">Nomor:</span>{' '}
                      {removeHyphens(cert.credentialNumber)}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center justify-between w-full pt-3.5 border-t border-slate-800 text-xs font-extrabold uppercase tracking-wider text-amber-300 group-hover:text-amber-200">
                  <span>Buka Sertifikat di Google Drive</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Off Pitch Section */}
      <section
        id="off-pitch"
        className="relative z-10 bg-slate-900/70 border-t border-emerald-500/20 py-16 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-3.5 bg-amber-400/10 border border-amber-400/30 rounded-2xl p-4 mb-8 text-amber-200">
            <ShieldAlert className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-extrabold uppercase tracking-wide text-amber-300">
                VAR & Verifikasi Dokumen Resmi
              </p>
              <p className="text-slate-300 mt-0.5">
                {removeHyphens(
                  'Seluruh dokumen sertifikat dan piagam penghargaan ditampilkan melalui tautan pratinjau Google Drive resmi agar keaslian dokumen terjaga tanpa pengunduhan paksa.'
                )}
              </p>
            </div>
          </div>

          <div className="mb-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400">
              LIFE OUTSIDE THE STADIUM
            </span>
            <h2 className="text-2xl font-black text-white uppercase mt-1">Aktivitas Off Pitch</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-rose-500/15 border border-rose-400/30 text-rose-400 flex items-center justify-center flex-shrink-0">
                <Music className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-white mb-1">Seni Vokal & Musik</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {removeHyphens(
                    'Aktif dalam olah vokal serta berpartisipasi dalam berbagai kegiatan audisi dan pertunjukan musik.'
                  )}
                </p>
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-sky-500/15 border border-sky-400/30 text-sky-400 flex items-center justify-center flex-shrink-0">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-white mb-1">Fotografi & Color Grading</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {removeHyphens(
                    'Eksplorasi penyuntingan foto digital dan penyesuaian profil warna untuk dokumentasi visual.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-950 border-t border-slate-800 py-8 px-4 text-sm text-slate-400">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>{removeHyphens('© 2026 Moch. Hafidz Nur Ramadhan. Seluruh hak cipta dilindungi.')}</p>
          <a
            href="mailto:hafidzramadhan0@gmail.com"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold"
          >
            <Mail className="w-4 h-4" />
            <span>hafidzramadhan0@gmail.com</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
