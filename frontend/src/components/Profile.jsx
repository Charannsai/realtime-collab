import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function Profile() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">Profile</h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Full Name:</p>
                    <p className="text-gray-600">{user?.fullName || 'Not provided'}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Email:</p>
                    <p className="text-gray-600">{user?.email}</p>
                  </div>
                </div>
                <div className="pt-6 flex flex-col gap-4">
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                  >
                    Logout
                  </button>
                  <Link
                    to="/dashboard"
                    className="text-center text-blue-500 hover:text-blue-600"
                  >
                    Back to Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;