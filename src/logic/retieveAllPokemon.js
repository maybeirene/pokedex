const retrieveAllPokemon = () => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
    .then(res => {
        const { status } = res

        if (status === 200)
            return res.json()
                .then(response => {
                    return response})

      if (res.status >= 400) {
        console.error('client or server error')
        throw res
      }
      
      return res
    })
  }
  
  export default retrieveAllPokemon

/*
    else if (status >= 400 && status < 500)
        return res.json()
            .then(payload => {
                const { error: message } = payload

                throw new ClientError(message)
            })
    else if (status >= 500)
        return res.text()
            .then(text => {
                throw new ServerError(text)
            })*/

