import { ColumnDef } from "@tanstack/react-table"
import {User} from "@/types/user.ts";
import {Badge} from "@/components/ui/badge.tsx";
import UserDropdownMenu from "@/components/usertable/UserDropdownMenu.tsx";
import {getGenderString, getInterestRate, getRoleString, LoanStatus} from "@/types/enums.ts";
import { Loan } from "@/types/loan";
import LoanOverviewDropdownMenu from "./LoanOverviewDropdownMenu";
import {Currency} from "@/types/currency.ts";
import {formatCurrency} from "@/utils/format-currency.ts";

// // This type is used to define the shape of our data.
// // You can use a Zod schema here if you want.



export function generateLoanOverviewColumns(handleDetail: (loan: Loan) => void):ColumnDef<Loan>[] {
    return(
        [
            {
                accessorKey: "creationDate",
                header: "Creation Date",
                cell: ({row}) => new Date(row.original.creationDate).toLocaleDateString("sr-RS"),
                enableHiding: true
            },
            {
                accessorKey: "type",
                cell: ({row}) => row.original.type.name || "N/A",
                header: "Type of loan",
                enableHiding: true,
            },
            {
                accessorKey: "amount",
                header: "Amount",
                cell: ({row}) => formatCurrency(row.original.amount, row.original.currency.code),
                enableHiding: true,
            },
            {
                accessorKey: "status",
                header: "Status",
                cell: ({ row }) => {
                    let variant: "success" | "default" | "destructive" | "secondary" | "outline" | null | undefined;
                    let text;

                    switch (row.original.status) {
                        case LoanStatus.Active:
                            variant = "success";
                            text = "Active";
                            break;
                        case LoanStatus.Pending:
                            variant = "default";
                            text = "Pending";
                            break;
                        case LoanStatus.Rejected:
                            variant = "destructive";
                            text = "Rejected";
                            break;
                        default:
                            variant = "default";
                            text = "Unknown";
                            break;
                    }

                    return <Badge variant={variant}>{text}</Badge>;
                },
                enableHiding: true,
            },

            {
                accessorKey: "actions",
                header: "Actions",
                cell: ({row}) => (
                    row.original.status == LoanStatus.Active &&
                    <LoanOverviewDropdownMenu
                        onDetail={() => handleDetail(row.original)}
                    />
                ),
                enableHiding: true,
            },

        ]);
}