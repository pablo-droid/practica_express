const testDisplay = document.querySelector("#test-display");

const fetchData = async (path) => {
    try {
        const request = await fetch(path);
        if (!request.ok) {
            throw "Invalid request.";
        }
        const data = await request.json();
        return data;
    } catch (error) {
        throw error;
    }
};

const init = async () => {
    try {
        const productData = await fetchData("/products");
        const serviceData = await fetchData("/services");
        testDisplay.textContent = `${productData.name}, ${serviceData.name}`;
    } catch (error) {
        testDisplay.innerHTML = `${error}`;
    }
};

init();