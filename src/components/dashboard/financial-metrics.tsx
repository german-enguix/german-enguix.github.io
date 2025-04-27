"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowUpRight, ArrowDownRight, TrendingUp, TrendingDown, Wallet, PiggyBank } from "lucide-react";

export function FinancialMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {/* Savings Rate */}
      <Card className="border-brand-muted/20">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-brand-primary">Savings Rate</CardTitle>
          <PiggyBank className="h-4 w-4 text-brand-secondary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-brand-primary">25%</div>
          <p className="text-xs text-brand-muted">
            +5% from last month
          </p>
          <Progress value={25} className="mt-2 bg-brand-light [&>div]:bg-brand-secondary" />
        </CardContent>
      </Card>

      {/* Net Worth */}
      <Card className="border-brand-muted/20">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-brand-primary">Net Worth</CardTitle>
          <Wallet className="h-4 w-4 text-brand-secondary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-brand-primary">$125,000</div>
          <p className="text-xs text-brand-muted">
            +$5,000 from last month
          </p>
        </CardContent>
      </Card>

      {/* Investment Performance */}
      <Card className="border-brand-muted/20">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-brand-primary">Investment Performance</CardTitle>
          <TrendingUp className="h-4 w-4 text-brand-secondary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-brand-primary">+12.5%</div>
          <p className="text-xs text-brand-muted">
            +2.5% from last month
          </p>
        </CardContent>
      </Card>

      {/* Debt-to-Income Ratio */}
      <Card className="border-brand-muted/20">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-brand-primary">Debt-to-Income Ratio</CardTitle>
          <TrendingDown className="h-4 w-4 text-brand-secondary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-brand-primary">28%</div>
          <p className="text-xs text-brand-muted">
            -2% from last month
          </p>
          <Progress value={28} className="mt-2 bg-brand-light [&>div]:bg-brand-secondary" />
        </CardContent>
      </Card>
    </div>
  );
} 