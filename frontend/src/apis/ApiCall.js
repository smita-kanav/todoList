 export async function ApiCall(urlApi,values) {
  try {
    const url = `${process.env.REACT_APP_API_URL}${urlApi}`;
    const response = await fetch(url,{method:"POST",
    
    body: JSON.stringify(values)
  });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
    //   await axios.post(url, values).then((response) => response)
    //   .then((result) => {
    //     return result;
    //   }).catch((errors) => {
    //   return errors;
    // });
  }