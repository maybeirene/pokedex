const retrievePokemonDetail = (param) => {
    return fetch(`https://pokeapi.co/api/v2${param}`)
    .then(res => {
        const { status } = res

        if (status === 200)
            return res.json()
                .then(result => {
                    let response = {}

                    response.id = result.id 
                    response.name = result.name
                    response.abilities = result.abilities
                    response.moves = result.moves
                    response.forms = result.forms
                    response.sprite = result.sprites.back_default

                    return response})
        if (res.status >= 400) {
            console.error('client or server error')
            throw res
        }
      
        return res
    })
  }
  
  export default retrievePokemonDetail