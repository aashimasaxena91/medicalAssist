import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      navigate('/');
    } else {
      const user = JSON.parse(storedUser);
      if (user.role === 'doctor') {
        navigate('/dashboard/doctor');
      } else {
        navigate('/dashboard/patient');
      }
    }
  }, [navigate]);

  return null; // No UI here, just redirection
}
