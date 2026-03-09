type StatBlockProps = {
  value: string | number;
  label: string;
  className?: string;
};

export default function StatBlock({
  value,
  label,
  className = "",
}: StatBlockProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="font-display text-2xl font-bold text-off-white md:text-3xl">
        {value}
      </div>
      <div className="mt-1 text-sm text-gray-mid">{label}</div>
    </div>
  );
}
