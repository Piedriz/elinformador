import { redirect } from 'next/navigation';

const HomeRedirect = () => {
  redirect('/Home'); // Redirige a la vista Home
  return null; // Retorna null porque estamos redirigiendo
};

export default HomeRedirect;