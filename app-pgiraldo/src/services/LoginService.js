
const API_URL_LOGIN = 'http://localhost:8081/api/v1'

export const LoginService = async (form) => {
 
 try {
    const url = `${API_URL_LOGIN}/login` 

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }

    const response = await fetch(url, options)

    if (!response.ok) {
      throw new Error('ERROR:', response.status)
    }

    const data = response.json()

    return data
  } catch(error) {
    console.log(error)
  }    

}
