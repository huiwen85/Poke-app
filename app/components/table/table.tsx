import { PokemonInfo } from "@/app/types/pokemonInfo";
import { css } from "@/styled-system/css";
import {
  flexRender,
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const container = css({
  px: { base: 4, sm: 6, lg: 8 },
});

const headerStyle = css({
  display: "flex",
  alignItems: { sm: "center" },
  mb: 4,
});

const title = css({
  fontSize: "base",
  fontWeight: "semibold",
  color: "gray.900",
});

const descriptionStyle = css({
  mt: 2,
  fontSize: "sm",
  color: "gray.700",
});

const tableWrapper = css({
  mt: 8,
  overflowX: "auto",
  mx: { base: -4, sm: -6, lg: -8 },
  my: -2,
});

const tableStyle = css({
  minWidth: "100%",
  borderCollapse: "collapse",
});

const thStyle = css({
  py: 3.5,
  px: 3,
  textAlign: "left",
  fontSize: "sm",
  fontWeight: "semibold",
  color: "gray.900",
});

const tdStyle = css({
  py: 4,
  px: 3,
  textAlign: "left",
  fontSize: "sm",
  whiteSpace: "nowrap",
  color: "gray.500",
  borderTop: "1px solid #D1D5DB",
  padding: "0.5rem 1rem",
});

const editLink = css({
  color: "indigo.600",
  _hover: { color: "indigo.900" },
});

type TableData = {
  id: string;
  name: string;
  types: string;
  height: number;
  weight: number;
  abilities: string;
};

export default function Table({ pokemon }: Readonly<{ pokemon: PokemonInfo }>) {
  const tableData: TableData[] = [
    {
      id: pokemon.id.toString(),
      name: pokemon.name,
      types: pokemon.types.map((t) => t.type.name).join(", "),
      height: pokemon.height,
      weight: pokemon.weight,
      abilities: pokemon.abilities.map((a) => a.ability.name).join(", "),
    },
  ];
  const columnHelper = createColumnHelper<TableData>();
  const columns = [
    columnHelper.accessor("id", {
      header: "ID",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("name", {
      header: "Name",
      cell: (info) => <i>{info.getValue()}</i>,
    }),
    columnHelper.accessor("types", {
      header: "Types",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("height", {
      header: "Height",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("weight", {
      header: "Weight",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("abilities", {
      header: "Abilities",
      cell: (info) => info.getValue(),
    }),
  ];

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={container}>
      <div className={headerStyle}>
        <div>
          <h1 className={title}>Details for {pokemon.name}</h1>
          <p className={descriptionStyle}>
            Below are the statistics and abilities of {pokemon.name}.
          </p>
        </div>
      </div>

      <div className={tableWrapper}>
        <table className={tableStyle}>
          <thead className={thStyle}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className={thStyle}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className={tdStyle}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
