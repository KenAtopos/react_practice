import SortableTable from "../components/SortableTable";

function TablePage() {
  const data = [
    { name: "orange", color: "bg-orange-500", score: 5 },
    { name: "red", color: "bg-red-500", score: 4 },
    { name: "yellow", color: "bg-yellow-500", score: 1 },
    { name: "green", color: "bg-green-500", score: 3 },
    { name: "blue", color: "bg-blue-500", score: 2 },
  ];

  const config = [
    {
      label: "fruit",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
  ];

  const keyFn = (fruit) => fruit.name;

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
