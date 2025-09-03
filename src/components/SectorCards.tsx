import { FC } from 'react';

interface SectorCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SectorCard: FC<SectorCardProps> = ({ icon, title, description }) => {
  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow hover:shadow-md transition-shadow p-4 mx-auto">
      <div className="flex items-center gap-3 mb-3">
        <div className="text-blue-600 text-2xl">{icon}</div>
        <h3 className="text-base font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default SectorCard;
