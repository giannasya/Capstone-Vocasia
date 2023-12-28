import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
    const navigate = useNavigate();
    return (
      
            <button
              className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                navigate("/");
                localStorage.clear();
              }}
            >
              Logout
            </button>
          
    );
};

export default LogOut;