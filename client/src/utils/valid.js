export const valid = {
  register: (data) => {
    let errs = []
    const { username, email, password, cf_password } = data

    if (!username) errs = [...errs, 'Enter username']
    else if (username.length > 15)
      errs = [...errs, 'Username greater than 15 characters']

    if (!email) errs = [...errs, 'Enter email']
    else if (!validateEmail(email)) errs = [...errs, 'Invalid email']

    if (password.length < 6) errs = [...errs, 'Password less than 6 characters']
    else if (password !== cf_password)
      errs = [...errs, 'Passwords do not match']

    return { errs, errsLength: errs.length }
  },
  login: (data) => {
    let errs = []
    const { email, password } = data

    if (!email) errs = [...errs, 'Enter email']
    else if (!validateEmail(email)) errs = [...errs, 'Invalid email']

    if (password.length < 6) errs = [...errs, 'Password less than 6 characters']

    return { errs, errsLength: errs.length }
  },
}

function validateEmail(email) {
  //eslint-disable-next-line
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
