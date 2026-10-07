import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, BookOpen, Brain, Briefcase, FileSpreadsheet, Database, LineChart, Code, ShieldCheck, Mail, BookMarked, Download } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden bg-background py-20 lg:py-32 border-b border-border">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-8">
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground">
              Master the tools that power modern business.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Learn Excel, Power BI, SQL and practical data analytics through real-world tutorials, exercises, templates and projects designed for people who want skills they can actually use at work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base font-semibold">
                Start Learning
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 text-base font-semibold">
                Explore Excel
              </Button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-xl lg:max-w-none relative aspect-video lg:aspect-square bg-muted rounded-2xl border border-border shadow-sm flex items-center justify-center">
            {/* Professional Data Visual Placeholder */}
            <div className="text-center space-y-4">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-xl bg-background shadow-sm border border-border">
                <LineChart className="h-10 w-10 text-primary" />
              </div>
              <p className="text-muted-foreground font-medium text-sm">Interactive Dashboard Visualization</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: VALUE PROPOSITION */}
      <section className="py-20 lg:py-28 bg-accent/30">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-4">Learn skills you can use at work.</h2>
            <p className="text-lg text-muted-foreground">
              Workbooks Pro focuses on practical application instead of theory alone. Build competence through hands-on practice.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-transparent shadow-none bg-background">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Learn</CardTitle>
                <CardDescription className="text-base mt-2">
                  Clear explanations designed for beginners and working professionals.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-transparent shadow-none bg-background">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Practice</CardTitle>
                <CardDescription className="text-base mt-2">
                  Exercises, datasets and realistic business scenarios.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-transparent shadow-none bg-background">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Build</CardTitle>
                <CardDescription className="text-base mt-2">
                  Projects that turn concepts into portfolio-ready work.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-transparent shadow-none bg-background">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Grow</CardTitle>
                <CardDescription className="text-base mt-2">
                  Career-focused skills, interview preparation and practical guidance.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 12: LEARNING CATEGORIES */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-4">Explore your learning path</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Choose the tools that match your career goals and start building practical competence today.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="flex flex-col h-full hover:shadow-md transition-shadow">
              <CardHeader>
                <FileSpreadsheet className="h-8 w-8 text-success mb-2" />
                <CardTitle>Excel</CardTitle>
                <CardDescription className="mt-2 text-sm text-foreground/80">
                  From formulas and functions to Power Query, dashboards and automation.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-6">
                <Button variant="outline" className="w-full justify-between group" asChild>
                  <Link href="/excel">
                    Learn Excel
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col h-full hover:shadow-md transition-shadow">
              <CardHeader>
                <LineChart className="h-8 w-8 text-warning mb-2" />
                <CardTitle>Power BI</CardTitle>
                <CardDescription className="mt-2 text-sm text-foreground/80">
                  Build interactive dashboards, data models and business intelligence solutions.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-6">
                <Button variant="outline" className="w-full justify-between group" asChild>
                  <Link href="/powerbi">
                    Learn Power BI
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col h-full hover:shadow-md transition-shadow">
              <CardHeader>
                <Database className="h-8 w-8 text-primary mb-2" />
                <CardTitle>SQL</CardTitle>
                <CardDescription className="mt-2 text-sm text-foreground/80">
                  Learn how to query, analyze and transform business data effectively.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-6">
                <Button variant="outline" className="w-full justify-between group" asChild>
                  <Link href="/sql">
                    Learn SQL
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col h-full hover:shadow-md transition-shadow">
              <CardHeader>
                <Code className="h-8 w-8 text-[#8b5cf6] mb-2" />
                <CardTitle>Data Analytics</CardTitle>
                <CardDescription className="mt-2 text-sm text-foreground/80">
                  Understand the complete process from raw data to actionable insight.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-6">
                <Button variant="outline" className="w-full justify-between group" asChild>
                  <Link href="/analytics">
                    Explore Analytics
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 13: EXCEL FEATURE */}
      <section className="py-20 lg:py-28 bg-[#f8fafc] border-y border-border">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              {['Formulas & Functions', 'XLOOKUP', 'INDEX & MATCH', 'Dynamic arrays', 'Pivot Tables', 'Power Query', 'Excel dashboards', 'Automation', 'Data cleaning', 'MIS reporting'].map((topic) => (
                <div key={topic} className="flex items-center gap-2 p-3 bg-background rounded-lg shadow-sm border border-border text-sm font-medium">
                  <div className="h-2 w-2 rounded-full bg-success shrink-0" />
                  {topic}
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center rounded-full border border-success/20 bg-success/10 px-3 py-1 text-sm font-medium text-success mb-2">
                Premium Excel Learning
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">Excel that goes beyond formulas.</h2>
              <p className="text-lg text-muted-foreground">
                Excel is still one of the most important tools in business. Workbooks Pro teaches Excel through realistic reporting, analysis, automation and dashboard scenarios rather than isolated formula examples.
              </p>
              <Button size="lg" className="mt-4" asChild>
                <Link href="/excel">Explore Excel</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14 & 15: REAL-WORLD LEARNING & PRACTICE */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 text-center max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-6">Learn from business problems, not just examples.</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Our lessons simulate actual workplace requirements. Tackle monthly MIS reporting, sales performance analysis, customer data cleaning, and management dashboards. Don't just read. Practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Practice Now</Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/datasets">Download Datasets</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 16: TEMPLATES */}
      <section className="py-20 lg:py-28 bg-accent/30">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-4">Start with a template. Finish with a solution.</h2>
            <p className="text-lg text-muted-foreground">
              A comprehensive resource library of MIS templates, dashboard templates, KPI trackers, and productivity tools.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'MIS Monthly Report', category: 'Reporting', desc: 'A structured template for summarizing monthly operations.' },
              { title: 'Sales KPI Dashboard', category: 'Dashboard', desc: 'Track MTD vs LMTD performance and targets visually.' },
              { title: 'Attendance & Leave Tracker', category: 'HR / Ops', desc: 'Manage employee attendance with built-in analytics.' }
            ].map((template) => (
              <Card key={template.title} className="flex flex-col h-full bg-background border-border">
                <div className="aspect-[4/3] bg-muted border-b border-border flex items-center justify-center rounded-t-xl overflow-hidden">
                   <FileSpreadsheet className="h-12 w-12 text-muted-foreground/30" />
                </div>
                <CardHeader className="flex-1">
                  <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">{template.category}</div>
                  <CardTitle className="text-xl">{template.title}</CardTitle>
                  <CardDescription className="mt-2">{template.desc}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full group" asChild>
                    <Link href={`/templates/${template.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <Download className="mr-2 h-4 w-4 group-hover:-translate-y-0.5 transition-transform" /> Download
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="link" size="lg" asChild>
              <Link href="/templates">View all templates <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 21 & 22: NEWSLETTER & FINAL CTA */}
      <section className="py-20 lg:py-28 bg-foreground text-background">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Newsletter */}
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-background/10 mb-4">
                <Mail className="h-6 w-6 text-background" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">Get better at data, one practical lesson at a time.</h2>
              <p className="text-lg text-background/80 max-w-md">
                Receive practical tutorials, templates, learning resources and new guides from Workbooks Pro directly in your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 mt-6 max-w-md">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 h-12 px-4 rounded-md bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                />
                <Button className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-background/60 flex items-center gap-2 mt-4">
                <ShieldCheck className="h-4 w-4" /> We respect your privacy. No spam.
              </p>
            </div>
            
            {/* Final CTA */}
            <div className="bg-background/5 border border-background/10 rounded-2xl p-8 lg:p-12 text-center lg:text-left">
              <h2 className="font-heading text-3xl font-bold tracking-tight mb-4">Ready to build better data skills?</h2>
              <p className="text-background/80 mb-8">
                Start with Excel, explore Power BI, learn SQL and build the skills you can apply to real business problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                <Button size="lg" className="h-12 bg-background text-foreground hover:bg-background/90 font-semibold">
                  Start Learning
                </Button>
                <Button size="lg" variant="outline" className="h-12 border-background/20 text-background hover:bg-background/10 font-semibold">
                  Explore Resources
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
