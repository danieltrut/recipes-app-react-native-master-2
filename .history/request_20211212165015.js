const request = (url, options) => {
    // we can swap out fetch with another library later on if needed
    return fetch(url, options);
}

export default request;