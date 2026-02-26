import React, { memo } from 'react';
import { HelpCircle, Sparkles, BookOpen, Target } from 'lucide-react';

const faqs = [
    {
        question: "Kapan Anda tersedia untuk bekerja?",
        answer: "Sebagai Fresh Graduate, saya tersedia untuk memulai segera. Saya sangat bersemangat untuk berkontribusi dan belajar dalam lingkungan profesional."
    },
    {
        question: "Mengapa pindah dari Administrasi ke IT?",
        answer: "Saya menemukan minat besar dalam logika pemrograman. Transisi ini membuktikan bahwa saya adalah seorang pembelajar cepat (Fast Learner) yang berani menghadapi tantangan baru."
    },
    {
        question: "Apa kelebihan utama Anda?",
        answer: "Kombinasi latar belakang Administrasi yang rapi dan terorganisir dengan kemampuan teknis IT, membuat saya unggul dalam manajemen tugas dan pengembangan kode yang fungsional."
    },
    {
        question: "Apakah Anda siap bekerja dalam tim?",
        answer: "Tentu! Saya percaya kolaborasi adalah kunci sukses sebuah proyek. Saya sangat terbuka untuk masukan dan berdiskusi untuk mencapai solusi terbaik."
    }
];

const ProfessionalFAQ = () => {
    return (
        <div className="w-full bg-gradient-to-b from-white/10 to-white/5 rounded-3xl backdrop-blur-xl shadow-2xl border border-white/10 overflow-hidden">
            <div className="p-8 border-b border-white/10">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400">
                        <HelpCircle className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Professional FAQ</h3>
                </div>
            </div>

            <div className="p-8 space-y-6">
                {faqs.map((faq, index) => (
                    <div key={index} className="group" data-aos="fade-up" data-aos-delay={index * 100}>
                        <div className="flex gap-3 mb-2">
                            <Sparkles className="w-5 h-5 text-indigo-400 shrink-0 mt-1" />
                            <h4 className="text-indigo-200 font-semibold">{faq.question}</h4>
                        </div>
                        <div className="pl-8">
                            <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-white/5 pl-4 group-hover:border-indigo-500/50 transition-colors">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}

                <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-3 p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
                        <Target className="w-5 h-5 text-indigo-400" />
                        <p className="text-xs text-indigo-200 uppercase tracking-wider font-medium">
                            Ready to learn and grow with your team
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(ProfessionalFAQ);
