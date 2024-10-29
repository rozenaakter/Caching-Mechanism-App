function cacheData() {
    const dataInput = document.getElementById('dataInput');
    const cacheData = localStorage.getItem('cachedData') || 'No data cached yet';

    // get the input value
    const newData = dataInput.value.trim();

    // update catche data in localStorage

    localStorage.setItem('catchdData', newData);

    // update the display cached data

    document.getElementById('cachedData').textContent = `cached
    data: ${newData}`;

}

// initial load: Display catch data if available

window.onload = function() {
    const cachedData = localStorage.getItem('cacheData') || "No data cached yet!"
    document.getElementById('cachedData').textContent = `Cached Data : ${cachedData}`;
};