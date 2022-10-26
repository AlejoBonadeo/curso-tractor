import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Layout } from "../components";
import { referencias } from "../data";

const Referencias = () => {
  return (
    <Layout title="Curso Tractor - Referencias" description="Referencias">
      <Box bgcolor="#f1f1f1" width="100%" borderRadius={5}>
        <Typography variant="h3" component="h1" p={2}>
          Referencias
        </Typography>
        <TableContainer
          component={Paper}
          sx={{ px: { xs: 2, md: 10 }, bgcolor: "transparent" }}
        >
          <Table aria-label="tabla-de-referencias">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Empresa</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Localidad</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {referencias.map((row) => (
                <TableRow
                  key={row.EMPRESA}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.EMPRESA}
                  </TableCell>
                  <TableCell>{row.LOCALIDAD}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Referencias;
