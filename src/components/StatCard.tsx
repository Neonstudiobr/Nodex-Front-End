import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative";
}

const StatCard = ({ icon: Icon, title, value, change, changeType }: StatCardProps) => {
  return (
    <div className="bg-card border border-border/40 rounded-lg p-6">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-secondary/50 rounded">
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-lg font-semibold text-foreground">{value}</p>
          {change && (
            <p className={`text-sm font-medium mt-1 ${
              changeType === "positive" ? "text-green-500" : "text-red-500"
            }`}>
              {change}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
