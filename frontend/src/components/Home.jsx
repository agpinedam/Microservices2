import React from 'react';

const Home = () => {
    

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
              

            </div>
        </div>
    );
};

export default Home;
 