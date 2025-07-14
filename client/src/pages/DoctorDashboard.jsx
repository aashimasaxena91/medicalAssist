import { Container } from 'react-bootstrap';

export default function DoctorDashboard() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Container className="mt-4">
      <h2>Doctor Dashboard</h2>
      <p>Welcome Dr. {user.name}!</p>
      <p>Here you can manage your appointments, patients, and availability.</p>
    </Container>
  );
}
