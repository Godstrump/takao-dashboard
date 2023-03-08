import { DATA } from '../utils/constants'
import TableRow from "@mui/material/TableRow"
import TableCell from '@mui/material/TableCell'
import TableHeader from '../components/ui/table-header'
import Table from '@mui/material/Table/Table'
import TableBody from '@mui/material/TableBody/TableBody'
import { useAppSelector } from '../app/hooks'
import { selectItems } from '../redux/items/items.selectors'

const ItemsList = () => {
    const data = useAppSelector(selectItems)

    return (
        <Table>
            <TableHeader data={Object.keys(DATA[0])} />
            <TableBody  >
                {data?.length ? data?.map(row =>
                    <TableRow
                        key={row.id}
                        className={data.length ? "animate__animated animate__fadeInDown" : ""}
                    >
                        <TableCell align="left">
                            {row.id}
                        </TableCell>
                        <TableCell align="left">
                            {row.order}
                        </TableCell>
                        <TableCell align="left">
                            {row.type}
                        </TableCell>
                        <TableCell sx={{ textOverflow: 'ellipsis' }} align="left">
                            {row.category}
                        </TableCell>
                        <TableCell sx={{ textOverflow: 'ellipsis' }} align="left">
                            {row.description}
                        </TableCell>
                    </TableRow>
                ): <></>}
            </TableBody>
        </Table>
    )
}

export default ItemsList