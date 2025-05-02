
import LoginForm from '@/components/auth/LoginForm';

const Login = () => {
  return (
    <div className="min-h-screen py-12 bg-gray-50 flex items-center">
      <div className="container">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-gray-600 mb-8">Sign in to your EstateX account</p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
