import React, { useEffect, useState } from 'react'

import stylesMain from '../styles/pokemons.module.css';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Items as objItems } from '../types/PokemonDetailsInterface';
import { fetchItems } from '../apis/apiItems';

const Items = () => {

  const [query, setQuery] = useState("");
  const [items, setItems] = useState<objItems[]>([]);

  useEffect(() => {
   const fetchAllItems = async () =>{
    const fetchResponseItems = await fetchItems();
    setItems(fetchResponseItems);
   }
   fetchAllItems();
  }, [])

  const filterItems = items.slice(0,151).filter((item) => {
    return item.name.toLocaleLowerCase().match(query.toLocaleLowerCase())
  });
  

  return (
    <>
        <Header query={query} setQuery={setQuery} placeholder="Buscar Item..."/>
        
          <main>
            <nav className={stylesMain.nav}>
                  {filterItems?.slice(0,151).map((item) => (
                    <div key={item.id}>
                      <Link key={item.id} to={`/items/${item.name}`} className={stylesMain.listItem}>
                        <img 
                          className={stylesMain.listItemIcon}
                          src={item.srcImg} 
                          alt={item.name}
                        />
                        <div className={stylesMain.listItemText}>
                          <span>{item.name}</span>
                          <span>{item.id}</span>
                        </div>
                      </Link>
                    </div>
                  ))}
                
                </nav>
          </main>
        
        <Footer/>
    </>
  )
}

export default Items
