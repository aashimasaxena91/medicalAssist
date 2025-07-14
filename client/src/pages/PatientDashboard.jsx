import { Container } from 'react-bootstrap';

export default function PatientDashboard() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Container className="mt-4">
      <h2>Patient Dashboard</h2>
      <p>Welcome {user.name}!</p>
      <p>Book new appointments, chat with doctors, and view your health history here.</p>
    </Container>
  );
}
