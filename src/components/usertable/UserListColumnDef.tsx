import { ColumnDef } from "@tanstack/react-table"
import {User} from "@/types/user.ts";
import {Badge} from "@/components/ui/badge.tsx";
import UserDropdownMenu from "@/components/usertable/UserDropdownMenu.tsx";
import {getGenderString, getRoleString} from "@/types/enums.ts";

// // This type is used to define the shape of our data.
// // You can use a Zod schema here if you want.



export function generateUserColumns(handleOpenEditDialog: (user: User) => void):ColumnDef<User>[] {
    return(
        [
            {
                accessorKey: "id",
                header: "Id",
                enableHiding: true,

            },
            {
                accessorKey: "firstName",
                header: "First Name",
                enableHiding: true,
            },
            {
                accessorKey: "lastName",
                header: "Last Name",
                enableHiding: true,
            },
            {
                accessorKey: "dateOfBirth",
                header: "Date of birth",
                enableHiding: true,
            },
            {
                accessorKey: "uniqueIdentificationNumber",
                header: "National ID number",
                enableHiding: true,
            },
            {
                accessorKey: "gender",
                cell: ({row}) => getGenderString(row.original.gender),
                header: "Sex",
                enableHiding: true,
            },
            {
                accessorKey: "email",
                header: "Email",
                enableHiding: true,
            },
            {
                accessorKey: "phoneNumber",
                header: "Phone number",
                enableHiding: true,
            },
            {
                accessorKey: "address",
                header: "Address",
                enableHiding: true,
            },
            {
                accessorKey: "department",
                header: "Department",
                cell: ({row}) => row.original.department || "N/A",
                enableHiding: true,
            },
            {
                accessorKey: "role",
                header: "Role",
                enableHiding: true,
                cell: ({row}) => getRoleString(row.original.role),
            },
            {
                accessorKey: "activated",
                header: "Status",
                cell: ({row}) => (
                    <Badge variant={row.original.activated ? "default" : "destructive"}>
                        {row.original.activated ? "Activated" : "Not activated"}
                    </Badge>
                ),
                enableHiding: true,
            },

            {
                id: "actions",
                header: "Actions",
                cell: ({row}) => (
                    <UserDropdownMenu
                        onEdit={() => handleOpenEditDialog(row.original)}
                        onDelete={() => console.log(`Delete user ${row.original.id}`)}
                    />
                ),
                enableHiding: false,
            },

        ]);
}