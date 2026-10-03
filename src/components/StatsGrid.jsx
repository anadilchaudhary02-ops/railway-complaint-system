import { FileText, Clock3, Loader, CheckCircle2 } from "lucide-react";
import StatCard from "./StatCard";

export default function StatsGrid() {
  const stats = [
    {
      title: "Total Complaints",
      count: 0,
      icon: <FileText className="text-blue-600" />,
      iconBg: "bg-blue-100",
    },
    {
      title: "Pending",
      count: 0,
      icon: <Clock3 className="text-amber-500" />,
      iconBg: "bg-amber-100",
    },
    {
      title: "In Progress",
      count: 0,
      icon: <Loader className="text-blue-500" />,
      iconBg: "bg-blue-100",
    },
    {
      title: "Resolved",
      count: 0,
      icon: <CheckCircle2 className="text-green-600" />,
      iconBg: "bg-green-100",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-10">
      {stats.map((item) => (
        <StatCard key={item.title} {...item} />
      ))}
    </div>
  );
}