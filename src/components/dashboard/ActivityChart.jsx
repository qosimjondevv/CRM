import { useMemo } from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui"
import { useLocale } from "@/hooks"

export function ActivityChart({ title, data }) {
  const { t } = useLocale()

  const chartConfig = useMemo(
    () => ({
      completed: { label: t("dashboard.chartCompleted"), color: "var(--chart-1)" },
      created: { label: t("dashboard.chartCreated"), color: "var(--chart-2)" },
    }),
    [t]
  )

  return (
    <Card className="p-5">
      <p className="mb-4 font-semibold">{title}</p>
      <ChartContainer config={chartConfig} className="aspect-auto h-64 w-full">
        <BarChart data={data}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="label" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} allowDecimals={false} width={24} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="completed" fill="var(--color-completed)" radius={4} />
          <Bar dataKey="created" fill="var(--color-created)" radius={4} />
        </BarChart>
      </ChartContainer>
    </Card>
  )
}
