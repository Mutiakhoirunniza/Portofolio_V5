import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export const useContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formDatabase = new FormData();
            formDatabase.append("name", formData.name);
            formDatabase.append("email", formData.email);
            formDatabase.append("message", formData.message);

            const response = await axios.post("https://formsubmit.co/ajax/2bf5d94d82a30ce77d1316390347bda5", formDatabase, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            if (response.status === 200) {
                Swal.fire({
                    title: 'Pesan Terkirim!',
                    text: 'Terima kasih telah menghubungi saya. Saya akan segera membalas pesan Anda.',
                    icon: 'success',
                    confirmButtonColor: '#6366f1',
                    background: '#030014',
                    color: '#ffffff'
                });
                setFormData({ name: "", email: "", message: "" });
            }
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Terjadi kesalahan. Silakan coba lagi nanti.',
                icon: 'error',
                confirmButtonColor: '#6366f1',
                background: '#030014',
                color: '#ffffff'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return { formData, isSubmitting, handleChange, handleSubmit };
};
