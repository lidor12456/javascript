const carMarket = {
    sellers: null,
    customers: null,
};
async function fetchData(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data);
        return data;
    } catch (e) {
        console.log("error");
    }
};
const fetchID = async (url, searchId) => {
    const data = await fetchData(url);
    const agenciesId = [];
    data.forEach((agency) => {
        agenciesId.push(agency[searchId])
    })
    return agenciesId;
}

const getData = async (arr, temp) => {
    let idArr = await Promise.all(arr)
    let tempArr = [];
    for (let id of idArr) {
        let res = fetchData(`https://capsules7.herokuapp.com/api/carMarket/${temp}/${id}`)
        tempArr.push(res);
    }
    const promises = await Promise.all(tempArr)
    return promises;
}
const getAgencies = async () => {
    const fetchAllAgencies = await fetchID("https://capsules7.herokuapp.com/api/carMarket/agencies", "agencyId");
    let data = [];
    data.push(getData(fetchAllAgencies, "agencies"));
    const all = await Promise.all(data);
    carMarket.sellers = all.flat();
    console.log(all.flat());
};
const getCustomers = async () => {
    const fetchAllCostumers = await fetchID("https://capsules7.herokuapp.com/api/carMarket/customers", "id");
    let data = [];
    data.push(getData(fetchAllCostumers, "customers"));
    const all = await Promise.all(data);
    // console.log(all.flat());
    carMarket.customers = all.flat();
    
};
getAgencies();
getCustomers();
console.log(carMarket);
