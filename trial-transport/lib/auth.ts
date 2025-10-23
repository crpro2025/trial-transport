// Authentication and Authorization System
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'shipper' | 'driver' | 'admin';
  company?: string;
  phone?: string;
  certifications?: string[];
  vehicleInfo?: {
    type: string;
    licensePlate: string;
    capacity: string;
  };
  status?: 'pending' | 'approved' | 'active' | 'suspended';
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
}

// Simulated authentication functions
export const login = async (email: string, password: string): Promise<{ user: User; token: string }> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Demo users
  const demoUsers: Record<string, User> = {
    'shipper@trial.com': {
      id: '1',
      email: 'shipper@trial.com',
      name: 'Dr. Sarah Johnson',
      role: 'shipper',
      company: 'BioTech Research Labs',
      phone: '+1 (555) 123-4567',
      createdAt: new Date().toISOString(),
    },
    'driver@trial.com': {
      id: '2',
      email: 'driver@trial.com',
      name: 'Michael Chen',
      role: 'driver',
      phone: '+1 (555) 987-6543',
      certifications: ['IATA Certified', 'Hazmat Handling', 'Temperature Control'],
      vehicleInfo: {
        type: 'Refrigerated Van',
        licensePlate: 'ABC-1234',
        capacity: '500 lbs',
      },
      status: 'approved',
      createdAt: new Date().toISOString(),
    },
    'admin@trial.com': {
      id: '3',
      email: 'admin@trial.com',
      name: 'Admin User',
      role: 'admin',
      company: 'Trial Transport',
      createdAt: new Date().toISOString(),
    },
  };

  const user = demoUsers[email];
  if (!user) {
    throw new Error('Invalid credentials');
  }

  return {
    user,
    token: 'demo-jwt-token-' + user.id,
  };
};

export const register = async (userData: Partial<User> & { password: string }): Promise<{ user: User; token: string }> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const newUser: User = {
    id: Math.random().toString(36).substr(2, 9),
    email: userData.email!,
    name: userData.name!,
    role: userData.role!,
    company: userData.company,
    phone: userData.phone,
    certifications: userData.certifications,
    vehicleInfo: userData.vehicleInfo,
    status: userData.role === 'driver' ? 'pending' : 'active',
    createdAt: new Date().toISOString(),
  };

  return {
    user: newUser,
    token: 'demo-jwt-token-' + newUser.id,
  };
};

export const logout = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
  }
};

export const getCurrentUser = (): User | null => {
  if (typeof window !== 'undefined') {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }
  return null;
};

export const saveAuth = (user: User, token: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('auth_token', token);
  }
};