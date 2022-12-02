
import React, { useEffect, useState } from "react"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Data = () => {
  const [games, setGames] = useState([])
  const [error, setError] = useState("")

  const fetchData = () => {

    fetch("https://api.boardgameatlas.com/api/search?client_id=qF6YN1WEhA&limit=100")
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("Sorry something went wrong")
      }
    })
      .then(data => {
        console.log(data)
        setGames(data.games)
        
      })
      .catch(error => {
        setError(error.message)

      })
  }

  useEffect(() => {
    fetchData()
    
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell> # </TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">User Rating</TableCell>
            <TableCell align="right">Players</TableCell>
            <TableCell align="right">Publisher</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">Price</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {games.map((game, i) => (
            <TableRow
              key={game.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {i}
              </TableCell>
              <TableCell align="right">{game.name}</TableCell>
              <TableCell align="right">{game.average_user_rating.toFixed(2)}</TableCell>
              <TableCell align="right">{game.players}</TableCell>
              <TableCell align="right">{game.primary_publisher.name}</TableCell>
              <TableCell align="right">{game.year_published}</TableCell>
              <TableCell align="right">{game.price}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Data;