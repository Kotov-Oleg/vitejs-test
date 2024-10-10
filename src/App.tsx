import { useEffect, useState } from 'react';
import './App.css';
import BaseTable from 'react-base-table';
import 'react-base-table/styles.css';
import Chart from 'react-apexcharts';
import { Checkbox } from 'antd';

function App() {
  // Данные для таблицы (initialData)
  const initialData = [
    { id: 1, name: 'Product A', value: 100, quantity: 5 },
    { id: 2, name: 'Product B', value: 200, quantity: 10 },
    { id: 3, name: 'Product C', value: 150, quantity: 8 },
    { id: 4, name: 'Product D', value: 250, quantity: 12 },
  ];

  // Состояние для отслеживания выбранных строк
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  // TODO: Реализовать функцию для добавления/удаления выбранных строк в состояние selectedRows
  const toggleRowSelection = (id: number) => {
    // Реализуйте логику выбора строк (добавление/удаление id)
  };

  // Состояние для колонок таблицы
  const [columns, setColumns] = useState<any[]>([
    {
      key: 'checkbox',
      title: 'Select',
      width: 100,
      dataKey: 'id',
      selectedRows,
      // TODO: Добавить рендеринг чекбокса с использованием компонента Checkbox
      cellRenderer: ({ rowData, column }: any) => (
        <Checkbox
        // Реализуйте проверку и обработку изменения чекбокса
        // onChange={() => toggleRowSelection(rowData.id)}
        />
      ),
    },
    { key: 'name', title: 'Product Name', dataKey: 'name', width: 200 },
    { key: 'value', title: 'Value', dataKey: 'value', width: 150 },
    { key: 'quantity', title: 'Quantity', dataKey: 'quantity', width: 150 },
  ]);

  // TODO: Отфильтровать данные на основе выбранных строк (selectedRows)
  const selectedData = [];

  // Опции для графика ApexCharts
  const chartOptions = {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: selectedData.map((row) => row.name),
    },
    dataLabels: {
      enabled: true,
    },
  };

  // Серии данных для графика
  const chartSeries = [
    {
      name: 'Value',
      // TODO: Установите данные для серии "Value" (значение продукта)
      // data: selectedData.map...
    },
    {
      name: 'Quantity',
      // TODO: Установите данные для серии "Quantity" (количество продукта)
      // data: selectedData.map...
    },
  ];

  // Обновление колонок таблицы при изменении выбранных строк
  useEffect(() => {
    setColumns((prev) =>
      prev.map((col) => ({
        ...col,
        selectedRows,
      }))
    );
  }, [selectedRows]);

  return (
    <div className="App">
      <h1>Table with Checkboxes and ApexCharts</h1>

      {/* BaseTable Component with Checkboxes */}
      <BaseTable
        // Добавить данные для таблицы
        width={600}
        height={300}
      />

      {/* ApexCharts Component */}
      {selectedRows.length > 0 ? (
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="bar"
          width="600"
        />
      ) : (
        <p>Please select rows to display chart</p>
      )}
    </div>
  );
}

export default App;
