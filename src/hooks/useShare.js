import Swal from 'sweetalert2';

export const useShare = () => {
    const handleShare = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'Diah Mutia Portfolio',
                    text: 'Check out Diah Mutia Choirunnisa\'s professional portfolio!',
                    url: window.location.href,
                });
            } else {
                await navigator.clipboard.writeText(window.location.href);
                Swal.fire({
                    title: 'Link Dicopy!',
                    text: 'Link portfolio telah disalin ke clipboard.',
                    icon: 'success',
                    confirmButtonColor: '#6366f1',
                    timer: 2000,
                    timerProgressBar: true,
                    background: '#030014',
                    color: '#ffffff'
                });
            }
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };

    return { handleShare };
};
