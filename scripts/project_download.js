if (typeof document !== 'undefined') {
  const downloadButtons = document.querySelectorAll('[data-project-id]');

  downloadButtons.forEach((button) => {
    const projectId = button.dataset.projectId;
    if (!projectId) return;

    const featuredUrl = `https://api.modrinth.com/v2/project/${projectId}/version?featured=true`;
    const allVersionsUrl = `https://api.modrinth.com/v2/project/${projectId}/version`;

    fetchVersions(featuredUrl)
      .then((versions) => (versions && versions.length ? versions : fetchVersions(allVersionsUrl)))
      .then((versions) => {
        if (!versions || versions.length === 0) return;

        const latestVersion = versions[0];
        const primaryFile = latestVersion.files.find((f) => f.primary) || latestVersion.files[0];

        if (primaryFile && primaryFile.url) {
          button.href = primaryFile.url;
        }
      })
      .catch((error) => {
        console.error('Modrinth fetch error:', error);
      });
  });
}

function fetchVersions(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error(`Failed to fetch: ${url}`);
      return response.json();
    })
    .catch((error) => {
      console.error('Modrinth fetch error:', error);
      return null;
    });
}