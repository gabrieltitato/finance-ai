"use client";

import { Transaction, TransactionType } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { CircleIcon } from "lucide-react";

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => {
      if (transaction.type === TransactionType.DEPOSIT) {
        return (
          <div className="inline-flex max-w-32 items-center justify-center rounded-full bg-muted p-1 hover:bg-muted">
            <CircleIcon className="mr-2 size-3 fill-primary text-primary" />{" "}
            <p className="font-bold text-primary">Depósito</p>
          </div>
        );
      }
      if (transaction.type === TransactionType.EXPENSE) {
        return (
          <div className="inline-flex max-w-32 items-center justify-center rounded-full bg-muted p-1 hover:bg-muted">
            <CircleIcon className="mr-2 size-3 fill-danger text-danger" />
            <p className="font-bold text-danger">Despesa</p>
          </div>
        );
      }
      return (
        <div className="inline-flex max-w-32 items-center justify-center rounded-full bg-muted p-1 hover:bg-muted">
          <CircleIcon className="mr-2 size-3 fill-white text-white" />{" "}
          <p className="font-bold text-white">Investimento</p>
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Categoria",
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de Pagamento",
  },
  {
    accessorKey: "date",
    header: "Data",
  },
  {
    accessorKey: "amount",
    header: "Valor",
  },
  {
    accessorKey: "actions",
    header: "",
  },
];
