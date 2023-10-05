class RepeatExecution {
    constructor(data) {
        this.interval = 2000;
        this.isRunning = false;
        this.abortController = null;
        this.data = data;
    }

    setInterval(interval) {
        this.interval = interval;
    }

    async startExecution(method) {
        if (this.isRunning) {
            console.log("Execution is already in progress.");
            return;
        }
        this.isRunning = true;
        while (this.isRunning) {
            try {
                this.abortController = new AbortController();
                this.data = await method(this.data);
            } catch (error) {
                console.error("An error occurred:", error);
            } finally {
                await this.delay(this.interval);
            }
        }
    }

    delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    stopExecution() {
        if (this.isRunning) {
            this.isRunning = false;
            if (this.abortController) {
                this.abortController.abort();
                this.abortController = null;
            }
        }
    }
}

const repeater = new RepeatExecution({ count: 1 });
repeater.setInterval(2000);

async function start(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.count = data.count + 1;
            console.log("Async operation completed.", data);
            resolve(data);
        }, 1000);
    });
}

// 开始执行方法并传递参数
repeater.startExecution(start);

// 停止执行方法（可选）
// repeater.stopExecution();
