"use client";

import { Button } from "@/app/_components/ui/button";
import {
  TRANSACTION_CATEGORY_LABELS,
  TRANSACTION_PAYMENT_METHOD_LABELS,
} from "@/app/_constants/transactions";
import { Transaction, TransactionType } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { CircleIcon, PencilIcon, TrashIcon } from "lucide-react";

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
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_CATEGORY_LABELS[transaction.category],
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de Pagamento",
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_PAYMENT_METHOD_LABELS[transaction.paymentMethod],
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row: { original: transaction } }) =>
      new Date(transaction.date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: ({ row: { original: transaction } }) =>
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(transaction.amount)),
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: () => {
      return (
        <div className="space-x-1">
          <Button
            variant={"ghost"}
            size={"icon"}
            className="text-muted-foreground"
          >
            <PencilIcon />
          </Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="text-muted-foreground"
          >
            <TrashIcon />
          </Button>
        </div>
      );
    },
  },
];
