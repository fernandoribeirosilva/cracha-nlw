const linksSocialMedia = {
  github: "fernandoribeirosilva",
  facebook: "fernandoytkg",
  instagram: "fernando_ribeirokg",
  twitter: "Fernand62301422"
};

function chageSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
  }
}

chageSocialMediaLinks();

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`;

  // let nameUser = document.querySelector("#userName");

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      UserImage.src = data.avatar_url;
      userLogin.textContent = data.login
    });
}

getGitHubProfileInfos();
