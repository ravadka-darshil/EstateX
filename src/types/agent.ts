
export interface AgentType {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  bio?: string;
  role: 'admin' | 'agent';
  specialties?: string[];
  location?: string;
  properties?: string[]; // IDs of properties managed by this agent
}
