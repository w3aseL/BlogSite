const hostname = window && window.location && window.location.hostname

let API_HOST

if(hostname === "blog.noahtemplet.dev")
  API_HOST = "https://api.noahtemplet.dev"
else if (hostname === "qa.blog.noahtemplet.dev")
  API_HOST = "https://qa.api.noahtemplet.dev/api"
else
  API_HOST = "https://localhost:7057/api"

export { API_HOST }