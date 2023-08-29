"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
} from "recharts";

const dataInvoiceDay = [
  {
    name: "8 AM",
    facturas: 400,
  },
  {
    name: "9 AM",
    facturas: 2400,
  },
  {
    name: "10 AM",
    facturas: 1800,
  },
  {
    name: "11 PM",
    facturas: 280,
  },
  {
    name: "12 PM",
    facturas: 1840,
  },
  {
    name: "1 PM",
    facturas: 390,
  },
  {
    name: "2 PM",
    facturas: 3390,
  },
  {
    name: "3 PM",
    facturas: 330,
  },
  {
    name: "4 PM",
    facturas: 90,
  },
  {
    name: "5 PM",
    facturas: 30,
  },
];

const dataInvoiceWeek = [
  {
    name: "Lunes",
    facturas: 600,
  },
  {
    name: "Martes",
    facturas: 3000,
  },
  {
    name: "Miércoles",
    facturas: 2000,
  },
  {
    name: "Jueves",
    facturas: 2780,
  },
  {
    name: "Viernes",
    facturas: 1890,
  },
  {
    name: "Sábado",
    facturas: 2390,
  },
  {
    name: "Domingo",
    facturas: 3490,
  },
];

const dataInvoiceYear = [
  {
    name: "Enero",
    facturas: 7600,
  },
  {
    name: "Febrero",
    facturas: 3000,
  },
  {
    name: "Marzo",
    facturas: 2000,
  },
  {
    name: "Abril",
    facturas: 2780,
  },
  {
    name: "Mayo",
    facturas: 1890,
  },
  {
    name: "Junio",
    facturas: 2390,
  },
  {
    name: "Julio",
    facturas: 3490,
  },
  {
    name: "Agosto",
    facturas: 690,
  },
  {
    name: "Septiembre",
    facturas: 4190,
  },
  {
    name: "Octubre",
    facturas: 650,
  },
  {
    name: "Noviembre",
    facturas: 340,
  },
  {
    name: "Diciembre",
    facturas: 5420,
  },
];

function Stats() {
  return (
    <div className="px-6 pt-6 2xl:container">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
        {/* estadisticas facturas */}
        <div className="md:col-span-2 lg:col-span-1">
          <div className="h-full space-y-6 group p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/50 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div>
              <div className="text-center text-font-bold text-2xl text-gray-600 dark:text-gray-300">
                Estadísticas de Facturas
              </div>
            </div>
            <div className="grid grid-rows-3">
              <div className="m-auto">
                <div className="text-center py-4">Por Dia</div>
                <LineChart
                  width={850}
                  height={300}
                  data={dataInvoiceDay}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 30,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="facturas" stroke="#82ca9d" />
                </LineChart>
              </div>
              <div className="m-auto">
                <div className="text-center py-4">Por Semana</div>

                <LineChart
                  width={850}
                  height={300}
                  data={dataInvoiceWeek}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 30,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="facturas" stroke="#82ca9d" />
                </LineChart>
              </div>
              <div className="m-auto">
                <div className="text-center py-4">Por Año</div>

                <LineChart
                  width={850}
                  height={300}
                  data={dataInvoiceYear}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 30,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="facturas" stroke="#82ca9d" />
                </LineChart>
              </div>
            </div>
          </div>
        </div>
        {/* estadisticas productos  */}
        <div className="md:col-span-2 lg:col-span-1">
          <div className="h-full space-y-6 group p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/50 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div>
              <div className="text-center text-font-bold text-2xl text-gray-600 dark:text-gray-300">
                Estadísticas de Productos
              </div>
            </div>
            <div className="grid grid-rows-3">
              <div className="m-auto">
                <div className="text-center py-4">Por Dia</div>
                <LineChart
                  width={850}
                  height={300}
                  data={dataInvoiceDay}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 30,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="facturas" stroke="#82ca9d" />
                </LineChart>
              </div>
              <div className="m-auto">
                <div className="text-center py-4">Por Semana</div>

                <LineChart
                  width={850}
                  height={300}
                  data={dataInvoiceWeek}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 30,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="facturas" stroke="#82ca9d" />
                </LineChart>
              </div>
              <div className="m-auto">
                <div className="text-center py-4">Por Año</div>

                <LineChart
                  width={850}
                  height={300}
                  data={dataInvoiceYear}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 30,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="facturas" stroke="#82ca9d" />
                </LineChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Stats;
