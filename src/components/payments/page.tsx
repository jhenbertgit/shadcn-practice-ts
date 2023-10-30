import { useState, useEffect } from "react";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

export default function DemoPage() {
  const [data, setData] = useState<Payment[]>([]);

  useEffect(() => {
    async function getData(): Promise<Payment[]> {
      //fetch data from API here
      return [
        {
          id: "728ed52f",
          amount: 100,
          status: "pending",
          email: "example@mail.net",
        },
        {
          id: "728ed51g",
          amount: 200,
          status: "success",
          email: "example@mail.net",
        },
      ];
    }

    const get = async () => {
      const data: Payment[] = await getData();
      setData(data);
    };
    get();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
