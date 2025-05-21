
function asyncFn() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const isSuccess = false;

            if (isSuccess) {
                res("Successfully done!");
            } else {
                rej("Something went wrong.")
            }            
        }, 1000);
    })
};

const respose = asyncFn();
respose
    .then(res => console.log(res))
    .catch(res => console.log(res))
    .finally(() => console.log('Finished.'));
    