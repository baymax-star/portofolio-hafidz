import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  Camera,
  Car,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Code2,
  Compass,
  Copy,
  ExternalLink,
  Eye,
  Feather,
  Gauge,
  Globe,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Gamepad2,
  Radio,
  RefreshCw,
  Send,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Volume2,
  Wifi,
  Wrench,
  X,
  Zap
} from 'lucide-react';

/**
 * Ikon LinkedIn (inline SVG). Versi terbaru lucide-react sudah tidak
 * menyertakan ikon brand, jadi dibuat sendiri di sini.
 */
const Linkedin = ({ className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

/**
 * Tautan sertifikat (Google Drive). Klik badge / lisensi akan membuka
 * halaman sertifikat di tab baru.
 */
const CERT_LINKS = {
  bnspNetworkAdmin: 'https://drive.google.com/file/d/1ngmCyrytf5GfGz8b3WhsKP3s3fKtrqiR/view?usp=sharing',
  komdigiNetworkAdmin: 'https://drive.google.com/file/d/1AnMMkJ1Z2a7xM4s6PgCeTVrtEyQm1WI8/view?usp=drive_link',
  komdigiWebDeveloper: 'https://drive.google.com/file/d/10pi0fa2e1UlJtXYBJySU_XXGEIuklS45/view?usp=drive_link',
  komdigiDatascient: 'https://drive.google.com/file/d/1sxdd9qhznYi_ZbkjG7ru1lS98wVhmd0I/view?usp=sharing',
  internshipOppo: 'https://drive.google.com/file/d/1P5yppgS3vBttVYKasqAYyrAYJLIdyTZF/view?usp=drive_link',
  unitechUny: 'https://drive.google.com/file/d/1GxYXBMHkGx6WKMQ2NHNTrPYHJfTbAzwI/view?usp=drive_link',
  toeflLkpb: 'https://drive.google.com/file/d/1FX2Kl0UBsq2HTMwS3KO5PNqfWcSKZBgq/view?usp=drive_link'
};

/**
 * ============================================================================
 * BILINGUAL EDITORIAL DICTIONARY (ENGLISH & BAHASA INDONESIA)
 * Styled in the voice of a warm, humanist football matchday programme.
 * ============================================================================
 */
const COPY = {
  en: {
    nav: {
      story: 'Matchday Story',
      tactics: 'Tactical Pitch',
      highlights: 'Match Highlights',
      seasons: 'Seasons & Badges',
      offPitch: 'Off the Pitch',
      scouting: 'Scouting Desk',
      hireCta: 'Scout / Hire'
    },
    hero: {
      issueTag: 'MATCHDAY PROGRAMME · ISSUE NO. 10 · SLEMAN, YOGYAKARTA',
      headlinePre: 'Engineering with the vision of a',
      headlineAccent: 'box-to-box midfielder.',
      subhead:
        'Moch. Hafidz Nur Ramadhan (Rama), D4 Electrical Engineering graduate from Universitas Negeri Yogyakarta (GPA 3.63 / 4.00).',
      storyP1:
        'Growing up in Sleman at the foot of Mount Merapi taught me that good football and good engineering share the same heartbeat: awareness, clear communication, and connecting every line on the pitch.',
      storyP2:
        'Whether wiring industrial sensors on the factory touchline, architecting PHP & MySQL production dashboards, or building real-time Python & LoRa telemetry pipelines, I thrive where hardware meets human-centered software.',
      badgeGpa: 'UNY D4 Electronics · GPA 3.63',
      badgeToefl: 'TOEFL 570 · C1 Advanced',
      badgeMobility: 'SIM A & SIM C Active · Ready to Relocate',
      copyEmail: 'Copy Email',
      copiedEmail: 'Copied to Clipboard',
      whatsappBtn: 'Direct WhatsApp',
      explorePitchBtn: 'Open Tactical Board',
      playerCard: {
        club: 'SLEMAN XI · GRADUATE CLASS 2026',
        position: 'COMPLETE MIDFIELDER (SWE / IOT / CONTROL)',
        base: 'Sleman, D.I. Yogyakarta',
        availability: 'Available · Open to Relocation',
        quote:
          '“Connect the backline data to the front-line user, cleanly, reliably, and always for the team.”'
      }
    },
    pitchSection: {
      eyebrow: '01 // THE TACTICAL PITCH BOARD',
      title: 'Formation & Role Explorer',
      subtitle:
        'Switch tactical shapes to match your team’s needs, drag players to adjust spacing, or click any shirt number to inspect verified match proof from internships, thesis research, and national certifications.',
      formations: {
        total: {
          name: '4-3-3 Total Engineer',
          tag: 'All-Rounder Profile',
          summary:
            'Balanced end-to-end coverage, linking industrial sensors and network infrastructure at the back with full-stack web apps and accessible interfaces up front.'
        },
        playmaker: {
          name: '4-2-3-1 Digital Playmaker',
          tag: 'Software, Web & Backend Focus',
          summary:
            'Overloads the creative midfield with PHP CodeIgniter, Node.js REST APIs, relational MySQL schemas, and human-centered UI/UX delivery.'
        },
        industrial: {
          name: '3-5-2 Industrial Engine',
          tag: 'IoT, Instrumentation & Control Focus',
          summary:
            'Built for high-tempo plant and field operations, combining ESP32 edge firmware, LoRa SX1276, MQTT-SN telemetry, and root-cause maintenance diagnostics.'
        }
      },
      resetBtn: 'Reset Shape',
      dragHint: 'Tip: Click any player node or drag them across the pitch',
      reportHeader: 'LIVE SCOUTING REPORT',
      proofLabel: 'Verified Match Proof',
      skillsLabel: 'Core Technical Attributes',
      credentialLabel: 'Linked License / Milestone'
    },
    highlightsSection: {
      eyebrow: '02 // MATCH HIGHLIGHTS & CASE STUDIES',
      title: 'Four Defining Fixtures',
      subtitle:
        'Each matchday card includes a hands-on touchline demo embedded directly inside the programme, test the telemetry sliders, log a maintenance check, inspect C++ firmware, or toggle accessible reading mode.',
      inspectFull: 'Read Full Match Report',
      modal: {
        context: 'Pre-Match Context & Problem',
        tactics: 'Technical Architecture & Execution',
        result: 'Full-Time Score & Verified Outcomes',
        close: 'Close Report'
      }
    },
    seasonsSection: {
      eyebrow: '03 // CAREER SEASONS & COACHING LICENSES',
      title: 'Season Log & Trophy Cabinet',
      subtitle:
        'A chronological record of industry spells, academic honors, student leadership, and nationally accredited technical licenses.',
      seasonsTitle: 'Career & Academic Seasons',
      cabinetTitle: 'Coaching Badges & Trophies',
      viewCert: 'View certificate',
      expandMore: 'Match Notes',
      expandLess: 'Hide Notes',
      filterAll: 'All',
      filterBnsp: 'BNSP',
      filterDta: 'Komdigi DTA',
      filterHonors: 'Honors & Language'
    },
    offPitchSection: {
      eyebrow: '04 // OFF THE PITCH, THE HUMAN SIDE',
      title: 'Sleman Roots, Gaming & Color Grading',
      subtitle:
        'Beyond schematics and codebases, I unwind with immersive open-world games like GTA VI, morning rides around Sleman, and Fujifilm-inspired digital color grading.',
      cards: {
        community: {
          title: 'Sleman & Yogyakarta Roots',
          body: 'Grounded in Yogyakarta’s collaborative spirit, valuing humble communication, cross-functional teamwork, and showing up prepared for every shift or sprint.'
        },
        vocal: {
          title: 'Open-World Gaming & GTA VI',
          body: 'Exploring sprawling open-world titles like GTA VI sharpens spatial awareness, quick strategic thinking, and appreciation for cohesive interactive world-building.'
        },
        photo: {
          title: 'Digital Photography & Color Grading',
          body: 'Editing dusk light over Mount Merapi trains an eye for subtle contrast, visual balance, and visual storytelling, skills I bring straight into UI design.'
        }
      },
      labTitle: 'Interactive Fujifilm Film-Simulation Lab · Mount Merapi Dusk',
      labHint: 'Select a film recipe to grade the vector landscape:'
    },
    scoutingSection: {
      eyebrow: '05 // LET’S WORK TOGETHER',
      title: 'Let’s Build Something Reliable Together',
      subtitle:
        'Whether you are hiring for a full-time engineering team, launching an IoT or web project, or looking for a collaborative problem-solver, I would be glad to connect and contribute.',
      channelsTitle: 'Direct Contact Channels',
      copyLabel: 'Click to copy',
      copiedLabel: 'Copied!',
      inviteBadge: 'OPEN TO COLLABORATION & FULL-TIME ROLES',
      inviteHeading: 'Ready to join your team, on-site or remote.',
      inviteBody:
        'From full-stack web platforms and backend APIs to industrial instrumentation, PLC systems, and edge IoT telemetry, I bring hands-on execution, clear documentation, and full relocation readiness across Indonesia.',
      inviteHighlights: [
        'Software Engineering, Backend APIs, IoT & Control Systems',
        'Immediate availability with active SIM A & SIM C mobility',
        'Comfortable with cross-functional teams, field shifts, and fast iteration'
      ],
      sendWa: 'Start a Conversation on WhatsApp',
      sendEmail: 'Send an Email Invitation'
    },
    footer: {
      tagline: 'Moch. Hafidz Nur Ramadhan · Sleman, Yogyakarta · Issue 2026',
      note: 'Crafted with warm matchday paper, clean React architecture & zero external broken assets.',
      backTop: 'Back to Kickoff'
    },
    toast: {
      emailCopied: 'Copied hafidzramadhan02@gmail.com',
      phoneCopied: 'Copied +62 858-0470-5361'
    }
  },
  id: {
    nav: {
      story: 'Kisah',
      tactics: 'Papan Taktik',
      highlights: 'Sorotan Laga',
      seasons: 'Musim & Lisensi',
      offPitch: 'Di Luar Lapangan',
      scouting: 'Meja Rekrutmen',
      hireCta: 'Rekrut / Hubungi'
    },
    hero: {
      issueTag: 'BUKU PROGRAM PERTANDINGAN · EDISI NO. 10 · SLEMAN, YOGYAKARTA',
      headlinePre: 'Merekayasa sistem dengan visi seorang',
      headlineAccent: 'gelandang box-to-box.',
      subhead:
        'Moch. Hafidz Nur Ramadhan ( Rama), Lulusan Sarjana Terapan (D4) Teknik Elektronika Universitas Negeri Yogyakarta (IPK 3.63 / 4.00).',
      storyP1:
        'Tumbuh di Sleman di kaki Gunung Merapi mengajarkan saya bahwa sepak bola yang baik dan rekayasa teknologi yang andal memiliki detak jantung yang sama: kepekaan membaca situasi, komunikasi jernih, dan kemampuan menghubungkan setiap lini.',
      storyP2:
        'Baik saat menangani sensor industri di lini produksi, merancang dasbor web PHP & MySQL, maupun membangun jalur telemetri real-time Python & LoRa, saya bersemangat menjembatani perangkat keras dengan perangkat lunak yang humanis.',
      badgeGpa: 'D4 Elektronika UNY · IPK 3.63 ',
      badgeToefl: 'TOEFL 570 · C1 Advanced',
      badgeMobility: 'SIM A & SIM C Aktif · Siap Relokasi',
      copyEmail: 'Salin Email',
      copiedEmail: 'Email Tersalin',
      whatsappBtn: 'WhatsApp Langsung',
      explorePitchBtn: 'Buka Papan Taktik',
      playerCard: {
        club: 'SLEMAN XI · ANGKATAN LULUS 2026',
        position: 'GELANDANG SERBABISA (SWE / IOT / KONTROL)',
        base: 'Sleman, D.I. Yogyakarta',
        availability: 'Siap Bekerja · Bersedia Relokasi',
        quote:
          '“Menghubungkan data dari lini belakang ke pengguna di lini depan, secara rapi, andal, dan selalu untuk tim.”'
      }
    },
    pitchSection: {
      eyebrow: '01 // PAPAN TAKTIK & POSISI',
      title: 'Eksplorasi Formasi & Peran',
      subtitle:
        'Ubah formasi sesuai kebutuhan tim Anda, geser pemain di lapangan, atau klik nomor punggung untuk memeriksa bukti nyata dari pengalaman magang, riset tugas akhir, dan sertifikasi.',
      formations: {
        total: {
          name: '4-3-3 Total Engineer',
          tag: 'Profil Serbabisa (All-Rounder)',
          summary:
            'Cakupan seimbang dari lini ke lini, menghubungkan sensor industri dan infrastruktur jaringan di belakang dengan aplikasi web full-stack serta antarmuka aksesibel di depan.'
        },
        playmaker: {
          name: '4-2-3-1 Digital Playmaker',
          tag: 'Fokus Software, Web & Backend',
          summary:
            'Memperkuat lini tengah kreatif dengan PHP CodeIgniter, REST API Node.js, skema relasional MySQL, dan perancangan UI/UX yang ramah pengguna.'
        },
        industrial: {
          name: '3-5-2 Industrial Engine',
          tag: 'Fokus IoT, Instrumentasi & Kontrol',
          summary:
            'Dirancang untuk tempo tinggi operasional pabrik dan lapangan, memadukan firmware ESP32, LoRa SX1276, telemetri MQTT-SN, serta diagnostik pemeliharaan.'
        }
      },
      resetBtn: 'Reset Posisi',
      dragHint: 'Tips: Klik pemain mana pun atau geser posisinya di atas lapangan',
      reportHeader: 'LAPORAN PEMANDU BAKAT',
      proofLabel: 'Bukti Nyata di Lapangan',
      skillsLabel: 'Atribut Teknis Utama',
      credentialLabel: 'Lisensi / Pencapaian Terkait'
    },
    highlightsSection: {
      eyebrow: '02 // SOROTAN LAGA & STUDI KASUS',
      title: 'Empat Pertandingan Penentu',
      subtitle:
        'Setiap kartu program memuat demo interaktif langsung di dalamnya, uji slider telemetri gas, catat inspeksi perawatan lini, intip firmware C++, atau aktifkan mode baca ramah disleksia.',
      inspectFull: 'Baca Laporan Lengkap',
      modal: {
        context: 'Konteks Pra-Pertandingan & Masalah',
        tactics: 'Arsitektur Teknis & Eksekusi',
        result: 'Skor Akhir & Hasil Terverifikasi',
        close: 'Tutup Laporan'
      }
    },
    seasonsSection: {
      eyebrow: '03 // MUSIM KARIER & LISENSI KEPELATIHAN',
      title: 'Catatan Musim & Lemari Trofi',
      subtitle:
        'Rekam jejak kronologis pengalaman industri, prestasi akademik, kepemimpinan organisasi, serta lisensi kompetensi terakreditasi nasional.',
      seasonsTitle: 'Musim Karier & Akademik',
      cabinetTitle: 'Lisensi & Penghargaan',
      viewCert: 'Lihat sertifikat',
      expandMore: 'Catatan Laga',
      expandLess: 'Tutup Catatan',
      filterAll: 'Semua',
      filterBnsp: 'BNSP',
      filterDta: 'Komdigi DTA',
      filterHonors: 'Prestasi & Bahasa'
    },
    offPitchSection: {
      eyebrow: '04 // DI LUAR LAPANGAN, SISI HUMANIS',
      title: 'Akar Sleman, Gaming & Color Grading',
      subtitle:
        'Di luar skematik dan baris kode, saya melepas penat dengan gim open-world seperti GTA 6, berkendara pagi di sekitar Sleman, serta color grading fotografi digital ala Fujifilm.',
      cards: {
        community: {
          title: 'Akar Sleman & Yogyakarta',
          body: 'Tumbuh dalam budaya gotong royong Yogyakarta, menjunjung komunikasi yang rendah hati, kerja sama lintas divisi, dan kesiapan penuh di setiap shift maupun sprint.'
        },
        vocal: {
          title: 'Gaming Open-World & GTA 6',
          body: 'Menjelajahi dunia gim open-world seperti GTA 6 melatih kepekaan spasial, pengambilan keputusan cepat, dan apresiasi terhadap detail sistem interaktif.'
        },
        photo: {
          title: 'Fotografi Digital & Color Grading',
          body: 'Mengolah cahaya senja di lereng Gunung Merapi melatih kepekaan kontras, keseimbangan visual, dan cerita yang saya terapkan langsung pada desain antarmuka.'
        }
      },
      labTitle: 'Lab Simulasi Film Fujifilm Interaktif · Senja Gunung Merapi',
      labHint: 'Pilih resep simulasi film untuk mewarnai lanskap vektor:'
    },
    scoutingSection: {
      eyebrow: '05 // MARI BEKERJA BERSAMA',
      title: 'Ajak Saya Bergabung di Tim Anda',
      subtitle:
        'Baik untuk posisi penuh waktu di tim rekayasa, pengembangan sistem web dan IoT, maupun kolaborasi proyek teknologi, saya terbuka untuk berdiskusi dan berkontribusi secara nyata.',
      channelsTitle: 'Kontak Langsung',
      copyLabel: 'Klik untuk menyalin',
      copiedLabel: 'Tersalin!',
      inviteBadge: 'TERBUKA UNTUK KOLABORASI & KARIER PENUH WAKTU',
      inviteHeading: 'Siap berkontribusi bersama tim Anda, di lapangan maupun jarak jauh.',
      inviteBody:
        'Mulai dari pengembangan aplikasi web full-stack dan backend API hingga instrumentasi industri, sistem PLC, dan telemetri IoT, saya siap bekerja secara kolaboratif, terstruktur, dan bersedia relokasi ke berbagai kota.',
      inviteHighlights: [
        'Software Engineering, Backend API, IoT & Sistem Kendali',
        'Siap bergabung segera dengan mobilitas aktif SIM A & SIM C',
        'Terbiasa bekerja lintas divisi, lingkungan produksi, maupun sprint pengembangan'
      ],
      sendWa: 'Ajak Diskusi via WhatsApp',
      sendEmail: 'Kirim Ajakan via Email'
    },
    footer: {
      tagline: 'Moch. Hafidz Nur Ramadhan · Sleman, Yogyakarta · Edisi 2026',
      note: 'Disusun dengan nuansa kertas program pertandingan, arsitektur React bersih, dan tanpa aset eksternal rusak.',
      backTop: 'Kembali ke Kickoff'
    },
    toast: {
      emailCopied: 'Berhasil menyalin hafidzramadhan02@gmail.com',
      phoneCopied: 'Berhasil menyalin +62 858-0470-5361'
    }
  }
};

/**
 * ============================================================================
 * TACTICAL PITCH PLAYERS & FORMATIONS DATA
 * Coordinates are percentage-based on a horizontal tactical pitch (x: 0-100, y: 0-100)
 * ============================================================================
 */
const PITCH_PLAYERS = [
  {
    id: 'gk-1',
    number: '1',
    shortCode: 'GK',
    roleTitle: {
      en: 'MySQL & Relational Data Integrity',
      id: 'MySQL & Integritas Data Relasional'
    },
    tacticalRole: {
      en: 'Sweeper-Keeper · Last Line of Data Defense',
      id: 'Sweeper-Keeper · Penjaga Terakhir Integritas Data'
    },
    summary: {
      en: 'Safeguards normalized SQL schemas, prevents duplicate entries, and guarantees clean historical logs across production shifts.',
      id: 'Menjaga skema SQL ternormalisasi, mencegah duplikasi entri, dan memastikan log historis akurat di setiap shift produksi.'
    },
    proof: {
      en: 'Designed the relational MySQL database at OPPO Indonesia (Line 403) tracking machine IDs, part batches, and component lifespan cycles.',
      id: 'Merancang basis data relasional MySQL di OPPO Indonesia (Line 403) untuk melacak ID mesin, batch suku cadang, dan siklus umur komponen.'
    },
    skills: ['MySQL', 'SQL Queries', 'Schema Normalization', 'Data Validation'],
    credential: 'Associate Data Scientist (+ Python) · Digital Talent Academy (2026)',
    certKey: 'komdigiDatascient',
    coords: {
      total: { x: 9, y: 50 },
      playmaker: { x: 9, y: 50 },
      industrial: { x: 9, y: 50 }
    }
  },
  {
    id: 'cb-4',
    number: '4',
    shortCode: 'CB',
    roleTitle: {
      en: 'Root Cause Analysis & Troubleshooting',
      id: 'Analisis Akar Masalah & Troubleshooting'
    },
    tacticalRole: {
      en: 'Ball-Playing Center Back · Diagnostic Anchor',
      id: 'Bek Tengah · Jangkar Diagnostik Lini'
    },
    summary: {
      en: 'Reads the game early, isolating sensor drift, wiring faults, and software exceptions before they halt production.',
      id: 'Membaca permainan lebih awal, mengisolasi penyimpangan sensor, gangguan kabel, dan bug sistem sebelum menghentikan produksi.'
    },
    proof: {
      en: 'Diagnosed and resolved 20+ equipment, sensor, and workflow bottlenecks during daily operations on OPPO Production Line 403.',
      id: 'Mendiagnosis dan menyelesaikan 20+ kendala peralatan, sensor, dan alur kerja selama operasional harian di OPPO Production Line 403.'
    },
    skills: ['Root Cause Analysis', 'Hardware Diagnostics', 'Preventive Maintenance', 'SOP Compliance'],
    credential: 'BNSP Electronic Equipment Assembler (2023)',
    coords: {
      total: { x: 24, y: 32 },
      playmaker: { x: 24, y: 34 },
      industrial: { x: 22, y: 26 }
    }
  },
  {
    id: 'cb-5',
    number: '5',
    shortCode: 'LCB',
    roleTitle: {
      en: 'Industrial Instrumentation, PLC & Networking',
      id: 'Instrumentasi Industri, PLC & Jaringan'
    },
    tacticalRole: {
      en: 'Defensive Enforcer · Plant & Network Backbone',
      id: 'Bek Tangguh · Tulang Punggung Pabrik & Jaringan'
    },
    summary: {
      en: 'Bridges field transducers, PLC/HMI control logic, and Linux/Windows network reliability across industrial environments.',
      id: 'Menghubungkan transduser lapangan, logika kontrol PLC/HMI, serta keandalan jaringan Linux/Windows di lingkungan industri.'
    },
    proof: {
      en: 'Completed D4 Electronics Engineering labs in Industrial Instrumentation & PLC Automation alongside dual network certifications.',
      id: 'Menyelesaikan praktikum D4 Teknik Elektronika pada Instrumentasi Industri & Otomasi PLC serta dua sertifikasi jaringan.'
    },
    skills: ['PLC & HMI', 'Industrial Instrumentation', 'Linux / Windows', 'TCP/IP & UDP'],
    credential: 'BNSP Junior Network Administrator (2024)',
    certKey: 'bnspNetworkAdmin',
    coords: {
      total: { x: 24, y: 68 },
      playmaker: { x: 24, y: 66 },
      industrial: { x: 22, y: 50 }
    }
  },
  {
    id: 'rb-2',
    number: '2',
    shortCode: 'WB',
    roleTitle: {
      en: 'Embedded C/C++ & Sensor Acquisition',
      id: 'Firmware C/C++ & Akuisisi Sensor'
    },
    tacticalRole: {
      en: 'Attacking Wing-Back · Touchline Signal Runner',
      id: 'Bek Sayap · Pengolah Sinyal Garis Tepi'
    },
    summary: {
      en: 'Writes deterministic C/C++ microcontroller routines with ADC oversampling and calibration curves for crisp field telemetry.',
      id: 'Menulis rutin mikrokontroler C/C++ deterministik dengan oversampling ADC dan kurva kalibrasi untuk telemetri lapangan presisi.'
    },
    proof: {
      en: 'Engineered SPARK real-time air quality monitoring firmware, winning 2nd Runner-Up at the national U-NITECH 2023 competition.',
      id: 'Merancang firmware pemantau kualitas udara real-time SPARK, meraih Juara 2 pada kompetisi nasional U-NITECH 2023.'
    },
    skills: ['C / C++', 'ADC Calibration', 'Multi-Gas Sensors', 'Signal Filtering'],
    credential: 'U-NITECH 2023 National 2nd Runner-Up',
    certKey: 'unitechUny',
    coords: {
      total: { x: 32, y: 14 },
      playmaker: { x: 31, y: 15 },
      industrial: { x: 22, y: 74 }
    }
  },
  {
    id: 'cdm-6',
    number: '6',
    shortCode: 'CDM',
    roleTitle: {
      en: 'PHP CodeIgniter & Node.js REST APIs',
      id: 'PHP CodeIgniter & REST API Node.js'
    },
    tacticalRole: {
      en: 'Deep-Lying Regista · Backend Tempo Controller',
      id: 'Regista · Pengatur Tempo Backend & API'
    },
    summary: {
      en: 'Dictates application rhythm from the base of midfield, structuring clean MVC controllers, REST endpoints, and automated bot services.',
      id: 'Mengatur ritme aplikasi dari lini tengah, menyusun controller MVC yang bersih, endpoint REST, dan layanan bot otomatis.'
    },
    proof: {
      en: 'Built the OPPO Line 403 web app in PHP CodeIgniter and integrated Node.js + whatsapp-web.js for instant volcanic hazard alerts.',
      id: 'Membangun aplikasi web OPPO Line 403 dengan PHP CodeIgniter serta mengintegrasikan Node.js + whatsapp-web.js untuk peringatan bahaya.'
    },
    skills: ['PHP', 'CodeIgniter', 'Node.js', 'REST API', 'OOP'],
    credential: 'Intermediate Assistant Web Developer · Komdigi DTA (2026)',
    certKey: 'komdigiWebDeveloper',
    coords: {
      total: { x: 46, y: 50 },
      playmaker: { x: 42, y: 36 },
      industrial: { x: 45, y: 34 }
    }
  },
  {
    id: 'cm-8',
    number: '8',
    shortCode: 'CM',
    roleTitle: {
      en: 'Python, ESP32 & LoRa / MQTT-SN',
      id: 'Python, ESP32 & LoRa / MQTT-SN'
    },
    tacticalRole: {
      en: 'Box-to-Box Engine · Edge-to-Cloud Connector',
      id: 'Gelandang Box-to-Box · Penghubung Edge ke Cloud'
    },
    summary: {
      en: 'Covers every blade of grass between remote ESP32 + LoRa SX1276 nodes, UDP :1884 gateways, and real-time Python analytics.',
      id: 'Menjelajah setiap jengkal antara node ESP32 + LoRa SX1276 jarak jauh, gateway UDP :1884, dan analitik Python real-time.'
    },
    proof: {
      en: 'Published final thesis in JRAEE on long-range volcanic CO₂ & H₂S early warning telemetry operating without field internet.',
      id: 'Memublikasikan tugas akhir di jurnal JRAEE tentang telemetri peringatan dini gas vulkanik CO₂ & H₂S tanpa internet lapangan.'
    },
    skills: ['Python', 'ESP32', 'LoRa SX1276', 'MQTT / MQTT-SN', 'UDP :1884'],
    credential: 'Published Author · JRAEE (2026)',
    coords: {
      total: { x: 58, y: 28 },
      playmaker: { x: 42, y: 64 },
      industrial: { x: 52, y: 66 }
    }
  },
  {
    id: 'cam-10',
    number: '10',
    shortCode: 'CAM',
    roleTitle: {
      en: 'System Analysis & Technical Documentation',
      id: 'Analisis Sistem & Dokumentasi Teknis'
    },
    tacticalRole: {
      en: 'Classic No. 10 Playmaker · Vision & Clarity',
      id: 'Playmaker No. 10 · Visi & Kejelasan Sistem'
    },
    summary: {
      en: 'Turns complex technical requirements into clear architecture diagrams, Terms of Reference, SOPs, and bilingual reports.',
      id: 'Menerjemahkan kebutuhan teknis kompleks menjadi diagram arsitektur, TOR, SOP, dan laporan dwibahasa yang mudah dipahami.'
    },
    proof: {
      en: 'Authored competition TORs as UNITY #10 UI/UX Coordinator, documented 20+ HIMANIKA events, and achieved TOEFL 570 (C1).',
      id: 'Menyusun TOR kompetisi sebagai Koordinator UI/UX UNITY #10, mendokumentasikan 20+ acara HIMANIKA, dan meraih TOEFL 570 (C1).'
    },
    skills: ['System Analysis', 'Technical Writing', 'Cross-Team Leadership', 'C1 English (TOEFL 570)'],
    credential: 'EF SET C1 Advanced / TOEFL 570 (2026)',
    certKey: 'toeflLkpb',
    coords: {
      total: { x: 64, y: 68 },
      playmaker: { x: 64, y: 50 },
      industrial: { x: 68, y: 50 }
    }
  },
  {
    id: 'lw-11',
    number: '11',
    shortCode: 'LW',
    roleTitle: {
      en: 'Flutter, JavaScript & Accessible UI/UX',
      id: 'Flutter, JavaScript & UI/UX Aksesibel'
    },
    tacticalRole: {
      en: 'Inverted Winger · Human-Centered Interface Craft',
      id: 'Penyerang Sayap · Antarmuka Berpusat pada Manusia'
    },
    summary: {
      en: 'Delivers responsive, empathetic front-end experiences, from factory operator consoles to dyslexia-friendly mobile learning.',
      id: 'Menghadirkan pengalaman front-end responsif dan empatik, dari konsol operator pabrik hingga pembelajaran ramah disleksia.'
    },
    proof: {
      en: 'Designed ARCADIA adaptive learning flows for dyslexic children and built responsive operator UIs with HTML/CSS/JS & Flutter.',
      id: 'Merancang alur belajar adaptif ARCADIA untuk anak disleksia serta membangun UI operator responsif dengan HTML/CSS/JS & Flutter.'
    },
    skills: ['Flutter', 'JavaScript', 'HTML5 / CSS3', 'UI/UX & Accessibility'],
    credential: 'UNITY #10 UI/UX Competition Coordinator',
    coords: {
      total: { x: 84, y: 26 },
      playmaker: { x: 82, y: 24 },
      industrial: { x: 85, y: 34 }
    }
  },
  {
    id: 'st-9',
    number: '9',
    shortCode: 'ST',
    roleTitle: {
      en: 'End-to-End Delivery & Production Readiness',
      id: 'Eksekusi End-to-End & Kesiapan Produksi'
    },
    tacticalRole: {
      en: 'Clinical Finisher · Shipping Reliable Solutions',
      id: 'Penyerang Utama · Menuntaskan Solusi Andal'
    },
    summary: {
      en: 'Brings every build across the goal line, combining disciplined testing, shift adaptability, and full relocation readiness.',
      id: 'Menuntaskan setiap proyek hingga garis akhir, memadukan pengujian disiplin, adaptasi kerja shift, dan kesiapan relokasi penuh.'
    },
    proof: {
      en: 'Graduated (GPA 3.63) while shipping real factory software, peer-reviewed research, and national competition podiums.',
      id: 'Lulus (IPK 3.63) sambil merilis perangkat lunak pabrik nyata, publikasi jurnal ilmiah, dan podium kompetisi nasional.'
    },
    skills: ['End-to-End Delivery', 'QA & Verification', 'Shift & Field Ready', 'Team Collaboration'],
    credential: 'D4 Electronics Engineering UNY · (2026)',
    coords: {
      total: { x: 87, y: 66 },
      playmaker: { x: 86, y: 68 },
      industrial: { x: 85, y: 66 }
    }
  }
];

/**
 * ============================================================================
 * MATCH HIGHLIGHTS (4 INTERACTIVE PROJECT CASE STUDIES)
 * ============================================================================
 */
const MATCH_HIGHLIGHTS = {
  volcanic: {
    id: 'volcanic',
    competition: { en: 'FINAL THESIS · JRAEE JOURNAL', id: 'TUGAS AKHIR · JURNAL JRAEE' },
    season: '2025 / 2026',
    title: {
      en: 'Volcanic Toxic Gas Early Warning System',
      id: 'Sistem Peringatan Dini Gas Beracun Vulkanik'
    },
    subtitle: {
      en: 'Offline-capable LoRa SX1276 & MQTT-SN telemetry with automated WhatsApp emergency dispatch.',
      id: 'Telemetri LoRa SX1276 & MQTT-SN tanpa internet lapangan dengan peringatan darurat WhatsApp otomatis.'
    },
    context: {
      en: 'Communities and field researchers around active volcanoes like Mount Merapi often lose cellular coverage during weather or seismic disturbances, creating critical delays when CO₂ and H₂S concentrations spike.',
      id: 'Masyarakat dan peneliti lapangan di sekitar gunung api aktif seperti Merapi sering kehilangan sinyal seluler saat cuaca ekstrem atau aktivitas vulkanik, menimbulkan keterlambatan krusial ketika konsentrasi CO₂ dan H₂S melonjak.'
    },
    tactics: {
      en: 'Paired MQ-135 (CO₂) and MQ-136 (H₂S) sensors with an ESP32 microcontroller transmitting compact frames over 915 MHz LoRa SX1276. A base station bridges MQTT-SN packets on UDP port 1884 into an MQTT broker, where a Python engine evaluates thresholds and triggers whatsapp-web.js alerts.',
      id: 'Memadukan sensor MQ-135 (CO₂) dan MQ-136 (H₂S) dengan mikrokontroler ESP32 yang mengirim paket ringkas melalui LoRa SX1276 915 MHz. Gateway menjembatani paket MQTT-SN pada UDP port 1884 ke broker MQTT, lalu mesin Python mengevaluasi ambang batas dan memicu peringatan whatsapp-web.js.'
    },
    outcomes: {
      en: [
        'Reliable multi-kilometer RF telemetry with zero cellular dependency at the crater flank.',
        'Sub-3-second anomaly detection to automated WhatsApp emergency group notification.',
        'Peer-reviewed publication in the Journal of Robotics, Automation, and Electronics Engineering (JRAEE).'
      ],
      id: [
        'Telemetri RF jarak jauh yang andal tanpa ketergantungan sinyal seluler di lereng gunung.',
        'Deteksi anomali hingga notifikasi grup darurat WhatsApp otomatis di bawah 3 detik.',
        'Dipublikasikan pada jurnal ilmiah Journal of Robotics, Automation, and Electronics Engineering (JRAEE).'
      ]
    },
    stack: ['ESP32', 'LoRa SX1276', 'MQ-135 / MQ-136', 'UDP :1884 MQTT-SN', 'Python', 'Node.js', 'whatsapp-web.js'],
    nodes: [
      {
        id: 'sensor',
        step: '01',
        label: 'MQ-135 / 136',
        sub: { en: 'Gas Sensors', id: 'Sensor Gas' },
        detail: {
          en: 'Continuous analog sampling of CO₂ (ppm) and H₂S (ppm) with warm-up baseline stabilization.',
          id: 'Pencuplikan analog kontinu CO₂ (ppm) dan H₂S (ppm) dengan stabilisasi baseline pemanasan.'
        }
      },
      {
        id: 'esp32',
        step: '02',
        label: 'ESP32 MCU',
        sub: { en: 'Edge Node', id: 'Node Edge' },
        detail: {
          en: 'Formats calibrated sensor readings into lightweight binary payloads with node health flags.',
          id: 'Mengemas pembacaan sensor terkalibrasi menjadi payload biner ringan beserta status kesehatan node.'
        }
      },
      {
        id: 'lora',
        step: '03',
        label: 'LoRa SX1276',
        sub: { en: '915 MHz RF', id: 'RF 915 MHz' },
        detail: {
          en: 'Long-range spread-spectrum radio link piercing volcanic terrain without cellular towers.',
          id: 'Tautan radio spread-spectrum jarak jauh menembus kontur pegunungan tanpa menara seluler.'
        }
      },
      {
        id: 'gateway',
        step: '04',
        label: 'UDP :1884',
        sub: { en: 'MQTT-SN Bridge', id: 'Gateway MQTT-SN' },
        detail: {
          en: 'Base gateway translates UDP :1884 MQTT-SN packets into standard MQTT topics for Python processing.',
          id: 'Gateway menerjemahkan paket UDP :1884 MQTT-SN menjadi topik MQTT standar untuk diproses Python.'
        }
      },
      {
        id: 'whatsapp',
        step: '05',
        label: 'WhatsApp Bot',
        sub: { en: 'whatsapp-web.js', id: 'Bot Peringatan' },
        detail: {
          en: 'Dispatches formatted hazard alerts with ppm readings and severity status to responder groups.',
          id: 'Mengirim peringatan bahaya terformat lengkap dengan nilai ppm dan status ke grup tanggap darurat.'
        }
      }
    ]
  },
  oppo: {
    id: 'oppo',
    competition: { en: 'MANUFACTURING INTERNSHIP · OPPO INDONESIA', id: 'MAGANG MANUFAKTUR · OPPO INDONESIA' },
    season: 'Nov 2023 s.d. Feb 2024',
    title: {
      en: 'Production Line 403 Web Inventory & Lifetime Tracker',
      id: 'Sistem Inventaris Web & Pelacak Umur Komponen Line 403'
    },
    subtitle: {
      en: 'Full-stack PHP CodeIgniter & MySQL console built on the factory floor to prevent unscheduled downtime.',
      id: 'Konsol full-stack PHP CodeIgniter & MySQL yang dibangun di lantai pabrik untuk mencegah henti mesin mendadak.'
    },
    context: {
      en: 'High-throughput smartphone assembly on Production Line 403 relies on dozens of precision valves, sensors, and conveyor parts. Manual tracking made proactive replacement scheduling slow across shifts.',
      id: 'Perakitan ponsel berkecepatan tinggi di Production Line 403 bergantung pada puluhan katup presisi, sensor, dan sabuk konveyor. Pencatatan manual memperlambat jadwal penggantian preventif antar-shift.'
    },
    tactics: {
      en: 'Engineered a full-stack web dashboard using PHP (CodeIgniter MVC), HTML/CSS/JavaScript, and a normalized MySQL database to monitor spare-part inventory, operating cycles, and maintenance intervals.',
      id: 'Merancang dasbor web full-stack menggunakan PHP (CodeIgniter MVC), HTML/CSS/JavaScript, dan basis data MySQL ternormalisasi untuk memantau stok suku cadang, siklus operasi, dan interval perawatan.'
    },
    outcomes: {
      en: [
        'Centralized spare-part stock & component lifetime visibility for Production Line 403.',
        'Diagnosed and resolved 20+ hardware, sensor, and operational issues during daily line support.',
        'Accelerated shift handover checks and preventive maintenance accountability.'
      ],
      id: [
        'Memusatkan visibilitas stok suku cadang & masa pakai komponen pada Production Line 403.',
        'Mendiagnosis dan menyelesaikan 20+ kendala perangkat keras, sensor, dan operasional harian.',
        'Mempercepat pengecekan serah terima shift serta akuntabilitas pemeliharaan preventif.'
      ]
    },
    stack: ['PHP', 'CodeIgniter', 'JavaScript', 'HTML5 / CSS3', 'MySQL', 'SQL', 'Line Troubleshooting']
  },
  spark: {
    id: 'spark',
    competition: { en: '2ND RUNNER-UP · U-NITECH NATIONAL 2023', id: 'JUARA 2 · KOMPETISI NASIONAL U-NITECH 2023' },
    season: '2023',
    title: {
      en: 'SPARK, Real-Time Air Quality Monitor',
      id: 'SPARK, Pemantau Kualitas Udara Real-Time'
    },
    subtitle: {
      en: 'Deterministic C/C++ embedded sensor acquisition & multi-pollutant hazard classification.',
      id: 'Akuisisi sensor tertanam C/C++ deterministik & klasifikasi bahaya multi-polutan.'
    },
    context: {
      en: 'Indoor workshops and dense urban rooms can experience rapid rises in fine particulates and carbon monoxide without immediate visual cues.',
      id: 'Ruang kerja tertutup dan kawasan padat aktivitas dapat mengalami lonjakan partikulat halus dan karbon monoksida tanpa tanda visual langsung.'
    },
    tactics: {
      en: 'Programmed low-latency C/C++ microcontroller firmware implementing 16-sample moving-average ADC filtering, baseline resistance compensation, and instant AQI tier classification.',
      id: 'Memprogram firmware mikrokontroler C/C++ berlatensi rendah dengan penyaringan ADC moving-average 16-sampel, kompensasi resistansi baseline, dan klasifikasi tingkat AQI instan.'
    },
    outcomes: {
      en: [
        'Awarded 2nd Runner-Up at the national U-NITECH 2023 technology innovation competition.',
        'Delivered stable sub-second air quality anomaly alerts during live jury demonstrations.'
      ],
      id: [
        'Meraih Juara 2 (2nd Runner-Up) pada kompetisi inovasi teknologi nasional U-NITECH 2023.',
        'Menghasilkan peringatan anomali kualitas udara di bawah 1 detik saat demonstrasi juri.'
      ]
    },
    stack: ['C / C++', 'Embedded MCU', 'ADC Filtering', 'Multi-Sensor Telemetry']
  },
  arcadia: {
    id: 'arcadia',
    competition: { en: 'HUMAN-CENTERED UI/UX · EDTECH ACCESSIBILITY', id: 'UI/UX HUMANIS · AKSESIBILITAS EDTECH' },
    season: '2023',
    title: {
      en: 'ARCADIA, Adaptive Learning Platform for Dyslexic Children',
      id: 'ARCADIA, Platform Pembelajaran Adaptif untuk Anak Disleksia'
    },
    subtitle: {
      en: 'Inclusive interface design featuring warm low-glare paper tones, generous letter spacing, and phonetic scaffolding.',
      id: 'Desain antarmuka inklusif dengan warna kertas hangat rendah silau, jarak huruf lega, dan panduan suku kata fonetik.'
    },
    context: {
      en: 'Standard digital textbooks use cramped line heights and stark white backgrounds that trigger visual crowding and reading fatigue for children with dyslexia.',
      id: 'Buku digital standar menggunakan jarak baris rapat dan latar putih menyilaukan yang memicu kepadatan visual serta kelelahan membaca pada anak disleksia.'
    },
    tactics: {
      en: 'Designed an adaptive reading system with customizable letter-spacing tokens, warm cream backgrounds (#FDF6E3), syllable segmentation, and multisensory audio cues.',
      id: 'Merancang sistem baca adaptif dengan token jarak huruf yang dapat disesuaikan, latar krem hangat (#FDF6E3), pemenggalan suku kata, serta panduan audio multisensori.'
    },
    outcomes: {
      en: [
        'Produced a complete interactive prototype and accessible design system specification.',
        'Demonstrated measurable reduction in visual clutter through progressive lesson scaffolding.'
      ],
      id: [
        'Menghasilkan purwarupa interaktif lengkap dan spesifikasi sistem desain aksesibel.',
        'Menunjukkan pengurangan kepadatan visual secara nyata melalui struktur pelajaran bertahap.'
      ]
    },
    stack: ['UI/UX Design', 'Cognitive Accessibility', 'Flutter Concept', 'Design Tokens']
  }
};

/**
 * ============================================================================
 * INITIAL SPARE PARTS FOR OPPO LINE 403 MINI-TABLE
 * ============================================================================
 */
const INITIAL_LINE_403_PARTS = [
  { id: 'VLV-403A', name: 'Pneumatic Pick-and-Place Valve', status: 'due', health: 22, cycles: '19,140 / 20,000', lastCheck: 'Shift A · 06:30' },
  { id: 'OPT-403B', name: 'Optical PCB Alignment Sensor', status: 'optimal', health: 91, cycles: '3,150 / 35,000', lastCheck: 'Shift A · 07:15' },
  { id: 'BLT-403C', name: 'ESD Anti-Static Conveyor Belt', status: 'due', health: 34, cycles: '13,200 / 15,000', lastCheck: 'Shift C · 22:40' },
  { id: 'SRV-403D', name: 'Precision Micro-Torque Driver', status: 'optimal', health: 86, cycles: '7,020 / 50,000', lastCheck: 'Shift B · 14:10' }
];

/**
 * ============================================================================
 * CAREER SEASONS & COACHING BADGES DATA
 * ============================================================================
 */
const CAREER_SEASONS = [
  {
    id: 'oppo-season',
    certKey: 'internshipOppo',
    type: 'work',
    period: 'Nov 2023 s.d. Feb 2024',
    role: {
      en: 'Mechanical Engineer / IT System Support Intern',
      id: 'Mechanical Engineer / IT System Support Intern'
    },
    club: 'PT Bright Mobile Telecommunication (OPPO Indonesia)',
    city: 'Tangerang, Banten',
    tag: { en: 'Industry Spell · Line 403', id: 'Pengalaman Industri · Line 403' },
    notes: {
      en: [
        'Built a full-stack PHP (CodeIgniter), JavaScript, and MySQL spare-part & machine lifetime tracking dashboard for Production Line 403.',
        'Conducted daily preventive inspections, verified operational data integrity, and resolved 20+ equipment and system bottlenecks.',
        'Collaborated directly with line technicians and shift supervisors to streamline maintenance handovers.'
      ],
      id: [
        'Membangun dasbor pelacak suku cadang & masa pakai mesin berbasis PHP (CodeIgniter), JavaScript, dan MySQL untuk Production Line 403.',
        'Melakukan inspeksi preventif harian, memvalidasi integritas data operasional, dan menyelesaikan 20+ kendala peralatan maupun sistem.',
        'Berkolaborasi langsung dengan teknisi lini dan supervisor shift untuk memperlancar serah terima perawatan.'
      ]
    }
  },
  {
    id: 'uny-season',
    type: 'edu',
    period: 'Aug 2021 s.d. May 2026',
    role: {
      en: 'D4 Bachelor of Applied Engineering, Electronics Engineering',
      id: 'Sarjana Terapan (D4) Teknik Elektronika'
    },
    club: 'Universitas Negeri Yogyakarta (UNY)',
    city: 'Sleman, Yogyakarta',
    tag: { en: 'GPA 3.63 / 4.00· ', id: 'IPK 3.63 / 4.00· ' },
    notes: {
      en: [
        'Graduated with GPA 3.63 / 4.0, combining software development with industrial electronics, instrumentation, and control.',
        'Published final thesis on IoT volcanic gas early warning telemetry (LoRa SX1276 & MQTT-SN) in the JRAEE journal.',
        'Core coursework: Computer Programming, Relational Databases & SQL, Industrial Instrumentation, Control Systems, PLC & Automation.'
      ],
      id: [
        'Lulus dengan IPK 3.63 / 4.0, memadukan rekayasa perangkat lunak dengan elektronika industri, instrumentasi, dan kontrol.',
        'Memublikasikan tugas akhir telemetri peringatan dini gas vulkanik IoT (LoRa SX1276 & MQTT-SN) pada jurnal JRAEE.',
        'Mata kuliah inti: Pemrograman Komputer, Basis Data Relasional & SQL, Instrumentasi Industri, Sistem Kendali, PLC & Otomasi.'
      ]
    }
  },
  {
    id: 'unity-season',
    type: 'lead',
    period: 'Jan 2022 s.d. Jul 2022',
    role: {
      en: 'UI/UX Competition Coordinator & Event Staff',
      id: 'Koordinator Kompetisi UI/UX & Staf Acara'
    },
    club: 'UNITY #10, Universitas Negeri Yogyakarta',
    city: 'Yogyakarta',
    tag: { en: 'National Competition Captaincy', id: 'Koordinator Kompetisi Nasional' },
    notes: {
      en: [
        'Led end-to-end execution of the national UI/UX design competition from problem brief drafting to final jury presentations.',
        'Authored official Terms of Reference (TOR), participant guidebooks, judging rubrics, and cross-committee schedules.'
      ],
      id: [
        'Memimpin pelaksanaan kompetisi desain UI/UX tingkat nasional mulai dari penyusunan studi kasus hingga presentasi final juri.',
        'Menyusun Kerangka Acuan Kerja (TOR) resmi, buku panduan peserta, rubrik penilaian, dan jadwal lintas panitia.'
      ]
    }
  },
  {
    id: 'himanika-season',
    type: 'lead',
    period: 'Jan 2022 s.d. Feb 2023',
    role: {
      en: 'Information & Media Staff',
      id: 'Staf Informasi dan Media'
    },
    club: 'HIMANIKA, Universitas Negeri Yogyakarta',
    city: 'Yogyakarta',
    tag: { en: 'Web & Visual Communications', id: 'Web & Komunikasi Visual' },
    notes: {
      en: [
        'Managed the student association website and digital information portals.',
        'Documented 20+ departmental events and designed 60+ visual communication assets.'
      ],
      id: [
        'Mengelola situs web himpunan mahasiswa dan portal informasi digital organisasi.',
        'Mendokumentasikan 20+ kegiatan jurusan dan merancang 60+ aset komunikasi visual.'
      ]
    }
  }
];

const COACHING_BADGES = [
  {
    id: 'bnsp-net',
    certKey: 'bnspNetworkAdmin',
    category: 'bnsp',
    title: 'BNSP Junior Network Administrator',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    year: '2024',
    ribbon: 'National Competency'
  },
  {
    id: 'bnsp-elec',
    category: 'bnsp',
    title: 'BNSP Electronic Equipment Assembler',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    year: '2023',
    ribbon: 'National Competency'
  },
  {
    id: 'dta-web',
    certKey: 'komdigiWebDeveloper',
    category: 'dta',
    title: 'Intermediate Assistant Web Developer',
    issuer: 'Digital Talent Academy · Komdigi',
    year: '2026',
    ribbon: 'Digital Talent'
  },
  {
    id: 'dta-ds',
    certKey: 'komdigiDatascient',
    category: 'dta',
    title: 'Associate Data Scientist (+ Python)',
    issuer: 'Digital Talent Academy · Komdigi',
    year: '2026',
    ribbon: 'Digital Talent'
  },
  {
    id: 'dta-net',
    certKey: 'komdigiNetworkAdmin',
    category: 'dta',
    title: 'Associate Network Administrator',
    issuer: 'Digital Talent Academy · Komdigi',
    year: '2026',
    ribbon: 'Digital Talent'
  },
  {
    id: 'toefl-c1',
    certKey: 'toeflLkpb',
    category: 'honors',
    title: 'TOEFL Score 570 / C1 Advanced EF SET',
    issuer: 'English Proficiency Certification',
    year: '2026',
    ribbon: 'C1 Proficient'
  },
  {
    id: 'unitech-2023',
    certKey: 'unitechUny',
    category: 'honors',
    title: 'U-NITECH 2023 National 2nd Runner-Up',
    issuer: 'SPARK Real-Time Air Quality System',
    year: '2023',
    ribbon: 'Podium Honor'
  }
];

/**
 * ============================================================================
 * FUJIFILM FILM-SIMULATION RECIPES FOR MOUNT MERAPI DUSK LANDSCAPE
 * ============================================================================
 */
const MERAPI_FILM_RECIPES = [
  {
    id: 'original',
    name: 'Original',
    note: { en: 'Natural Dusk Sensor Baseline', id: 'Baseline Sensor Senja Alami' },
    skyTop: '#1B2E26',
    skyMid: '#3B6E57',
    skyGlow: '#E69D45',
    sun: '#FDE68A',
    farRidge: '#2A4439',
    merapiCone: '#16241D',
    foothills: '#1D4D37',
    foreground: '#10241A',
    plume: 'rgba(246, 243, 235, 0.5)',
    filter: 'contrast(1) saturate(1)',
    wb: '5600K',
    tone: 'H:0 / S:0'
  },
  {
    id: 'classic-chrome',
    name: 'Classic Chrome',
    note: { en: 'Editorial Matchday Film Depth', id: 'Kedalaman Film Editorial Matchday' },
    skyTop: '#182420',
    skyMid: '#335249',
    skyGlow: '#D48C54',
    sun: '#F6E7C1',
    farRidge: '#263833',
    merapiCone: '#141F1B',
    foothills: '#214036',
    foreground: '#0E1C17',
    plume: 'rgba(235, 232, 222, 0.44)',
    filter: 'contrast(1.12) saturate(0.8) sepia(0.08)',
    wb: '5300K +1R',
    tone: 'H:-1 / S:+1.5'
  },
  {
    id: 'velvia',
    name: 'Velvia Vivid',
    note: { en: 'Rich Terracotta Sunset & Emerald Slopes', id: 'Senja Terakota & Lereng Zamrud Kaya' },
    skyTop: '#291D3A',
    skyMid: '#8C3B32',
    skyGlow: '#F87171',
    sun: '#FEF08A',
    farRidge: '#362B47',
    merapiCone: '#181A24',
    foothills: '#14593B',
    foreground: '#0A291B',
    plume: 'rgba(254, 215, 170, 0.52)',
    filter: 'contrast(1.14) saturate(1.32)',
    wb: '6000K +2R',
    tone: 'H:+0.5 / S:+1'
  },
  {
    id: 'eterna',
    name: 'Eterna Cinema',
    note: { en: 'Soft Highlight Roll-Off & Misty Valley', id: 'Roll-Off Lembut & Lembah Berkabut' },
    skyTop: '#1A2D2B',
    skyMid: '#3D5E58',
    skyGlow: '#C9C2A6',
    sun: '#F4F1EA',
    farRidge: '#2E4743',
    merapiCone: '#1A2B28',
    foothills: '#264741',
    foreground: '#122421',
    plume: 'rgba(244, 241, 234, 0.42)',
    filter: 'contrast(0.92) saturate(0.85) brightness(1.03)',
    wb: '5500K -1B',
    tone: 'H:-2 / S:-0.5'
  }
];

export default function App() {
  const [lang, setLang] = useState('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Interactive Feature 1: Tactical Pitch Board state
  const [formation, setFormation] = useState('total'); // 'total' | 'playmaker' | 'industrial'
  const [selectedPlayerId, setSelectedPlayerId] = useState('cam-10');
  const [customPositions, setCustomPositions] = useState({});
  const [draggingId, setDraggingId] = useState(null);
  const pitchRef = useRef(null);

  // Interactive Feature 2: Match Highlights mini-demos state
  // 2A: Volcanic Gas Touchline Telemetry Simulator
  const [co2Ppm, setCo2Ppm] = useState(650);
  const [h2sPpm, setH2sPpm] = useState(4);
  const [showMqttJson, setShowMqttJson] = useState(false);
  const [activeSignalNode, setActiveSignalNode] = useState('lora');
  const [gasHistory, setGasHistory] = useState([
    { co2: 590, h2s: 3 },
    { co2: 615, h2s: 4 },
    { co2: 605, h2s: 3 },
    { co2: 640, h2s: 5 },
    { co2: 630, h2s: 4 },
    { co2: 650, h2s: 4 }
  ]);

  // 2B: OPPO Line 403 Spare-Part & Maintenance Tracker
  const [lineParts, setLineParts] = useState(INITIAL_LINE_403_PARTS);
  const [partFilter, setPartFilter] = useState('all'); // 'all' | 'due' | 'optimal'

  // 2C: SPARK Air Quality Toggle (Telemetry vs C/C++ Firmware)
  const [sparkView, setSparkView] = useState('telemetry'); // 'telemetry' | 'code'

  // 2D: ARCADIA Empathy Reading Mode Toggle
  const [empathyReading, setEmpathyReading] = useState(true);

  // Full Case Study Modal state
  const [activeReportModal, setActiveReportModal] = useState(null);

  // Interactive Feature 3: Career Seasons & Coaching Badges state
  const [openSeasons, setOpenSeasons] = useState({ 'oppo-season': true, 'uny-season': true });
  const [badgeFilter, setBadgeFilter] = useState('all');

  // Off the Pitch: Mount Merapi Film Recipe state
  const [filmRecipeId, setFilmRecipeId] = useState('classic-chrome');



  // Toast & Clipboard Fallback
  const [toast, setToast] = useState('');
  const [copiedId, setCopiedId] = useState('');
  const clipboardRef = useRef(null);

  const t = COPY[lang];

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activeReportModal ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeReportModal]);

  // Escape key closes modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setActiveReportModal(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const showToast = (msg, key = '') => {
    setToast(msg);
    if (key) setCopiedId(key);
    setTimeout(() => {
      setToast('');
      setCopiedId('');
    }, 2400);
  };

  const handleCopy = (value, toastText, key = '') => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).catch(() => fallbackCopy(value));
    } else {
      fallbackCopy(value);
    }
    showToast(toastText, key);
  };

  const fallbackCopy = (value) => {
    if (!clipboardRef.current) return;
    clipboardRef.current.value = value;
    clipboardRef.current.select();
    try {
      document.execCommand('copy');
    } catch (err) {
      // Ignore if sandbox blocks execCommand
    }
  };

  // Tactical Pitch Drag Handlers
  const getPlayerCoord = (player) => {
    const customKey = `${formation}-${player.id}`;
    return customPositions[customKey] || player.coords[formation];
  };

  const handlePitchPointerMove = (e) => {
    if (!draggingId || !pitchRef.current) return;
    const rect = pitchRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const rawX = ((clientX - rect.left) / rect.width) * 100;
    const rawY = ((clientY - rect.top) / rect.height) * 100;
    const clampedX = Math.max(6, Math.min(94, rawX));
    const clampedY = Math.max(10, Math.min(90, rawY));

    setCustomPositions((prev) => ({
      ...prev,
      [`${formation}-${draggingId}`]: { x: clampedX, y: clampedY }
    }));
  };

  const handlePitchPointerUp = () => {
    if (draggingId) setDraggingId(null);
  };

  const selectedPlayer = useMemo(
    () => PITCH_PLAYERS.find((p) => p.id === selectedPlayerId) || PITCH_PLAYERS[0],
    [selectedPlayerId]
  );

  // Volcanic Telemetry Severity & Sparkline
  const gasStatus = useMemo(() => {
    if (co2Ppm >= 3000 || h2sPpm >= 35) return 'critical';
    if (co2Ppm >= 1500 || h2sPpm >= 15) return 'warning';
    return 'safe';
  }, [co2Ppm, h2sPpm]);

  const updateGasSlider = (type, val) => {
    const num = Number(val);
    if (type === 'co2') {
      setCo2Ppm(num);
      setGasHistory((prev) => [...prev.slice(-11), { co2: num, h2s: h2sPpm }]);
    } else {
      setH2sPpm(num);
      setGasHistory((prev) => [...prev.slice(-11), { co2: co2Ppm, h2s: num }]);
    }
  };

  const gasSparkline = useMemo(() => {
    const w = 300;
    const h = 62;
    const pad = 6;
    const count = Math.max(gasHistory.length, 2);

    const co2Pts = gasHistory
      .map((item, idx) => {
        const x = pad + (idx / (count - 1)) * (w - pad * 2);
        const norm = Math.min(1, Math.max(0, (item.co2 - 400) / 4600));
        const y = h - pad - norm * (h - pad * 2);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ');

    const h2sPts = gasHistory
      .map((item, idx) => {
        const x = pad + (idx / (count - 1)) * (w - pad * 2);
        const norm = Math.min(1, Math.max(0, item.h2s / 100));
        const y = h - pad - norm * (h - pad * 2);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ');

    return { co2Pts, h2sPts };
  }, [gasHistory]);

  // OPPO Line 403 Maintenance Log Simulation
  const visibleLineParts = useMemo(
    () => lineParts.filter((p) => partFilter === 'all' || p.status === partFilter),
    [lineParts, partFilter]
  );

  const logPartMaintenance = (id) => {
    setLineParts((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: 'optimal',
              health: 100,
              cycles: '0 / 25,000 (Serviced)',
              lastCheck: lang === 'en' ? 'Just Logged' : 'Baru Dicatat'
            }
          : item
      )
    );
    showToast(
      lang === 'en'
        ? `Preventive check logged for ${id}, component health restored to 100%`
        : `Pengecekan preventif ${id} dicatat, kondisi komponen pulih 100%`
    );
  };

  // Coaching Badges filter
  const visibleBadges = useMemo(
    () => COACHING_BADGES.filter((b) => badgeFilter === 'all' || b.category === badgeFilter),
    [badgeFilter]
  );

  // Active Merapi Film Recipe
  const activeRecipe = useMemo(
    () => MERAPI_FILM_RECIPES.find((r) => r.id === filmRecipeId) || MERAPI_FILM_RECIPES[0],
    [filmRecipeId]
  );



  return (
    <div>
      <div className="min-h-screen bg-[#F6F3EB] text-[#16241D] font-sans antialiased selection:bg-[#15803D]/20 selection:text-[#15803D] transition-colors duration-300 overflow-x-hidden relative">
        {/* Subtle Tactile Matchday Paper Grain / Stadium Line Overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 opacity-[0.35]"
          style={{
            backgroundImage: 'radial-gradient(rgba(22, 36, 29, 0.22) 0.75px, transparent 0.75px)',
            backgroundSize: '20px 20px'
          }}
        />

        {/* ==================== TOP STICKY MATCHDAY HEADER ==================== */}
        <header className="sticky top-0 z-40 backdrop-blur-md bg-[#F6F3EB]/92 border-b border-[#16241D]/12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
            {/* Club / Personal Crest */}
            <a href="#story" className="flex items-center gap-3 group shrink-0">
              <div className="relative w-10 h-10 rounded-xl bg-[#15803D] border-2 border-[#C8962E] flex flex-col items-center justify-center text-[#FFFDF8] shadow-xs">
                <span className="font-mono text-[9px] leading-none tracking-widest opacity-85">MHR</span>
                <span className="font-serif font-bold text-sm leading-tight text-[#FBBF24]">10</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-[#16241D]">
                  HAFIDZ // 10
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#4A5D53]">
                  MHR &bull; SLEMAN
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-5 text-[13px] font-medium text-[#4A5D53]">
              <a href="#story" className="hover:text-[#15803D] transition-colors">
                {t.nav.story}
              </a>
              <a href="#tactics" className="hover:text-[#15803D] transition-colors">
                {t.nav.tactics}
              </a>
              <a href="#highlights" className="hover:text-[#15803D] transition-colors">
                {t.nav.highlights}
              </a>
              <a href="#seasons" className="hover:text-[#15803D] transition-colors">
                {t.nav.seasons}
              </a>
              <a href="#off-pitch" className="hover:text-[#15803D] transition-colors">
                {t.nav.offPitch}
              </a>
            </nav>

            {/* Right Matchday Controls */}
            <div className="flex items-center gap-2">
              {/* Bilingual Switcher (EN / ID) */}
              <div
                className="inline-flex items-center p-0.5 rounded-xl bg-[#EFECE2] border border-[#16241D]/15 font-mono text-xs"
                role="group"
                aria-label="Language Switch"
              >
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`px-2 py-1 rounded-lg transition-all ${
                    lang === 'en'
                      ? 'bg-[#FFFDF8] text-[#16241D] font-bold shadow-2xs'
                      : 'text-[#4A5D53] hover:text-[#16241D]'
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLang('id')}
                  className={`px-2 py-1 rounded-lg transition-all ${
                    lang === 'id'
                      ? 'bg-[#FFFDF8] text-[#16241D] font-bold shadow-2xs'
                      : 'text-[#4A5D53] hover:text-[#16241D]'
                  }`}
                >
                  ID
                </button>
              </div>

              {/* Scout / Hire Quick CTA */}
              <a
                href="#scouting"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-mono text-xs font-bold tracking-wide transition-colors shadow-xs"
              >
                <span>{t.nav.hireCta}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile Menu Trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
                className="lg:hidden p-2 rounded-xl bg-[#FFFDF8] border border-[#16241D]/15"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-[#16241D]/10 bg-[#FFFDF8] px-4 py-3 space-y-1">
              {[
                { href: '#story', label: t.nav.story },
                { href: '#tactics', label: t.nav.tactics },
                { href: '#highlights', label: t.nav.highlights },
                { href: '#seasons', label: t.nav.seasons },
                { href: '#off-pitch', label: t.nav.offPitch },
                { href: '#scouting', label: t.nav.scouting }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#15803D]/10"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </header>

        {/* ==================== MAIN EDITORIAL CONTENT ==================== */}
        <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-24 space-y-20 sm:space-y-24">
          {/* ==================== HERO: MATCHDAY COVER & PLAYER PROFILE ==================== */}
          <section id="story" className="scroll-mt-24">
            <div className="rounded-3xl bg-[#FFFDF8] border border-[#16241D]/15 p-6 sm:p-10 shadow-sm relative overflow-hidden">
              {/* Stadium Turf Top Accent Bar */}
              <div
                aria-hidden="true"
                className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#15803D] via-[#22C55E] to-[#FBBF24]"
              />
              {/* Decorative Corner Pitch Arc */}
              <svg
                aria-hidden="true"
                viewBox="0 0 120 120"
                className="pointer-events-none absolute -top-4 -right-4 w-32 h-32 text-[#15803D]/10"
              >
                <circle cx="120" cy="0" r="95" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="120" cy="0" r="65" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
              </svg>

              {/* Editorial Issue Banner */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-[#16241D]/12">
                <span className="font-mono text-[11px] font-bold tracking-widest uppercase text-[#15803D]">
                  {t.hero.issueTag}
                </span>
                <span className="font-mono text-[11px] text-[#C8962E] font-semibold">
                  90&apos; + STOPPAGE TIME READY
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Editorial Story (7 Cols) */}
                <div className="lg:col-span-7 space-y-5">
                  <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#16241D] leading-[1.12]">
                    {t.hero.headlinePre}{' '}
                    <span className="italic text-[#15803D]">
                      {t.hero.headlineAccent}
                    </span>
                  </h1>

                  <p className="text-base sm:text-lg font-medium text-[#16241D]/90 leading-snug">
                    {t.hero.subhead}
                  </p>

                  <div className="space-y-3.5 text-sm sm:text-[15px] text-[#4A5D53] leading-relaxed">
                    <p>{t.hero.storyP1}</p>
                    <p>{t.hero.storyP2}</p>
                  </div>

                  {/* Credential & Mobility Pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#15803D]/10 text-[#15803D] font-mono text-xs font-semibold">
                      <GraduationCap className="w-3.5 h-3.5" />
                      {t.hero.badgeGpa}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#C8962E]/12 text-[#8c6516] font-mono text-xs font-semibold">
                      <Globe className="w-3.5 h-3.5" />
                      {t.hero.badgeToefl}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#DC2626]/10 text-[#DC2626] font-mono text-xs font-semibold">
                      <Car className="w-3.5 h-3.5" />
                      {t.hero.badgeMobility}
                    </span>
                  </div>

                  {/* Direct Human Action Row */}
                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <a
                      href="#tactics"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#15803D] hover:bg-[#166534] text-white text-xs sm:text-sm font-bold transition-colors shadow-xs"
                    >
                      <span>{t.hero.explorePitchBtn}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    <button
                      type="button"
                      onClick={() =>
                        handleCopy('hafidzramadhan02@gmail.com', t.toast.emailCopied, 'hero-mail')
                      }
                      className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#F6F3EB] hover:bg-[#EFECE2] border border-[#16241D]/15 text-xs sm:text-sm font-medium transition-colors"
                    >
                      {copiedId === 'hero-mail' ? (
                        <>
                          <Check className="w-4 h-4 text-[#15803D]" />
                          <span>{t.hero.copiedEmail}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-[#4A5D53]" />
                          <span>{t.hero.copyEmail}</span>
                        </>
                      )}
                    </button>

                    <a
                      href="https://wa.me/6285804705361"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#FFFDF8] hover:border-[#15803D] border border-[#16241D]/15 text-xs sm:text-sm font-medium transition-colors"
                    >
                      <MessageSquare className="w-4 h-4 text-[#15803D]" />
                      <span>{t.hero.whatsappBtn}</span>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/moch-hafidz-nur-ramadhan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-3 text-xs sm:text-sm font-medium text-[#4A5D53] hover:text-[#15803D] underline underline-offset-4"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* Right Editorial Scouting Dossier Card (5 Cols) */}
                <div className="lg:col-span-5 rounded-2xl bg-[#F6F3EB] border-2 border-[#16241D]/15 p-5 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-[#16241D]/12 pb-3">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#DC2626] font-bold block">
                        {t.hero.playerCard.club}
                      </span>
                      <h2 className="font-serif text-xl font-bold text-[#16241D] mt-0.5">
                        Moch. Hafidz Nur Ramadhan
                      </h2>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-[#15803D] border border-[#C8962E] flex items-center justify-center font-serif text-2xl font-bold text-[#FBBF24]">
                      10
                    </div>
                  </div>

                  {/* Tactical Key-Value Ledger */}
                  <dl className="divide-y divide-[#16241D]/10 text-xs font-mono">
                    <div className="py-2.5 flex justify-between gap-3">
                      <dt className="text-[#4A5D53]">ROLE</dt>
                      <dd className="font-bold text-right text-[#16241D]">
                        {t.hero.playerCard.position}
                      </dd>
                    </div>
                    <div className="py-2.5 flex justify-between gap-3">
                      <dt className="text-[#4A5D53]">HOME GROUND</dt>
                      <dd className="font-semibold text-right">{t.hero.playerCard.base}</dd>
                    </div>
                    <div className="py-2.5 flex justify-between gap-3">
                      <dt className="text-[#4A5D53]">STATUS</dt>
                      <dd className="font-semibold text-right text-[#15803D]">
                        {t.hero.playerCard.availability}
                      </dd>
                    </div>
                    <div className="py-2.5 flex justify-between gap-3">
                      <dt className="text-[#4A5D53]">CONTACT</dt>
                      <dd className="font-semibold text-right">0858-0470-5361</dd>
                    </div>
                  </dl>

                  {/* Editorial Captain Quote */}
                  <blockquote className="p-3.5 rounded-xl bg-[#FFFDF8] border-l-4 border-[#C8962E] font-serif italic text-xs sm:text-sm text-[#16241D]/90 leading-relaxed">
                    {t.hero.playerCard.quote}
                  </blockquote>
                </div>
              </div>
            </div>
          </section>

          {/* ==================== INTERACTIVE FEATURE 1: THE TACTICAL PITCH BOARD ==================== */}
          <section id="tactics" className="scroll-mt-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <span className="font-mono text-xs font-bold tracking-widest uppercase text-[#DC2626]">
                  {t.pitchSection.eyebrow}
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#16241D] mt-1">
                  {t.pitchSection.title}
                </h2>
                <p className="text-sm text-[#4A5D53] mt-1.5 max-w-2xl leading-relaxed">
                  {t.pitchSection.subtitle}
                </p>
              </div>

              {Object.keys(customPositions).length > 0 && (
                <button
                  type="button"
                  onClick={() => setCustomPositions({})}
                  className="self-start md:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FFFDF8] border border-[#16241D]/15 font-mono text-xs hover:border-[#DC2626] transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>{t.pitchSection.resetBtn}</span>
                </button>
              )}
            </div>

            {/* Formation Switcher Tabs */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {(['total', 'playmaker', 'industrial']).map((fKey) => {
                const active = formation === fKey;
                return (
                  <button
                    key={fKey}
                    type="button"
                    onClick={() => setFormation(fKey)}
                    className={`px-4 py-2.5 rounded-2xl text-left border transition-all ${
                      active
                        ? 'bg-[#15803D] text-white border-[#15803D] shadow-xs'
                        : 'bg-[#FFFDF8] text-[#16241D] border-[#16241D]/15 hover:border-[#15803D]/50'
                    }`}
                  >
                    <div className="font-mono text-xs font-bold">
                      {t.pitchSection.formations[fKey].name}
                    </div>
                    <div
                      className={`text-[11px] ${
                        active
                          ? 'text-white/85'
                          : 'text-[#4A5D53]'
                      }`}
                    >
                      {t.pitchSection.formations[fKey].tag}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Formation Tactical Summary Strip */}
            <div className="mb-5 px-4 py-3 rounded-2xl bg-[#FFFDF8] border border-[#16241D]/12 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <span className="text-[#16241D]/90 leading-relaxed">
                {t.pitchSection.formations[formation].summary}
              </span>
              <span className="font-mono text-[11px] text-[#15803D] shrink-0">
                {t.pitchSection.dragHint}
              </span>
            </div>

            {/* Split Layout: Interactive SVG Pitch Board + Live Scouting Report Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* LEFT: Interactive Pitch Board (7 Cols) */}
              <div className="lg:col-span-7 rounded-3xl bg-[#15803D] border-2 border-[#16241D]/20 p-3 sm:p-4 shadow-md flex flex-col justify-center">
                <div
                  ref={pitchRef}
                  onMouseMove={handlePitchPointerMove}
                  onMouseUp={handlePitchPointerUp}
                  onMouseLeave={handlePitchPointerUp}
                  onTouchMove={handlePitchPointerMove}
                  onTouchEnd={handlePitchPointerUp}
                  className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden select-none touch-none border-2 border-white/75"
                  style={{
                    backgroundColor: '#16803C',
                    backgroundImage:
                      'repeating-linear-gradient(90deg, rgba(255,255,255,0.09) 0px, rgba(255,255,255,0.09) 44px, rgba(6,40,18,0.12) 44px, rgba(6,40,18,0.12) 88px), radial-gradient(circle at 50% 50%, rgba(134,239,172,0.16), transparent 72%)'
                  }}
                >
                  {/* Crisp Chalk Pitch Markings SVG */}
                  <svg
                    viewBox="0 0 800 550"
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    aria-hidden="true"
                  >
                    {/* Outer Touchlines */}
                    <rect
                      x="14"
                      y="14"
                      width="772"
                      height="522"
                      fill="none"
                      stroke="rgba(255,255,255,0.78)"
                      strokeWidth="2.5"
                    />
                    {/* Halfway Line */}
                    <line
                      x1="400"
                      y1="14"
                      x2="400"
                      y2="536"
                      stroke="rgba(255,255,255,0.78)"
                      strokeWidth="2.5"
                    />
                    {/* Center Circle & Spot */}
                    <circle
                      cx="400"
                      cy="275"
                      r="74"
                      fill="none"
                      stroke="rgba(255,255,255,0.78)"
                      strokeWidth="2.5"
                    />
                    <circle cx="400" cy="275" r="4.5" fill="rgba(255,255,255,0.9)" />

                    {/* Left Penalty Box & 6-Yard Box */}
                    <rect
                      x="14"
                      y="128"
                      width="126"
                      height="294"
                      fill="none"
                      stroke="rgba(255,255,255,0.78)"
                      strokeWidth="2.5"
                    />
                    <rect
                      x="14"
                      y="202"
                      width="46"
                      height="146"
                      fill="none"
                      stroke="rgba(255,255,255,0.78)"
                      strokeWidth="2.5"
                    />
                    <circle cx="96" cy="275" r="4" fill="rgba(255,255,255,0.9)" />
                    <path
                      d="M 140 220 A 68 68 0 0 1 140 330"
                      fill="none"
                      stroke="rgba(255,255,255,0.78)"
                      strokeWidth="2.5"
                    />

                    {/* Right Penalty Box & 6-Yard Box */}
                    <rect
                      x="660"
                      y="128"
                      width="126"
                      height="294"
                      fill="none"
                      stroke="rgba(255,255,255,0.78)"
                      strokeWidth="2.5"
                    />
                    <rect
                      x="740"
                      y="202"
                      width="46"
                      height="146"
                      fill="none"
                      stroke="rgba(255,255,255,0.78)"
                      strokeWidth="2.5"
                    />
                    <circle cx="704" cy="275" r="4" fill="rgba(255,255,255,0.9)" />
                    <path
                      d="M 660 220 A 68 68 0 0 0 660 330"
                      fill="none"
                      stroke="rgba(255,255,255,0.78)"
                      strokeWidth="2.5"
                    />

                    {/* Subtle Tactical Passing Lines Connecting Midfield */}
                    <line
                      x1="368"
                      y1="275"
                      x2="464"
                      y2="154"
                      stroke="rgba(251,191,36,0.35)"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                    />
                    <line
                      x1="368"
                      y1="275"
                      x2="512"
                      y2="374"
                      stroke="rgba(251,191,36,0.35)"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                    />
                    <line
                      x1="512"
                      y1="374"
                      x2="672"
                      y2="143"
                      stroke="rgba(251,191,36,0.35)"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                    />
                  </svg>

                  {/* Interactive Player Nodes */}
                  {PITCH_PLAYERS.map((player) => {
                    const pos = getPlayerCoord(player);
                    const isSelected = player.id === selectedPlayerId;

                    return (
                      <button
                        key={player.id}
                        type="button"
                        onClick={() => setSelectedPlayerId(player.id)}
                        onMouseDown={() => {
                          setSelectedPlayerId(player.id);
                          setDraggingId(player.id);
                        }}
                        onTouchStart={() => {
                          setSelectedPlayerId(player.id);
                          setDraggingId(player.id);
                        }}
                        style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-grab active:cursor-grabbing focus:outline-none z-10"
                        aria-label={`No. ${player.number} ${player.roleTitle[lang]}`}
                      >
                        <span
                          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-mono text-xs sm:text-sm font-extrabold border-2 transition-transform ${
                            isSelected
                              ? 'bg-[#DC2626] text-white border-[#FFFDF8] scale-115 shadow-lg ring-4 ring-[#FBBF24]/50'
                              : 'bg-[#FFFDF8] text-[#16241D] border-[#16241D] group-hover:scale-110 shadow-md'
                          }`}
                        >
                          {player.number}
                        </span>
                        <span
                          className={`mt-1 px-1.5 py-0.5 rounded font-mono text-[9px] sm:text-[10px] font-bold tracking-tight whitespace-nowrap shadow-xs ${
                            isSelected
                              ? 'bg-[#FBBF24] text-[#16241D]'
                              : 'bg-[#16241D]/85 text-[#FFFDF8]'
                          }`}
                        >
                          {player.shortCode}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* RIGHT: Live Scouting Report Card (5 Cols) */}
              <div className="lg:col-span-5 rounded-3xl bg-[#FFFDF8] border border-[#16241D]/15 p-6 sm:p-7 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-[#16241D]/12">
                    <span className="font-mono text-[11px] font-bold tracking-widest uppercase text-[#15803D]">
                      {t.pitchSection.reportHeader}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#DC2626]/12 text-[#DC2626] font-mono text-xs font-bold">
                      NO. {selectedPlayer.number} &middot; {selectedPlayer.shortCode}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#16241D] leading-snug">
                    {selectedPlayer.roleTitle[lang]}
                  </h3>
                  <p className="font-mono text-xs text-[#C8962E] font-semibold mt-1">
                    {selectedPlayer.tacticalRole[lang]}
                  </p>

                  <p className="mt-3 text-sm text-[#4A5D53] leading-relaxed">
                    {selectedPlayer.summary[lang]}
                  </p>

                  {/* Concrete Match Proof Box */}
                  <div className="mt-4 p-4 rounded-2xl bg-[#F6F3EB] border border-[#16241D]/12">
                    <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-[#15803D] mb-1">
                      {t.pitchSection.proofLabel}
                    </span>
                    <p className="text-xs sm:text-sm text-[#16241D] leading-relaxed">
                      {selectedPlayer.proof[lang]}
                    </p>
                  </div>

                  {/* Skills Chips */}
                  <div className="mt-4">
                    <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-[#4A5D53] mb-2">
                      {t.pitchSection.skillsLabel}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedPlayer.skills.map((sk) => (
                        <span
                          key={sk}
                          className="font-mono text-xs px-2.5 py-1 rounded-lg bg-[#15803D]/10 text-[#15803D] font-medium"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Linked License Footer */}
                <div className="mt-5 pt-3.5 border-t border-[#16241D]/12 flex items-center gap-2 text-xs">
                  <ShieldCheck className="w-4 h-4 text-[#8c6516] shrink-0" />
                  {CERT_LINKS[selectedPlayer.certKey] ? (
                    <a
                      href={CERT_LINKS[selectedPlayer.certKey]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#15803D] hover:underline"
                    >
                      <span>{selectedPlayer.credential}</span>
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </a>
                  ) : (
                    <span className="font-mono text-[11px] text-[#4A5D53]">
                      {selectedPlayer.credential}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* ==================== INTERACTIVE FEATURE 2: MATCH HIGHLIGHTS (4 CASE STUDIES) ==================== */}
          <section id="highlights" className="scroll-mt-24">
            <div className="mb-8">
              <span className="font-mono text-xs font-bold tracking-widest uppercase text-[#DC2626]">
                {t.highlightsSection.eyebrow}
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#16241D] mt-1">
                {t.highlightsSection.title}
              </h2>
              <p className="text-sm text-[#4A5D53] mt-1.5 max-w-2xl leading-relaxed">
                {t.highlightsSection.subtitle}
              </p>
            </div>

            <div className="space-y-8">
              {/* MATCH CARD 1: JRAEE VOLCANIC GAS EARLY WARNING SYSTEM */}
              <article className="rounded-3xl bg-[#FFFDF8] border border-[#16241D]/15 p-6 sm:p-8 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-[#16241D]/12">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#15803D]/12 text-[#15803D]">
                    {MATCH_HIGHLIGHTS.volcanic.competition[lang]}
                  </span>
                  <span className="font-mono text-xs text-[#4A5D53]">
                    {MATCH_HIGHLIGHTS.volcanic.season}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left Narrative + 5-Node Signal Pass Diagram (5 Cols) */}
                  <div className="lg:col-span-5 space-y-4">
                    <h3 className="font-serif text-2xl font-bold text-[#16241D] leading-snug">
                      {MATCH_HIGHLIGHTS.volcanic.title[lang]}
                    </h3>
                    <p className="text-sm text-[#4A5D53] leading-relaxed">
                      {MATCH_HIGHLIGHTS.volcanic.subtitle[lang]}
                    </p>

                    {/* Clickable 5-Node Signal Pass Chain */}
                    <div className="p-4 rounded-2xl bg-[#F6F3EB] border border-[#16241D]/12">
                      <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-[#15803D] mb-2.5">
                        {lang === 'en'
                          ? 'Signal Pass Chain (Click Each Node)'
                          : 'Alur Umpan Sinyal (Klik Setiap Node)'}
                      </span>
                      <div className="flex flex-wrap items-center gap-1.5">
                        {MATCH_HIGHLIGHTS.volcanic.nodes.map((node, idx) => {
                          const active = activeSignalNode === node.id;
                          return (
                            <React.Fragment key={node.id}>
                              <button
                                type="button"
                                onClick={() => setActiveSignalNode(node.id)}
                                className={`px-2.5 py-1.5 rounded-xl font-mono text-[11px] text-left border transition-all ${
                                  active
                                    ? 'bg-[#DC2626] text-white border-[#DC2626] font-bold shadow-2xs'
                                    : 'bg-[#FFFDF8] text-[#16241D] border-[#16241D]/15'
                                }`}
                              >
                                <span className="block text-[9px] opacity-75">{node.step}</span>
                                <span>{node.label}</span>
                              </button>
                              {idx < MATCH_HIGHLIGHTS.volcanic.nodes.length - 1 && (
                                <ChevronRight className="w-3.5 h-3.5 text-[#4A5D53] shrink-0" />
                              )}
                            </React.Fragment>
                          );
                        })}
                      </div>

                      {/* Active Node Description */}
                      {(() => {
                        const current =
                          MATCH_HIGHLIGHTS.volcanic.nodes.find((n) => n.id === activeSignalNode) ||
                          MATCH_HIGHLIGHTS.volcanic.nodes[0];
                        return (
                          <div className="mt-3 pt-2.5 border-t border-[#16241D]/10 text-xs">
                            <span className="font-mono font-bold text-[#16241D]">
                              {current.label} ({current.sub[lang]}):{' '}
                            </span>
                            <span className="text-[#4A5D53]">
                              {current.detail[lang]}
                            </span>
                          </div>
                        );
                      })()}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {MATCH_HIGHLIGHTS.volcanic.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11px] px-2.5 py-1 rounded-lg bg-[#EFECE2] text-[#16241D]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveReportModal(MATCH_HIGHLIGHTS.volcanic)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#16241D] hover:bg-[#24382e] text-[#FFFDF8] font-mono text-xs font-bold transition-colors"
                    >
                      <span>{t.highlightsSection.inspectFull}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Right Touchline Telemetry Simulator (7 Cols) */}
                  <div className="lg:col-span-7 rounded-2xl bg-[#16241D] text-[#EBF3EE] border border-[#16241D]/20 p-5 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-[#22C55E]">
                        <Radio className="w-3.5 h-3.5 animate-pulse" />
                        {lang === 'en'
                          ? 'Touchline Telemetry Simulator (LoRa SX1276)'
                          : 'Simulator Telemetri Lapangan (LoRa SX1276)'}
                      </span>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/10 text-[#FBBF24]">
                        UDP :1884 &rarr; MQTT
                      </span>
                    </div>

                    {/* Alert Status Banner */}
                    <div
                      className={`p-3 rounded-xl border font-mono text-xs transition-colors ${
                        gasStatus === 'critical'
                          ? 'bg-[#DC2626]/25 border-[#F87171] text-[#FFD7CC]'
                          : gasStatus === 'warning'
                          ? 'bg-[#C8962E]/25 border-[#FBBF24] text-[#FEF3C7]'
                          : 'bg-[#15803D]/30 border-[#22C55E]/50 text-[#D1FAE5]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 font-bold">
                        <span className="inline-flex items-center gap-1.5">
                          {gasStatus === 'critical' ? (
                            <ShieldAlert className="w-4 h-4 text-[#F87171]" />
                          ) : gasStatus === 'warning' ? (
                            <AlertTriangle className="w-4 h-4 text-[#FBBF24]" />
                          ) : (
                            <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                          )}
                          {gasStatus === 'critical'
                            ? lang === 'en'
                              ? 'RED CARD ALERT, WHATSAPP BOT DISPATCHED'
                              : 'PERINGATAN MERAH, BOT WHATSAPP TERKIRIM'
                            : gasStatus === 'warning'
                            ? lang === 'en'
                              ? 'YELLOW CAUTION, ELEVATED VOLCANIC GAS'
                              : 'KARTU KUNING, PENINGKATAN GAS VULKANIK'
                            : lang === 'en'
                            ? 'PLAY ON, NORMAL ATMOSPHERIC BASELINE'
                            : 'AMAN, PARAMETER ATMOSFER NORMAL'}
                        </span>
                      </div>
                      <p className="text-[11px] mt-1 opacity-90">
                        {gasStatus === 'critical'
                          ? 'whatsapp-web.js >> [MERAPI-POS-01] Danger threshold exceeded! Emergency alert sent.'
                          : gasStatus === 'warning'
                          ? 'Python Engine >> Threshold advisory logged on MQTT topic /merapi/sector-1/gas.'
                          : 'Python Engine >> Continuous monitoring active. Zero cellular dependency.'}
                      </p>
                    </div>

                    {/* CO2 & H2S Sliders */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <div className="flex justify-between font-mono text-xs mb-1.5">
                          <label htmlFor="co2-range">CO₂ (MQ-135)</label>
                          <span className="font-bold text-[#22C55E] tabular-nums">{co2Ppm} ppm</span>
                        </div>
                        <input
                          id="co2-range"
                          type="range"
                          min="400"
                          max="5000"
                          step="25"
                          value={co2Ppm}
                          onChange={(e) => updateGasSlider('co2', e.target.value)}
                          className="w-full accent-[#22C55E] cursor-pointer"
                        />
                      </div>

                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <div className="flex justify-between font-mono text-xs mb-1.5">
                          <label htmlFor="h2s-range">H₂S (MQ-136)</label>
                          <span className="font-bold text-[#FBBF24] tabular-nums">{h2sPpm} ppm</span>
                        </div>
                        <input
                          id="h2s-range"
                          type="range"
                          min="0"
                          max="100"
                          step="1"
                          value={h2sPpm}
                          onChange={(e) => updateGasSlider('h2s', e.target.value)}
                          className="w-full accent-[#FBBF24] cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Live SVG Sparkline Graph */}
                    <div>
                      <div className="flex items-center justify-between font-mono text-[10px] text-[#9CB3A6] mb-1">
                        <span>{lang === 'en' ? 'LIVE TELEMETRY TRACE' : 'GRAFIK TELEMETRI LANGSUNG'}</span>
                        <span>
                          <span className="text-[#22C55E]">,  CO₂</span> &nbsp;
                          <span className="text-[#FBBF24]">,  H₂S</span>
                        </span>
                      </div>
                      <svg
                        viewBox="0 0 300 62"
                        className="w-full h-16 rounded-xl bg-[#040D08] border border-white/10"
                      >
                        <polyline
                          fill="none"
                          stroke="#22C55E"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          points={gasSparkline.co2Pts}
                        />
                        <polyline
                          fill="none"
                          stroke="#FBBF24"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          points={gasSparkline.h2sPts}
                        />
                      </svg>
                    </div>

                    {/* Inspect UDP :1884 MQTT-SN Packet Toggle */}
                    <div>
                      <button
                        type="button"
                        onClick={() => setShowMqttJson(!showMqttJson)}
                        className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 font-mono text-[11px] transition-colors"
                      >
                        <span>
                          {lang === 'en'
                            ? 'Inspect UDP :1884 MQTT-SN -> MQTT JSON Packet'
                            : 'Inspeksi Paket JSON UDP :1884 MQTT-SN -> MQTT'}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${showMqttJson ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {showMqttJson && (
                        <pre className="mt-2 p-3 rounded-xl bg-[#040D08] border border-white/10 font-mono text-[11px] text-[#22C55E] overflow-x-auto">
{`{
  "bridge": "MQTT-SN_UDP_1884",
  "radio": "LoRa_SX1276_915MHz",
  "sensors": { "mq135_co2_ppm": ${co2Ppm}, "mq136_h2s_ppm": ${h2sPpm} },
  "severity": "${gasStatus.toUpperCase()}",
  "whatsapp_web_js_trigger": ${gasStatus === 'critical'}
}`}
                        </pre>
                      )}
                    </div>
                  </div>
                </div>
              </article>

              {/* MATCH CARD 2: OPPO INDONESIA, PRODUCTION LINE 403 INVENTORY SYSTEM */}
              <article className="rounded-3xl bg-[#FFFDF8] border border-[#16241D]/15 p-6 sm:p-8 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-[#16241D]/12">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#C8962E]/15 text-[#8c6516]">
                    {MATCH_HIGHLIGHTS.oppo.competition[lang]}
                  </span>
                  <span className="font-mono text-xs text-[#4A5D53]">
                    {MATCH_HIGHLIGHTS.oppo.season}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-5 space-y-4">
                    <h3 className="font-serif text-2xl font-bold text-[#16241D] leading-snug">
                      {MATCH_HIGHLIGHTS.oppo.title[lang]}
                    </h3>
                    <p className="text-sm text-[#4A5D53] leading-relaxed">
                      {MATCH_HIGHLIGHTS.oppo.subtitle[lang]}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {MATCH_HIGHLIGHTS.oppo.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11px] px-2.5 py-1 rounded-lg bg-[#EFECE2] text-[#16241D]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveReportModal(MATCH_HIGHLIGHTS.oppo)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#16241D] hover:bg-[#24382e] text-[#FFFDF8] font-mono text-xs font-bold transition-colors"
                    >
                      <span>{t.highlightsSection.inspectFull}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Interactive Line 403 Spare-Part & Maintenance Tracker */}
                  <div className="lg:col-span-7 rounded-2xl bg-[#F6F3EB] border border-[#16241D]/15 p-4 sm:p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#15803D]">
                        LINE 403 // SPARE-PART & LIFETIME TRACKER
                      </span>
                      <div className="flex items-center gap-1">
                        {[
                          { id: 'all', label: lang === 'en' ? 'All' : 'Semua' },
                          { id: 'due', label: lang === 'en' ? 'Service Due' : 'Perlu Cek' },
                          { id: 'optimal', label: 'Optimal' }
                        ].map((f) => (
                          <button
                            key={f.id}
                            type="button"
                            onClick={() => setPartFilter(f.id)}
                            className={`px-2.5 py-1 rounded-lg font-mono text-[11px] transition-colors ${
                              partFilter === f.id
                                ? 'bg-[#15803D] text-white font-bold'
                                : 'bg-[#FFFDF8] text-[#4A5D53] border border-[#16241D]/10'
                            }`}
                          >
                            {f.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      {visibleLineParts.map((part) => (
                        <div
                          key={part.id}
                          className="p-3 rounded-xl bg-[#FFFDF8] border border-[#16241D]/12 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-mono text-[10px] font-bold text-[#DC2626]">
                                {part.id} &middot; {part.lastCheck}
                              </span>
                              <span className="font-mono text-[10px] text-[#4A5D53]">
                                {part.cycles}
                              </span>
                            </div>
                            <div className="text-xs sm:text-sm font-bold text-[#16241D] mt-0.5">
                              {part.name}
                            </div>
                            {/* Component Lifetime Health Bar */}
                            <div className="mt-2 flex items-center gap-2.5">
                              <div className="flex-1 h-2 rounded-full bg-[#EFECE2] overflow-hidden">
                                <div
                                  className={`h-full rounded-full transition-all duration-300 ${
                                    part.health < 40
                                      ? 'bg-[#DC2626]'
                                      : 'bg-[#15803D]'
                                  }`}
                                  style={{ width: `${part.health}%` }}
                                />
                              </div>
                              <span className="font-mono text-xs font-bold tabular-nums">
                                {part.health}%
                              </span>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => logPartMaintenance(part.id)}
                            className="self-start sm:self-center inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#15803D]/10 hover:bg-[#15803D] hover:text-white text-[#15803D] font-mono text-[11px] font-bold transition-colors shrink-0"
                          >
                            <Wrench className="w-3.5 h-3.5" />
                            <span>{lang === 'en' ? 'Log Check' : 'Catat Cek'}</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>

              {/* SPLIT ROW FOR MATCH CARDS 3 & 4 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* MATCH CARD 3: SPARK REAL-TIME AIR QUALITY MONITOR (6 Cols) */}
                <article className="lg:col-span-6 rounded-3xl bg-[#FFFDF8] border border-[#16241D]/15 p-6 sm:p-7 flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-[#16241D]/12">
                      <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#DC2626]/12 text-[#DC2626]">
                        {MATCH_HIGHLIGHTS.spark.competition[lang]}
                      </span>
                      <span className="font-mono text-xs text-[#4A5D53]">
                        {MATCH_HIGHLIGHTS.spark.season}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#16241D] leading-snug">
                      {MATCH_HIGHLIGHTS.spark.title[lang]}
                    </h3>
                    <p className="mt-2 text-sm text-[#4A5D53] leading-relaxed">
                      {MATCH_HIGHLIGHTS.spark.subtitle[lang]}
                    </p>

                    {/* Toggle Between Live Sensor Readouts and C/C++ Firmware Logic */}
                    <div className="mt-4 rounded-2xl bg-[#F6F3EB] border border-[#16241D]/12 p-4">
                      <div className="flex items-center gap-1.5 mb-3">
                        <button
                          type="button"
                          onClick={() => setSparkView('telemetry')}
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg font-mono text-[11px] font-bold transition-colors ${
                            sparkView === 'telemetry'
                              ? 'bg-[#15803D] text-white'
                              : 'bg-[#FFFDF8] text-[#4A5D53]'
                          }`}
                        >
                          <Gauge className="w-3.5 h-3.5" />
                          <span>{lang === 'en' ? 'Sensor Readouts' : 'Data Sensor'}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setSparkView('code')}
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg font-mono text-[11px] font-bold transition-colors ${
                            sparkView === 'code'
                              ? 'bg-[#15803D] text-white'
                              : 'bg-[#FFFDF8] text-[#4A5D53]'
                          }`}
                        >
                          <Code2 className="w-3.5 h-3.5" />
                          <span>{lang === 'en' ? 'C/C++ Acquisition' : 'Kode C/C++'}</span>
                        </button>
                      </div>

                      {sparkView === 'telemetry' ? (
                        <div className="grid grid-cols-3 gap-2">
                          <div className="p-2.5 rounded-xl bg-[#FFFDF8] border border-[#16241D]/10">
                            <span className="block font-mono text-[10px] text-[#4A5D53]">
                              AQI SCORE
                            </span>
                            <span className="font-mono text-base font-extrabold text-[#15803D]">
                              38 GOOD
                            </span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-[#FFFDF8] border border-[#16241D]/10">
                            <span className="block font-mono text-[10px] text-[#4A5D53]">
                              PM2.5
                            </span>
                            <span className="font-mono text-base font-extrabold tabular-nums">
                              9.8 µg/m³
                            </span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-[#FFFDF8] border border-[#16241D]/10">
                            <span className="block font-mono text-[10px] text-[#4A5D53]">
                              LOOP CYCLE
                            </span>
                            <span className="font-mono text-base font-extrabold text-[#C8962E]">
                              100 ms
                            </span>
                          </div>
                        </div>
                      ) : (
                        <pre className="p-3 rounded-xl bg-[#16241D] text-[#22C55E] font-mono text-[11px] overflow-x-auto leading-relaxed">
{`float sampleCalibratedSensor(uint8_t ch) {
  uint32_t sum = 0;
  for (uint8_t i = 0; i < 16; i++) sum += analogRead(ch);
  float volts = (sum / 16.0f) * (3.3f / 4095.0f);
  return computeRsRoRatio(volts, CLEAN_AIR_R0);
}`}
                        </pre>
                      )}
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#16241D]/12 flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1">
                      {MATCH_HIGHLIGHTS.spark.stack.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#EFECE2]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveReportModal(MATCH_HIGHLIGHTS.spark)}
                      className="inline-flex items-center gap-1 font-mono text-xs font-bold text-[#15803D] hover:underline shrink-0"
                    >
                      <span>{t.highlightsSection.inspectFull}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>

                {/* MATCH CARD 4: ARCADIA ADAPTIVE LEARNING PLATFORM (6 Cols) */}
                <article className="lg:col-span-6 rounded-3xl bg-[#FFFDF8] border border-[#16241D]/15 p-6 sm:p-7 flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-[#16241D]/12">
                      <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#15803D]/12 text-[#15803D]">
                        {MATCH_HIGHLIGHTS.arcadia.competition[lang]}
                      </span>
                      <span className="font-mono text-xs text-[#4A5D53]">
                        {MATCH_HIGHLIGHTS.arcadia.season}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#16241D] leading-snug">
                      {MATCH_HIGHLIGHTS.arcadia.title[lang]}
                    </h3>
                    <p className="mt-2 text-sm text-[#4A5D53] leading-relaxed">
                      {MATCH_HIGHLIGHTS.arcadia.subtitle[lang]}
                    </p>

                    {/* Interactive Empathy Reading Mode Sandbox */}
                    <div className="mt-4 rounded-2xl bg-[#F6F3EB] border border-[#16241D]/12 p-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#4A5D53]">
                          <Eye className="w-3.5 h-3.5 text-[#DC2626]" />
                          <span>{lang === 'en' ? 'Inclusive UX Demo' : 'Demo UX Inklusif'}</span>
                        </span>

                        <button
                          type="button"
                          onClick={() => setEmpathyReading(!empathyReading)}
                          className={`px-3 py-1 rounded-full font-mono text-[11px] font-bold transition-all ${
                            empathyReading
                              ? 'bg-[#C8962E] text-white shadow-2xs'
                              : 'bg-[#FFFDF8] text-[#4A5D53] border border-[#16241D]/15'
                          }`}
                        >
                          {empathyReading
                            ? lang === 'en'
                              ? 'Empathy Reading Mode: ON'
                              : 'Mode Baca Empati: AKTIF'
                            : lang === 'en'
                            ? 'Empathy Reading Mode: OFF'
                            : 'Mode Baca Empati: MATI'}
                        </button>
                      </div>

                      <div
                        className={`p-3.5 rounded-xl border transition-all duration-300 ${
                          empathyReading
                            ? 'bg-[#FDF6E3] text-[#16241D] border-[#C8962E]/50 tracking-wide leading-loose text-sm'
                            : 'bg-white text-[#4A5D53] border-[#16241D]/10 tracking-tight leading-tight text-xs'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-mono text-[10px] font-bold uppercase opacity-75">
                            {empathyReading ? 'LESSON 01 · PHONETIC SYLLABLES' : 'Lesson 01 · Dense Text'}
                          </span>
                          {empathyReading && (
                            <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-[#8c6516]">
                              <Volume2 className="w-3 h-3" /> /en·gi·neer/
                            </span>
                          )}
                        </div>
                        <p>
                          {empathyReading
                            ? lang === 'en'
                              ? 'Warm low-glare paper tinting, generous letter spacing, and syllable cues reduce visual crowding for young learners.'
                              : 'Warna kertas hangat rendah silau, spasi huruf lega, dan panduan suku kata mengurangi kepadatan visual bagi pelajar muda.'
                            : lang === 'en'
                            ? 'Tight line spacing and high-glare white backgrounds often cause letters to blur or crowd together during reading.'
                            : 'Spasi baris sempit dan latar putih menyilaukan sering membuat huruf tampak bertumpuk saat anak membaca.'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#16241D]/12 flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1">
                      {MATCH_HIGHLIGHTS.arcadia.stack.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#EFECE2]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveReportModal(MATCH_HIGHLIGHTS.arcadia)}
                      className="inline-flex items-center gap-1 font-mono text-xs font-bold text-[#15803D] hover:underline shrink-0"
                    >
                      <span>{t.highlightsSection.inspectFull}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* ==================== INTERACTIVE FEATURE 3: CAREER SEASONS & COACHING LICENSES ==================== */}
          <section id="seasons" className="scroll-mt-24">
            <div className="mb-8">
              <span className="font-mono text-xs font-bold tracking-widest uppercase text-[#DC2626]">
                {t.seasonsSection.eyebrow}
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#16241D] mt-1">
                {t.seasonsSection.title}
              </h2>
              <p className="text-sm text-[#4A5D53] mt-1.5 max-w-2xl leading-relaxed">
                {t.seasonsSection.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* LEFT: Career Seasons Log (7 Cols) */}
              <div className="lg:col-span-7 space-y-3.5">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#4A5D53]">
                  {t.seasonsSection.seasonsTitle}
                </h3>

                {CAREER_SEASONS.map((season) => {
                  const isOpen = !!openSeasons[season.id];
                  const Icon =
                    season.type === 'work'
                      ? Briefcase
                      : season.type === 'edu'
                      ? GraduationCap
                      : Users;

                  return (
                    <div
                      key={season.id}
                      className="rounded-2xl bg-[#FFFDF8] border border-[#16241D]/15 p-5 transition-all"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <div className="p-2.5 rounded-xl bg-[#15803D]/10 text-[#15803D] shrink-0 mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="font-mono text-xs font-semibold text-[#4A5D53]">
                                {season.period}
                              </span>
                              <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#C8962E]/15 text-[#8c6516]">
                                {season.tag[lang]}
                              </span>
                            </div>
                            <h4 className="font-serif text-lg font-bold text-[#16241D] mt-1">
                              {season.role[lang]}
                            </h4>
                            <p className="text-xs sm:text-sm font-medium text-[#4A5D53]">
                              {season.club} &middot; {season.city}
                            </p>
                            {CERT_LINKS[season.certKey] && (
                              <a
                                href={CERT_LINKS[season.certKey]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 mt-1.5 font-mono text-[11px] font-bold text-[#15803D] hover:underline"
                              >
                                {t.seasonsSection.viewCert}
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            setOpenSeasons((prev) => ({ ...prev, [season.id]: !prev[season.id] }))
                          }
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#F6F3EB] border border-[#16241D]/12 font-mono text-[10px] font-semibold shrink-0"
                        >
                          <span>{isOpen ? t.seasonsSection.expandLess : t.seasonsSection.expandMore}</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                      </div>

                      {isOpen && (
                        <ul className="mt-4 pt-3.5 border-t border-[#16241D]/10 space-y-2 text-xs sm:text-sm text-[#4A5D53]">
                          {season.notes[lang].map((bullet, i) => (
                            <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] mt-2 shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* RIGHT: Trophy Cabinet & Coaching Badges (5 Cols) */}
              <div className="lg:col-span-5 rounded-3xl bg-[#FFFDF8] border border-[#16241D]/15 p-5 sm:p-6 shadow-sm">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#16241D]">
                    {t.seasonsSection.cabinetTitle}
                  </h3>
                  <Trophy className="w-4 h-4 text-[#C8962E]" />
                </div>

                {/* Badge Category Filter */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {[
                    { id: 'all', label: t.seasonsSection.filterAll },
                    { id: 'bnsp', label: t.seasonsSection.filterBnsp },
                    { id: 'dta', label: t.seasonsSection.filterDta },
                    { id: 'honors', label: t.seasonsSection.filterHonors }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setBadgeFilter(tab.id)}
                      className={`px-2.5 py-1 rounded-lg font-mono text-[11px] transition-colors ${
                        badgeFilter === tab.id
                          ? 'bg-[#15803D] text-white font-bold'
                          : 'bg-[#F6F3EB] text-[#4A5D53]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="space-y-2.5">
                  {visibleBadges.map((badge) => {
                    const certUrl = CERT_LINKS[badge.certKey];
                    const Wrapper = certUrl ? 'a' : 'div';
                    const linkProps = certUrl
                      ? {
                          href: certUrl,
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          'aria-label': `${t.seasonsSection.viewCert}: ${badge.title}`
                        }
                      : {};
                    return (
                      <Wrapper
                        key={badge.id}
                        {...linkProps}
                        className={`group p-3.5 rounded-2xl bg-[#F6F3EB] border border-[#16241D]/10 flex items-start justify-between gap-3 ${
                          certUrl
                            ? 'cursor-pointer transition-all hover:border-[#15803D] hover:shadow-sm hover:-translate-y-0.5'
                            : ''
                        }`}
                      >
                        <div>
                          <span className="font-mono text-[10px] font-bold uppercase text-[#15803D]">
                            {badge.ribbon}
                          </span>
                          <h4 className="text-xs sm:text-sm font-bold text-[#16241D] mt-0.5 leading-snug">
                            {badge.title}
                          </h4>
                          <p className="text-xs text-[#4A5D53] mt-0.5">
                            {badge.issuer}
                          </p>
                          {certUrl && (
                            <span className="inline-flex items-center gap-1 mt-1.5 font-mono text-[10px] font-bold text-[#15803D] group-hover:underline">
                              {t.seasonsSection.viewCert}
                              <ExternalLink className="w-3 h-3" />
                            </span>
                          )}
                        </div>
                        <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-[#FFFDF8] border border-[#16241D]/12 text-[#8c6516] shrink-0">
                          {badge.year}
                        </span>
                      </Wrapper>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* ==================== OFF THE PITCH, THE HUMAN SIDE ==================== */}
          <section id="off-pitch" className="scroll-mt-24">
            <div className="rounded-3xl bg-[#FFFDF8] border border-[#16241D]/15 p-6 sm:p-9 shadow-sm space-y-8">
              <div>
                <span className="font-mono text-xs font-bold tracking-widest uppercase text-[#C8962E]">
                  {t.offPitchSection.eyebrow}
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#16241D] mt-1">
                  {t.offPitchSection.title}
                </h2>
                <p className="text-sm text-[#4A5D53] mt-1.5 max-w-2xl leading-relaxed">
                  {t.offPitchSection.subtitle}
                </p>
              </div>

              {/* 3 Human Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-[#F6F3EB] border border-[#16241D]/10">
                  <Compass className="w-5 h-5 text-[#15803D] mb-3" />
                  <h3 className="font-serif text-lg font-bold text-[#16241D]">
                    {t.offPitchSection.cards.community.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#4A5D53] leading-relaxed">
                    {t.offPitchSection.cards.community.body}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#F6F3EB] border border-[#16241D]/10">
                  <Gamepad2 className="w-5 h-5 text-[#DC2626] mb-3" />
                  <h3 className="font-serif text-lg font-bold text-[#16241D]">
                    {t.offPitchSection.cards.vocal.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#4A5D53] leading-relaxed">
                    {t.offPitchSection.cards.vocal.body}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#F6F3EB] border border-[#16241D]/10">
                  <Camera className="w-5 h-5 text-[#C8962E] mb-3" />
                  <h3 className="font-serif text-lg font-bold text-[#16241D]">
                    {t.offPitchSection.cards.photo.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#4A5D53] leading-relaxed">
                    {t.offPitchSection.cards.photo.body}
                  </p>
                </div>
              </div>

              {/* Interactive Mount Merapi Fujifilm Color-Grading Lab */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-2">
                <div className="lg:col-span-5 space-y-3">
                  <h3 className="font-serif text-xl font-bold text-[#16241D]">
                    {t.offPitchSection.labTitle}
                  </h3>
                  <p className="font-mono text-xs text-[#4A5D53]">
                    {t.offPitchSection.labHint}
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {MERAPI_FILM_RECIPES.map((recipe) => {
                      const active = recipe.id === filmRecipeId;
                      return (
                        <button
                          key={recipe.id}
                          type="button"
                          onClick={() => setFilmRecipeId(recipe.id)}
                          className={`p-3 rounded-xl text-left border transition-all ${
                            active
                              ? 'bg-[#16241D] text-[#FFFDF8] border-[#16241D] font-bold shadow-xs'
                              : 'bg-[#F6F3EB] text-[#16241D] border-[#16241D]/12'
                          }`}
                        >
                          <div className="font-mono text-xs">{recipe.name}</div>
                          <div className="text-[10px] opacity-80 mt-0.5 truncate">
                            {recipe.note[lang]}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Custom Mount Merapi & Sleman Dusk Vector Illustration */}
                <div className="lg:col-span-7">
                  <div className="rounded-2xl overflow-hidden border border-[#16241D]/20 shadow-sm">
                    <svg
                      viewBox="0 0 640 260"
                      className="w-full h-56 sm:h-64 block transition-all duration-500"
                      style={{ filter: activeRecipe.filter }}
                      aria-label="Illustrated Mount Merapi and Sleman dusk landscape"
                    >
                      <defs>
                        <linearGradient id="merapiEditorialSky" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor={activeRecipe.skyTop} />
                          <stop offset="56%" stopColor={activeRecipe.skyMid} />
                          <stop offset="100%" stopColor={activeRecipe.skyGlow} />
                        </linearGradient>
                      </defs>

                      <rect width="640" height="260" fill="url(#merapiEditorialSky)" />
                      <circle cx="320" cy="166" r="34" fill={activeRecipe.sun} opacity="0.88" />

                      {/* Distant Ridge */}
                      <path
                        d="M 0 188 L 110 150 L 210 176 L 445 172 L 545 144 L 640 180 L 640 260 L 0 260 Z"
                        fill={activeRecipe.farRidge}
                      />

                      {/* Gentle Volcanic Plume */}
                      <path
                        d="M 316 82 Q 308 62 325 46 Q 344 34 360 40 Q 345 55 332 70 Q 326 78 325 83 Z"
                        fill={activeRecipe.plume}
                      />

                      {/* Mount Merapi Cone */}
                      <path
                        d="M 140 212 L 288 92 L 313 82 L 328 82 L 352 92 L 510 212 Z"
                        fill={activeRecipe.merapiCone}
                      />

                      {/* Sleman Foothills */}
                      <path
                        d="M 0 214 Q 170 188 320 208 Q 480 226 640 198 L 640 260 L 0 260 Z"
                        fill={activeRecipe.foothills}
                      />

                      {/* Foreground Terraces */}
                      <path
                        d="M 0 232 Q 220 218 425 234 Q 540 242 640 228 L 640 260 L 0 260 Z"
                        fill={activeRecipe.foreground}
                      />

                      <g fontFamily="monospace" fontSize="10" fill="#FFFDF8" opacity="0.88">
                        <text x="16" y="22">
                          FILM SIM // {activeRecipe.name.toUpperCase()}
                        </text>
                        <text x="470" y="22">
                          MERAPI · SLEMAN 7°32&apos;S
                        </text>
                      </g>
                    </svg>

                    <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 bg-[#16241D] text-[#EBF3EE] font-mono text-[11px]">
                      <span>RECIPE: {activeRecipe.name}</span>
                      <span>WB: {activeRecipe.wb}</span>
                      <span>TONE: {activeRecipe.tone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ==================== INTERACTIVE FEATURE 4: TRANSFER & SCOUTING DESK ==================== */}
          <section id="scouting" className="scroll-mt-24">
            <div className="mb-8">
              <span className="font-mono text-xs font-bold tracking-widest uppercase text-[#DC2626]">
                {t.scoutingSection.eyebrow}
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#16241D] mt-1">
                {t.scoutingSection.title}
              </h2>
              <p className="text-sm text-[#4A5D53] mt-1.5 max-w-2xl leading-relaxed">
                {t.scoutingSection.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left: Direct Touchline Channels (5 Cols) */}
              <div className="lg:col-span-5 space-y-3">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#4A5D53]">
                  {t.scoutingSection.channelsTitle}
                </h3>

                {/* Copy Email Card */}
                <button
                  type="button"
                  onClick={() =>
                    handleCopy('hafidzramadhan02@gmail.com', t.toast.emailCopied, 'desk-email')
                  }
                  className="w-full text-left p-4 rounded-2xl bg-[#FFFDF8] border border-[#16241D]/15 hover:border-[#15803D] flex items-center justify-between gap-3 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-xl bg-[#15803D]/10 text-[#15803D] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block font-mono text-[10px] uppercase text-[#4A5D53]">
                        Email &middot;{' '}
                        {copiedId === 'desk-email'
                          ? t.scoutingSection.copiedLabel
                          : t.scoutingSection.copyLabel}
                      </span>
                      <span className="text-xs sm:text-sm font-bold truncate block">
                        hafidzramadhan02@gmail.com
                      </span>
                    </div>
                  </div>
                  {copiedId === 'desk-email' ? (
                    <Check className="w-4 h-4 text-[#15803D] shrink-0" />
                  ) : (
                    <Copy className="w-4 h-4 text-[#4A5D53] shrink-0" />
                  )}
                </button>

                {/* Copy WhatsApp / Phone Card */}
                <button
                  type="button"
                  onClick={() =>
                    handleCopy('+6285804705361', t.toast.phoneCopied, 'desk-phone')
                  }
                  className="w-full text-left p-4 rounded-2xl bg-[#FFFDF8] border border-[#16241D]/15 hover:border-[#15803D] flex items-center justify-between gap-3 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-xl bg-[#DC2626]/10 text-[#DC2626] shrink-0">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block font-mono text-[10px] uppercase text-[#4A5D53]">
                        WhatsApp / Mobile &middot;{' '}
                        {copiedId === 'desk-phone'
                          ? t.scoutingSection.copiedLabel
                          : t.scoutingSection.copyLabel}
                      </span>
                      <span className="text-xs sm:text-sm font-bold block">+62 858-0470-5361</span>
                    </div>
                  </div>
                  {copiedId === 'desk-phone' ? (
                    <Check className="w-4 h-4 text-[#15803D] shrink-0" />
                  ) : (
                    <Copy className="w-4 h-4 text-[#4A5D53] shrink-0" />
                  )}
                </button>

                {/* LinkedIn Profile Card */}
                <a
                  href="https://www.linkedin.com/in/moch-hafidz-nur-ramadhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-4 rounded-2xl bg-[#FFFDF8] border border-[#16241D]/15 hover:border-[#15803D] flex items-center justify-between gap-3 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-xl bg-[#C8962E]/15 text-[#8c6516] shrink-0">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block font-mono text-[10px] uppercase text-[#4A5D53]">
                        LinkedIn Dossier
                      </span>
                      <span className="text-xs sm:text-sm font-bold truncate block">
                        linkedin.com/in/moch-hafidz-nur-ramadhan
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#4A5D53] shrink-0" />
                </a>

                {/* Base & Mobility Info */}
                <div className="p-4 rounded-2xl bg-[#FFFDF8] border border-[#16241D]/15 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#15803D]/10 text-[#15803D] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] uppercase text-[#4A5D53]">
                      Home Base &amp; Licenses
                    </span>
                    <span className="text-xs sm:text-sm font-bold block">
                      Sleman, Yogyakarta &middot; SIM A &amp; SIM C Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Invitation to Work Together Card (7 Cols) */}
              <div className="lg:col-span-7 rounded-3xl bg-[#FFFDF8] border border-[#16241D]/15 p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#15803D]/12 text-[#15803D] font-mono text-[11px] font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t.scoutingSection.inviteBadge}</span>
                  </span>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#16241D] leading-snug">
                    {t.scoutingSection.inviteHeading}
                  </h3>

                  <p className="text-sm text-[#4A5D53] leading-relaxed">
                    {t.scoutingSection.inviteBody}
                  </p>

                  <ul className="space-y-2.5 pt-1">
                    {t.scoutingSection.inviteHighlights.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#16241D]">
                        <CheckCircle2 className="w-4 h-4 text-[#15803D] mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#16241D]/12 flex flex-wrap items-center gap-3">
                  <a
                    href={`https://wa.me/6285804705361?text=${encodeURIComponent(
                      lang === 'en'
                        ? 'Hello Hafidz, I saw your portfolio and would love to discuss working together.'
                        : 'Halo Hafidz, saya sudah melihat portofolio Anda dan tertarik berdiskusi untuk bekerja bersama.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#15803D] hover:bg-[#166534] text-white text-xs sm:text-sm font-bold transition-colors shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{t.scoutingSection.sendWa}</span>
                  </a>

                  <a
                    href={`mailto:hafidzramadhan02@gmail.com?subject=${encodeURIComponent(
                      lang === 'en'
                        ? 'Collaboration / Opportunity Inquiry, Hafidz'
                        : 'Ajakan Kerja Sama / Peluang Karier, Hafidz'
                    )}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#16241D] hover:bg-[#24382e] text-[#FFFDF8] text-xs sm:text-sm font-bold border border-[#16241D]/20 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#FBBF24]" />
                    <span>{t.scoutingSection.sendEmail}</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* ==================== MATCHDAY FOOTER ==================== */}
        <footer className="relative z-10 border-t border-[#16241D]/12 bg-[#FFFDF8]/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4A5D53]">
            <div>
              <p className="font-mono font-bold text-[#16241D]">
                {t.footer.tagline}
              </p>
              <p className="mt-0.5">{t.footer.note}</p>
            </div>

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#F6F3EB] border border-[#16241D]/15 font-mono text-xs font-bold text-[#16241D] hover:border-[#15803D] transition-colors"
            >
              <span>{t.footer.backTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </footer>

        {/* ==================== FULL MATCH REPORT MODAL ==================== */}
        {activeReportModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#06140D]/75 backdrop-blur-xs"
            role="dialog"
            aria-modal="true"
            onClick={(e) => {
              if (e.target === e.currentTarget) setActiveReportModal(null);
            }}
          >
            <div className="w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-3xl bg-[#FFFDF8] border border-[#16241D]/20 p-6 sm:p-8 shadow-2xl space-y-5">
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#16241D]/12">
                <div>
                  <span className="font-mono text-xs font-bold text-[#15803D]">
                    {activeReportModal.competition[lang]} &middot; {activeReportModal.season}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#16241D] mt-1">
                    {activeReportModal.title[lang]}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveReportModal(null)}
                  aria-label={t.highlightsSection.modal.close}
                  className="p-2 rounded-xl bg-[#F6F3EB] text-[#16241D]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-[#F6F3EB]">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                    {t.highlightsSection.modal.context}
                  </h4>
                  <p className="text-sm text-[#16241D]/90 leading-relaxed">
                    {activeReportModal.context[lang]}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F6F3EB]">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#15803D] mb-1">
                    {t.highlightsSection.modal.tactics}
                  </h4>
                  <p className="text-sm text-[#16241D]/90 leading-relaxed">
                    {activeReportModal.tactics[lang]}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#C8962E] mb-2">
                    {t.highlightsSection.modal.result}
                  </h4>
                  <ul className="space-y-2">
                    {activeReportModal.outcomes[lang].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#15803D] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-[#16241D]/12 flex flex-wrap gap-1.5">
                  {activeReportModal.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2.5 py-1 rounded-lg bg-[#EFECE2]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TOAST NOTIFICATION ==================== */}
        {toast && (
          <div
            role="status"
            aria-live="polite"
            className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-[#16241D] text-[#FFFDF8] font-mono text-xs font-bold shadow-xl border border-[#C8962E]"
          >
            <Check className="w-4 h-4 text-[#22C55E]" />
            <span>{toast}</span>
          </div>
        )}

        {/* Hidden textarea for safe iframe clipboard copy */}
        <textarea ref={clipboardRef} className="sr-only" aria-hidden="true" tabIndex={-1} readOnly />
      </div>
    </div>
  );
}