const isArrayEmpty = (arr) => {
    if(arr !== undefined && arr !== null && arr.length > 0) {
        return false;
    }

    return true;
}

const dumpLogs = (message) => {
    console.log(message);

    // sends it to a tool tracking
}

export {isArrayEmpty, dumpLogs};