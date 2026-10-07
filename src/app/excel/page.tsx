import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, FileSpreadsheet, CheckCircle2, PlayCircle } from "lucide-react";

export const metadata = {
  title: "Learn Excel for Business",
  description: "Learn Excel from the ground up to advanced business automation. Practical tutorials for real-world work.",
};

export default function ExcelPage() {
  return (
    <div className="flex-1">
      <section className="bg-muted py-16 md:py-24 border-b border-border">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center rounded-full border border-success/20 bg-success/10 px-3 py-1 text-sm font-medium text-success">
              <FileSpreadsheet className="h-4 w-4 mr-2" />
              Excel Learning Path
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              Learn Excel from the ground up to advanced business automation.
            </h1>
            <p className="text-xl text-muted-foreground">
              Master the spreadsheet tool that runs the world. From basic reporting to complex dashboards, Power Query, and VBA automation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid md:grid-cols-[1fr_300px] gap-12">
            <div className="space-y-12">
              <div>
                <h2 className="font-heading text-2xl font-bold mb-6">Latest Excel Tutorials</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { title: "Mastering XLOOKUP for Financial Models", time: "10 min read", diff: "Intermediate" },
                    { title: "Automate MIS Reporting with Power Query", time: "15 min read", diff: "Advanced" },
                    { title: "Building Interactive Sales Dashboards", time: "20 min read", diff: "Advanced" },
                    { title: "Dynamic Arrays Explained", time: "8 min read", diff: "Intermediate" },
                  ].map((article) => (
                    <Card key={article.title} className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardHeader>
                        <div className="flex justify-between items-center mb-2 text-xs font-medium text-muted-foreground">
                          <span>{article.time}</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded">{article.diff}</span>
                        </div>
                        <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">Learn step-by-step with downloadable datasets and practical business examples.</p>
                        <div className="text-primary text-sm font-semibold flex items-center group">
                          Read Tutorial <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="bg-accent/30 border-transparent">
                <CardHeader>
                  <CardTitle className="text-lg">Where to start?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm">Excel for Beginners</h4>
                      <p className="text-xs text-muted-foreground mt-1">Nail down formatting, basic formulas, and navigation.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm">Data Analysis</h4>
                      <p className="text-xs text-muted-foreground mt-1">Pivot Tables, XLOOKUP, INDEX/MATCH.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <PlayCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm">Advanced Automation</h4>
                      <p className="text-xs text-muted-foreground mt-1">Power Query, macros, and dynamic dashboards.</p>
                    </div>
                  </div>
                  <Button className="w-full mt-4">View Learning Paths</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
