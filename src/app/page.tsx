import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowUpRight, ArrowDownRight, DollarSign, CreditCard, TrendingUp, Users } from "lucide-react";
import { FinancialCharts } from "@/components/dashboard/financial-charts";
import { FinancialMetrics } from "@/components/dashboard/financial-metrics";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-brand-primary">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-brand-muted">Last updated: {new Date().toLocaleDateString()}</span>
        </div>
      </div>

      {/* Financial Metrics */}
      <FinancialMetrics />

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-brand-muted/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-brand-primary">Total Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-brand-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-brand-primary">$45,231.89</div>
            <p className="text-xs text-brand-muted">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="border-brand-muted/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-brand-primary">Active Cards</CardTitle>
            <CreditCard className="h-4 w-4 text-brand-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-brand-primary">3</div>
            <p className="text-xs text-brand-muted">
              +1 from last month
            </p>
          </CardContent>
        </Card>
        <Card className="border-brand-muted/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-brand-primary">Investment Growth</CardTitle>
            <TrendingUp className="h-4 w-4 text-brand-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-brand-primary">+12.5%</div>
            <p className="text-xs text-brand-muted">
              +2.5% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="border-brand-muted/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-brand-primary">Active Users</CardTitle>
            <Users className="h-4 w-4 text-brand-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-brand-primary">2350</div>
            <p className="text-xs text-brand-muted">
              +180 from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Financial Charts */}
      <FinancialCharts />

      {/* Recent Transactions */}
      <Card className="border-brand-muted/20">
        <CardHeader>
          <CardTitle className="text-brand-primary">Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {[1, 2, 3].map((transaction) => (
              <div key={transaction} className="flex items-center">
                <div className="flex-1">
                  <p className="text-sm font-medium leading-none text-brand-primary">Transaction {transaction}</p>
                  <p className="text-sm text-brand-muted">2 hours ago</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-brand-primary">${(Math.random() * 1000).toFixed(2)}</span>
                  {Math.random() > 0.5 ? (
                    <ArrowUpRight className="h-4 w-4 text-green-500" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-red-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Monthly Budget */}
      <Card className="border-brand-muted/20">
        <CardHeader>
          <CardTitle className="text-brand-primary">Monthly Budget</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium text-brand-primary">Food & Dining</p>
                <p className="text-sm text-brand-muted">$1,200 / $2,000</p>
              </div>
              <Progress value={60} className="w-[60%] bg-brand-light [&>div]:bg-brand-secondary" />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium text-brand-primary">Shopping</p>
                <p className="text-sm text-brand-muted">$800 / $1,500</p>
              </div>
              <Progress value={53} className="w-[60%] bg-brand-light [&>div]:bg-brand-secondary" />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium text-brand-primary">Entertainment</p>
                <p className="text-sm text-brand-muted">$300 / $500</p>
              </div>
              <Progress value={60} className="w-[60%] bg-brand-light [&>div]:bg-brand-secondary" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
