export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-graphite"
      aria-label="Loading"
    >
      <div
        className="h-10 w-10 animate-spin rounded-full border-2 border-transparent"
        style={{
          borderTopColor: "var(--accent)",
          borderRightColor: "var(--accent)",
        }}
      />
    </div>
  );
}
