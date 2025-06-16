import React from 'react';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD:frontend/src/components/Home.jsx
=======
import GoogleAuthButton from '../components/GoogleAuthButton';
>>>>>>> 2e79700a858a0b0e9a70d62c2e6163e11a983510:frontend/src/pages/Home.jsx

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center font-sans">
            {/* Title */}
            <h1 className="text-blue-500 text-4xl font-semibold mt-8 mb-4 text-center">
                Welcome to MyApp
            </h1>

            {/* Buttons */}
            <div className="flex gap-6 mb-12">
                <button
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300"
                    onClick={() => navigate('/login')}
                    >
                    Connexion
                  </button>
          
                  <GoogleAuthButton />
                </div>
              </div>
    );
};

export default Home;
 