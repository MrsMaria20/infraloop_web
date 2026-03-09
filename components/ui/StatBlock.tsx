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
      <div className="font-display text-2xl font-bold tracking-tight text-navy-deep md:text-3xl">
        {value}
      </div>
      <div className="mt-2 font-body text-sm leading-snug text-gray-mid md:max-w-[180px] md:mx-auto">
        {label}
      </div>
    </div>
  );
}
