"use client";

import DataLogsHeader from "./components/DataLogsHeader";
import DataLogsFilters from "./components/DataLogsFilters";
import DataLogsActions from "./components/DataLogsActions";
import DataLogsTable from "./components/DataLogsTable";

import { useDataLogs } from "@/hooks/useDataLogs";

export default function DataLogsPage() {
  const { logs, total, filters, setFilters, clearAll } = useDataLogs();

  return (
    <div className="space-y-6">
      <DataLogsHeader total={total} />

      <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
        <DataLogsFilters filters={filters} onChange={setFilters} />
        <DataLogsActions logs={logs} onClearAll={clearAll} />
      </div>

      <DataLogsTable logs={logs} />
    </div>
  );
}
