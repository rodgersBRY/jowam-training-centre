const labelCls = "block text-[0.9rem] font-semibold text-brand-brown mb-1.5";

export function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelCls}>
        {label}
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-1.5 text-[0.85rem] font-medium text-brand-orange"
        >
          {error}
        </p>
      )}
    </div>
  );
}
