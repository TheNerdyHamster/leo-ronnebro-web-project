const Utils = {
    sleep: (ms: number): Promise<NodeJS.Timeout> => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    },
};

export default Utils;
