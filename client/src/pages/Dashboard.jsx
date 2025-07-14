import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get user from localStorage
    const storedUser = localStorage.getItem('user');

    if (!storedUser) {
      navigate('/'); // Redirect to login if not logged in
    } else {
      setUser(JSON.parse(storedUser));
     
    }
  }, [navigate]);

    if (!user) return null;
    
    const handleLogout = () => {
        localStorage.clear(); // or remove only 'token' and 'user'
        navigate('/');
    };

  return (
    <div className="container mt-5">
      <h2>Welcome, {user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
    </div>
  );
}
