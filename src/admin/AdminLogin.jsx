import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLock, FaUser, FaSignInAlt } from 'react-icons/fa';
import './Admin.css';

// Placeholder credentials - in production, use environment variables
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin123';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({ ...prev, [name]: value }));
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate authentication delay
        setTimeout(() => {
            if (credentials.username === ADMIN_USERNAME && credentials.password === ADMIN_PASSWORD) {
                // Store auth state in sessionStorage
                sessionStorage.setItem('adminAuthenticated', 'true');
                navigate('/admin/dashboard');
            } else {
                setError('Invalid username or password');
            }
            setIsLoading(false);
        }, 500);
    };

    return (
        <div className="admin-login">
            <div className="admin-login__container">
                <div className="admin-login__header">
                    <div className="admin-login__icon">
                        <FaLock />
                    </div>
                    <h1 className="admin-login__title">Admin Login</h1>
                    <p className="admin-login__subtitle">Enter your credentials to access the dashboard</p>
                </div>

                <form className="admin-login__form" onSubmit={handleSubmit}>
                    {error && <div className="admin-login__error">{error}</div>}

                    <div className="admin-login__field">
                        <label htmlFor="username" className="admin-login__label">
                            <FaUser />
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="admin-login__input"
                            placeholder="Enter username"
                            value={credentials.username}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="admin-login__field">
                        <label htmlFor="password" className="admin-login__label">
                            <FaLock />
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="admin-login__input"
                            placeholder="Enter password"
                            value={credentials.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="admin-login__button"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Signing in...' : (
                            <>
                                <FaSignInAlt />
                                Sign In
                            </>
                        )}
                    </button>
                </form>

                <div className="admin-login__hint">
                    <p>Demo: admin / admin123</p>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
