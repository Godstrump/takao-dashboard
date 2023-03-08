import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';

const TableHeader = ({ data }: { data: Array<any> }) => {
  return (
    <TableHead>
      <TableRow>
        {data.length && data.map((row) =>
          <TableCell align={"left"} key={row}>{row}</TableCell>)
        }
      </TableRow>
    </TableHead>
  )
}

export default TableHeader