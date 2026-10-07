import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-heading font-bold text-xl tracking-tight">Workbooks Pro</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/excel" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Excel
            </Link>
            <Link href="/powerbi" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Power BI
            </Link>
            <Link href="/sql" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              SQL
            </Link>
            <Link href="/analytics" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Data Analytics
            </Link>
            <Link href="/resources" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Resources
            </Link>
            <Link href="/career" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Career
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <Button variant="ghost" className="text-sm">Log in</Button>
          </div>
          <Button>Start Learning</Button>
        </div>
      </div>
    </header>
  );
}
