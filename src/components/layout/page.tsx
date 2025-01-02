export function PageLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col min-h-screen bg-background text-primary-foreground">{children}</div>;
}
