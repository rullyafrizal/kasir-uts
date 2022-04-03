const baseUrl = 'https://kasir-backend-ntb6iw2kdq-as.a.run.app'

const checkAuth = () => {
  const url = baseUrl + '/api/auth/me'

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('katalog_token')
    }
  }).then(res => res.json())
    .then(result => {
      if (result.code == 401) {
        return false
      }

      if (result.code == 200) {
        return true
      }

      return false
    })
}