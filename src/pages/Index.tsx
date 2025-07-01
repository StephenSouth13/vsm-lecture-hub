
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login for now - can add authentication logic here
    navigate('/login');
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">VSM Document Management System</h1>
        <p className="text-xl text-muted-foreground">Đang chuyển hướng...</p>
      </div>
    </div>
  );
};

export default Index;
