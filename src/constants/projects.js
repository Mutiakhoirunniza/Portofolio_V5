export const PROJECTS = [
    {
        id: 1,
        Title: "Healthify",
        Description: "Sistem Manajemen Layanan Kesehatan terintegrasi yang menghubungkan pasien, dokter, dan admin dalam satu ekosistem, didukung oleh backend Golang yang tangguh serta integrasi AI untuk layanan kesehatan modern.",
        Img: "/projects/healthify.jpg",
        Link: "https://fe-react-landing-page.vercel.app/",
        Github: "https://github.com/Health-Care-System/BackEnd-Golang",
        TechStack: ["GO", "Echo Framework", "GORM", "MySQL", "Google Cloud Platform", "Google Cloud Run", "Google Cloud Storage", "OpenAI", "JSON Web Token", "SMTP", "Cloudflare", "Postman"],
        Features: [
            "Integrated Admin, Patient, & Doctor Management",
            "AI-Powered Treatment & Prescription Recommendations",
            "Real-time Patient-Doctor Chat & AI Chatbot Support",
            "Comprehensive Healthcare Articles & Medicine Marketplace",
            "Secure Consultation Payment & Manual Transfer System",
            "Interactive Landing Page with Real-time Notifications"
        ],
        AdditionalLinks: [
            { label: "Doctor Portal", url: "https://fe-react-doctor.vercel.app/login" },
            { label: "Admin Portal", url: "https://fe-react-admin-one.vercel.app/login" },
            { label: "API Docs", url: "https://documenter.getpostman.com/view/31533532/2s9Ykq6L64" }
        ]
    },
    {
        id: 2,
        Title: "GreenCycleDetections",
        Description: "Sistem klasifikasi jenis sampah anorganik berbasis web untuk mempermudah proses pemilahan sampah secara otomatis menggunakan deep learning.",
        Img: "/projects/greencycle.jpg",
        Link: "https://green-cycle-detections.vercel.app/",
        Github: "https://github.com/Mutiakhoirunniza/GreenCycleDetections/tree/Klasifikasi",
        TechStack: ["Python", "TensorFlow", "Keras", "Flask", "OpenCV", "HTML", "CSS"],
        Features: [
            "Automatic Anorganic Waste Classification",
            "Image Processing using OpenCV",
            "Deep Learning Model Integration",
            "Web-based User Interface",
            "High Accuracy Detection Results",
            "Local Server Deployment with Flask"
        ]
    },
    {
        id: 3,
        Title: "CGV Aldmic",
        Description: "Sistem pemesanan tiket bioskop modern yang dirancang untuk memudahkan pencarian film, pemilihan kursi, dan manajemen reservasi secara real-time. Demo login — Username: aldmic, Password: 123abc123",
        Img: "/projects/cgvaldmic.jpg",
        Link: "https://cgv-aldmic.vercel.app/login",
        Github: "https://github.com/Mutiakhoirunniza/CGVAldmic",
        TechStack: ["Laravel", "PHP", "MySQL", "Bootstrap", "Vercel"],
        Features: [
            "Movie Discovery & Detailed Information",
            "Secure User Authentication System",
            "Interactive Seat Selection",
            "Ticket Booking & History",
            "Automated Booking Confirmation",
            "Responsive Mobile-First Interface"
        ]
    }
];
