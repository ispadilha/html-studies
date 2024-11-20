document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a")
    const main = document.querySelector("main")

    links.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault()
            const file = link.getAttribute("data-file")

            fetch(file)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Erro ao carregar o arquivo.")
                    }
                    return response.text()
                })
                .then((html) => {
                    main.innerHTML = html
                })
                .catch((error) => {
                    main.innerHTML = `<p>Erro ao carregar o conteúdo: ${error.message}</p>`
                })
        })
    })
})
