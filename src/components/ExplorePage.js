import React from "react";
import { useState, useEffect } from 'react';
import Container from "@mui/material/Container";
import Card from "./Card";
import Filter from "./Filter";
import { db } from '../../src/firebaseconfig';
import { collection, getDocs } from 'firebase/firestore'

export default function ExplorePage() {
  const [games, setGames] = useState(null)

  useEffect(() => {
    const ref = collection(db, 'Games')
    
    getDocs(ref).then((snapshot) => {
      let results = []
      snapshot.docs.forEach(doc => {
        results.push({id: doc.id, ...doc.data()})
      })
      setGames(results)
      console.log(results)
      
    })
  }, [])
  return (
    <Container>
      <Filter />
      {games && <Card games={games} />}
    </Container>
  );
}