"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUpRight, ArrowDownRight, Search, Filter } from "lucide-react";
import { format } from "date-fns";

// Mock transaction data
const transactions = [
  {
    id: 1,
    description: "Grocery Shopping",
    amount: -150.75,
    category: "Food & Dining",
    date: new Date(2024, 2, 15),
    status: "completed",
  },
  {
    id: 2,
    description: "Salary Deposit",
    amount: 5000.00,
    category: "Income",
    date: new Date(2024, 2, 1),
    status: "completed",
  },
  {
    id: 3,
    description: "Netflix Subscription",
    amount: -14.99,
    category: "Entertainment",
    date: new Date(2024, 2, 10),
    status: "completed",
  },
  {
    id: 4,
    description: "Electric Bill",
    amount: -85.50,
    category: "Utilities",
    date: new Date(2024, 2, 5),
    status: "completed",
  },
  {
    id: 5,
    description: "Investment Return",
    amount: 250.00,
    category: "Investment",
    date: new Date(2024, 2, 8),
    status: "completed",
  },
];

export default function TransactionsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-brand-primary">Transactions</h1>
        <div className="flex items-center space-x-4">
          <Button className="bg-brand-secondary text-white hover:bg-brand-secondary/90">
            Add Transaction
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="border-brand-muted/20">
        <CardContent className="pt-6">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-brand-muted" />
              <Input
                placeholder="Search transactions..."
                className="pl-8"
              />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="food">Food & Dining</SelectItem>
                <SelectItem value="income">Income</SelectItem>
                <SelectItem value="entertainment">Entertainment</SelectItem>
                <SelectItem value="utilities">Utilities</SelectItem>
                <SelectItem value="investment">Investment</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Date Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Transactions List */}
      <Card className="border-brand-muted/20">
        <CardHeader>
          <CardTitle className="text-brand-primary">Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between rounded-lg border border-brand-muted/20 p-4"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      transaction.amount > 0
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {transaction.amount > 0 ? (
                      <ArrowUpRight className="h-5 w-5" />
                    ) : (
                      <ArrowDownRight className="h-5 w-5" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-brand-primary">
                      {transaction.description}
                    </p>
                    <p className="text-sm text-brand-muted">
                      {format(transaction.date, "MMM dd, yyyy")} •{" "}
                      {transaction.category}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`font-medium ${
                      transaction.amount > 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {transaction.amount > 0 ? "+" : ""}
                    ${Math.abs(transaction.amount).toFixed(2)}
                  </p>
                  <p className="text-xs text-brand-muted">
                    {transaction.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 