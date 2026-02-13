interface ProgressCircleProps {
  icon: string;
  value: string;
  total: string;
  label: string;
  percentage: number;
}

export default function ProgressCircle({
  icon,
  value,
  total,
  label,
  percentage,
}: ProgressCircleProps) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Circle */}
      <div className="relative flex flex-col w-28 h-28 rounded-full border-8 border-[#E6E6E6] items-center justify-center">
        <div className="text-2xl">{icon}</div>
        {/* Values */}
      <p className=" font-semibold text-[18px] text-gray-800">
        {value}
      </p>
      <p className="text-[11px] text-gray-400">of {total}</p>
      </div>

      

      {/* Label */}
      <p className="mt-2 text-sm text-gray-600">{label}</p>

      {/* Progress Bar */}
      <div className="w-full mt-2">
        <div className="h-1 bg-[#E6E6E6] rounded-full">
          <div
            className="h-1 bg-gray-400 rounded-full"
            style={{ width: `${percentage}%` }}
          />
        
        <p className="text-xs text-gray-400 mt-1">
          {percentage.toFixed(1)}%
        </p>
        </div>
      </div>
    </div>
  );
}
