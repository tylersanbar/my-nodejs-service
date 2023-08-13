document.addEventListener('DOMContentLoaded', function() {
    // Get the ID of the image from the URL params
    const imageId = document.currentScript.getAttribute('data-id');

    // Create a new EventSource instance for listening to SSE
    const eventSource = new EventSource(`/status/${imageId}`);

    // Handle incoming server-sent events
    eventSource.onmessage = function(event) {
        const data = JSON.parse(event.data);

        if (data.status === 'done') {
            // Display the image
            const image = document.getElementById('image');
            image.src = data.data.uri;
            image.classList.remove("hidden-image");

            // Update status message
            const statusHeader = document.getElementById('statusHeader');
            statusHeader.innerText = 'Your image is ready!';
            eventSource.close();
        } else if (data.status === 'error') {
            // Display error message to the user and log it
            const errorMessage = document.getElementById('errorMessage');
            errorMessage.style.display = 'block';
            console.error(data.error);
            eventSource.close();
        }
    };

    // Handle EventSource errors
    eventSource.onerror = function(event) {
        console.error('EventSource failed:', event);
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.style.display = 'block';
        const statusHeader = document.getElementById('statusHeader');
        statusHeader.innerText = 'There was an issue fetching your image!';
        eventSource.close();
    };
});
