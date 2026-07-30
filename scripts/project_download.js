if (typeof document !== 'undefined') {
    // 1. Find all elements with the 'modrinth-download' class
    const downloadButtons = document.querySelectorAll('.modrinth-download');

    // 2. Loop through each button individually
    downloadButtons.forEach(button => {
        // 3. Extract the unique ID from the HTML data attribute
        const projectId = button.dataset.projectId;
        
        if (!projectId) return; // Skip if no ID was provided

        const apiUrl = `https://modrinth.com{projectId}/version?featured=true`;

        // 4. Fetch data for this specific project
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) throw new Error(`Failed to fetch ID: ${projectId}`);
                return response.json();
            })
            .then(versions => {
                if (versions.length === 0) return;

                const latestVersion = versions[0];
                const primaryFile = latestVersion.files.find(f => f.primary) || latestVersion.files[0];

                if (primaryFile && primaryFile.url) {
                    // 5. Apply the specific URL to this exact button
                    button.href = primaryFile.url;
                }
            })
            .catch(error => {
                console.error('Modrinth fetch error:', error);
            });
    });
}
