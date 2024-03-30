import { useEffect } from "react"
import useFetch from "../hooks/useFetch"

const SelectType = ({ setTypeSelector }) => {

    const url = 'https://pokeapi.co/api/v2/type'
    const [types, getTypes] = useFetch(url)

    useEffect(() => {
        getTypes()
    }, [])

    const handleChange = e => {
        setTypeSelector(e.target.value)
    }

  return (
    <select onChange={handleChange}>
        <option value='allPokemons'>All pokemons</option>
            {
                types?.results.map(typeInfo => (
                    <option value={typeInfo.url} key={typeInfo.url}>
                        {typeInfo.name}
                    </option>
                ))
            }
    </select>
  )
}

export default SelectType