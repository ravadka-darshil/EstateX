
import SignupForm from '@/components/auth/SignupForm';

const Signup = () => {
  return (
    <div className="min-h-screen py-12 bg-gray-50 flex items-center">
      <div className="container">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-2">Create an Account</h1>
          <p className="text-gray-600 mb-8">Join RealEstatePro to save properties and more</p>
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default Signup;
