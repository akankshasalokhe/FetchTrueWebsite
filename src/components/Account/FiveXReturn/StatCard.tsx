interface StatCardProps {
  icon: string;
  value: string;
  label: string;
}

export default function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="border-[#E6E6E6] rounded-lg p-4 shadow-sm flex flex-col gap-2">
      <span className="text-lg">{icon}</span>
      <p className="font-medium text-[20px] text-[#232323] mt-3">{value}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );
}
