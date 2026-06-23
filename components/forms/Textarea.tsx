export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      rows={4}
      className="resize-none rounded-lg border border-coffee/20 bg-white px-4 py-2.5 text-sm text-coffee placeholder:text-coffee/40 focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
      {...props}
    />
  );
}
