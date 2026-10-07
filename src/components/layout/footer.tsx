import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background text-secondary-foreground py-12">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="font-heading font-bold text-xl tracking-tight text-foreground">
              Workbooks Pro
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Master Excel. Build Data Skills. Grow Your Career. Practical learning for real-world work.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Learn</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/excel" className="hover:text-primary transition-colors">Excel</Link></li>
              <li><Link href="/powerbi" className="hover:text-primary transition-colors">Power BI</Link></li>
              <li><Link href="/sql" className="hover:text-primary transition-colors">SQL</Link></li>
              <li><Link href="/analytics" className="hover:text-primary transition-colors">Data Analytics</Link></li>
              <li><Link href="/paths" className="hover:text-primary transition-colors">Learning Paths</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/templates" className="hover:text-primary transition-colors">Templates</Link></li>
              <li><Link href="/datasets" className="hover:text-primary transition-colors">Datasets</Link></li>
              <li><Link href="/practice" className="hover:text-primary transition-colors">Practice</Link></li>
              <li><Link href="/tutorials" className="hover:text-primary transition-colors">Tutorials</Link></li>
              <li><Link href="/cheatsheets" className="hover:text-primary transition-colors">Cheat Sheets</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Career</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/career-guides" className="hover:text-primary transition-colors">Career Guides</Link></li>
              <li><Link href="/interview-prep" className="hover:text-primary transition-colors">Interview Questions</Link></li>
              <li><Link href="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="/roadmap" className="hover:text-primary transition-colors">Skills Roadmap</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/newsletter" className="hover:text-primary transition-colors">Newsletter</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 Workbooks Pro. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
            <Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
