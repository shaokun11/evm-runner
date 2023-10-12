export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function loop(method, args, wait = 2000) {
    while (1) {
        try {
            await method.call(null, args);
        } catch (e) {
            console.error(`loop execute error in ${method.name}: ${e.message || e}`);
        } finally {
            await sleep(wait);
        }
    }
}

async function sync_user(data) {
    await sleep(1000);
    data.counter += 1;
    console.log("current counter is ", data);
}

loop(sync_user, {
    counter: 1,
});
