export default function ColumnGrid({ children, size = 'large' }) {
  const sizeMap = {
    large: 'grid-cols-2 sm:grid-cols-3',
    medium: 'grid-cols-3 sm:grid-cols-4',
    small: 'grid-cols-4 sm:grid-cols-6',
  };
  return <div className={`grid ${sizeMap[size]} gap-4`}>{children}</div>;
}
