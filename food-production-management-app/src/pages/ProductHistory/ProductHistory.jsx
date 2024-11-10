import { Typography } from "@mui/material"
import NavBar from "../../layout/NavBar"
import SearchBar from "./SearchBar"
import ProductPanes from "./ProductPanes"

const ProductHistory = () => {
  return (
    <>
      <NavBar />
      <SearchBar />
      <Typography sx={{ fontSize: 50, fontWeight: "bold", marginBottom: 3 }}>
        Today
      </Typography>
      {[...Array(4)].map((_, index) => (
        <ProductPanes key={index} batchNumber={1752 - index} />
      ))}
    </>
  )
}

export default ProductHistory
