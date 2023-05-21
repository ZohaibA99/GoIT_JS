///save and load the data from local storage
const save = (key, value) =>{
    try{
        const serializedData = JSON.stringify(value);
        localStorage.setItem(key, serializedData);
    }
    catch(e){
        console.log(e.message);
    }
};

const load = (key) => {
    try{
        const serializedData = localStorage.getItem(key);
        return serializedData === null ? undefined : JSON.parse(serializedData);
    }catch(err){
        console.log(err.message);
    }
}

export {save, load};