const testDisplay = document.querySelector("#test-display");

const fetchData = async (path, init = {}) => {
    try {
        const request = await fetch(path, init);
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
        const service1 = await fetchData("/services/1");
        console.log(service1);

        await fetchData("/services", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name: "exorcismo"})
        });

        await fetchData("/services/0", {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name: "ferreteria"})
        });

        await fetchData("/services/1", {
            method: "DELETE"
        });

        const serviceData = await fetchData("/services");
        if (serviceData.ok) {
                serviceData.data.forEach(({id, name}) => {
                testDisplay.innerHTML += `<li>${id}: ${name}</li>`;
            });
        }
    } catch (error) {
        testDisplay.innerHTML = `<li>${error}</li>`;
    }
};

init();