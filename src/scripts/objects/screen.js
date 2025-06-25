const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado 😥'}</h1>
                                            <p>${user.bio ?? 'Não possui bio cadstrada 😫'}</p>
                                            <p>🧙‍♂️ Seguidores: <span>${user.followers}</span></p>
                                            <p>🕵️‍♂️ Seguindo: <span>${user.following}</span></p>
                                        </div>
                                    </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li>
            <a href="${repo.html_url}" target="_blank">${repo.name}
            <div class="repo_icons">
            <h2 class="icons_details">🍴 ${repo.forks_count}</h2>
            <h2 class="icons_details">⭐ ${ repo.stargazers_count}</h2>
            <h2 class="icons_details">👀 ${repo.watchers_count}</h2>
            <h2 class="icons_details">👨‍💻 ${repo.language}</h2>
            </div>
            </a>
            </li>`)

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                           </div>`
        }

        let eventList = ''
        user.events.forEach(event => eventList += `<li><p><span>${event.type}: ${event.repo.name} </span> - ${event.payload?.commits?.[0]?.message.slice(0, 50)  ??  "Sem mensagem de commit"}</p></li>`)
        if(user.events.length > 0){
            this.userProfile.innerHTML += `<div class="events section">
                                                <h2>Eventos</h2>
                                                <ul>${eventList}</ul>
                                            </div>`
        }


    },

    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado!</h3>"
    }
}

export { screen }